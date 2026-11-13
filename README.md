# MOVERS · Gadget & Aksesoris Laptop

Website toko MOVERS dengan produk yang bisa diputar dalam 3D. Halaman utamanya mengikuti susunan template PHLOX, sedangkan halaman tiap produk dan warnanya mengikuti gaya referensi Dribbble (abu terang, hitam, aksen hijau lime).

## Halaman

| Halaman | Isi |
| --- | --- |
| `index.html` | Hero headphone 3D, kotak kategori 3D (earphone, Apple Watch, MacBook, gaming, VR, speaker), keunggulan, dua banner promo 3D, produk terlaris, kabar terbaru, merek |
| `product.html?id=...` | Halaman per produk: judul besar dengan pita lime, model 3D yang bisa diputar, panel beli (warna, jumlah, keranjang, WhatsApp), kartu hitam dengan lencana berputar, angka spesifikasi, tab "lihat dari setiap sisi", produk lainnya |
| `shop.html` | Semua produk dengan filter kategori dan urutan harga |

Keranjang tersimpan di browser. Checkout mengirim rincian pesanan ke WhatsApp toko.

## Produk

| id | Produk | Model |
| --- | --- | --- |
| `headphone` | Headphone Wireless Pro | `models/headphone.glb` |
| `earphone` | Earphone TWS Air | `models/earphone.glb` |
| `macbook` | MacBook Pro 14" | `models/macbook.glb` |
| `speaker` | JBL Charge 3 | `models/speaker.glb` |
| `watch-ultra` | Apple Watch Ultra 2 | `models/watch-ultra.glb` |
| `watch-s9` | Apple Watch Series 9 | `models/watch-s9.glb` |
| `ps5-controller` | DualSense Controller | `models/ps5-controller.glb` |
| `ps5-hologram` | DualSense Hologram Edition | `models/ps5-hologram.glb` |
| `quest` | Meta Quest 2 | `models/quest.glb` |
| `rift` | Oculus Rift S | `models/rift.glb` |

Harga, stok, warna, dan spesifikasi ada di `js/data.js` dan masih berupa contoh, jadi sesuaikan dengan barang yang dijual. Nomor WhatsApp juga diatur di file yang sama.

## Menjalankan di komputer

Model 3D dimuat lewat `fetch`, jadi buka lewat server lokal, jangan langsung dobel klik file HTML:

```bash
python -m http.server 8000
# buka http://localhost:8000
```

## Teknis

- three.js r187 (di folder `vendor/`), tanpa build tool
- Pembaca `.glb` sendiri di `js/glb.js`
- Tiap model hanya dimuat saat mendekati layar, dan gambar diam di `img/stills/` tampil sebagai cadangan kalau WebGL tidak tersedia
- Model sudah dioptimasi untuk web: total sekitar 200 MB menjadi sekitar 21 MB

---

Dibuat oleh Ahmad Umraithi
