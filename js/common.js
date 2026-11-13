// Bagian yang sama di semua halaman: header, footer, keranjang, checkout WhatsApp, dan kartu produk.
import { SHOP, PRODUCTS, CATEGORIES, byId, rupiah } from './data.js';
import { mountViewers } from './viewer.js';

export const $ = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const P = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
// Logo MOVERS: lingkaran berisi simbol tombol daya, digambar dalam satu SVG supaya selalu tepat di tengah.
export const LOGO = `<svg class="logo-mark" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="20" class="lm-bg"/><path d="M20 10.5v9" class="lm-fg"/><path d="M14.2 14.2a8.4 8.4 0 1 0 11.6 0" class="lm-fg"/></svg>`;

export const ICON = {
  bag: P('<path d="M5 8h14l-1.2 11.1a2 2 0 0 1-2 1.9H8.2a2 2 0 0 1-2-1.9z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>'),
  arrow: P('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  arrowUR: P('<path d="M7 17 17 7M8 7h9v9"/>'),
  bolt: P('<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>'),
  phone: P('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>'),
  clock: P('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  truck: P('<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>'),
  shield: P('<path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z"/><path d="m9 12 2 2 4-4"/>'),
  headset: P('<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>'),
  card: P('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>'),
  menu: P('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  close: P('<path d="M6 6l12 12M18 6 6 18"/>'),
  plus: P('<path d="M12 5v14M5 12h14"/>'),
  minus: P('<path d="M5 12h14"/>'),
  trash: P('<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>'),
  search: P('<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>'),
  power: P('<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>'),
  rotate: P('<path d="M3 12a9 9 0 0 1 15.5-6.2L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.2L3 16M3 21v-5h5"/>'),
  wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2m0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2m4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.5 4c1.7.7 2.4.8 3.2.6a2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.3l-5.6 2.9 1.1-6.3-4.6-4.4 6.3-.9z"/></svg>',
};

/* ---------- header & footer ---------- */
function header(active) {
  const link = (href, label, key) => `<a href="${href}"${active === key ? ' aria-current="page"' : ''}>${label}</a>`;
  return `
  <a class="skip" href="#main">Langsung ke konten</a>
  <div class="bar">
    <nav class="nav" aria-label="Menu utama">
      ${link('index.html', 'Beranda', 'home')}
      ${link('shop.html', 'Produk', 'shop')}
      ${link('index.html#kategori', 'Kategori', 'cat')}
      ${link('index.html#kontak', 'Bantuan', 'help')}
    </nav>
    <a class="logo" href="index.html" aria-label="${SHOP.name} beranda">${LOGO}<b>${SHOP.name}</b></a>
    <div class="bar-right">
      <a class="icon-btn" href="shop.html" aria-label="Cari produk">${ICON.search}</a>
      <button class="icon-btn cart-btn" type="button" data-cart-open aria-label="Buka keranjang">${ICON.bag}<span class="cart-count" hidden>0</span></button>
      <a class="pill-btn dark" href="https://wa.me/${SHOP.wa}" target="_blank" rel="noopener">${ICON.wa}<span>Chat</span></a>
      <button class="icon-btn menu-btn" type="button" aria-label="Buka menu" aria-expanded="false" aria-controls="mobile-nav">${ICON.menu}</button>
    </div>
  </div>
  <nav class="mobile-nav" id="mobile-nav" aria-label="Menu" hidden>
    <a href="index.html">Beranda</a><a href="shop.html">Semua produk</a>
    ${CATEGORIES.map(c => `<a href="shop.html?cat=${c.id}">${c.name}</a>`).join('')}
    <a href="index.html#kontak">Bantuan</a>
  </nav>`;
}

function footer() {
  const year = new Date().getFullYear();
  return `
  <div class="foot" id="kontak">
    <div class="foot-brand">
      <a class="logo" href="index.html" aria-label="${SHOP.name} beranda">${LOGO}<b>${SHOP.name}</b></a>
      <p>Toko gadget dan aksesoris untuk laptop, kerja, dan main. Barang original, bergaransi, dan dikirim ke seluruh Indonesia.</p>
    </div>
    <div><h3>Belanja</h3>${CATEGORIES.map(c => `<a href="shop.html?cat=${c.id}">${c.name}</a>`).join('')}</div>
    <div><h3>Kontak</h3>
      <a href="https://wa.me/${SHOP.wa}" target="_blank" rel="noopener">WhatsApp +${SHOP.wa.replace(/^62/, '62 ')}</a>
      <a href="mailto:${SHOP.email}">${SHOP.email}</a>
      <span>${SHOP.city}</span>
    </div>
    <form class="foot-news" data-news>
      <h3>Kabar promo</h3>
      <p class="big">Dapat info diskon duluan.</p>
      <label class="sr" for="news-wa">Nomor WhatsApp</label>
      <div class="news-row"><input id="news-wa" name="wa" type="tel" inputmode="tel" placeholder="Nomor WhatsApp" required pattern="[0-9+ ]{9,16}"><button class="pill-btn lime" type="submit">Ikuti</button></div>
    </form>
  </div>
  <div class="foot-base"><span>© ${year} ${SHOP.name}. ${SHOP.tagline}</span><span>Harga dapat berubah sewaktu-waktu.</span></div>`;
}

/* ---------- kartu produk ---------- */
export function card(p, { live = false } = {}) {
  const off = p.was ? Math.round((1 - p.price / p.was) * 100) : 0;
  const media = live && p.model
    ? `<div class="v3d" data-model="${p.id}" data-spin="0.35"><img class="v3d-still" src="${p.img}" alt="" loading="lazy" width="600" height="600"></div>`
    : `<img src="${p.img}" alt="${p.name}" loading="lazy">`;
  return `
  <article class="card">
    <a class="card-media" href="product.html?id=${p.id}" aria-label="${p.name}">
      ${off ? `<span class="tag">-${off}%</span>` : ''}${p.model ? '<span class="tag tag-3d">3D</span>' : ''}${media}
    </a>
    <div class="card-body">
      <span class="card-cat">${CATEGORIES.find(c => c.id === p.cat).name}</span>
      <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <div class="card-foot">
        <span class="price">${rupiah(p.price)}${p.was ? `<s>${rupiah(p.was)}</s>` : ''}</span>
        <button class="add-btn" type="button" data-add="${p.id}" aria-label="Tambah ${p.name} ke keranjang">${ICON.plus}</button>
      </div>
    </div>
  </article>`;
}

/* ---------- keranjang ---------- */
const KEY = 'movers-cart';
let cart = [];
try { cart = JSON.parse(localStorage.getItem(KEY) || '[]').filter(i => byId(i.id)); } catch { cart = []; }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch { /* mode privat */ } };

export function addToCart(id, qty = 1, color = '') {
  const p = byId(id); if (!p) return;
  color = color || p.colors[0];
  const it = cart.find(i => i.id === id && i.color === color);
  if (it) it.qty = Math.min(p.stock, it.qty + qty); else cart.push({ id, color, qty: Math.min(p.stock, qty) });
  save(); renderCart(); bump();
  toast(`${p.name} masuk keranjang`);
}
function setQty(i, q) {
  const it = cart[i]; if (!it) return;
  if (q <= 0) cart.splice(i, 1); else it.qty = Math.min(byId(it.id).stock, q);
  save(); renderCart();
}
const total = () => cart.reduce((s, i) => s + byId(i.id).price * i.qty, 0);

function bump() { const b = $('.cart-btn'); b?.classList.remove('bump'); void b?.offsetWidth; b?.classList.add('bump'); }

function renderCart() {
  const n = cart.reduce((s, i) => s + i.qty, 0);
  $$('.cart-count').forEach(el => { el.textContent = n; el.hidden = !n; });
  const list = $('#cart-list'); if (!list) return;
  list.innerHTML = cart.length ? cart.map((i, k) => {
    const p = byId(i.id);
    return `<li class="cart-item">
      <img src="${p.img}" alt="" width="72" height="72">
      <div><a href="product.html?id=${p.id}">${p.name}</a><small>${i.color}</small><b>${rupiah(p.price * i.qty)}</b></div>
      <div class="qty" role="group" aria-label="Jumlah ${p.name}">
        <button type="button" data-q="${k}" data-d="-1" aria-label="Kurangi">${i.qty === 1 ? ICON.trash : ICON.minus}</button>
        <span aria-live="polite">${i.qty}</span>
        <button type="button" data-q="${k}" data-d="1" aria-label="Tambah"${i.qty >= p.stock ? ' disabled' : ''}>${ICON.plus}</button>
      </div></li>`;
  }).join('') : `<li class="cart-empty"><p>Keranjang masih kosong.</p><a class="pill-btn dark" href="shop.html">Lihat produk ${ICON.arrow}</a></li>`;
  $('#cart-total').textContent = rupiah(total());
  $('#cart-checkout').disabled = !cart.length;
}

function drawers() {
  const d = document.createElement('div');
  d.innerHTML = `
  <div class="scrim" data-cart-close hidden></div>
  <aside class="drawer" id="cart" aria-label="Keranjang" aria-hidden="true" inert>
    <div class="drawer-head"><h2>Keranjang</h2><button class="icon-btn" type="button" data-cart-close aria-label="Tutup keranjang">${ICON.close}</button></div>
    <ul class="cart-list" id="cart-list"></ul>
    <div class="drawer-foot">
      <div class="sum"><span>Total</span><b id="cart-total">Rp0</b></div>
      <p class="muted">${SHOP.shipping}. Ongkir dihitung saat konfirmasi.</p>
      <button class="pill-btn lime wide" type="button" id="cart-checkout">Checkout via WhatsApp ${ICON.arrow}</button>
    </div>
  </aside>
  <dialog class="sheet" id="checkout" aria-labelledby="co-title">
    <form method="dialog" class="sheet-form" id="co-form" novalidate>
      <div class="drawer-head"><h2 id="co-title">Data pengiriman</h2><button class="icon-btn" type="button" data-co-close aria-label="Tutup">${ICON.close}</button></div>
      <label>Nama lengkap<input name="nama" autocomplete="name" required></label>
      <label>Nomor WhatsApp<input name="hp" type="tel" inputmode="tel" autocomplete="tel" required pattern="[0-9+ ]{9,16}" placeholder="08xxxxxxxxxx"></label>
      <label>Alamat lengkap<textarea name="alamat" rows="3" autocomplete="street-address" required></textarea></label>
      <label>Pembayaran<select name="bayar"><option>Transfer bank</option><option>QRIS</option><option>COD (area ${SHOP.city.split(',')[0]})</option></select></label>
      <label>Catatan <span class="muted">(opsional)</span><input name="catatan"></label>
      <p class="form-err" role="alert" hidden>Lengkapi nama, nomor WhatsApp, dan alamat dulu ya.</p>
      <button class="pill-btn lime wide" type="submit">${ICON.wa} Kirim pesanan</button>
      <p class="muted small">Pesanan dikirim ke WhatsApp ${SHOP.name}. Admin akan konfirmasi ongkir dan cara bayar.</p>
    </form>
  </dialog>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>`;
  document.body.append(...d.children);
}

let lastFocus = null;
function openCart() {
  lastFocus = document.activeElement;
  const c = $('#cart'); c.inert = false; c.setAttribute('aria-hidden', 'false'); c.classList.add('open');
  $('.scrim').hidden = false; requestAnimationFrame(() => $('.scrim').classList.add('on'));
  document.body.classList.add('locked');
  setTimeout(() => $('#cart .icon-btn').focus(), 50);
}
function closeCart() {
  const c = $('#cart'); c.classList.remove('open'); c.setAttribute('aria-hidden', 'true'); c.inert = true;
  $('.scrim').classList.remove('on'); setTimeout(() => { $('.scrim').hidden = true; }, 300);
  document.body.classList.remove('locked');
  lastFocus?.focus?.();
}

function checkout(form) {
  const f = new FormData(form);
  const ok = form.checkValidity() && f.get('nama').trim() && f.get('alamat').trim();
  $('.form-err', form).hidden = !!ok;
  if (!ok) { form.reportValidity?.(); return false; }
  const lines = cart.map((i, k) => `${k + 1}. ${byId(i.id).name} (${i.color}) x${i.qty} = ${rupiah(byId(i.id).price * i.qty)}`);
  const msg = [`Halo ${SHOP.name}, saya mau pesan:`, '', ...lines, '', `Total: ${rupiah(total())}`, '',
    `Nama: ${f.get('nama')}`, `WhatsApp: ${f.get('hp')}`, `Alamat: ${f.get('alamat')}`, `Pembayaran: ${f.get('bayar')}`,
    f.get('catatan') ? `Catatan: ${f.get('catatan')}` : ''].filter((l, i, a) => l !== '' || a[i - 1] !== '').join('\n');
  window.open(`https://wa.me/${SHOP.wa}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  cart = []; save(); renderCart();
  return true;
}

let toastT = 0;
export function toast(text) {
  const t = $('#toast'); if (!t) return;
  t.textContent = text; t.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2200);
}

/** Pasang header, footer, keranjang, dan penampil 3D. */
export function setup(active) {
  const h = $('#site-header'); if (h) h.innerHTML = header(active);
  const f = $('#site-footer'); if (f) f.innerHTML = footer();
  drawers(); renderCart();

  document.addEventListener('click', e => {
    const add = e.target.closest('[data-add]');
    if (add) { e.preventDefault(); addToCart(add.dataset.add, +(add.dataset.qty || 1), add.dataset.color || ''); return; }
    if (e.target.closest('[data-cart-open]')) { openCart(); return; }
    if (e.target.closest('[data-cart-close]')) { closeCart(); return; }
    const q = e.target.closest('[data-q]');
    if (q) { const i = +q.dataset.q; setQty(i, cart[i].qty + +q.dataset.d); return; }
    if (e.target.closest('[data-co-close]')) { $('#checkout').close(); return; }
  });
  addEventListener('keydown', e => { if (e.key === 'Escape' && $('#cart').classList.contains('open')) closeCart(); });
  $('#cart-checkout').addEventListener('click', () => { closeCart(); $('#checkout').showModal(); });
  $('#co-form').addEventListener('submit', e => {
    e.preventDefault();
    if (checkout(e.target)) { $('#checkout').close(); e.target.reset(); toast('Pesanan dikirim ke WhatsApp. Terima kasih!'); }
  });
  $('[data-news]')?.addEventListener('submit', e => { e.preventDefault(); e.target.reset(); toast('Sip! Nomor kamu sudah terdaftar untuk info promo.'); });

  const mb = $('.menu-btn'), mn = $('#mobile-nav');
  mb?.addEventListener('click', () => { const open = mn.hidden; mn.hidden = !open; mb.setAttribute('aria-expanded', String(open)); mb.innerHTML = open ? ICON.close : ICON.menu; });

  // header berubah saat halaman digulir
  const bar = $('#site-header');
  const onScroll = () => bar?.classList.toggle('scrolled', scrollY > 12);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // animasi muncul
  const rio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  $$('.reveal').forEach(el => rio.observe(el));

  mountViewers();
}

export { PRODUCTS, CATEGORIES, SHOP, byId, rupiah };
