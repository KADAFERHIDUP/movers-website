// Data toko MOVERS. Harga, stok, dan spesifikasi di sini adalah contoh: sesuaikan dengan barang yang dijual.
export const SHOP = {
  name: 'MOVERS',
  tagline: 'Gear up. Move on.',
  wa: '6282276078880',            // nomor WhatsApp untuk pesanan (format internasional tanpa +)
  city: 'Lhokseumawe, Aceh',
  email: 'umraithi769@gmail.com',
  shipping: 'Dikirim 1–2 hari kerja ke seluruh Indonesia',
};

export const CATEGORIES = [
  { id: 'laptop', name: 'Laptop' },
  { id: 'audio', name: 'Audio' },
  { id: 'watch', name: 'Smartwatch' },
  { id: 'gaming', name: 'Gaming' },
  { id: 'vr', name: 'VR' },
];

// view: cara model ditampilkan.
//   base  = rotasi bawaan untuk meluruskan model [x, y, z, urutan]
//   tilt  = sudut pandang default [x, y]
//   fill  = seberapa penuh model mengisi bingkai (1 = pas)
export const PRODUCTS = [
  {
    id: 'headphone', cat: 'audio', name: 'Headphone Wireless Pro', short: 'Headphone',
    price: 1299000, was: 1599000, rating: 4.9, reviews: 312, stock: 24,
    model: 'headphone', view: { tilt: [0.08, -0.45], fill: 0.92 },
    headline: ['DENGAR LEBIH', 'JERNIH'], ghost: 'SOUND',
    blurb: 'Headphone over-ear dengan peredam bising aktif dan bantalan empuk untuk dipakai seharian.',
    power: 'Suara penuh detail dari bass sampai vokal, tetap nyaman dipakai berjam-jam saat kerja, belajar, atau di perjalanan.',
    specs: [['40', 'jam', 'Daya tahan baterai'], ['40', 'mm', 'Driver dinamis'], ['5.3', 'BT', 'Bluetooth stabil'], ['250', 'g', 'Ringan di kepala']],
    feats: [['Peredam bising', 'ANC aktif meredam suara kendaraan dan keramaian.'], ['Lipat & bawa', 'Engsel lipat dan pouch, pas masuk tas laptop.'], ['Mic jernih', 'Dua mikrofon untuk meeting dan telepon.']],
    colors: ['Merah', 'Hitam'],
  },
  {
    id: 'earphone', cat: 'audio', name: 'Earphone TWS Air', short: 'Earphone',
    price: 499000, was: 649000, rating: 4.8, reviews: 528, stock: 60,
    model: 'earphone', view: { tilt: [0.15, 0.6], fill: 0.85 },
    headline: ['BEBAS KABEL,', 'BEBAS GERAK'], ghost: 'WIRELESS',
    blurb: 'Earbuds true wireless ringan dengan koneksi instan dan sentuhan untuk mengatur lagu.',
    power: 'Langsung tersambung begitu dibuka, tahan keringat, dan pas di telinga untuk olahraga maupun perjalanan.',
    specs: [['30', 'jam', 'Total dengan case'], ['IPX5', '', 'Tahan keringat'], ['13', 'mm', 'Driver bass'], ['4.5', 'g', 'Per earbud']],
    feats: [['Kontrol sentuh', 'Ketuk untuk putar, jeda, dan angkat telepon.'], ['Mode game', 'Latensi rendah untuk main game di HP.'], ['Isi cepat', '10 menit isi daya untuk 2 jam pemakaian.']],
    colors: ['Hitam Tembaga'],
  },
  {
    id: 'macbook', cat: 'laptop', name: 'MacBook Pro 14"', short: 'MacBook',
    price: 27999000, was: 29999000, rating: 4.9, reviews: 174, stock: 8,
    model: 'macbook', view: { tilt: [0.32, -0.35], fill: 0.98 },
    headline: ['KERJA LEBIH', 'CEPAT'], ghost: 'POWER',
    blurb: 'Laptop tipis bertenaga chip Apple dengan layar Liquid Retina XDR dan baterai tahan seharian.',
    power: 'Render video, coding, desain, dan multitasking berat terasa ringan, tanpa kipas berisik dan tanpa cari colokan.',
    specs: [['14.2', 'inci', 'Liquid Retina XDR'], ['22', 'jam', 'Baterai hingga'], ['M3', '', 'Chip Apple'], ['1.55', 'kg', 'Mudah dibawa']],
    feats: [['Layar XDR', 'Terang dan akurat untuk edit foto dan video.'], ['Port lengkap', 'HDMI, SD card, MagSafe, dan Thunderbolt.'], ['Senyap', 'Tetap dingin dan tenang saat kerja berat.']],
    colors: ['Space Gray', 'Silver'],
  },
  {
    id: 'speaker', cat: 'audio', name: 'JBL Charge 3', short: 'Speaker',
    price: 1899000, was: 2299000, rating: 4.8, reviews: 241, stock: 15,
    model: 'speaker', view: { tilt: [0.18, -0.3], fill: 0.95 },
    headline: ['PESTA DI', 'MANA SAJA'], ghost: 'BASS',
    blurb: 'Speaker Bluetooth portabel tahan air dengan bass kencang dan powerbank bawaan.',
    power: 'Bawa ke pantai, kamar kos, atau kumpul bareng teman. Suaranya penuh, baterainya awet, dan bisa sekalian ngecas HP.',
    specs: [['20', 'jam', 'Waktu putar'], ['6000', 'mAh', 'Baterai + powerbank'], ['IPX7', '', 'Tahan air'], ['800', 'g', 'Gampang dibawa']],
    feats: [['Powerbank', 'Port USB untuk mengisi daya HP.'], ['Tahan air', 'Aman kena hujan dan cipratan kolam.'], ['Sambung banyak', 'Hubungkan beberapa speaker sekaligus.']],
    colors: ['Putih'],
  },
  {
    id: 'watch-ultra', cat: 'watch', name: 'Apple Watch Ultra 2', short: 'Watch Ultra',
    price: 13999000, was: 14999000, rating: 4.9, reviews: 96, stock: 10,
    model: 'watch-ultra', view: { tilt: [0.05, -0.4], fill: 0.95 },
    headline: ['TANGGUH DI', 'SEGALA MEDAN'], ghost: 'ULTRA',
    blurb: 'Smartwatch titanium paling tangguh dengan layar super terang dan GPS presisi.',
    power: 'Dari lari pagi sampai mendaki dan menyelam, semua tercatat akurat dengan baterai yang tahan berhari-hari.',
    specs: [['49', 'mm', 'Casing titanium'], ['36', 'jam', 'Baterai normal'], ['3000', 'nits', 'Layar terang'], ['100', 'm', 'Tahan air']],
    feats: [['GPS dua frekuensi', 'Rute tetap akurat di kota maupun gunung.'], ['Tombol Action', 'Satu tekan untuk olahraga atau senter.'], ['Sirene darurat', 'Bunyi keras saat butuh bantuan.']],
    colors: ['Titanium Natural'],
  },
  {
    id: 'watch-s9', cat: 'watch', name: 'Apple Watch Series 9', short: 'Watch S9',
    price: 6999000, was: 7499000, rating: 4.8, reviews: 203, stock: 18,
    model: 'watch-s9', view: { tilt: [0.05, -0.4], fill: 0.95 },
    headline: ['SEHAT SETIAP', 'HARI'], ghost: 'HEALTH',
    blurb: 'Smartwatch harian untuk notifikasi, olahraga, dan pantauan kesehatan langsung dari pergelangan.',
    power: 'Pantau detak jantung, tidur, dan aktivitas harian. Balas pesan dan bayar tanpa mengeluarkan HP.',
    specs: [['45', 'mm', 'Ukuran casing'], ['18', 'jam', 'Daya tahan baterai'], ['2000', 'nits', 'Layar Retina'], ['S9', '', 'Chip baru']],
    feats: [['Ketuk dua kali', 'Jawab telepon cukup dengan jari.'], ['Pantau tidur', 'Lihat kualitas tidur setiap pagi.'], ['Tali mudah ganti', 'Ganti gaya sesuai acara.']],
    colors: ['Starlight', 'Midnight'],
  },
  {
    id: 'ps5-controller', cat: 'gaming', name: 'DualSense Controller', short: 'DualSense',
    price: 1099000, was: 1199000, rating: 4.9, reviews: 388, stock: 30,
    model: 'ps5-controller', view: { base: [Math.PI / 2, 0, Math.PI / 2, 'ZXY'], tilt: [0.55, 0], fill: 0.95 },
    headline: ['MAIN LEBIH', 'SERU'], ghost: 'PLAY',
    blurb: 'Controller PS5 dengan getaran haptic dan trigger adaptif yang bikin setiap game terasa nyata.',
    power: 'Rasakan tarikan busur, tekanan rem, dan hentakan senjata langsung di tangan. Juga bisa dipakai di PC dan laptop.',
    specs: [['12', 'jam', 'Daya tahan baterai'], ['USB-C', '', 'Isi daya cepat'], ['2', '', 'Trigger adaptif'], ['280', 'g', 'Pas di tangan']],
    feats: [['Haptic feedback', 'Getaran detail sesuai kejadian di game.'], ['Mic bawaan', 'Ngobrol dengan teman tanpa headset.'], ['Main di PC', 'Bisa dipakai di laptop lewat kabel atau Bluetooth.']],
    colors: ['Putih Marmer'],
  },
  {
    id: 'ps5-hologram', cat: 'gaming', name: 'DualSense Hologram Edition', short: 'Hologram',
    price: 1499000, was: 1699000, rating: 4.7, reviews: 87, stock: 12,
    model: 'ps5-hologram', view: { tilt: [0.25, 0], fill: 1.8 },
    headline: ['TAMPIL BEDA', 'DI ARENA'], ghost: 'GAMER',
    blurb: 'Controller edisi khusus dengan cangkang transparan bergaya hologram yang memamerkan isi dalamnya.',
    power: 'Fitur lengkap DualSense dengan tampilan yang beda dari yang lain. Cocok untuk koleksi dan setup gaming kamu.',
    specs: [['12', 'jam', 'Daya tahan baterai'], ['USB-C', '', 'Isi daya cepat'], ['1', 'dari 500', 'Edisi terbatas'], ['290', 'g', 'Pas di tangan']],
    feats: [['Cangkang transparan', 'Komponen dalam terlihat jelas.'], ['Haptic feedback', 'Getaran detail sesuai kejadian di game.'], ['Main di PC', 'Bisa dipakai di laptop lewat kabel atau Bluetooth.']],
    colors: ['Hologram'],
  },
  {
    id: 'quest', cat: 'vr', name: 'Meta Quest 2', short: 'Quest 2',
    price: 6499000, was: 7499000, rating: 4.8, reviews: 156, stock: 9,
    model: 'quest', view: { tilt: [0.1, -0.45], fill: 0.95 },
    headline: ['MASUK KE', 'DUNIA LAIN'], ghost: 'VIRTUAL',
    blurb: 'Headset VR all-in-one tanpa kabel dan tanpa PC, tinggal pakai dan langsung main.',
    power: 'Main game, olahraga, nonton di layar raksasa, sampai rapat virtual. Semuanya dari satu headset ringan.',
    specs: [['1832', 'px', 'Per mata'], ['120', 'Hz', 'Refresh rate'], ['128', 'GB', 'Penyimpanan'], ['503', 'g', 'Ringan']],
    feats: [['Tanpa kabel', 'Bebas bergerak di ruangan.'], ['Ribuan game', 'Akses toko game VR lengkap.'], ['Sambung ke PC', 'Bisa main game VR PC lewat kabel Link.']],
    colors: ['Hitam'],
  },
  {
    id: 'rift', cat: 'vr', name: 'Oculus Rift S', short: 'Rift S',
    price: 5299000, was: 5999000, rating: 4.6, reviews: 64, stock: 5,
    model: 'rift', view: { tilt: [0.1, -0.45], fill: 0.95 },
    headline: ['VR UNTUK', 'PC GAMING'], ghost: 'REALITY',
    blurb: 'Headset VR untuk laptop dan PC gaming dengan pelacakan dari kamera bawaan.',
    power: 'Hubungkan ke laptop gaming dan nikmati grafis VR penuh. Lima kamera di headset melacak gerakan tanpa sensor tambahan.',
    specs: [['2560', 'px', 'Resolusi layar'], ['80', 'Hz', 'Refresh rate'], ['5', 'kamera', 'Pelacakan Insight'], ['5', 'm', 'Kabel panjang']],
    feats: [['Plug & play', 'Colok ke PC, langsung main.'], ['Halo strap', 'Nyaman untuk sesi panjang.'], ['Game PC VR', 'Main judul VR berat di PC.']],
    colors: ['Hitam'],
  },
];

export const byId = id => PRODUCTS.find(p => p.id === id);
export const rupiah = n => 'Rp' + n.toLocaleString('id-ID');
