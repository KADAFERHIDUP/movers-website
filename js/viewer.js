// Penampil model 3D: satu kanvas per elemen, hanya merender saat terlihat di layar.
// Pemakaian di HTML: <div class="v3d" data-model="headphone"></div>
//   data-model   id produk di data.js (model & sudut pandang diambil dari sana)
//   data-drag    boleh diputar dengan jari/mouse
//   data-spin    kecepatan putar otomatis (radian/detik), default 0.25
//   data-fill    menimpa seberapa penuh model mengisi bingkai
//   data-tilt    menimpa sudut pandang "x,y"
import * as THREE from 'three';
import { RoomEnvironment } from '../vendor/RoomEnvironment.js';
import { loadGLB } from './glb.js';
import { byId } from './data.js';

const calm = matchMedia('(prefers-reduced-motion: reduce)');
const cache = new Map();   // model yang sama hanya diunduh sekali per halaman
const getBuffer = url => {
  if (!cache.has(url)) cache.set(url, fetch(url).then(r => { if (!r.ok) throw new Error(r.status); return r.blob(); }));
  return cache.get(url).then(b => URL.createObjectURL(b));
};

let webgl = null;
export function hasWebGL() {
  if (webgl === null) {
    try { const c = document.createElement('canvas'); webgl = !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { webgl = false; }
  }
  return webgl;
}

class Viewer {
  constructor(el) {
    this.el = el;
    const p = byId(el.dataset.model);
    this.p = p;
    const v = p.view || {};
    this.base = v.base || [0, 0, 0, 'XYZ'];
    this.tilt = (el.dataset.tilt ? el.dataset.tilt.split(',').map(Number) : v.tilt) || [0, 0];
    this.fill = +(el.dataset.fill || v.fill || 0.95);
    this.spin = calm.matches ? 0 : +(el.dataset.spin ?? 0.25);
    this.drag = 'drag' in el.dataset;
    this.yaw = 0; this.pitch = 0; this.vel = 0; this.mx = 0; this.my = 0; this.tmx = 0; this.tmy = 0;
    this.visible = false; this.ready = false; this.target = null;

    const r = this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    r.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.05;
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.domElement.className = 'v3d-canvas';
    r.domElement.setAttribute('aria-hidden', 'true');
    el.appendChild(r.domElement);

    const s = this.scene = new THREE.Scene();
    const pm = new THREE.PMREMGenerator(r);
    s.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; pm.dispose();
    const key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(3, 4, 5); s.add(key);
    const rim = new THREE.DirectionalLight(0xe8ffb0, 0.7); rim.position.set(-4, 2, -3); s.add(rim);
    this.camera = new THREE.PerspectiveCamera(28, 1, 0.01, 100);
    this.camera.position.set(0, 0, 1 / Math.sin(14 * Math.PI / 180));

    this.turn = new THREE.Group(); this.holder = new THREE.Group();
    this.turn.add(this.holder); s.add(this.turn);

    this.resize();
    this.ro = new ResizeObserver(() => this.resize()); this.ro.observe(el);
    this.load();
    if (this.drag) this.bindDrag();
    el.addEventListener('pointermove', e => {
      if (this.dragging) return;
      const b = el.getBoundingClientRect();
      this.tmx = ((e.clientX - b.left) / b.width - 0.5) * 2; this.tmy = ((e.clientY - b.top) / b.height - 0.5) * 2;
    });
    el.addEventListener('pointerleave', () => { this.tmx = this.tmy = 0; });
  }

  async load() {
    try {
      const url = await getBuffer(`models/${this.p.model}.glb`);
      const m = await loadGLB(url);
      URL.revokeObjectURL(url);
      // luruskan, lalu pusatkan dan skalakan supaya muat dalam bola berjari-jari 1
      const fix = new THREE.Group(); fix.add(m);
      fix.rotation.set(this.base[0], this.base[1], this.base[2], this.base[3] || 'XYZ');
      fix.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(fix), c = box.getCenter(new THREE.Vector3());
      const sph = box.getBoundingSphere(new THREE.Sphere());
      fix.position.sub(c);
      const wrap = new THREE.Group(); wrap.add(fix); wrap.scale.setScalar(this.fill / sph.radius);
      this.holder.add(wrap);
      this.ready = true;
      this.el.classList.add('is-ready');
      this.el.dispatchEvent(new CustomEvent('v3d:ready', { bubbles: true }));
    } catch (err) {
      console.warn('Model gagal dimuat', this.p.model, err);
      this.el.classList.add('is-failed');
    }
  }

  bindDrag() {
    const el = this.el; let lx = 0, ly = 0;
    el.style.touchAction = 'pan-y';
    el.addEventListener('pointerdown', e => {
      if (e.button !== 0) return;
      this.dragging = true; lx = e.clientX; ly = e.clientY; this.vel = 0;
      el.setPointerCapture(e.pointerId); el.classList.add('is-dragging');
    });
    el.addEventListener('pointermove', e => {
      if (!this.dragging) return;
      const dx = e.clientX - lx, dy = e.clientY - ly; lx = e.clientX; ly = e.clientY;
      this.yaw += dx * 0.012; this.vel = dx * 0.012 * 60;
      this.pitch = Math.max(-0.6, Math.min(0.6, this.pitch + dy * 0.006));
    });
    const up = () => { this.dragging = false; el.classList.remove('is-dragging'); };
    el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
  }

  /** Arahkan model ke sudut tertentu (dipakai tab "lihat dari sisi"). */
  face(yaw, pitch = 0) { this.target = { yaw, pitch }; this.vel = 0; }

  resize() {
    const w = this.el.clientWidth, h = this.el.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    // jaga model tetap muat di sisi yang lebih sempit
    const vfov = 28;
    this.camera.fov = w >= h ? vfov : THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(vfov / 2)) / (w / h)));
    this.camera.updateProjectionMatrix();
  }

  frame(dt, t) {
    if (!this.visible) return;
    if (this.target) {
      const k = 1 - Math.exp(-dt * 5);
      const d = Math.atan2(Math.sin(this.target.yaw - this.yaw), Math.cos(this.target.yaw - this.yaw));
      this.yaw += d * k; this.pitch += (this.target.pitch - this.pitch) * k;
      if (Math.abs(d) < 0.002) this.target = null;
    } else if (!this.dragging) {
      this.vel *= Math.exp(-dt * 3);
      this.yaw += (this.spin + this.vel) * dt;
      if (!this.drag) this.pitch *= Math.exp(-dt * 2);
    }
    const k = 1 - Math.exp(-dt * 6);
    this.mx += (this.tmx - this.mx) * k; this.my += (this.tmy - this.my) * k;
    const bob = calm.matches ? 0 : Math.sin(t * 1.2 + this.el.offsetTop) * 0.025;
    this.turn.rotation.set(this.tilt[0] + this.pitch + this.my * 0.12, this.tilt[1] + this.yaw + this.mx * 0.3, 0, 'XYZ');
    this.turn.position.y = bob;
    this.renderer.render(this.scene, this.camera);
  }
}

const viewers = [];
let running = false, last = 0, t = 0;
function loop(now) {
  const dt = Math.min(0.05, (now - last) / 1000 || 0.016); last = now; t += dt;
  for (const v of viewers) v.frame(dt, t);
  requestAnimationFrame(loop);
}

const io = new IntersectionObserver(entries => {
  for (const e of entries) {
    let v = e.target.__viewer;
    if (e.isIntersecting && !v) v = create(e.target);
    if (v) v.visible = e.isIntersecting;
  }
}, { rootMargin: '250px 0px' });

function create(el) {
  if (!hasWebGL() || !byId(el.dataset.model)) { el.classList.add('is-failed'); return null; }
  const v = new Viewer(el); el.__viewer = v; viewers.push(v);
  if (!running) { running = true; requestAnimationFrame(loop); }
  return v;
}

/** Pasang penampil 3D ke semua elemen .v3d di dalam root. Model baru dimuat saat elemennya mendekati layar. */
export function mountViewers(root = document) {
  root.querySelectorAll('.v3d[data-model]').forEach(el => { if (!el.__observed) { el.__observed = true; io.observe(el); } });
}
export const viewerOf = el => el.__viewer || null;
