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
  { id: 'macbook', name: 'MacBook' },
  { id: 'headphone', name: 'Headphone' },
  { id: 'earphone', name: 'Earphone' },
  { id: 'watch', name: 'Apple Watch' },
  { id: 'speaker', name: 'Speaker' },
  { id: 'console', name: 'Console' },
  { id: 'vr', name: 'VR' },
];

// view: cara model ditampilkan.
//   base  = rotasi bawaan untuk meluruskan model [x, y, z, urutan]
//   tilt  = sudut pandang default [x, y]
//   fill  = seberapa penuh model mengisi bingkai (1 = pas)
export const PRODUCTS = [
  {
    id: 'headphone', cat: 'headphone', name: 'Headphone Wireless Pro', short: 'Headphone',
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
    id: 'earphone', cat: 'earphone', name: 'Earphone TWS Air', short: 'Earphone',
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
    id: 'macbook', cat: 'macbook', name: 'MacBook Pro 14"', short: 'MacBook',
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
    id: 'speaker', cat: 'speaker', name: 'JBL Charge 3', short: 'Speaker',
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
    id: 'ps5-controller', cat: 'console', name: 'DualSense Controller', short: 'DualSense',
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
    id: 'ps5-hologram', cat: 'console', name: 'DualSense Hologram Edition', short: 'Hologram',
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

const MODEL_PRODUCTS = PRODUCTS.splice(0);

/* ---------- produk dari foto (background sudah dihapus, img/produk/<id>.webp) ----------
   Nama, harga, dan stok di bawah adalah contoh: sesuaikan dengan barang yang benar-benar dijual.
   Teks & spesifikasi dipakai bersama per kategori (CAT_INFO), kecuali produk menimpanya sendiri. */
const CAT_INFO = {
  headphone: {
    headline: ['DENGAR LEBIH', 'JERNIH'], ghost: 'SOUND',
    power: 'Suara penuh detail dari bass sampai vokal, nyaman dipakai berjam-jam untuk kerja, kuliah, atau perjalanan.',
    specs: [['40', 'jam', 'Daya tahan baterai'], ['ANC', '', 'Peredam bising aktif'], ['5.3', 'BT', 'Bluetooth stabil'], ['USB-C', '', 'Isi daya cepat']],
    feats: [['Peredam bising', 'Meredam suara kendaraan dan keramaian.'], ['Bantalan empuk', 'Tetap nyaman dipakai seharian.'], ['Mic jernih', 'Jelas untuk meeting dan telepon.']],
  },
  earphone: {
    headline: ['BEBAS KABEL,', 'BEBAS GERAK'], ghost: 'WIRELESS',
    power: 'Langsung tersambung begitu case dibuka, ringan di telinga, dan siap menemani olahraga maupun perjalanan.',
    specs: [['30', 'jam', 'Total dengan case'], ['IPX4', '', 'Tahan keringat'], ['5.3', 'BT', 'Koneksi stabil'], ['10', 'menit', 'Isi cepat 2 jam']],
    feats: [['Kontrol sentuh', 'Ketuk untuk putar, jeda, dan angkat telepon.'], ['Mode game', 'Latensi rendah untuk main game di HP.'], ['Case ringkas', 'Muat di saku celana.']],
  },
  macbook: {
    headline: ['KERJA LEBIH', 'CEPAT'], ghost: 'POWER',
    power: 'Render video, coding, desain, dan multitasking berat terasa ringan, tanpa kipas berisik dan tanpa cari colokan.',
    specs: [['14', 'inci', 'Layar Liquid Retina'], ['18', 'jam', 'Baterai hingga'], ['M3', '', 'Chip Apple'], ['16', 'GB', 'Memori terpadu']],
    feats: [['Layar tajam', 'Terang dan akurat untuk edit foto dan video.'], ['Port lengkap', 'Thunderbolt, HDMI, dan MagSafe.'], ['Senyap', 'Tetap dingin saat kerja berat.']],
  },
  watch: {
    headline: ['SEHAT SETIAP', 'HARI'], ghost: 'HEALTH',
    power: 'Pantau detak jantung, tidur, dan aktivitas harian. Balas pesan dan bayar tanpa mengeluarkan HP.',
    specs: [['45', 'mm', 'Ukuran casing'], ['18', 'jam', 'Daya tahan baterai'], ['2000', 'nits', 'Layar Retina'], ['50', 'm', 'Tahan air']],
    feats: [['Deteksi jatuh & SOS', 'Menghubungi kontak darurat saat dibutuhkan.'], ['Pantau tidur', 'Lihat kualitas tidur setiap pagi.'], ['Tali mudah ganti', 'Ganti gaya sesuai acara.']],
  },
  speaker: {
    headline: ['SUARA PENUH,', 'MEJA RAPI'], ghost: 'BASS',
    power: 'Bentuk persegi panjang yang ringkas, pas diletakkan di samping laptop atau di bawah monitor, dengan bass yang tetap terasa.',
    specs: [['20', 'jam', 'Waktu putar'], ['20', 'W', 'Daya suara'], ['5.3', 'BT', 'Bluetooth'], ['AUX', '', 'Kabel juga bisa']],
    feats: [['Pas di meja', 'Bentuk memanjang, tidak makan tempat.'], ['Sambung laptop', 'Bluetooth atau kabel AUX.'], ['Bass mantap', 'Radiator pasif untuk dentuman lebih dalam.']],
  },
  console: {
    headline: ['MAIN LEBIH', 'SERU'], ghost: 'PLAY',
    power: 'Genggaman pas, tombol responsif, dan getaran yang bikin setiap game terasa hidup. Bisa dipakai di konsol, PC, dan laptop.',
    specs: [['12', 'jam', 'Daya tahan baterai'], ['USB-C', '', 'Isi daya cepat'], ['BT', '', 'Nirkabel'], ['PC', '', 'Bisa di laptop']],
    feats: [['Getaran ganda', 'Terasa setiap tabrakan dan ledakan.'], ['Main di PC', 'Lewat kabel atau Bluetooth.'], ['Genggaman nyaman', 'Tidak licin untuk sesi panjang.']],
  },
  vr: {
    headline: ['MASUK KE', 'DUNIA LAIN'], ghost: 'VIRTUAL',
    power: 'Main game, olahraga, nonton di layar raksasa, sampai rapat virtual, semuanya dari satu headset.',
    specs: [['120', 'Hz', 'Refresh rate'], ['110', '°', 'Sudut pandang'], ['128', 'GB', 'Penyimpanan'], ['2', 'jam', 'Baterai main']],
    feats: [['Imersif', 'Layar tajam dan suara spasial.'], ['Banyak game', 'Akses toko game VR lengkap.'], ['Nyaman', 'Tali bisa disetel untuk sesi panjang.']],
  },
};

// [id, kategori, nama, warna, harga, harga coret, deskripsi singkat]
const PHOTOS = [
  ['headphone-0', 'headphone', 'Headphone Aurora Gradient', 'Biru Gradasi', 899000, 1099000, 'Headphone over-ear dengan warna gradasi biru-hijau yang lembut dan bantalan tebal.'],
  ['headphone-1', 'headphone', 'Bose QuietComfort', 'Sandstone', 4999000, 5499000, 'Headphone peredam bising favorit untuk perjalanan jauh dan kerja di tempat ramai.'],
  ['headphone-2', 'headphone', 'Headphone Plum ANC', 'Plum', 1299000, 1499000, 'Desain bersih warna plum dengan peredam bising aktif dan baterai awet.'],
  ['headphone-3', 'headphone', 'Headphone Cream Studio', 'Krem Hitam', 2499000, 2799000, 'Perpaduan krem dan hitam yang elegan, suara seimbang untuk dengar musik dan meeting.'],
  ['headphone-4', 'headphone', 'Dyson OnTrac', 'Navy Tembaga', 7999000, 8999000, 'Headphone premium dengan aksen tembaga, peredam bising kuat, dan baterai hingga 55 jam.'],
  ['headphone-5', 'headphone', 'Headphone Ruby Over-Ear', 'Ruby', 799000, 999000, 'Warna merah marun yang tegas dengan bantalan lembut untuk dipakai lama.'],
  ['headphone-6', 'headphone', 'Monster Purity Yellow', 'Kuning', 1199000, 1399000, 'Headphone on-ear kuning mengilap yang langsung jadi pusat perhatian.'],
  ['headphone-7', 'headphone', 'JBL Tune Pink', 'Pink', 1099000, 1299000, 'Suara JBL Pure Bass dalam warna pink lembut yang manis.'],
  ['headphone-8', 'headphone', 'Headphone Crimson Air', 'Merah', 999000, 1199000, 'Ringan dan ringkas, warna merah crimson dengan driver bertenaga.'],
  ['headphone-9', 'headphone', 'Headphone Mint Soft', 'Mint', 899000, 1049000, 'Warna mint pastel yang segar dengan bantalan kulit sintetis empuk.'],
  ['earphone-0', 'earphone', 'TWS Pastel Pink', 'Pink', 249000, 349000, 'Earbuds mungil warna pink dengan case bulat yang muat di saku.'],
  ['earphone-1', 'earphone', 'AirPods Pro', 'Putih', 3799000, 4199000, 'Peredam bising aktif, mode transparansi, dan audio spasial untuk ekosistem Apple.'],
  ['earphone-2', 'earphone', 'Earbuds Dynaudio Navy', 'Navy', 1999000, 2299000, 'Case bulat bertekstur kain dengan suara hi-fi hasil tuning Dynaudio.'],
  ['earphone-3', 'earphone', 'boAt Nirvana', 'Abu Biru', 899000, 1099000, 'Earbuds peredam bising dengan case logam yang kokoh.'],
  ['earphone-4', 'earphone', 'AirPods Pro 2', 'Putih', 3999000, 4399000, 'Case MagSafe dengan speaker pelacak dan ANC dua kali lebih kuat.'],
  ['earphone-5', 'earphone', 'Absono TWS Brown', 'Cokelat', 299000, 399000, 'Warna cokelat matte yang hangat, ringan dipakai seharian.'],
  ['earphone-6', 'earphone', 'TWS Teal Wave', 'Teal', 349000, 449000, 'Case teal mengilap dengan koneksi instan dan bass yang mantap.'],
  ['earphone-7', 'earphone', 'boAt Airdopes Silver', 'Silver', 699000, 849000, 'Desain stem ramping dengan case perak yang elegan.'],
  ['earphone-8', 'earphone', 'TWS Pearl White', 'Putih Mutiara', 599000, 749000, 'Earbuds bulat dengan aksen krom dan case oval yang mungil.'],
  ['earphone-9', 'earphone', 'boAt Airdopes Rose', 'Rose', 749000, 899000, 'Case rose metalik dengan earbuds berdesain premium.'],
  ['watch-0', 'watch', 'Apple Watch Ultra 2 Black', 'Titanium Hitam', 14499000, 15499000, 'Titanium hitam dengan tali Alpine oranye, siap untuk segala medan.'],
  ['watch-1', 'watch', 'Apple Watch Series 10', 'Gold & Hitam', 7499000, 7999000, 'Layar lebih lebar dan bodi lebih tipis, tersedia gold dan hitam.'],
  ['watch-2', 'watch', 'Apple Watch Series 9 Pink', 'Pink & Midnight', 6999000, 7499000, 'Tali Sport Loop pink yang lembut, pas untuk sehari-hari.'],
  ['watch-3', 'watch', 'Apple Watch Series 7 Green', 'Hijau', 5499000, 5999000, 'Casing hijau dengan tali Braided Loop yang nyaman.'],
  ['watch-4', 'watch', 'Apple Watch Series 6 Red', 'Merah & Biru', 4499000, 4999000, 'Edisi (PRODUCT)RED dan biru, dengan sensor oksigen darah.'],
  ['watch-5', 'watch', 'Apple Watch Series 9 Starlight', 'Starlight & Midnight', 6999000, 7499000, 'Pantau detak jantung dan kebugaran dengan layar terang.'],
  ['watch-6', 'watch', 'Apple Watch SE', 'Gold & Midnight', 3999000, 4499000, 'Fitur penting seperti deteksi jatuh dan SOS dengan harga lebih hemat.'],
  ['watch-7', 'watch', 'Apple Watch Series 8 Green', 'Hijau & Hitam', 5999000, 6499000, 'Tali sport dua warna dengan pemantauan kesehatan lengkap.'],
  ['watch-8', 'watch', 'Apple Watch Ultra 2', 'Titanium Natural', 13999000, 14999000, 'Tersedia dengan tali Alpine Loop oranye atau abu, untuk petualang.'],
  ['console-0', 'console', 'DualSense Dragon Edition', 'Merah Naga', 1699000, 1899000, 'Controller PS5 custom dengan motif naga dan aksen merah krom.'],
  ['console-1', 'console', 'DualSense Red Stripe', 'Putih Merah', 1399000, 1599000, 'Controller PS5 custom dengan garis merah yang tegas.'],
  ['console-2', 'console', 'Gamepad Arc Mobile', 'Putih', 599000, 749000, 'Gamepad berdesain unik untuk main game di HP dan tablet.'],
  ['console-3', 'console', 'GameSir Wireless Controller', 'Putih Abu', 899000, 1049000, 'Controller nirkabel untuk PC, Switch, dan HP dengan stick Hall effect anti drift.'],
  ['console-4', 'console', 'DualShock 4 Berry Blue', 'Biru Berry', 799000, 899000, 'Controller PS4 warna biru muda dengan tombol merah marun.'],
  ['console-5', 'console', 'Victrix Pro BFG', 'Hitam Ungu', 2999000, 3299000, 'Controller pro modular untuk PS5 dan PC dengan tombol tambahan di belakang.'],
  ['console-6', 'console', 'DualShock 4 Jet Black', 'Hitam', 749000, 849000, 'Controller PS4 klasik yang juga bisa dipakai di PC dan laptop.'],
  ['console-7', 'console', 'Xbox Wireless Phantom White', 'Putih Transparan', 1099000, 1299000, 'Edisi khusus dengan cangkang putih transparan yang bergradasi.'],
  ['console-8', 'console', 'Gamepad Lava Pro', 'Hitam Merah', 499000, 649000, 'Gamepad ergonomis dengan aksen merah untuk PC dan Android.'],
  ['console-9', 'console', 'Gamepad Rose Gold', 'Rose Gold', 449000, 549000, 'Gamepad nirkabel warna rose gold dengan touchpad.'],
  ['vr-0', 'vr', 'VR Headset Neon Blue', 'Hitam Biru', 1499000, 1799000, 'Headset VR untuk HP dengan lampu biru di sekeliling visor.'],
  ['vr-1', 'vr', 'Meta Quest 3', 'Putih', 8499000, 8999000, 'Mixed reality: gabungkan dunia virtual dengan ruangan kamu.'],
  ['vr-2', 'vr', 'VR Headset Elite Black', 'Hitam', 13999000, 14999000, 'Headset ringkas dengan dua controller cincin untuk game PC VR.'],
  ['vr-3', 'vr', 'VR Goggle Silver', 'Silver', 2499000, 2899000, 'Visor perak bergaya kacamata ski dengan tali yang mudah disetel.'],
  ['vr-4', 'vr', 'Pico G2 4K', 'Abu', 3999000, 4499000, 'Headset standalone dengan layar 4K dan remote kecil.'],
  ['vr-5', 'vr', 'Oculus Rift', 'Hitam', 4499000, 4999000, 'Headset VR PC klasik lengkap dengan dua Touch controller.'],
  ['vr-6', 'vr', 'Meta Quest 2 Set', 'Putih', 4999000, 5499000, 'Standalone VR tanpa kabel, lengkap dengan dua controller.'],
  ['vr-7', 'vr', 'Daydream View Coral', 'Coral', 799000, 999000, 'Headset VR kain yang ringan untuk menonton video 360 dari HP.'],
  ['vr-8', 'vr', 'Oculus Quest 2 Headset', 'Putih', 4499000, 4999000, 'Headset VR standalone yang ringan, langsung main tanpa PC.'],
  ['vr-9', 'vr', 'VR Visor Future Silver', 'Silver Hitam', 15999000, 16999000, 'Visor futuristik dengan kamera depan untuk mixed reality.'],
  ['speaker-0', 'speaker', 'Soundcore Box Mini', 'Cokelat Gelap', 899000, 1099000, 'Speaker kotak ringkas dengan tombol di atas, pas di samping laptop.'],
  ['speaker-1', 'speaker', 'Bose SoundLink Mini II', 'Carbon', 2499000, 2799000, 'Speaker aluminium persegi panjang dengan bass tebal untuk ukurannya.'],
  ['speaker-2', 'speaker', 'Marshall Stanmore II Cream', 'Cream', 6499000, 6999000, 'Speaker rumah persegi panjang bergaya ampli klasik dengan kenop kuningan.'],
  ['speaker-3', 'speaker', 'Marshall Middleton Blue', 'Biru', 4799000, 5299000, 'Speaker portabel tahan air dengan tali, suara 360 derajat.'],
  ['speaker-4', 'speaker', 'Soundbar Desktop Grey', 'Abu Gelap', 1499000, 1799000, 'Soundbar meja yang memanjang, cocok di bawah monitor atau laptop.'],
  ['speaker-5', 'speaker', 'Speaker Silver Wave', 'Silver', 1299000, 1499000, 'Speaker memanjang berbahan aluminium dengan port USB dan AUX.'],
  ['speaker-6', 'speaker', 'Soundbar Slim Black', 'Hitam', 1799000, 2099000, 'Soundbar tipis untuk TV dan laptop, suara lebih lebar.'],
  ['speaker-7', 'speaker', 'Speaker Prism Aluminium', 'Silver Hitam', 1199000, 1399000, 'Bodi aluminium berbentuk prisma dengan grill di depan.'],
  ['speaker-8', 'speaker', 'Speaker Navy Box', 'Navy', 699000, 849000, 'Speaker persegi panjang warna navy dengan tombol di atas.'],
  ['macbook-1', 'macbook', 'MacBook Pro 13" Space Gray', 'Space Gray', 19999000, 21499000, 'Layar Retina 13 inci yang terang, cocok untuk coding dan desain ringan.'],
  ['macbook-2', 'macbook', 'MacBook Pro 13" Retina Silver', 'Silver', 12999000, 13999000, 'Bodi unibody aluminium klasik dengan port lengkap di sisi kanan.'],
  ['macbook-3', 'macbook', 'MacBook Pro 16" Silver', 'Silver', 34999000, 37499000, 'Layar 16 inci yang lega dengan lid aluminium polos yang elegan.'],
  ['macbook-4', 'macbook', 'MacBook Air 15" Midnight Teal', 'Midnight', 22999000, 24499000, 'Bodi rata tanpa wedge, tipis 1,1 cm dan tetap senyap tanpa kipas.'],
  ['speaker-9', 'speaker', 'Beats Pill+ Black', 'Hitam', 2299000, 2599000, 'Speaker kapsul memanjang dengan suara stereo dan bisa jadi power bank.'],
  ['macbook-5', 'macbook', 'MacBook Air 13" Midnight', 'Midnight', 16999000, 17999000, 'Tipis, ringan, dan tanpa kipas, baterai tahan seharian.'],
  ['macbook-6', 'macbook', 'MacBook Air 13" Silver', 'Silver', 15999000, 16999000, 'Keyboard Magic Keyboard yang nyaman dan layar Liquid Retina yang tajam.'],
  ['macbook-7', 'macbook', 'MacBook Air 15" Green Edition', 'Hijau', 21999000, 23499000, 'Layar 15 inci dalam bodi tipis, tampil beda dengan warna hijau.'],
  ['macbook-9', 'macbook', 'MacBook Pro 14" Space Gray', 'Space Gray', 29999000, 31999000, 'Chip Pro untuk kerja kreatif dengan layar XDR 14 inci.'],
];

const seed = s => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
const PHOTO_PRODUCTS = PHOTOS.map(([id, cat, name, color, price, was, blurb]) => {
  const r = seed(id), info = CAT_INFO[cat];
  return {
    id, cat, name, short: name.split(' ').slice(0, 2).join(' '), price, was, blurb, colors: [color],
    rating: +(4.5 + (r % 5) / 10).toFixed(1), reviews: 20 + (r % 380), stock: 3 + (r % 28),
    photo: `img/produk/${id}.webp`, ...info,
  };
});

PRODUCTS.push(...MODEL_PRODUCTS, ...PHOTO_PRODUCTS);
for (const p of PRODUCTS) p.img = p.photo || `img/stills/${p.id}.webp`;

export const byId = id => PRODUCTS.find(p => p.id === id);
export const rupiah = n => 'Rp' + n.toLocaleString('id-ID');
