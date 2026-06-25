// ─────────────────────────────────────────────────────────────────────────────
// src/data/seoData.ts
// Programmatic SEO altyapısı — 12 ilçe × 10 hizmet = 120 dinamik sayfa
// ─────────────────────────────────────────────────────────────────────────────

// ── TİP TANIMLARI ─────────────────────────────────────────────────────────────

export interface District {
  slug: string;
  name: string;         // "Kadıköy"
  nameGenitive: string; // "Kadıköy'de"  (lokasyon cümleleri için)
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Advantage {
  icon: string;  // emoji veya metin ikon
  title: string;
  desc: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  desc: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  metaTitleTemplate: string;   // {ilce} placeholder'ı kullanılır
  metaDescTemplate: string;
  h1Template: string;
  introTemplate: string;
  advantages: Advantage[];
  processSteps: ProcessStep[];
  faq: FAQ[];                  // {ilce} placeholder'ı içerebilir
  relatedServiceSlugs: string[];
  lsiKeywords: string[];       // Destekleyici arama kümeleri
}

// NOT: MockBlog interface'i kaldırıldı. Gerçek blog tipi (BlogPost) için
// src/lib/blog.ts dosyasındaki tanıma bakın.

export interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

// ── İLÇELER (Anadolu Yakası — Adalar ve Şile hariç) ──────────────────────────

export const districts: District[] = [
  { slug: 'beykoz',       name: 'Beykoz',       nameGenitive: "Beykoz'da"       },
  { slug: 'uskudar',      name: 'Üsküdar',      nameGenitive: "Üsküdar'da"      },
  { slug: 'kadikoy',      name: 'Kadıköy',      nameGenitive: "Kadıköy'de"      },
  { slug: 'atasehir',     name: 'Ataşehir',     nameGenitive: "Ataşehir'de"     },
  { slug: 'umraniye',     name: 'Ümraniye',     nameGenitive: "Ümraniye'de"     },
  { slug: 'cekmekoy',     name: 'Çekmeköy',     nameGenitive: "Çekmeköy'de"     },
  { slug: 'sancaktepe',   name: 'Sancaktepe',   nameGenitive: "Sancaktepe'de"   },
  { slug: 'sultanbeyli',  name: 'Sultanbeyli',  nameGenitive: "Sultanbeyli'de"  },
  { slug: 'maltepe',      name: 'Maltepe',      nameGenitive: "Maltepe'de"      },
  { slug: 'kartal',       name: 'Kartal',       nameGenitive: "Kartal'da"       },
  { slug: 'pendik',       name: 'Pendik',       nameGenitive: "Pendik'te"       },
  { slug: 'tuzla',        name: 'Tuzla',        nameGenitive: "Tuzla'da"        },
];

// ── HİZMETLER ─────────────────────────────────────────────────────────────────

export const services: Service[] = [

  // ── 1. CAM BALKON FİYATLARI ───────────────────────────────────────────────
  {
    slug: 'cam-balkon-fiyatlari',
    name: 'Cam Balkon Fiyatları',
    shortName: 'Cam Balkon',
    metaTitleTemplate: '{ilce} Cam Balkon Fiyatları 2025 | Ücretsiz Keşif',
    metaDescTemplate:
      '{ilce} cam balkon fiyatları için uzman ekibimizden ücretsiz keşif ve teklif alın. Kaliteli malzeme, uygun fiyat ve garantili montaj.',
    h1Template: '{ilce} Cam Balkon Fiyatları',
    introTemplate:
      '{ilce} bölgesinde cam balkon fiyatları; seçilen sistem tipi (katlanır, sürme veya ısıcamlı), cam kalınlığı, balkon ölçüsü ve profil renk seçeneğine göre değişiklik gösterir. Standart bir balkon için ortalama fiyat aralığımız rekabetçidir; ücretsiz keşif hizmetimizle {ilce} adresinize gelip metrekareye özel fiyat hesaplayarak yazılı teklif sunuyoruz. Tüm sistemlerimiz CE belgeli malzeme ve 2 yıl işçilik garantisiyle teslim edilir.',
    advantages: [
      { icon: '💰', title: 'Şeffaf Fiyatlandırma', desc: 'Gizli maliyet yok; keşif sonrası yazılı ve bağlayıcı teklif.' },
      { icon: '🏅', title: 'CE Belgeli Malzeme', desc: 'Tüm profil ve cam sistemleri Avrupa standartlarında belgelidir.' },
      { icon: '🔧', title: '2 Yıl Garanti', desc: 'Malzeme ve işçilik hatalarına karşı 2 yıl tam garanti.' },
      { icon: '📐', title: 'Ücretsiz Keşif', desc: 'Uzman ekibimiz adresinize gelip yerinde ölçüm ve fiyat hesaplaması yapar.' },
    ],
    processSteps: [
      { step: 1, title: 'İletişime Geçin', desc: 'Telefon veya WhatsApp ile randevu oluşturun.' },
      { step: 2, title: 'Ücretsiz Keşif', desc: 'Ekibimiz adresinizde ölçüm alır, sistem seçeneklerini anlatır.' },
      { step: 3, title: 'Teklif & Onay', desc: 'Yazılı fiyat teklifini inceleyin, onaylayın.' },
      { step: 4, title: 'Üretim & Montaj', desc: 'Siparişiniz üretilir; randevu günü montaj tamamlanır.' },
      { step: 5, title: 'Teslim & Garanti', desc: 'Sistemi test ederek teslim alın; garanti belgenizi alın.' },
    ],
    faq: [
      {
        question: '{ilce}\'de cam balkon m2 fiyatı ne kadar?',
        answer: 'Cam balkon m2 fiyatı; sistem tipine (katlanır/sürme), cam kalınlığına, profil rengine ve balkon ölçüsüne göre değişir. Doğru m2 fiyatını öğrenmek için ücretsiz keşif hizmetimizden yararlanabilirsiniz; ekibimiz adresinize gelerek yerinde ölçüm yapar ve dakikalar içinde yazılı, bağlayıcı bir teklif sunar. Standart bir balkon için fiyat aralığımız kullanılan cam kalınlığı ve ısı yalıtım seçeneğine göre belirlenir.',
      },
      {
        question: 'Fiyata ne dahil, garanti süresi nedir?',
        answer: 'Standart teklifimize malzeme, üretim, montaj işçiliği ve 2 yıl garanti dahildir. Garanti kapsamında malzeme ve işçilik hatalarına karşı ücretsiz onarım hizmeti sunulur. Özel renk, ısı yalıtımlı (ısıcamlı) cam veya motorlu sistem gibi ek seçenekler, fiyat teklifine ayrıca yansıtılır ve önceden sizinle paylaşılır.',
      },
      {
        question: 'Teslimat süresi ve montaj kaç gün sürer?',
        answer: 'Ücretsiz keşif ve ölçüm alındıktan sonra üretim süreci ortalama 7-14 iş günüdür; bu süre malzeme stok durumuna göre kısalabilir. Montaj ise standart bir balkon için genellikle 1 iş günü içinde, bina cephesine zarar vermeden tamamlanır. Toplam teslimat süresi keşiften montaja kadar yaklaşık 2-3 hafta arasında değişir.',
      },
      {
        question: 'Cam balkon ısı ve ses yalıtımı sağlar mı?',
        answer: 'Standart tek camlı cam balkon sistemleri rüzgâr, toz ve gürültüye karşı belirgin koruma sağlar ancak tam bir ısı yalıtımı sunmaz. Maksimum ısı ve ses yalıtımı önceliğiniz ise ısıcamlı (çift camlı) cam balkon sistemini tercih etmenizi öneririz; bu seçenek enerji faturalarını da düşürür.',
      },
      {
        question: 'Taksit seçeneği var mı?',
        answer: 'Evet, anlaşmalı olduğumuz ödeme yöntemleriyle taksit imkânı sunulabilmektedir. Ücretsiz keşif sırasında bütçenize uygun ödeme planı hakkında da bilgi alabilirsiniz.',
      },
    ],
    relatedServiceSlugs: ['katlanir-cam-balkon', 'isicamli-cam-balkon', 'surgulu-cam-balkon', 'en-yakin-cam-balkoncu'],
    lsiKeywords: ['cam balkon modelleri', 'cam balkon sistemi', 'balkon kapatma', 'cam balkon montaj', 'alüminyum cam balkon'],
  },

  // ── 2. KATLANIR CAM BALKON ────────────────────────────────────────────────
  {
    slug: 'katlanir-cam-balkon',
    name: 'Katlanır Cam Balkon',
    shortName: 'Katlanır Cam Balkon',
    metaTitleTemplate: '{ilce} Katlanır Cam Balkon | Harmonika Sistem Fiyat',
    metaDescTemplate:
      '{ilce} katlanır (harmonika) cam balkon sistemleri. Tamamen açılabilen, dört mevsim konforlu balkon çözümü. Ücretsiz ölçüm ve teklif.',
    h1Template: '{ilce} Katlanır Cam Balkon Sistemleri',
    introTemplate:
      'Katlanır cam balkon, panellerin harmonika gibi bir yana katlanan yapısıyla tamamen açılabilen sistemdir. {ilce} projelerimizde yaz aylarında balkonunuzu tamamen açık tutarken, kış aylarında kapatarak dört mevsim kullanım sağlıyoruz. L ve U şeklindeki balkanlarda 90° köşe profilleriyle kesintisiz uygulama yapılabilir. 6, 8 ve 10 mm temperli güvenlik camı seçenekleri mevcuttur.',
    advantages: [
      { icon: '🔓', title: 'Tamamen Açılabilir', desc: 'Paneller bir yana katlanır; yaz aylarında tam açık balkon deneyimi.' },
      { icon: '🌡️', title: '4 Mevsim Kullanım', desc: 'Kışın kapatarak ısı yalıtımı, yazın açarak doğal havalandırma.' },
      { icon: '📐', title: 'L-U Köşe Geçişi', desc: '90° ve 135° köşe profilleriyle her balkon şekline uygulama.' },
      { icon: '🛡️', title: 'Temperli Güvenlik Camı', desc: 'Kırılmada keskin parça oluşturmaz; çocuk kilidi standarttır.' },
    ],
    processSteps: [
      { step: 1, title: 'Ölçüm Randevusu', desc: 'Ücretsiz keşif için iletişime geçin.' },
      { step: 2, title: 'Sistem Seçimi', desc: 'Panel genişliği, cam kalınlığı ve profil rengi belirlenir.' },
      { step: 3, title: 'Üretim', desc: 'Ölçülerinize özel üretim 7-14 iş günü sürer.' },
      { step: 4, title: 'Montaj', desc: 'Uzman ekibimiz 1 günde montajı tamamlar.' },
    ],
    faq: [
      {
        question: 'Katlanır cam balkon {ilce}\'de m2 fiyatı ve teslimat süresi nedir?',
        answer: 'Katlanır cam balkon m2 fiyatı; panel sayısına, cam kalınlığına (6, 8 veya 10mm) ve profil rengine göre değişir. Ücretsiz keşif sonrası net m2 fiyatını yazılı teklif olarak sunuyoruz. Ölçüm alındıktan sonra teslimat süresi üretim için 7-14 iş günü, montaj için ise 1 iş günüdür.',
      },
      {
        question: 'Garanti kapsamı nedir?',
        answer: 'Katlanır cam balkon sistemlerimiz 2 yıl işçilik ve malzeme garantisi ile teslim edilir. Garanti süresinde panel mekanizmasında veya cam montajında oluşabilecek sorunlar ücretsiz olarak giderilir.',
      },
      {
        question: 'Katlanır sistem rüzgara dayanıklı mıdır?',
        answer: 'Sistemlerimiz EN 12211 standardına göre WL3 sınıfında test edilmiştir; 120 km/s\'ye kadar rüzgara dayanıklıdır. Bu sayede yüksek katlarda ve açık balkonlarda güvenle kullanılabilir.',
      },
      {
        question: 'L şekilli balkona katlanır sistem uygulanabilir mi?',
        answer: '90° köşe geçiş profiliyle L ve U şeklindeki balkonlarda kesintisiz uygulama yapılabilir. Köşe detayları ücretsiz keşif sırasında özel olarak ölçülüp planlanır.',
      },
      {
        question: 'Katlanır mı sürme mi tercih etmeliyim, ısı yalıtımı nasıl?',
        answer: 'Geniş balkonda tamamen açık kullanım istiyorsanız katlanır, dar balkonda az yer kaplamak istiyorsanız sürme sistem daha uygundur. Her iki sistemde de ısı yalıtımını artırmak için ısıcamlı cam seçeneği talep edilebilir; bu, kışın enerji tasarrufu sağlar.',
      },
    ],
    relatedServiceSlugs: ['cam-balkon-fiyatlari', 'isicamli-cam-balkon', 'surgulu-cam-balkon'],
    lsiKeywords: ['harmonika cam balkon', 'açılır kapanır cam balkon', 'katlanır balkon sistemi', 'cam balkon köşe geçişi'],
  },

  // ── 3. ISICAMLI CAM BALKON ────────────────────────────────────────────────
  {
    slug: 'isicamli-cam-balkon',
    name: 'Isıcamlı Cam Balkon',
    shortName: 'Isıcamlı Cam Balkon',
    metaTitleTemplate: '{ilce} Isıcamlı Cam Balkon | Enerji Tasarruflu Sistem',
    metaDescTemplate:
      '{ilce} ısıcamlı cam balkon sistemleri. Argon gazlı çift cam ile enerji tasarrufu, yoğuşma yok. Ücretsiz keşif ve teklif.',
    h1Template: '{ilce} Isıcamlı Cam Balkon Sistemleri',
    introTemplate:
      'Isıcamlı cam balkon sistemleri, iki cam levha arasına argon gazı doldurularak üretilir ve standart tek cama kıyasla ısı iletimini büyük ölçüde azaltır. {ilce} projelerimizde poliamid barriyerli profil kullanıyoruz; soğuk havalarda profil yüzeyinde yoğuşma oluşmaz. Low-E kaplama seçeneğiyle UV koruması da sağlanır. Enerji kimlik belgesi (EKB) gereklilikleri için idealdir.',
    advantages: [
      { icon: '🌡️', title: 'Düşük Enerji Faturası', desc: 'Isı yalıtımı sayesinde kışın ısıtma maliyeti belirgin azalır.' },
      { icon: '💧', title: 'Yoğuşma Yok', desc: 'Poliamid barriyerli profil cam yüzeyinde buğulanmayı önler.' },
      { icon: '🔇', title: 'Ses Yalıtımı', desc: 'Çift cam arası boşluk ses iletimini %30-40 azaltır.' },
      { icon: '☀️', title: 'UV Koruma', desc: 'Low-E kaplama UV ışınlarını filtreler; mobilya ve zemin solmaz.' },
    ],
    processSteps: [
      { step: 1, title: 'Keşif', desc: 'Balkonunuz ısıcamlı sisteme uygunluk açısından değerlendirilir.' },
      { step: 2, title: 'Cam Seçimi', desc: '4+16+4 veya 4+12+4 argon dolgulu seçenekler sunulur.' },
      { step: 3, title: 'Üretim', desc: 'EN 1279 belgeli cam birimi ile özel üretim yapılır.' },
      { step: 4, title: 'Montaj & Test', desc: 'Sızdırmazlık testi yapılarak teslim edilir.' },
    ],
    faq: [
      {
        question: 'Isıcamlı cam balkon {ilce}\'de m2 fiyatı standarda göre ne kadar farklı?',
        answer: 'Isıcamlı cam balkon m2 fiyatı, çift cam ve argon gazı dolgusu kullanımı nedeniyle standart sisteme göre %20-35 daha yüksektir. Ancak sağladığı ısı yalıtımı sayesinde enerji faturalarında 3-5 yıl içinde bu fark karşılanır. Ücretsiz keşif sırasında size özel m2 fiyatı ve geri ödeme süresi hesaplaması sunuyoruz.',
      },
      {
        question: 'Garanti ve teslimat süresi nasıl işliyor?',
        answer: 'Isıcamlı sistemlerimiz EN 1279 belgeli cam birimleriyle üretilir ve 2 yıl garanti kapsamındadır. Ücretsiz keşif sonrası üretim 10-15 iş günü sürer; montaj ve sızdırmazlık testi 1 günde tamamlanır.',
      },
      {
        question: 'Mevcut cam balkonumu ısıcamlıya dönüştürebilir miyim?',
        answer: 'Profil derinliği uygunsa sadece cam paneller değiştirilerek ısıcamlı sisteme geçiş yapılabilir. Bu durum ücretsiz keşif sırasında profilinizin teknik uygunluğu değerlendirilerek netleştirilir.',
      },
      {
        question: 'Isı yalıtımı ne kadar fark yaratır, Low-E kaplama zorunlu mu?',
        answer: 'Isıcamlı sistemler poliamid barriyerli profil ve argon gazlı çift cam sayesinde standart cama göre ısı kaybını belirgin şekilde azaltır ve yoğuşmayı önler. Low-E kaplama zorunlu değildir; ancak UV koruması ve ek ısı tasarrufu isteyenler için öneriyoruz.',
      },
    ],
    relatedServiceSlugs: ['katlanir-cam-balkon', 'surgulu-cam-balkon', 'kis-bahcesi-sistemleri'],
    lsiKeywords: ['çift cam balkon', 'ısı yalıtımlı cam balkon', 'argon gazlı cam', 'low-e cam balkon', 'enerji tasarruflu balkon'],
  },

  // ── 4. SÜRGÜLÜ CAM BALKON ─────────────────────────────────────────────────
  {
    slug: 'surgulu-cam-balkon',
    name: 'Sürgülü Cam Balkon',
    shortName: 'Sürgülü Cam Balkon',
    metaTitleTemplate: '{ilce} Sürgülü Cam Balkon | Dar Balkon Çözümü',
    metaDescTemplate:
      '{ilce} sürgülü cam balkon sistemleri. Dar ve küçük balkanlara ideal kompakt çözüm. Paslanmaz rulman, ince profil. Teklif alın.',
    h1Template: '{ilce} Sürgülü Cam Balkon Sistemleri',
    introTemplate:
      'Sürgülü cam balkon sistemleri, cam panellerin ray üzerinde yatay kaymasıyla çalışır. {ilce} projelerimizde paneller açıldığında üst üste paketlenerek minimum alan kaplar; bu yapı dar veya küçük balkanlarda katlanır sisteme göre büyük avantaj sağlar. 304 paslanmaz çelik rulman arabacıkları sayesinde ağır cam paneller tek parmakla kolayca hareket ettirilebilir.',
    advantages: [
      { icon: '📏', title: 'Kompakt Paketleme', desc: 'Açıldığında paneller üst üste yığılır; dar balkonda ideal.' },
      { icon: '⚙️', title: 'Pürüzsüz Hareket', desc: 'INOX 304 rulman arabası ağır camları kolayca kaydırır.' },
      { icon: '🪟', title: 'İnce Profil', desc: 'Min. 25 mm profil genişliği maksimum cam yüzeyi sağlar.' },
      { icon: '🔒', title: 'Güvenli Kilit', desc: 'Çok noktalı kilit yetkisiz girişe karşı güvenlik sağlar.' },
    ],
    processSteps: [
      { step: 1, title: 'Keşif', desc: 'Mevcut korkuluğa uygunluk ve ölçü değerlendirilir.' },
      { step: 2, title: 'Ray Sistemi Seçimi', desc: 'Tek veya çift kanat ray konfigürasyonu belirlenir.' },
      { step: 3, title: 'Üretim', desc: 'Özel ölçüde üretim 7-14 iş günü sürer.' },
      { step: 4, title: 'Montaj', desc: 'Mevcut korkuluğa yapı değişikliği gerekmeden montaj yapılır.' },
    ],
    faq: [
      {
        question: 'Sürgülü cam balkon {ilce}\'de m2 fiyatı ve garanti süresi nedir?',
        answer: 'Sürgülü cam balkon m2 fiyatı, profil genişliği ve cam kalınlığına göre değişir; ücretsiz keşif sonrası net m2 fiyatını yazılı teklif olarak sunuyoruz. Sistemlerimiz 2 yıl malzeme ve işçilik garantisi ile teslim edilir, rulman ve ray mekanizmasında oluşabilecek sorunlar garanti kapsamında ücretsiz giderilir.',
      },
      {
        question: 'Sürgülü cam balkon {ilce}\'de dar balkona uygun mu?',
        answer: 'Evet. Sürgülü sistemde paneller açıldığında üst üste paketlenir ve minimum yer kaplar; dar balkonlar için idealdir. Ücretsiz keşif sırasında balkon genişliğinize en uygun panel konfigürasyonunu öneririz.',
      },
      {
        question: 'Teslimat süresi ve montaj nasıl ilerliyor?',
        answer: 'Ölçüm sonrası özel ölçüde üretim 7-14 iş günü sürer. Montaj ekibimiz mevcut korkuluğunuza yapı değişikliği gerekmeden, genellikle 1 gün içinde sistemi monte eder ve teslim eder.',
      },
      {
        question: 'Sürgülü sistem yağmurda sızdırır mı, ısı yalıtımı var mı?',
        answer: 'Normal yağmurda sızdırmazlığını korur; çok şiddetli yağış ve rüzgarda paneller arasından hafif sızdırma olabilir, bu sürgülü sistemlerin genel özelliğidir. Isı yalıtımı önceliğiniz ise ısıcamlı cam seçeneğiyle birleştirilebilir.',
      },
      {
        question: 'Mevcut korkuluğa montaj yapılabilir mi?',
        answer: 'Evet, beton veya demir korkuluğa ek mesnetlerle montaj yapılabilir; bu durum keşif sırasında yapısal olarak değerlendirilir.',
      },
    ],
    relatedServiceSlugs: ['katlanir-cam-balkon', 'cam-balkon-fiyatlari', 'isicamli-cam-balkon'],
    lsiKeywords: ['sürme cam balkon', 'kayar cam balkon', 'dar balkon cam sistemi', 'balkon kapatma sürme'],
  },

  // ── 5. KIŞ BAHÇESİ SİSTEMLERİ ────────────────────────────────────────────
  {
    slug: 'kis-bahcesi-sistemleri',
    name: 'Kış Bahçesi Sistemleri',
    shortName: 'Kış Bahçesi',
    metaTitleTemplate: '{ilce} Kış Bahçesi Sistemleri | Teras & Villa Çözümleri',
    metaDescTemplate:
      '{ilce} kış bahçesi sistemleri. Alüminyum strüktür ve ısıcamlı cam ile dört mevsim yaşam alanı. Proje ve teklif için arayın.',
    h1Template: '{ilce} Kış Bahçesi Sistemleri',
    introTemplate:
      'Kış bahçesi sistemleri; teras, balkon veya bahçenizi dört mevsim kullanılabilir, cam duvarlı ve alüminyum strüktürlü bir yaşam alanına dönüştürür. {ilce} projelerimizde özel mimari tasarım, statik hesap ve ruhsat danışmanlığını kapsayan eksiksiz hizmet paketi sunuyoruz. Isıcamlı çift cam kışın enerji maliyetini minimize ederken solar cam yazın aşırı ısınmayı önler.',
    advantages: [
      { icon: '🌿', title: 'Özel Proje', desc: '3D tasarım ve statik hesap dahil tam proje desteği.' },
      { icon: '❄️', title: '4 Mevsim Konfor', desc: 'Isıcamlı sistem ve klima entegrasyonuyla yıl boyu kullanım.' },
      { icon: '☀️', title: 'Güneş Kontrolü', desc: 'Solar cam veya motorlu güneş kırıcı perde ile aşırı ısınma önlenir.' },
      { icon: '🏠', title: 'Değer Artışı', desc: 'Nitelikli kış bahçesi mülk değerini önemli ölçüde artırır.' },
    ],
    processSteps: [
      { step: 1, title: 'Ön Görüşme', desc: 'İhtiyaç ve beklentileriniz belirlenir.' },
      { step: 2, title: 'Proje Tasarımı', desc: '3D tasarım ve statik hesap hazırlanır.' },
      { step: 3, title: 'Ruhsat Danışmanlığı', desc: 'Belediye süreçlerinde yol gösterilir.' },
      { step: 4, title: 'İmalat & Montaj', desc: 'Profesyonel ekiple kurulum tamamlanır.' },
      { step: 5, title: 'Teslim', desc: 'Sistem test edilerek garanti belgesiyle teslim edilir.' },
    ],
    faq: [
      {
        question: 'Kış bahçesi {ilce}\'de m2 fiyatı nasıl hesaplanır?',
        answer: 'Kış bahçesi m2 fiyatı; alüminyum strüktür büyüklüğü, cam tipi (ısıcamlı/solar), statik hesap gereksinimi ve özel tasarım detaylarına göre hesaplanır. Ücretsiz keşif ve ön görüşme sonrası, projenize özel detaylı m2 fiyatı ve toplam maliyet teklifi sunuyoruz.',
      },
      {
        question: 'Garanti kapsamı ve teslimat süresi nedir?',
        answer: 'Kış bahçesi projelerimiz 2 yıl yapısal ve işçilik garantisi ile teslim edilir. Tasarım onayından sonra imalat ve montaj süreci proje büyüklüğüne göre 6-12 hafta arasında tamamlanır; ruhsatlı projelerde teslimat süresi belediye sürecine bağlı olarak uzayabilir.',
      },
      {
        question: '{ilce}\'de kış bahçesi için ruhsat gerekir mi?',
        answer: 'Kalıcı ek yapı sayıldığından çoğu belediyede ruhsat gerekir. İmar durumuna göre değişir; proje danışmanlığı kapsamında yol gösteriyoruz ve gerekli evrak sürecinde sizinle birlikte çalışıyoruz.',
      },
      {
        question: 'Kış bahçesinin ısı yalıtımı ve yazın ısınma sorunu nasıl çözülür?',
        answer: 'Isıcamlı çift cam kullanımı kışın ısı yalıtımını sağlayarak enerji maliyetini minimize eder. Yazın aşırı ısınmayı önlemek için solar cam veya motorlu güneş kırıcı perde ile konfor sıcaklığı korunur; inverter klima entegrasyonuyla tam kontrol sağlanabilir.',
      },
    ],
    relatedServiceSlugs: ['isicamli-cam-balkon', 'cam-balkon-fiyatlari'],
    lsiKeywords: ['cam kış bahçesi', 'teras kapatma', 'villa kış bahçesi', 'cam ev eki', 'alüminyum kış bahçesi'],
  },

  // ── 6. SİNEKLİK FİYATLARI ────────────────────────────────────────────────
  {
    slug: 'sineklik-fiyatlari',
    name: 'Sineklik Fiyatları',
    shortName: 'Sineklik',
    metaTitleTemplate: '{ilce} Sineklik Fiyatları 2025 | Pileli & Sürme Modeller',
    metaDescTemplate:
      '{ilce} sineklik fiyatları için ücretsiz ölçüm alın. Pileli, sürme, kedi sinekliği tüm modeller. Alüminyum çerçeve, yırtılmaz tül.',
    h1Template: '{ilce} Sineklik Fiyatları',
    introTemplate:
      'Sineklik fiyatları; model tipine (pileli, sürme, sabit, kedi sinekliği), pencere boyutuna ve tül kalitesine göre değişir. {ilce} projelerimizde ücretsiz ölçüm hizmetiyle her pencere ve kapı tipine uygun sineklik sistemi seçimi yapıyoruz. Alüminyum çerçeve ve yırtılmaz fiberglas tül kombinasyonu dayanıklılığı artırır.',
    advantages: [
      { icon: '🦟', title: 'Tam Böcek Engeli', desc: 'Sinek, sivrisinek ve böceklere karşı tam koruma; havalandırmadan taviz yok.' },
      { icon: '👁️', title: 'Görünmez Tül', desc: 'İnce fiberglas tül neredeyse görünmez; estetik bozulmaz.' },
      { icon: '💪', title: 'Yırtılmaz Model', desc: 'Çocuk ve evcil hayvan dostu güçlendirilmiş tül seçeneği.' },
      { icon: '🔧', title: 'Kolay Montaj', desc: 'Çoğu pencerede vida gerektirmeyen klipsli montaj.' },
    ],
    processSteps: [
      { step: 1, title: 'Ücretsiz Ölçüm', desc: 'Tüm pencere ve kapılarınız tek ziyarette ölçülür.' },
      { step: 2, title: 'Model Seçimi', desc: 'Pencere tipinize göre en uygun model önerilir.' },
      { step: 3, title: 'Üretim', desc: 'Özel ölçüde 3-7 iş günü üretim süresi.' },
      { step: 4, title: 'Montaj', desc: 'Hızlı ve temiz montaj; günlük program.' },
    ],
    faq: [
      {
        question: '{ilce}\'de sineklik m2 fiyatı ne kadar?',
        answer: 'Sineklik m2 fiyatı model tipine (pileli, sürme, sabit, kedi sinekliği), pencere boyutuna ve tül kalitesine göre değişir. Doğru m2 fiyatını öğrenmek için ücretsiz ölçüm hizmetimizden yararlanabilirsiniz; ekibimiz tüm pencere ve kapılarınızı tek ziyarette ölçer ve yazılı teklif sunar.',
      },
      {
        question: 'Garanti süresi ve teslimat süresi nedir?',
        answer: 'Sineklik sistemlerimiz 2 yıl malzeme ve işçilik garantisi ile teslim edilir. Ücretsiz ölçüm sonrası özel ölçüde üretim 3-7 iş günü sürer; montaj ise hızlı ve temiz şekilde aynı gün içinde tamamlanır.',
      },
      {
        question: 'Pileli mi sürme mi tercih edilmeli?',
        answer: 'Pileli sistem pencereyle görsel bütünlük sağlar; sürme sistem geniş açıklıklar ve kapılar için daha sağlamdır. Hangi modelin sizin pencere tipinize uygun olduğunu ücretsiz ölçüm sırasında birlikte değerlendiriyoruz.',
      },
      {
        question: 'Sineklik ısı yalıtımını etkiler mi, montaj nasıl yapılır?',
        answer: 'Sineklik sistemleri ısı yalıtımını doğrudan etkilemez; sadece böcek ve toz girişini önler, pencerenizin yalıtım performansı değişmez. Montaj çoğu pencerede vida gerektirmeyen klipsli sistemle yapılır ve çerçeveye kalıcı zarar vermez.',
      },
      {
        question: 'Kedi için özel sineklik var mı?',
        answer: 'Evet. Güçlendirilmiş çerçeve ve yırtılmaz polipropilen tülle üretilen kedi sinekliği modelimiz mevcuttur ve standart sinekliğe yakın bir fiyatla sunulur.',
      },
    ],
    relatedServiceSlugs: ['pileli-sineklik', 'kedi-sinekligi', 'surgulu-kapi-sinekligi'],
    lsiKeywords: ['sineklik modelleri', 'pencere sineklik', 'sineklik sistemi', 'sineklik montaj', 'pileli sineklik fiyat'],
  },

  // ── 7. PİLELİ SİNEKLİK ───────────────────────────────────────────────────
  {
    slug: 'pileli-sineklik',
    name: 'Pileli Sineklik',
    shortName: 'Pileli Sineklik',
    metaTitleTemplate: '{ilce} Pileli Sineklik | Akordiyon Sistem Fiyat & Montaj',
    metaDescTemplate:
      '{ilce} pileli (akordiyon) sineklik sistemleri. Çerçeveye entegre estetik görünüm, tek elle açılıp kapanır. Özel ölçü. Ücretsiz ölçüm.',
    h1Template: '{ilce} Pileli Sineklik Sistemleri',
    introTemplate:
      'Pileli sineklik, tülün harmonika biçiminde katlanarak çerçevenin yanına toplanmasıyla çalışır. {ilce} projelerimizde pencereyle tam görsel bütünlük sağlayan bu sistem, açıldığında tül neredeyse görünmez hale gelir. Tek veya çift kanatlı seçeneklerle her pencere genişliğine ve terasa açılan kapılara uyarlanabilir.',
    advantages: [
      { icon: '✨', title: 'Görsel Bütünlük', desc: 'Tül pencereyle bütünleşik görünür; kafes etkisi yoktur.' },
      { icon: '👆', title: 'Pratik Kullanım', desc: 'Tek elle açılıp kapanır; çocuklar bile kullanabilir.' },
      { icon: '🚪', title: 'Çift Kanat', desc: 'Geniş açıklıklar ve kapılar için çift kanatlı model.' },
      { icon: '📐', title: 'Özel Ölçü', desc: 'Her pencere boyutuna özelleştirilebilir üretim.' },
    ],
    processSteps: [
      { step: 1, title: 'Ölçüm', desc: 'Her pencere ve kapı ölçüsü tek ziyarette alınır.' },
      { step: 2, title: 'Kanat Seçimi', desc: 'Tek veya çift kanatlı sistem belirlenir.' },
      { step: 3, title: 'Üretim', desc: '3-5 iş günü özel üretim.' },
      { step: 4, title: 'Montaj', desc: 'Klipsli veya vidalı montaj; temiz ve hızlı.' },
    ],
    faq: [
      {
        question: 'Pileli sineklik {ilce}\'de m2 fiyatı ve garanti süresi nedir?',
        answer: 'Pileli sineklik m2 fiyatı pencere genişliğine ve tek/çift kanat seçimine göre değişir. Ücretsiz ölçüm sonrası net fiyatı yazılı teklif olarak sunuyoruz. Sistemlerimiz 2 yıl garanti kapsamındadır; mekanizma veya tülde oluşabilecek sorunlar garanti süresinde ücretsiz giderilir.',
      },
      {
        question: 'Teslimat süresi ne kadar, montaj nasıl yapılır?',
        answer: 'Ölçüm alındıktan sonra özel üretim 3-5 iş günü sürer. Montaj klipsli veya vidalı yöntemle yapılır; temiz ve hızlı bir uygulamayla genellikle aynı gün tamamlanır.',
      },
      {
        question: 'Pileli sineklik {ilce}\'de rüzgarda tülü kaldırır mı?',
        answer: 'Alt mıknatıslı veya ağırlıklı profil seçeneğiyle rüzgarda tülün kalkması önlenir. Bu seçeneği sipariş sırasında belirtebilirsiniz; ücretsiz ölçüm aşamasında balkonunuzun rüzgar koşuluna göre öneride bulunuyoruz.',
      },
      {
        question: 'Çift kanatlı pileli sistem kapıya uygulanabilir mi?',
        answer: 'Evet. Çift kanatlı model terasa veya balkona açılan kapılara uygulanabilir; her iki kanat ortada buluşur ve geniş açıklıklarda da sağlam bir kapatma sağlar.',
      },
      {
        question: 'Tül yırtılırsa sadece tülü değiştirebilir miyim?',
        answer: 'Evet. Çoğu modelde çerçeveye dokunmadan sadece tül değişimi yapılabilir, bu da ek montaj maliyetini ortadan kaldırır.',
      },
    ],
    relatedServiceSlugs: ['sineklik-fiyatlari', 'kedi-sinekligi', 'surgulu-kapi-sinekligi'],
    lsiKeywords: ['akordiyon sineklik', 'harmonika sineklik', 'katlanan sineklik', 'pileli perde sineklik'],
  },

  // ── 8. KEDİ SİNEKLİĞİ ────────────────────────────────────────────────────
  {
    slug: 'kedi-sinekligi',
    name: 'Kedi Sinekliği',
    shortName: 'Kedi Sinekliği',
    metaTitleTemplate: '{ilce} Kedi Sinekliği | Yırtılmaz & Güçlü Sineklik',
    metaDescTemplate:
      '{ilce} kedi sinekliği sistemleri. Güçlendirilmiş polipropilen tül ve sağlam çerçeve; kediler tülü yırtamaz. Ücretsiz ölçüm.',
    h1Template: '{ilce} Kedi Sinekliği Sistemleri',
    introTemplate:
      'Kedi sinekliği, standart fiberglas tülden çok daha dayanıklı polipropilen veya özel güçlendirilmiş tüllerle üretilir. {ilce} projelerimizde kedi pençesine dayanıklı, çerçeve bağlantısı güçlendirilmiş sistemler kuruyoruz. Hem kedinin güvenliğini hem de böcek korumasını birlikte sağlar.',
    advantages: [
      { icon: '🐱', title: 'Kedi Güvenliği', desc: 'Güçlendirilmiş tül ve çerçeve kedinin düşme riskini önler.' },
      { icon: '💪', title: 'Yırtılmaz Tül', desc: 'Polipropilen tül kedi pençesine karşı dayanıklıdır.' },
      { icon: '🔩', title: 'Güçlü Bağlantı', desc: 'Ekstra güçlendirilmiş çerçeve bağlantı noktaları.' },
      { icon: '🦟', title: 'Böcek Koruması', desc: 'Hem kedi güvenliği hem de böcek bariyeri bir arada.' },
    ],
    processSteps: [
      { step: 1, title: 'Keşif', desc: 'Pencere tipi ve kedi aktivitesi değerlendirilir.' },
      { step: 2, title: 'Tül Seçimi', desc: 'Kedi ağırlığına ve aktivitesine göre tül önerilir.' },
      { step: 3, title: 'Üretim', desc: 'Güçlendirilmiş çerçeve ve özel tül ile üretim.' },
      { step: 4, title: 'Montaj', desc: 'Sağlam bağlantılı montaj; çerçeve testi yapılır.' },
    ],
    faq: [
      {
        question: 'Kedi sinekliği {ilce}\'de m2 fiyatı ve garanti süresi nedir?',
        answer: 'Kedi sinekliği m2 fiyatı, standart sinekliğe yakın bir aralıkta olup güçlendirilmiş çerçeve ve özel tül kullanımı nedeniyle hafif farklılık gösterebilir. Ücretsiz ölçüm sonrası net fiyat sunuyoruz. Sistemlerimiz 2 yıl garantilidir; çerçeve bağlantısı veya tülde oluşabilecek sorunlar garanti kapsamında ücretsiz giderilir.',
      },
      {
        question: 'Teslimat süresi ve montaj nasıl ilerliyor?',
        answer: 'Ölçüm ve kedi aktivite değerlendirmesi sonrası üretim 3-7 iş günü sürer. Montaj sağlam bağlantı noktalarıyla yapılır ve çerçeve testi yapıldıktan sonra teslim edilir; genellikle aynı gün tamamlanır.',
      },
      {
        question: 'Kedi sinekliği {ilce}\'de standart sineklikten farklı mı?',
        answer: 'Evet. Çerçeve profili daha güçlü, tül ise polipropilen veya özel güçlendirilmiş fiberglas türündedir. Kedi pençesine dayanıklıdır ve aynı zamanda standart sineklik gibi böcek koruması da sağlar.',
      },
      {
        question: 'Büyük ve güçlü kediler için de uygun mu?',
        answer: 'Evet. Büyük kediler için ekstra güçlendirilmiş çerçeve bağlantı seçeneği sunuyoruz; ücretsiz ölçüm sırasında kedinizin büyüklüğüne göre en uygun tül ve çerçeve kombinasyonunu öneriyoruz.',
      },
      {
        question: 'Kedi sinekliği tüm pencere tiplerine uygulanabilir mi?',
        answer: 'Evet, içe açılan, dışa açılan ve sürme pencereler dahil tüm tiplere özel üretim yapılabilir.',
      },
    ],
    relatedServiceSlugs: ['sineklik-fiyatlari', 'pileli-sineklik', 'surgulu-kapi-sinekligi'],
    lsiKeywords: ['kedi kafesi pencere', 'kedi güvenlik sinekliği', 'kedi düşme önleyici', 'evcil hayvan sinekliği'],
  },

  // ── 9. SÜRGÜLÜ KAPI SİNEKLİĞİ ────────────────────────────────────────────
  {
    slug: 'surgulu-kapi-sinekligi',
    name: 'Sürgülü Kapı Sinekliği',
    shortName: 'Kapı Sinekliği',
    metaTitleTemplate: '{ilce} Sürgülü Kapı Sinekliği | Balkon Kapısı Çözümü',
    metaDescTemplate:
      '{ilce} sürgülü kapı sinekliği sistemleri. Balkon ve teras kapıları için ray üzerinde kayan, sağlam kapı sinekliği. Özel ölçü.',
    h1Template: '{ilce} Sürgülü Kapı Sinekliği Sistemleri',
    introTemplate:
      'Sürgülü kapı sinekliği, ray üzerinde kayan yapısıyla balkon, teras ve bahçe kapılarında kullanılan sağlam ve pratik bir çözümdür. {ilce} projelerimizde kapı genişliğine özel üretilen bu sistem, günlük yoğun kullanıma dayanıklı INOX 304 rulman arabacıklarıyla donatılmaktadır. Süpürge lastiği ile zemine kadar tam kapatan modeller de mevcuttur.',
    advantages: [
      { icon: '🚪', title: 'Kapıya Özel', desc: 'Balkon ve teras kapıları için ideal ray üzerinde kayan sistem.' },
      { icon: '⚙️', title: 'Sağlam Mekanik', desc: 'INOX 304 rulman arabası yoğun kullanıma dayanır.' },
      { icon: '🧹', title: 'Süpürge Lastiği', desc: 'Zemine kadar kapatan model; böcek girişini tamamen engeller.' },
      { icon: '📐', title: 'Özel Ölçü', desc: 'Her kapı genişliği ve yüksekliğine uyarlanabilir.' },
    ],
    processSteps: [
      { step: 1, title: 'Ölçüm', desc: 'Kapı açıklığı ve mevcut ray uygunluğu değerlendirilir.' },
      { step: 2, title: 'Model Seçimi', desc: 'Süpürge lastikli veya standart model seçilir.' },
      { step: 3, title: 'Üretim', desc: '3-7 iş günü özel üretim süresi.' },
      { step: 4, title: 'Montaj', desc: 'Kapı kasasına ray montajı ve sinekliğin takılması.' },
    ],
    faq: [
      {
        question: 'Sürgülü kapı sinekliği {ilce}\'de m2 fiyatı ve garanti nedir?',
        answer: 'Sürgülü kapı sinekliği fiyatı kapı genişliği, yüksekliği ve süpürge lastiği gibi ek seçeneklere göre değişir. Ücretsiz ölçüm sonrası net fiyatı yazılı teklif olarak sunuyoruz. Sistemlerimiz 2 yıl garantilidir; ray ve rulman mekanizmasında oluşabilecek sorunlar garanti kapsamında ücretsiz giderilir.',
      },
      {
        question: 'Teslimat süresi ve montaj süreci nasıl işliyor?',
        answer: 'Ölçüm ve ray uygunluğu değerlendirmesi sonrası özel üretim 3-7 iş günü sürer. Montaj kapı kasasına ray takılması ve sinekliğin yerleştirilmesiyle genellikle aynı gün içinde tamamlanır.',
      },
      {
        question: 'Sürgülü kapı sinekliği {ilce}\'de mevcut balkon kapısına takılabilir mi?',
        answer: 'Evet. Mevcut kapı kasasına uygun ray sistemi monte edilerek uygulanır; ücretsiz keşif sırasında kapınızın ray uygunluğu değerlendirilir.',
      },
      {
        question: 'Kapı sinekliği rüzgarda yerinden çıkar mı, ısı yalıtımına etkisi var mı?',
        answer: 'Raylar güvenlik dişleriyle donatılmıştır; normal rüzgar koşullarında yerinden çıkma riski yoktur. Sineklik ısı yalıtımını değiştirmez, sadece böcek girişini önler; süpürge lastikli modeller zeminden gelen hava akımını da büyük ölçüde keser.',
      },
      {
        question: 'Çift kanatlı kapı için uygulanabilir mi?',
        answer: 'Evet, çift kanatlı kapılar için iki parçalı sürgülü sistem mevcuttur ve her iki kanat bağımsız olarak hareket eder.',
      },
    ],
    relatedServiceSlugs: ['sineklik-fiyatlari', 'pileli-sineklik', 'kedi-sinekligi'],
    lsiKeywords: ['kapı sinekliği', 'balkon kapısı sineklik', 'sürme kapı sinekliği', 'teras kapı sinekliği'],
  },

  // ── 10. EN YAKIN CAM BALKONCU ─────────────────────────────────────────────
  {
    slug: 'en-yakin-cam-balkoncu',
    name: 'En Yakın Cam Balkoncu',
    shortName: 'Cam Balkoncu',
    metaTitleTemplate: '{ilce} En Yakın Cam Balkoncu | Hızlı Keşif & Montaj',
    metaDescTemplate:
      '{ilce}\'nin en yakın cam balkon ustası arıyorsanız doğru adrestesiniz. Aynı gün keşif, hızlı montaj. Hemen arayın.',
    h1Template: '{ilce}\'de En Yakın Cam Balkoncu',
    introTemplate:
      '{ilce} ve çevre ilçelerde cam balkon, sineklik ve alüminyum doğrama alanında hızlı hizmet sunuyoruz. "En yakın cam balkoncu" aramasıyla bizi bulduysanız doğru adrestesiniz: ücretsiz keşif randevusu alarak aynı gün veya ertesi gün adresinizde oluyoruz. {ilce} bölgesindeki tamamladığımız projelerimizi referans olarak gösterebiliriz.',
    advantages: [
      { icon: '📍', title: 'Bölgeye Yakın', desc: 'Anadolu Yakası\'nın tüm ilçelerinde hızlı keşif ekibi.' },
      { icon: '⚡', title: 'Aynı Gün Keşif', desc: 'Sabah arayın, akşama kadar keşif randevusu alın.' },
      { icon: '📋', title: 'Referans Projeler', desc: 'Bölgedeki tamamlanmış projelerimizi görebilirsiniz.' },
      { icon: '🤝', title: 'Yerel Güven', desc: '10+ yıllık deneyim ve yüzlerce mutlu müşteri.' },
    ],
    processSteps: [
      { step: 1, title: 'Hemen Arayın', desc: 'Telefon veya WhatsApp ile iletişime geçin.' },
      { step: 2, title: 'Aynı Gün Keşif', desc: 'Ekibimiz en kısa sürede adresinizde.' },
      { step: 3, title: 'Yerinde Teklif', desc: 'Ölçüm alınır, yazılı teklif sunulur.' },
      { step: 4, title: 'Hızlı Montaj', desc: 'Onay sonrası en kısa sürede montaj programlanır.' },
    ],
    faq: [
      {
        question: '{ilce}\'de cam balkon m2 fiyatı ve garanti süresi nedir?',
        answer: 'Cam balkon m2 fiyatı sistem tipi, cam kalınlığı ve balkon ölçüsüne göre değişir. Aynı gün keşif randevusu alarak yerinde net m2 fiyatını öğrenebilirsiniz. Tüm uygulamalarımız 2 yıl malzeme ve işçilik garantisi kapsamındadır.',
      },
      {
        question: '{ilce}\'de cam balkon montajı için ne kadar beklerim?',
        answer: 'Keşif randevusu genellikle 1-2 gün içinde, çoğu zaman aynı gün ayarlanır. Ölçüm sonrası üretim 7-14 iş günü, montaj ise onay sonrası standart bir balkon için 1 iş günüdür; toplam teslimat süresi yaklaşık 2-3 hafta arasındadır.',
      },
      {
        question: 'Aynı gün keşif ve ücretsiz ölçüm mümkün mü?',
        answer: 'Evet. Sabah saatlerinde arandığınızda genellikle aynı gün ücretsiz keşif randevusu ayarlayabiliyoruz. Keşifte balkon ölçünüz alınır, sistem seçenekleri anlatılır ve yazılı teklif sunulur.',
      },
      {
        question: '{ilce} dışından da hizmet veriyor musunuz?',
        answer: 'Tüm Anadolu Yakası ilçelerinde hizmet veriyoruz. Avrupa Yakası için de bizimle iletişime geçerek montaj ve keşif uygunluğunu sorabilirsiniz.',
      },
    ],
    relatedServiceSlugs: ['cam-balkon-fiyatlari', 'katlanir-cam-balkon', 'sineklik-fiyatlari'],
    lsiKeywords: ['yakınımdaki cam balkoncu', 'cam balkon ustası', 'cam balkon firması', 'cam balkon servisi'],
  },
];

// ── NOT: MOCK BLOG VERİSİ KALDIRILDI ──────────────────────────────────────────
// Bloglar artık src/lib/blog.ts içindeki gerçek `allBlogPosts` verisinden
// okunuyor. Eşleştirme mantığı (hizmetle alakalı blogları bulma) artık
// DinamikSeoSayfasi.tsx içinde, service.name / service.shortName /
// service.lsiKeywords ile blog.title / blog.category karşılaştırılarak yapılıyor.
// Aşağıdaki Review (Google yorumları) verisi mock olarak kalmaya devam ediyor,
// çünkü gerçek bir review kaynağı belirtilmedi.

// ── GOOGLE YORUMLARI (MOCK) ───────────────────────────────────────────────────

export const reviews: Review[] = [
  {
    name: 'Ayşe K.',
    location: 'Kadıköy',
    rating: 5,
    text: 'Katlanır cam balkon sistemini çok beğendik. Montaj ekibi son derece profesyoneldi, tek gün içinde bitti. Fiyat/kalite dengesi mükemmel.',
    date: '2 hafta önce',
  },
  {
    name: 'Murat D.',
    location: 'Ataşehir',
    rating: 5,
    text: 'Isıcamlı cam balkon yaptırdık, kış aylarında gerçekten fark yarattı. Enerji tasarrufu hissedilir düzeyde. Kesinlikle tavsiye ederim.',
    date: '1 ay önce',
  },
  {
    name: 'Fatma Ş.',
    location: 'Üsküdar',
    rating: 5,
    text: 'Tüm pencerelere pileli sineklik yaptırdım. Hem estetik hem pratik. Akordiyon kapanması çok güzel duruyor. Hızlı ve temiz iş.',
    date: '3 hafta önce',
  },
  {
    name: 'Hasan B.',
    location: 'Maltepe',
    rating: 5,
    text: 'Keşif randevusunu hemen verdiler, fiyat teklifi çok şeffaftı. Cam balkon ve sineklik birlikte yaptırdım. Her ikisinden de çok memnunum.',
    date: '5 gün önce',
  },
  {
    name: 'Zeynep A.',
    location: 'Pendik',
    rating: 5,
    text: 'Kedilerim için özel sineklik istedim, harika çözdüler. Artık camları açık bırakabiliyorum kedileri düşme korkusu olmadan. Süper!',
    date: '2 ay önce',
  },
  {
    name: 'Emre T.',
    location: 'Kartal',
    rating: 5,
    text: 'Sürgülü cam balkon için geldiler, dar balkonuma mükemmel çözüm ürettiler. Profil kalitesi ve cam kalınlığı hakkında detaylı bilgi verdiler.',
    date: '1 ay önce',
  },
  {
    name: 'Selin Y.',
    location: 'Ümraniye',
    rating: 5,
    text: 'Kapı sinekliğini hem estetik hem sağlam buldum. Montaj ekibi sabah geldi, öğlene bitmişti. Temizlik de yaptılar. Teşekkürler!',
    date: '3 ay önce',
  },
];

// ── YARDIMCI FONKSİYONLAR ─────────────────────────────────────────────────────

/** Slug'a göre ilçe objesini döner */
export function getDistrictBySlug(slug: string): District | undefined {
  return districts.find((d) => d.slug === slug);
}

/** Slug'a göre hizmet objesini döner */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/**
 * Hizmetle alakalı gerçek blog yazılarını bulur.
 * Eşleştirme: service.name / service.shortName / service.lsiKeywords
 * ile blog.title / blog.category / blog.description arasında basit
 * anahtar kelime kontrolü yapılır (büyük/küçük harf duyarsız).
 *
 * NOT: Bu fonksiyon generic'tir çünkü gerçek BlogPost tipi
 * src/lib/blog.ts içinde tanımlı; burada import etmeye gerek kalmaz
 * ve döngüsel bağımlılık oluşmaz. Çağıran taraf (DinamikSeoSayfasi.tsx)
 * allBlogPosts dizisini buraya parametre olarak geçirir.
 *
 * "Blog bulunamadı" durumu YOKTUR: alakalı blog bulunamazsa veya
 * sayısı azsa, en yeni bloglarla otomatik tamamlanır. Eğer havuzda
 * hiç blog yoksa (boş dizi), boş dizi döner — component bu durumda
 * blog bölümünü hiç render etmemelidir.
 */
export function getRelatedBlogs<T extends { title: string; description?: string; category?: string; date: string }>(
  allPosts: T[],
  service: Service,
  max = 6
): T[] {
  if (allPosts.length === 0) return [];

  const keywords = [service.name, service.shortName, ...service.lsiKeywords].map((k) =>
    k.toLocaleLowerCase('tr-TR')
  );

  const matchesService = (post: T) => {
    const haystack = `${post.title} ${post.description ?? ''} ${post.category ?? ''}`.toLocaleLowerCase('tr-TR');
    return keywords.some((kw) => haystack.includes(kw));
  };

  const specific = allPosts.filter(matchesService);
  if (specific.length >= max) return specific.slice(0, max);

  // Yetmiyorsa en yeni bloglarla tamamla (zaten seçilenleri tekrar eklemeden)
  const specificSlugs = new Set(specific.map((p) => (p as unknown as { slug?: string }).slug));
  const others = allPosts
    .filter((p) => !specificSlugs.has((p as unknown as { slug?: string }).slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return [...specific, ...others].slice(0, max);
}

/** Placeholder'ları ilçe adıyla değiştirir */
export function fillTemplate(template: string, districtName: string): string {
  return template.replace(/\{ilce\}/g, districtName);
}