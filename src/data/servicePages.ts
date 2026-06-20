// ─────────────────────────────────────────────────────────────────────────────
// src/data/servicePages.ts
//
// Tüm hizmet kategorilerinin merkezi veri dosyası.
// SEO Optimizasyonlu Gelişmiş Sürüm (Lokasyon ve Anahtar Kelime Odaklı)
// ─────────────────────────────────────────────────────────────────────────────

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServicePageData {
  id: string;              
  name: string;            
  desc: string;            
  image: string;           
  title: string;           
  metaDescription: string; 
  ogImage: string;         
  h1: string;              
  tagline: string;         
  intro: string;           
  benefits: { title: string; desc: string }[];
  benefits_custom?: any[]; // <-- Bu satırı eklersen TypeScript artık kızmaz
  specs: string[];
  faq: FAQ[];
  relatedIds: string[];    
}

export const servicePages: ServicePageData[] = [

  // ── 1. ALÜMİNYUM DOĞRAMA ─────────────────────────────────────────────────
  {
    id: 'aluminyum-dograma',
    name: 'Alüminyum Doğrama',
    desc: 'İstanbul Anadolu Yakası genelinde yüksek yalıtımlı, modern ve uzun ömürlü alüminyum pencere, kapı ve vitrin cephe doğrama sistemleri imalatı.',
    image: '/images/aluminyum_result.webp',
    title: 'Alüminyum Doğrama Fiyatları ve Sistemleri | İstanbul',
    metaDescription: 'İstanbul Anadolu Yakası ısı yalıtımlı alüminyum doğrama imalatı. Ataşehir, Kadıköy, Ümraniye uygun alüminyum pencere ve kapı fiyatları için ücretsiz keşif.',
    ogImage: '/images/aluminyum_result.webp',
    h1: 'Isı Yalıtımlı Alüminyum Doğrama Sistemleri',
    tagline: 'Ataşehir, Kadıköy ve Ümraniye Bölgesine Özel Dayanıklı Çözümler',
    intro:
      'İstanbul Anadolu Yakası mimari projelerine değer katan alüminyum doğrama sistemlerimiz; yüksek mekanik dayanımı, korozyona karşı üstün direnci ve estetik tasarımıyla öne çıkmaktadır. Ataşehir imalat atölyemizde ürettiğimiz ısı yalıtımlı (thermal break) alüminyum profiller, enerji verimliliği standartlarını en üst düzeyde karşılayarak kışın ısı kayıplarını, yazın ise içeriye sıcak hava girişini engeller. Kadıköy, Ümraniye, Maltepe ve Üsküdar başta olmak üzere, kentsel dönüşüm projelerinde ve ticari ofis alanlarında RAL skalasının tüm renklerinde elektrostatik toz boyalı veya eloksal kaplamalı çözümler sunuyoruz. İnce profil kesitlerimiz sayesinde maksimum cam yüzeyi elde edilerek mekanlarınıza daha fazla doğal ışık ve ferahlık kazandırılır. TSE, CE standartlarına uygun, EN AW-6063 T5 serisi birinci sınıf alüminyum alaşımları ve dünyaca ünlü Roto ile Siegenia donanımları kullanarak uzun yıllar bakım gerektirmeyen, sarkma yapmayan sistemler inşa ediyoruz.',
    benefits: [
      { title: 'Yüksek Isı ve Ses Yalıtımı', desc: 'Poliamid bariyerli bariyerli termal profillerimiz ve çift/üçlü cam kombinasyonlarımız sayesinde dış ortam soğuğunu ve şehir gürültüsünü tamamen izole eder.' },
      { title: 'Korozyon ve Paslanmazlık', desc: 'Hava kirliliği, nem ve dış etkenlere karşı tam dirençlidir. Boya çatlaması, solma veya paslanma yapmadan ilk günkü estetiğini 30 yılı aşkın süre korur.' },
      { title: 'Zengin Renk ve Eloksal Seçeneği', desc: 'Mimari konseptinize özel olarak antrasit gri, jet black, bronz, şampanya eloksal renkleri ve mat/parlak RAL boya seçenekleri mevcuttur.' },
      { title: 'Geniş Cam Görüş Alanı', desc: 'Yüksek taşıma kapasitesi sayesinde incecik alüminyum çerçevelerle devasa cam panelleri güvenle taşır, manzaranızı bölmez.' },
      { title: 'Hırsızlığa Karşı Tam Güvenlik', desc: 'Çok noktalı entegre kilit mekanizmaları ve çelik takviyeli donanımları ile ev ve iş yerleriniz için üst düzey koruma sağlar.' },
      { title: 'Sıfır Bakım Maliyeti', desc: 'Ahşap gibi periyodik zımpara ve boya istemez; sadece nemli bir bezle silinerek temizliği kolayca tamamlanır.' },
    ],
    specs: [
      'Profil Alaşımı: EN AW-6063 T5 ısıl işlemli mimari alüminyum',
      'Yalıtım Teknolojisi: 24mm poliamid ısı bariyerli (Thermal Break) profil yapısı',
      'Yüzey İşlem: Qualicoat belgeli elektrostatik toz boya veya Qualanod belgeli eloksal kaplama',
      'Görünür Çerçeve Derinliği: Minimum 50mm - Maksimum 75mm dar kesit tasarımı',
      'Aksesuar ve Donanım: ROTO NX / SIEGENIA TITAN çelik kilit setleri',
      'Sızdırmazlık Elemanları: EPDM sürekli çift conta sistemi (hava, su, rüzgar korumalı)',
      'Cam Seçenekleri: 24mm - 44mm arası Isıcam Konfor / Sinerji çift ve üçlü cam uyumluluğu'
    ],
    faq: [
      {
        question: 'İstanbul Anadolu Yakası için alüminyum doğrama fiyatları ne kadar?',
        answer: 'Alüminyum doğrama metrekare fiyatları; projenizde kullanılacak profilin ısı yalıtımlı olup olmamasına, seçilen cam kombinasyonuna (Isıcam Konfor, temperli lamine vb.), RAL renk koduna ve toplam ölçüye göre belirlenir. Ataşehir, Kadıköy ve Ümraniye gibi ilçelerimize aynı gün ücretsiz keşif hizmeti sunarak en net fiyat teklifini yerinde hazırlıyoruz.',
      },
      {
        question: 'PVC pencere ile alüminyum doğrama arasındaki en büyük fark nedir?',
        answer: 'Alüminyum, PVC\'ye göre çok daha yüksek yük taşıma kapasitesine sahiptir. Bu sayede büyük vitrinler, geniş salon pencereleri ve modern mimari tasarımlar sadece alüminyum ile güvenle yapılabilir. Ayrıca alüminyumun ömrü (30+ yıl) PVC\'ye kıyasla çok daha uzundur, sararma veya esneme yapmaz. Konutlarda bütçe odaklı projeler için PVC, estetik ve sağlamlık odaklı lüks yapılar için alüminyum tercih edilmektedir.',
      },
      {
        question: 'Isı yalıtımlı alüminyum doğrama kışın terleme veya buğulanma yapar mı?',
        answer: 'Hayır. Sistemlerimizde kullandığımız poliamid ısı bariyerleri, iç ortamdaki sıcak alüminyum ile dış ortamdaki soğuk alüminyumun temasını tamamen keser. Bu köprü kesildiği için profil yüzeyinde kesinlikle terleme, buğulanma veya damlacık oluşumu (yoğuşma) meydana gelmez.',
      },
    ],
    relatedIds: ['ofis-bolme', 'plastik-dograma', 'korkuluk'],
  },

  // ── 2. OFİS BÖLME PANELİ ─────────────────────────────────────────────────
  {
    id: 'ofis-bolme',
    name: 'Ofis Bölme Paneli',
    desc: 'Kurumsal alanlar için şık, ses yalıtımlı, camlı ve alüminyum modüler ofis bölme duvar sistemleri tasarımı ve uygulaması.',
    image: '/images/aluminyum_result.webp',
    title: 'Cam Ofis Bölme Sistemleri | İstanbul Alüminyum Bölme',
    metaDescription: 'İstanbul akustik cam ofis bölme paneli sistemleri imalatı. Modüler alüminyum bölme duvar, jaluzili cam ve hızlı montaj seçenekleri için hemen arayın.',
    ogImage: '/images/aluminyum_result.webp',
    h1: 'Cam & Alüminyum Ofis Bölme Sistemleri',
    tagline: 'İstanbul Genelinde Akustik ve Estetik Çalışma Alanları',
    intro:
      'Modern iş dünyasının dinamik ihtiyaçlarına cevap veren cam ofis bölme sistemlerimiz, açık ofis konseptlerini işlevsel departmanlara, prestijli toplantı odalarına ve konforlu yönetici odalarına dönüştürür. Ümraniye, Ataşehir ve Maltepe gibi iş merkezlerinin yoğun olduğu bölgelerde, ofis içi gün ışığını kesmeden yüksek ses yalıtımı (akustik izolasyon) sağlayan çözümler sunuyoruz. Modüler alüminyum profiller üzerine uygulanan şeffaf, buzlu, jaluzili veya reflekte temperli cam seçeneklerimiz, kurumsal kimliğinizi yansıtırken çalışan mahremiyetini de üst düzeye çıkarır. Sistemlerimizin en büyük avantajı demonte (sökülebilir) yapıda olmasıdır; olası ofis taşınmalarında veya alan genişletmelerinde minimum zayiatla sökülüp yeni mekanınıza kolayca adapte edilebilir.',
    benefits: [
      { title: 'Üstün Akustik İzolasyon', desc: 'Akustik lamine cam seçeneklerimiz, toplantı odalarınızdaki gizli konuşmaların dışarı sızmasını engeller ve gürültüyü Rw 42 dB\'e kadar sönümler.' },
      { title: 'Modüler ve Demonte Yapı', desc: 'Kiralık ofisler için mükemmel çözümdür; taşınma durumunda sistemi bütünüyle söküp yeni ofisinizin ölçülerine göre yeniden kurabilirsiniz.' },
      { title: 'Maksimum Gün Işığı', desc: 'Alçıpan duvarların aksine, ofisin derinliklerine kadar doğal ışığın yayılmasını sağlayarak elektrik tasarrufu ve ferahlık sunar.' },
      { title: 'Minimalist Profil Tasarımı', desc: 'Sadece 40mm kalınlığındaki ultra ince alüminyum şaseler ile kesintisiz cam estetiği ve şık kurumsal görünüm elde edilir.' },
      { title: 'Entegre Kapı Alternatifleri', desc: 'Bölme sistemine tam uyumlu cam kapı, gizli menteşeli ahşap kapı veya alüminyum çerçeveli akustik kapı entegrasyonu mevcuttur.' },
      { title: 'Jaluzi ve Kumlama Desteği', desc: 'İki cam arası motorlu/manuel jaluzi uygulaması veya cam yüzeyine kurumsal logonuzun kumlama folyo ile işlenmesi mümkündür.' },
    ],
    specs: [
      'Taşıyıcı Profil: 6063-T5 alüminyum alaşımlı, ince kesitli minimalist şase',
      'Cam Yapısı: 10mm - 12mm temperli güvenlik camı veya 5+5mm akustik lamine cam',
      'Ses Azaltma Değeri: Standart camlarda Rw 36 dB, Akustik kombinasyonlarda Rw 42-44 dB',
      'Yüzey Kaplama: Mat antrasit boya, siyah tekstüre yüzey veya parlak eloksal',
      'Bağlantı Elemanları: Cam cama birleşimlerde şeffaf polikarbonat H profilleri (şeffaf derz)',
      'Kapı Donanımları: Dormakaba / Hafele hidrolik menteşe ve paslanmaz kilit setleri',
      'Kablo Yönetimi: Priz, data ve anahtar hatları için profil içi gizli kablo kanalları'
    ],
    faq: [
      {
        question: 'Ofis bölme sistemleri takılırken ofis trafiği aksar mı, çok toz olur mu?',
        answer: 'Hayır. Alçıpan veya tuğla duvarların aksine cam ofis bölme sistemleri tamamen prefabriktir. Ölçüler fabrikamızda milimetrik kesilir, ofisinizde sadece montaj yapılır. Boya, sıva veya alçı gibi kirli işler olmadığı için hafta sonu veya akşam birkaç saat içinde ofisiniz hiç kirlenmeden kurulum tamamlanır.',
      },
      {
        question: 'Cam bölme duvarlar iş güvenliği açısından tehlikeli midir?',
        answer: 'Kesinlikle hayır. Sistemlerimizde kesinlikle düz cam kullanılmaz. Tamamen ısıl işlemden geçmiş (temperlenmiş) veya lamine edilmiş yüksek dayanımlı güvenlik camları kullanılır. Bu camlar darbelere karşı normal camlardan 5 kat daha dayanıklıdır ve kaza sonucu kırılsalar dahi küçük, keskin olmayan zararsız parçalara ayrılır veya yerinden düşmez.',
      },
    ],
    relatedIds: ['aluminyum-dograma', 'cam-balkon', 'korkuluk'],
  },

  // ── 3. CAM BALKON (ANA) ───────────────────────────────────────────────────
  {
    id: 'cam-balkon',
    name: 'Cam Balkon',
    desc: 'Evlerinize ek oda kazandıran, rüzgar, su ve soğuk yalıtımlı katlanır, sürmeli ve lüks cam balkon kapatma sistemleri imalatı.',
    image: '/images/cambalkon_result.webp',
    title: 'Cam Balkon Fiyatları İstanbul | Ücretsiz Keşif & Montaj',
    metaDescription: 'İstanbul Anadolu Yakası en iyi cam balkon modelleri. Katlanır, sürgülü, ısıcamlı cam balkon sistemlerinde fabrikadan uygun fiyatlar ve 2 yıl sızdırmazlık garantisi.',
    ogImage: '/images/cambalkon_result.webp',
    h1: 'Profesyonel Cam Balkon Sistemleri',
    tagline: 'Balkonunuzu Tozdan, Soğuktan ve Yağmurdan Koruyun',
    intro:
      'Cam balkon sistemleri, apartman dairelerinizin veya villalarınızın açık balkonlarını rüzgar, fırtına, toz ve soğuk havalardan tamamen izole ederek evlerinize dört mevsim kullanabileceğiniz yepyeni bir yaşam alanı (ek oda) kazandırır. Kadıköy, Ataşehir, Ümraniye, Kartal ve Pendik başta olmak üzere tüm İstanbul genelinde 10 yılı aşkın üretim tecrübemizle en yüksek sızdırmazlık performansına sahip cam balkon panelleri üretiyoruz. Alüminyum profillerimizin kalınlığı ve ray içi paslanmaz çelik tekerlek mekanizmalarımız, panellerin sarkma yapmadan, yıllarca adeta yağ gibi kayarak açılıp kapanmasını sağlar. Standart plastik şeffaf fitiller yerine kullandığımız özel mıknatıslı veya alüminyum fitil sistemleri, zamanla sararma, çatlama yapmaz ve su sızdırmazlığını maksimuma çıkarır. Balkonunuzun şekli ne olursa olsun (düz, yaylı, L veya U köşeli), mimari yapıya en uygun katlanır veya sürgülü cam tasarımlarını titizlikle uyguluyoruz.',
    benefits: [
      { title: 'Evinizde Ek Yaşam Alanı', desc: 'Balkonunuzu kış bahçesine, hobi odasına veya çocuk oyun alanına dönüştürerek metrekare kaybını tamamen ortadan kaldırır.' },
      { title: 'Maksimum Su ve Rüzgar İzolasyonu', desc: 'Özel drenaj kanallı kasa profillerimiz, sağanak yağışlarda bile suyu dışarı tahliye eder, içeriye damla sızdırmaz.' },
      { title: 'Yüksek Mukavemetli Güvenlik Camı', desc: '8mm veya 10mm kalınlığında temperli camlar kullanıyoruz; rüzgar yüküne, taş çarpmalarına ve şiddetli darbelere karşı tam korumalıdır.' },
      { title: 'Çocuk Emniyet Kilidi', desc: 'Panellerin iç kısma katlandığı sistemlerde, çocukların balkonu tek başına açmasını engelleyen özel kilit mekanizmaları standarttır.' },
      { title: 'Mülkünüze Değer Katar', desc: 'Dış cephe estetiğini bozmadan binaya lüks bir görünüm kazandırır, dairenizin satış ve kiralama değerini artırır.' },
      { title: 'Toz ve Polene Karşı Kalkan', desc: 'Özellikle ana cadde üzerindeki evlerde egzoz dumanı, kurum, toz ve bahar aylarında polen girişini %90 oranında engeller.' },
    ],
    specs: [
      'Profil Kalınlığı: 3mm ile 5mm arası et kalınlığına sahip, taşıyıcı mukavemetli alüminyum kasa',
      'Cam Tipi: Şişecam patentli 8mm veya 10mm yüksek dayanımlı temperli güvenlik camı',
      'Tekerlek Yapısı: Gövdesi paslanmaz çelik, dışı rulmanlı aşınmaz nilon tekerlek mekanizması',
      'Fitil Sistemi: Sararmayan alüminyum contalı kıl fitiller veya şeffaf mıknatıslı fitiller',
      'Sızdırmazlık Sınıfı: EN 1027 standardına göre 7A sınıfı su sızdırmazlık performansı',
      'Kasa Renkleri: Eloksal gri, Antrasit gri, Beyaz ve Ahşap desen kaplama alternatifleri',
      'Emniyet: Alt ve üst raylarda panel sabitleyici emniyet mandalları'
    ],
    faq: [
      {
        question: 'Cam balkon m2 fiyatları ne kadar ve ücretsiz keşif yapıyor musunuz?',
        answer: 'Cam balkon metrekare fiyatları seçilecek modele (klasik katlanır, eşikli/eşiksiz sürme veya lüks çift camlı ısıcamlı) ve balkonun geometrik yapısına göre değişiklik gösterir. Beykoz, Şile ve Adalar hariç tüm İstanbul Anadolu Yakası\'na (Ataşehir, Ümraniye, Kadıköy, Maltepe vb.) aynı gün içerisinde tamamen ücretsiz keşif ve ölçümlendirme ekibi gönderiyoruz.',
      },
      {
        question: 'Cam balkon yaptırmak apartman yönetimi veya belediye ile sorun yaşatır mı?',
        answer: 'Cam balkon sistemleri, binanın taşıyıcı kolonlarına yük bindirmeyen, kalıcı duvar niteliği taşımayan ve istendiğinde tamamen açılabilen "taşınabilir yapı elemanı" statüsündedir. Yargıtay kararlarına göre, binanın dış bütünlüğünü ve rengini bozmayan katlanır cam uygulamaları yasal olarak imara aykırı sayılmamaktadır. Ancak yine de apartman yönetmeliğinize danışmanızda fayda vardır.',
      },
    ],
    relatedIds: ['katlanir-cam-balkon', 'surgulu-cam-balkon', 'isicamli-cam-balkon', 'giyotin-cam'],
  },

  // ── 4. KATLANIR CAM BALKON ────────────────────────────────────────────────
  {
    id: 'katlanir-cam-balkon',
    name: 'Katlanır Cam Balkon',
    desc: 'Panelleri sağa veya sola katlanarak balkonunuzu tamamen açık hale getirebilen, estetik ve işlevsel harmonika cam balkon imalatı.',
    image: '/images/cambalkon_result.webp',
    title: 'Katlanır Cam Balkon Sistemleri | İstanbul Üretici Fabrika',
    metaDescription: 'İstanbul katlanır cam balkon imalat ve montajı. 8mm temperli cam, paslanmaz çelik tekerlekler, alüminyum fitil ve köşeli balkonlara özel %100 sızdırmazlık.',
    ogImage: '/images/cambalkon_result.webp',
    h1: 'Katlanır Cam Balkon Sistemleri',
    tagline: 'Görüş Alanınızı Bölmeyen Klasik ve Güvenilir Harmonika Sistemler',
    intro:
      'Katlanır cam balkon sistemleri, adını cam panellerin üst ve alt raylar üzerinde kayarak köşe noktasında bir kitap gibi üst üste katlanması (harmonika yapısı) özelliğinden alır. Bu sistemin en büyük avantajı, istediğiniz an tüm camları tek bir kenara toplayarak balkonunuzu tamamen açık, geleneksel eski haline getirebilmenizdir. Kadıköy, Maltepe ve Üsküdar gibi geniş balkonlu konutların yoğun olduğu bölgelerde en çok tercih edilen modelimizdir. Paneller birbirinden bağımsız açıldığı için temizliği inanılmaz kolaydır; dışarı sarkmanıza gerek kalmadan içeriden her iki yüzeyi de rahatça silebilirsiniz. L ve U şeklindeki balkon köşelerinde, paneller 90 derecelik açıyı pürüzsüzce dönerek kesintisiz bir yalıtım sağlar. Kullanılan tüm teker donanımları rulmanlı çelik olup, zamanla sıkışma, raydan çıkma veya gıcırtı gibi kronik sorunlar yaratmaz.',
    benefits: [
      { title: '%100 Açılma İmkânı', desc: 'Tüm cam panelleri tek bir köşede toplayabilir, yaz aylarında balkonunuzun açık hava keyfini sıfır kayıpla yaşayabilirsiniz.' },
      { title: 'İçeriden Güvenli ve Kolay Temizlik', desc: 'Paneller içe doğru katlandığı için, yüksek katlı dairelerde bile tehlike oluşturmadan, camların dış yüzeyini içeriden silebilirsiniz.' },
      { title: 'Açılı Köşelerde Kusursuz Dönüş', desc: 'Özel tasarım açılı köşe profilleri sayesinde, balkonunuzun L veya U dönüşlerinde hiçbir sızdırmazlık boşluğu kalmaz.' },
      { title: 'Kademeli Havalandırma', desc: 'Camları tamamen kapatmak yerine, sadece bir veya iki paneli açık bırakarak içeriye girecek taze hava miktarını dilediğiniz gibi ayarlayabilirsiniz.' },
      { title: 'Alüminyum Fitilli Maksimum Ömür', desc: 'Plastik şeffaf fitiller gibi güneşte sararıp kırılmayan, fırçalı alüminyum fitillerimiz rüzgarı ve sesi tamamen bloke eder.' },
      { title: 'Paslanmaz Tekerlek Güvencesi', desc: 'Alt ve üst raylarda toplam 8 adet rulmanlı, paslanmaz çelik millere sahip tekerlekler paneli taşır, sarkmayı önler.' },
    ],
    specs: [
      'Cam Kalınlığı ve Yapısı: 8mm veya 10mm kalınlığında rodajlı Şişecam temperli cam',
      'Ray Profili: Sızdırmazlık ve su tahliye kanallı, 4 odacıklı ağır hizmet alüminyum ray',
      'Tekerlek Mili: INOX 304 paslanmaz çelik mil ve yük taşıma kapasiteli rulman sistemi',
      'Profil Bağlantıları: Paslanmaz gizli vidalı sabitleme takozları',
      'Maksimum Panel Genişliği: 650 mm (İdeal mukavemet ve kayma dengesi için)',
      'Maksimum Sistem Yüksekliği: 2600 mm yükseklik sınırlama desteği',
      'Kilit Tipi: Pirinç gövdeli, paslanmaz telli zincirli emniyet kilit seti'
    ],
    faq: [
      {
        question: 'Katlanır cam balkonda paneller rüzgarda sallanır mı veya ses yapar mı?',
        answer: 'Doğru imal edilmiş ve montajı terazisinde yapılmış bir katlanır cam balkonda paneller asla sallanmaz. Sistemlerimizde camların üst ve alt birleşim noktalarında özel kilitli baza tasarımları ve panelleri birbirine kilitleyen fırçalı alüminyum contalar kullanıyoruz. Bu sayede en şiddetli lodos veya fırtınada bile camlar tıkırdamaz ve esneme yapmaz.',
      },
      {
        question: 'Camlar katlanma noktasında raydan çıkıyor şikayetleri duyuyoruz, bu neden olur?',
        answer: 'Raydan çıkma veya tekerlek kırılması sorunları, piyasada "ucuz" adı altında satılan, tekerlek içi milleri çelik yerine plastik veya kalitesiz sacdan üretilmiş sistemlerde görülür. Biz imalatımızda sadece içi tamamen rulmanlı, gövdesi kırılmaz nilon ve milleri paslanmaz INOX çelik olan tekerlekler kullanıyoruz. Bu yüzden 2 yıl boyunca mekanik çalışmaya tam garanti veriyoruz.',
      },
    ],
    relatedIds: ['cam-balkon', 'surgulu-cam-balkon', 'isicamli-cam-balkon'],
  },

  // ── 5. SÜRME CAM BALKON ──────────────────────────────────────────────────
  {
    id: 'surgulu-cam-balkon',
    name: 'Sürme Cam Balkon',
    desc: 'Açılırken içeriye doğru yer kaplamayan, dar balkonlar, kafeler ve teraslar için en kompakt sürgülü raylı cam sistemleri.',
    image: '/images/cambalkon_result.webp',
    title: 'Sürme Cam Balkon Modelleri | İstanbul Sürgülü Cam',
    metaDescription: 'İstanbul sürgülü cam balkon fiyatları. Eşikli ve eşiksiz sürme modeller, 5 raylı kompakt tasarım, dar balkonlar için maksimum alan tasarrufu sağlayan çözümler.',
    ogImage: '/images/cambalkon_result.webp',
    h1: 'Sürme (Sürgülü) Cam Balkon Sistemleri',
    tagline: 'Dar Alanlar İçin İçeriye Doğru Yer Kaplamayan Akıllı Tasarım',
    intro:
      'Sürme cam balkon sistemleri, cam panellerin sağa veya sola doğru, birbirine paralel çoklu raylar üzerinde kayarak en uçtaki panelin arkasında üst üste paketlenmesi mantığıyla çalışır. Katlanır sistemlerin aksine, camlar içeriye doğru katlanmadığı için balkondaki masanızı, sandalyenizi veya saksılarınızı yerinden oynatmanıza gerek kalmaz; balkondaki mevcut alanı sıfır kayıpla kullanmanızı sağlar. Özellikle dar balkonlarda, restoran girişlerinde, villa teraslarında ve ofis içi geçişlerde eşsiz bir kompakt çözümdür. 3 veya 5 raylı kasa profillerimiz sayesinde geniş cepheleri minimum profil kalabalığıyla kapatabiliyoruz. Zeminde ayak takılmasını önleyen "Eşiksiz Sürme" (sadece 7mm alt ray yüksekliği) ve dış mekan yalıtımını garanti eden "Eşikli Sürme" modellerimizle projenize en uygun alternatifi sunuyoruz.',
    benefits: [
      { title: 'Sıfır Alan Kaybı', desc: 'Camlar ray üzerinde paralel kaydığı için açılırken içeriye veya dışarıya doğru asla çıkıntı yapmaz, yer kaplamaz.' },
      { title: 'Eşiksiz Model ile Engelsiz Geçiş', desc: 'Teras ve iş yeri zeminlerinde alt ray yüksekliğini 7mm\'ye düşürerek ayak takılma riskini tamamen ortadan kaldırır.' },
      { title: 'Tek Parmakla Kolay Sürüş', desc: 'Yüksek kaliteli rulmanlı alt arabalar sayesinde, devasa cam paneller bile saniyeler içinde sessizce ve minimum kuvvetle kayar.' },
      { title: 'Geniş Cephe Kapatma', desc: '5 raylı kasa profiliyle tek yöne 5 panel, çift yöne 10 panel toplayarak çok geniş açıklıkları pürüzsüzce kapatabilir.' },
      { title: 'Kenetlenme Sızdırmazlığı', desc: 'Paneller birbirini çeken özel dikey kenet profilleriyle birleşir, rüzgar ve toz sızmasını tamamen engeller.' },
      { title: 'Şık ve Kesintisiz Görünüm', desc: 'Dikeyde profil sayısı çok az olduğu için dışarıdaki manzarayı adeta dev bir tek parça cam gibi kesintisiz izletir.' },
    ],
    specs: [
      'Kasa Profili: 3 raylı (85mm genişlik) veya 5 raylı (130mm genişlik) alüminyum sürme şaseler',
      'Cam Seçeneği: 8mm temperli tek cam veya 4+12+4mm ısıcam kombinasyonu',
      'Alt Ray Yüksekliği: Eşikli modelde 40mm (maksimum yalıtım), Eşiksiz modelde 7mm (kesintisiz geçiş)',
      'Tekerlek Grubu: Ayarlanabilir yükseklik mekanizmalı, çift rulmanlı ağır hizmet sürme arabaları',
      'Kilit Sistemi: Gizli basmalı bas-aç kilit veya anahtarlı kancalı sürme kilit seti',
      'Kenet Profili: Entegre EPDM contalı ve fırçalı alüminyum dikey kenetlenme profilleri',
      'Su Tahliyesi: Eşikli modellerde dahili eğimli yoğuşma ve su deşarj kanalları'
    ],
    faq: [
      {
        question: 'Eşiksiz sürme cam balkon rüzgarda su alır mı, ev içine uygun mudur?',
        answer: 'Eşiksiz sürme sistemlerin alt rayı sadece 7mm yüksekliğinde olduğu için alt kısımdan su sızdırma riski eşikli modellere göre daha yüksektir. Bu yüzden eşiksiz sürme modelleri doğrudan dışarıya açık ev balkonlarında değil; kafe içlerinde, kış bahçesi ara bölmelerinde veya altı tamamen kapalı teraslarda öneriyoruz. Dış mekana bakan ev balkonları için %100 su tahliye garantili "Eşikli Sürme" modelimiz kurulmalıdır.',
      },
      {
        question: 'Sürgülü cam balkonların kilit güvenliği nasıldır, dışarıdan açılır mı?',
        answer: 'Sürme sistemlerimizde iç kısma gizlenen, dışarıdan hiçbir şekilde müdahale edilemeyen kancalı emniyet kilitleri kullanıyoruz. Camlar birbirine dikey alüminyum kenetlerle kilitlendiği için dışarıdan levye veya benzeri bir aletle panelleri birbirinden ayırmak ya da raydan fırlatmak imkansızdır.',
      },
    ],
    relatedIds: ['cam-balkon', 'katlanir-cam-balkon', 'isicamli-cam-balkon'],
  },

  // ── 6. ISICAMLI CAM BALKON ────────────────────────────────────────────────
  {
    id: 'isicamli-cam-balkon',
    name: 'Isıcamlı Cam Balkon',
    desc: 'Argon gazlı çift cam teknolojisi ve yalıtımlı profilleriyle maksimum ısı tasarrufu sağlayan premium cam balkon kapatma sistemleri.',
    image: '/images/cambalkon_result.webp',
    title: 'Isıcamlı Cam Balkon Fiyatları | Çift Camlı Sistem',
    metaDescription: 'İstanbul ısıcamlı cam balkon imalatı. Argon gazlı çift cam, poliamid yalıtımlı profil, kışın %40\'a varan doğalgaz tasarrufu ve terlememe garantili montaj.',
    ogImage: '/images/cambalkon_result.webp',
    h1: 'Isıcamlı Cam Balkon Sistemleri',
    tagline: 'Kışın Kombi Faturasını Düşüren, Balkonu Evin Odası Yapan Lüks Sistem',
    intro:
      'Isıcamlı cam balkon sistemleri, geleneksel tek kat camlı sistemlerin yalıtım zafiyetini tamamen ortadan kaldırmak için geliştirilmiş en üst düzey premium balkon kapatma teknolojisidir. Bu sistemlerde, iki adet temperli güvenlik camı fabrikasyon olarak aralarında argon gazı ve nem alıcı barındıran alüminyum ara çıtayla birleştirilir (çift cam yapısı). Ümraniye, Ataşehir gibi kış aylarında soğuk rüzgarları sert alan bölgelerde, balkonu evin salonundan farksız, tam yalıtımlı bir odaya dönüştürür. Kalınlaştırılmış poliamid bariyerli alüminyum kasa profillerimiz, metaller arası ısı köprüsünü keserek soğuğun içeri sızmasını ve profil yüzeyinde terleme, damlacık oluşmasını kesinlikle engeller. Dışarıdaki otoyol, korna ve şehir gürültüsünü %70\'e varan oranda sönümleyerek dairenize muazzam bir akustik konfor kazandırır.',
    benefits: [
      { title: '%40\'a Varan Enerji Tasarrufu', desc: 'Standart cam balkonlara göre 4 kat daha yüksek ısı yalıtımı sağlayarak kış aylarında doğalgaz faturalarınızı net bir şekilde düşürür.' },
      { title: 'Terleme ve Terleme Lekelerine Son', desc: 'Isı bariyerli özel profil gövdesi sayesinde, kışın içerisi sıcak dışarısı soğukken camlarda ve profillerde terleme, buğulanma olmaz.' },
      { title: 'Akustik Ses Yalıtım Duvarı', desc: 'Çift cam arası boşluk ses dalgalarını kırar; cadde kenarındaki evinizi sessiz, huzurlu bir kütüphane ortamına çevirir.' },
      { title: 'Low-E Cam ile Yazın Da Serin', desc: 'Sistemlerimizde isteğe bağlı kullanılan Low-E kaplamalı camlar, yazın güneşin yakıcı sıcaklık ışınlarını yansıtarak balkonun sera gibi ısınmasını önler.' },
      { title: 'Maksimum Sızdırmazlık Contaları', desc: 'Panellerin birleşim yerlerinde kullanılan EPDM kauçuk contalar hava, su ve fırtına girişini tamamen bloke eder.' },
      { title: 'Çift Yönlü Güvenlik Camı', desc: 'Hem içteki hem dıştaki cam 4mm temperli olduğu için, kırılmalara karşı olağanüstü dirençlidir, tam güvenlik sağlar.' },
    ],
    specs: [
      'Cam Kombinasyonu: 4mm Temperli + 12mm/16mm Ara Boşluk + 4mm Temperli yüksek yalıtımlı Isıcam',
      'Yalıtım Gazı: İki cam arası fabrika çıkışlı Argon Gazı dolgusu (Isı iletimini minimize eder)',
      'Profil Tasarımı: Isı köprüsü kesici poliamid bariyer enjeksiyonlu kalın duvarlı alüminyum baza',
      'Isı Geçirgenlik Katsayısı: Ug ≤ 1.3 W/(m²·K) (Geleneksel tek camlara göre 4 kat daha yalıtımlı)',
      'Su Deşarjı: Gizli eğimli su tahliye kanalları ve rüzgar kapaklı deşarj delikleri',
      'Mekanik Taşıyıcılar: Panel başına 4 adet, toplamda çift rulmanlı ağır tonaj çelik tekerlekler',
      'Kanat Genişliği: Projeye göre 600mm ile 850mm arası optimize edilmiş lüks paneller'
    ],
    faq: [
      {
        question: 'Isıcamlı cam balkon gerçekten kışın içeriyi sıcak tutar mı, salonla balkonu birleştirebilir miyim?',
        answer: 'Evet, kesinlikle tutar. Isıcamlı cam balkonların yalıtım performansı evlerinizdeki PVC pencerelerle hemen hemen aynı seviyededir. Aradaki oda kapısını tamamen söküp, salonunuzu mutfağınızı balkona dahil etmek istiyorsanız, İstanbul iklim koşullarında uygulanabilecek tek ve en doğru sistem Isıcamlı Cam Balkon modelidir.',
      },
      {
        question: 'Isıcamlı cam balkon fiyatları neden klasik modellerden daha yüksek?',
        answer: 'Bu sistemlerde metrekare başına tek kat 8mm cam yerine, fabrikasyon üretilen 2 adet temperli camdan oluşan kalın bir Isıcam ünitesi kullanılır. Ayrıca kullanılan alüminyum profiller ısı bariyerlidir ve çok daha ağırdır, aksesuarları da bu yüksek ağırlığı taşıyacak özel serilerdir. İlk yatırım maliyeti yüksek görünse de, kışın sağlayacağı doğalgaz tasarrufu sayesinde sistem ortalama 3-4 yıl içinde kendi maliyet farkını tamamen amorti eder.',
      },
    ],
    relatedIds: ['cam-balkon', 'katlanir-cam-balkon', 'kis-bahcesi'],
  },

  // ── 7. GİYOTİN CAM ───────────────────────────────────────────────────────
  {
    id: 'giyotin-cam',
    name: 'Giyotin Cam',
    desc: 'Uzaktan kumandalı motor mekanizmasıyla dikey açılıp kapanan, açık konumda cam korkuluk vazifesi gören lüks giyotin cam sistemleri.',
    image: '/images/cambalkon-1_result.webp',
    title: 'Giyotin Cam Balkon Fiyatları | İstanbul Motorlu Küpeşte',
    metaDescription: 'İstanbul motorlu giyotin cam sistemleri imalatı. Uzaktan kumandalı, dikey açılır hareketli cam küpeşte, kafe, teras ve lüks restoranlar için ideal çözümler.',
    ogImage: '/images/cambalkon_result.webp',
    h1: 'Uzaktan Kumandalı Giyotin Cam Sistemleri',
    tagline: 'Dikey Hareketli Akıllı Cam Küpeşte ve Teras Kapatma',
    intro:
      'Giyotin cam sistemleri (hareketli küpeşte), dikey eksende aşağı ve yukarı doğru motorlu mekanizmayla hareket eden, uzaktan kumandayla kontrol edilen son teknoloji akıllı cam panelleridir. Sistem açıldığında camlar aşağıya doğru kayar ve en altta sabit kalan panelin arkasında toplanır. Bu sayede sistem tamamen açıkken bile zemin seviyesinde kendiliğinden lüks bir cam korkuluk (küpeşte) oluşturur, ekstra korkuluk masrafını ortadan kaldırır. Kadıköy, Ataşehir, Ümraniye bölgesindeki kafe, restoran, otel terasları ile lüks villa projelerinde mekanın çehresini değiştiren, prestijli bir üründür. Somfy veya Becker marka yüksek torklu sessiz tüp motorlar yardımıyla çalışan sistemlerimiz, akıllı ev otomasyonlarına da tam entegre edilebilir. Kalın zincir veya çelik halat kayış sistemlerimiz sayesinde camların düşme, takılma veya asimetrik kayma riski sıfıra indirilmiştir.',
    benefits: [
      { title: 'Uzaktan Kumandalı Akıllı Lüks', desc: 'Yerinizden kalkmadan, tek bir kumanda tuşu veya akıllı telefon uygulamasıyla devasa cam cepheyi saniyeler içinde açıp kapatabilirsiniz.' },
      { title: 'Kendinden Entegre Cam Korkuluk', desc: 'Camlar aşağı toplandığında zemin seviyesinde 110cm yüksekliğinde sabit bir cam küpeşte oluşturarak %100 düşme emniyeti sağlar.' },
      { title: 'Rüzgar Kırıcı Fonksiyonu', desc: 'Rüzgarlı havalarda camları tamamen kapatmak yerine yukarıdan aşağıya sadece yarım indirerek terastaki rüzgarı kesebilir, açık hava konforunu korursunuz.' },
      { title: 'Dikey Profilsiz Kesintisiz Manzara', desc: 'Paneller yatay birleştiği için dikeyde görüşünüzü bölecek hiçbir alüminyum profil kalmaz; panaromik, engelsiz bir manzara sunar.' },
      { title: 'Ağır Hizmet Motor Teknolojisi', desc: 'Sistemlerimizde kullanılan termik korumalı motorlar, aşırı ısınma yapmadan, binlerce kez sorunsuz ve sessizce çalışır.' },
      { title: 'Geniş Ölçü Desteği', desc: 'Tek parçada 4 metre genişliğe ve 3.5 metre yüksekliğe kadar dev cepheleri kolonsuz kapatabilme kabiliyetine sahiptir.' },
    ],
    benefits_custom: [], // Gelecekte eklenebilir koruması
    specs: [
      'Motor Donanımı: SOMFY io-homecontrol / BECKER yüksek torklu, dahili alıcılı tüp motor',
      'Mekanik İletim: İçi çelik telli zaman kayışı veya 4 kat bükümlü paslanmaz çelik halat sistemi',
      'Cam Seçenekleri: 8mm-10mm Temperli Tek Cam veya 4+12+4mm Argon gazlı Isıcam Sinerji',
      'Yan Ray Profilleri: İçerisinde çift taraflı kıl fitil ve EPDM conta barındıran 120x80mm ağır şaseler',
      'Taşıyıcı Gövde: 6063-T6 yüksek mukavemetli yapısal mimari alüminyum',
      'Kontrol Alternatifleri: Uzaktan kumanda, Duvar butonu, Yağmur ve Rüzgar sensörü entegrasyonu',
      'Panel Sayısı: Yüksekliğe göre 2, 3 veya 4 panelli dikey teleskopik toplama yapısı'
    ],
    faq: [
      {
        question: 'Giyotin cam sistemleri su sızdırır mı, izolasyonu nasıldır?',
        answer: 'Giyotin cam sistemlerimizin yan ray profillerinin içinde boydan boya özel EPDM fırça contalar yer alır. Ayrıca cam panellerin yatayda birleştiği noktalarda alüminyum kenet contaları bulunur. Bu sayede sert rüzgar, fırtına ve sağanak yağış içeri sızamaz. Isıcamlı giyotin modelimiz seçildiğinde ise bir odadan farksız ısı yalıtımı elde edilir.',
      },
      {
        question: 'Elektrik kesildiğinde motorlu giyotin cam nasıl açılır?',
        answer: 'Sistemlerimize opsiyonel olarak eklenebilen kesintisiz güç kaynağı (UPS) veya motor başlığına entegre edilen manuel çevirme kolu (kesintili motor mekanizması) sayesinde elektrik olmasa dahi camları el kuvvetiyle kolayca açıp kapatabilirsiniz.',
      },
    ],
    relatedIds: ['cam-balkon', 'korkuluk', 'kis-bahcesi'],
  },

  // ── 8. DUŞAKABIN ─────────────────────────────────────────────────────────
  {
    id: 'dusakabin',
    name: 'Duşakabin',
    desc: 'Banyonuzun ölçülerine özel milimetrik üretilen, leke tutmaz nano kaplamalı ve temperli lüks cam duşakabin imalatı ve montajı.',
    image: '/images/dusakabin_result.webp',
    title: 'Duşakabin Fiyatları İstanbul | Özel Ölçü Cam Kabin',
    metaDescription: 'İstanbul Anadolu Yakası duşakabin imalatı. 6mm-8mm temperli güvenlik camı, kolay temizlenen nano kaplama, paslanmaz pirinç rulmanlar ve şık profil renkleri.',
    ogImage: '/images/dusakabin_result.webp',
    h1: 'Özel Tasarım Duşakabin Sistemleri',
    tagline: 'Banyonuza Özel Milimetrik İmalat, Paslanmaz Lüks Donanım',
    intro:
      'Banyonuzun boyutu veya şekli ne olursa olsun, standart kalıpların dışına çıkarak banyonuza %100 uyum sağlayan özel ölçü lüks duşakabin sistemleri üretiyoruz. Ataşehir, Kadıköy ve Ümraniye genelinde gerçekleştirdiğimiz banyo yenileme projelerinde; kararma yapmayan yüksek kaliteli alüminyum profiller ve kırılmaya karşı yüksek dirençli temperli güvenlik camları kullanıyoruz. Cam yüzeylerimize fabrika çıkışlı olarak uyguladığımız "Easy Clean" (Nano) kaplama teknolojisi, su damlacıklarının cam yüzeyine tutunmasını engelleyerek kireç, sabun artığı ve su lekesi oluşumunu %80 oranında azaltır, temizlik sürenizi minimuma indirir. Ray içi tekerleklerimizin ve pirinç rulman gövdelerimizin paslanmaz yapısı sayesinde kapılar yıllarca takılmadan, sessizce kayar. Banyo konseptinize uygun olarak parlak krom, mat siyah (loft tarzı), gold (altın) veya rose gold profil renkleri ile banyonuza modern bir SPA havası katıyoruz.',
    benefits: [
      { title: '%100 Özel Ölçü İmalat', desc: 'Banyonuzdaki kolon arkaları, kiriş altları veya dar köşeler için milimetrik ölçü alınarak sıfır hata ile üretim yapılır.' },
      { title: 'Leke Tutmaz Nano Cam Teknolojisi', desc: 'Easy Clean kaplama sayesinde su camdan akar gider; kireç ve sabun lekelerinin camda katman oluşturması önlenir.' },
      { title: 'Kırılmaz Güvenlik Camı', desc: '6mm veya 8mm kalınlığında Şişecam temperli camlar kullanıyoruz; darbelere tam dayanıklıdır, yaralanma riski yaratmaz.' },
      { title: 'Mıknatıslı %100 Su Sızdırmazlık', desc: 'Kapı birleşimlerinde kullandığımız yüksek çekim gücüne sahip şeffaf mıknatıslı contalar, duş suyunun dışarı sızmasını kesinlikle engeller.' },
      { title: 'Paslanmaz Pirinç Rulmanlar', desc: 'Tekerlek gövdeleri plastik değil, paslanmaz pirinç ve paslanmaz çelikten üretilmiştir; kırılma, raydan çıkma yapmaz.' },
      { title: 'Modern Profil Renk Seçenekleri', desc: 'Banyonuzdaki batarya ve armatürlerle tam uyum sağlayacak parlak krom, elektrostatik mat siyah veya lüks gold kaplamalar mevcuttur.' },
    ],
    specs: [
      'Cam Yapısı: 6mm veya 8mm Şişecam patentli yüksek yalıtımlı temperli cam',
      'Yüzey Teknolojisi: Çift taraflı Easy-Clean (Anti-Kireç) Nano kaplama koruması',
      'Profil Malzemesi: Kararma ve oksitlenme yapmayan birinci sınıf eloksallı alüminyum',
      'Rulman Yapısı: INOX gövdeli, çift tekerlekli, pirinç göbekli sessiz sürme arabaları',
      'Sızdırmazlık Elemanları: Manyetik mıknatıslı şeffaf PVC contalar ve alt su eşiği alüminyum profili',
      'Tasarım Tipleri: Kare, Oval, Dikdörtgen, Duvar Arası (İki Duvar Arası) veya Walk-In (Açık Duş)',
      'Kulp Tasarımı: Paslanmaz çelik, minimalist modern havluluklu kulp seçenekleri'
    ],
    faq: [
      {
        question: 'Duşakabin üzerindeki kireç ve su lekeleri nasıl önlenir?',
        answer: 'Sistemlerimize uyguladığımız Nano kaplama suyun tutunmasını engeller. Ancak uzun ömürlü temizlik için duş bittikten sonra cam çekpas (su çekici) ile camdaki suyu saniyeler içinde aşağı çekmek leke oluşumunu tamamen bitirir. Temizlikte kesinlikle tuz ruhu, çamaşır suyu veya aşındırıcı tel kullanılmamalı, sıvı banyo deterjanları tercih edilmelidir.',
      },
      {
        question: 'Teknesiz duşakabin (doğrudan zemine montaj) sızdırma yapar mı?',
        answer: 'Doğrudan fayans veya mermer zemine yapılan (Walk-In veya Teknesiz) montajlarda su sızmaması için iki kritik kural vardır: Birincisi zemindeki süzgece doğru verilen meyil (eğm) kusursuz olmalıdır. İkincisi, alüminyum profil altına uyguladığımız antibakteriyel şeffaf silikon koruması tam kuruyana kadar (24 saat) duş kullanılmamalıdır. Bu kurallara uyulduğunda kesinlikle su sızmaz.',
      },
    ],
    relatedIds: ['aluminyum-dograma', 'korkuluk'],
  },

  // ── 9. KORKULUK ──────────────────────────────────────────────────────────
  {
    id: 'korkuluk',
    name: 'Korkuluk Sistemleri',
    desc: 'Balkon, merdiven ve teraslar için alüminyum küpeşte, emniyet şeritli ve camlı modern korkuluk sistemleri imalatı.',
    image: '/images/korkuluk_result.webp',
    title: 'Alüminyum Küpeşte & Cam Korkuluk Fiyatları | İstanbul',
    metaDescription: 'İstanbul alüminyum küpeşte ve cam korkuluk sistemleri imalatı. Merdiven, balkon ve teraslar için emniyetli, paslanmaz, modern korkuluk fiyatları için teklif alın.',
    ogImage: '/images/korkuluk_result.webp',
    h1: 'Alüminyum Küpeşte & Cam Korkuluk Sistemleri',
    tagline: 'TS EN 13374 Güvenlik Standartlarına Uygun Modern ve Sağlam Yapılar',
    intro:
      'Korkuluk sistemlerimiz (alüminyum küpeşte), binalarınızın merdiven, balkon, teras ve havuz kenarlarında hem düşme riskine karşı %100 yasal güvenlik sağlar hem de dış cephe mimarinize modern, estetik bir dokunuş katar. Ataşehir, Kadıköy, Ümraniye bölgesindeki konut ve ticari yapılarda, paslanma riski olan demir korkuluklar yerine, asla boya ve bakım istemeyen eloksallı yüksek mukavemetli alüminyum profiller kullanıyoruz. Görüş alanını kesmek istemeyen manzaralı evler ve lüks villalar için ise zeminden gizli alüminyum bazalı cam korkuluk sistemleri (baza sistemli cam cephe) inşa ediyoruz. Tüm korkuluk projelerimiz, darbe testlerinden geçmiş, deprem ve rüzgar yüklerine karşı statik hesabı yapılmış TS EN 13374 standartlarına uygun kalın duvarlı boru ve kare profillerle kurulmaktadır.',
    benefits: [
      { title: 'Yasal Güvenlik ve Mukavemet', desc: 'TS EN 13374 standartlarına tam uyumludur; yüksekten düşme riskini engelleyecek statik yük taşıma kapasitesine sahiptir.' },
      { title: 'Asla Paslanmaz ve Boya İstemez', desc: 'Demir ferforjeler gibi her yıl zımpara ve antipas boya maliyeti çıkarmaz; yağmur, kar ve çamurdan etkilenmez.' },
      { title: 'Emniyet Şeritli veya Cam Dolgulu', desc: 'İhtiyaca göre 3\'lü veya 4\'lü yatay emniyet borulu sistemler ya da kırılmaz lamine camlı dolgu seçenekleri mevcuttur.' },
      { title: 'Zeminden Gizli Cam Estetiği', desc: 'Cam korkuluk modelinde dikey dikme profilleri kullanılmaz; camlar zemindeki gizli alüminyum kanala gömülerek kesintisiz manzarayı korur.' },
      { title: 'Farklı Renk ve Form Seçenekleri', desc: 'Yuvarlak küpeşte modellerinin yanı sıra modern yapılara tam uyum sağlayan antrasit gri kare/k dikdörtgen profil serileri sunuyoruz.' },
      { title: 'Kimyasal Dübel ile Güçlü Sabitleme', desc: 'Montaj sırasında zemin betonuna epoksi bazlı kimyasal dübeller sıkılarak çelik miller çakılır; sallanma ve gevşeme kesinlikle yaşanmaz.' },
    ],
    specs: [
      'Profil Malzemesi: EN AW-6063 T6 yüksek sertlik dereceli alüminyum alaşım profiller',
      'Küpeşte Çapları: Ø50mm yuvarlak üst boru veya 60x25mm modern kare küpeşte profili',
      'Dikme Profilleri: 40x40mm kare veya Ø40mm kalın et kalınlığına sahip taşıyıcı dikmeler',
      'Cam Yapısı (Camlı Modelde): 5+5mm veya 8+8mm PVB katmanlı kırılmaz lamine güvenlik camı',
      'Yüzey Kaplama Kalitesi: 15-18 mikron arası yüksek eloksal kaplama kalınlığı veya RAL toz boya',
      'Sabitleme Teknolojisi: M12 çelik saplamalar ve Hilti / Akfix kimyasal epoksi dübel enjeksiyonu',
      'Emniyet Hatları: Ø16mm çapında 3 veya 4 sıra yatay emniyet boru hattı'
    ],
    faq: [
      {
        question: 'Alüminyum korkuluklar zamanla sallanma veya gevşeme yapar mı?',
        answer: 'Hatalı montajlarda, betonun içine sadece plastik dübel çakılarak vidalanan korkuluklar 1-2 yıl içinde sallanmaya başlar. Biz montajlarımızda kesinlikle plastik dübel kullanmıyoruz. Betonu deldikten sonra içeride donarak taşlaşan "kimyasal epoksi dübel" enjekte ediyor ve çelik saplamaları bu şekilde sabitliyoruz. Bu sayede korkuluk binanın betonarme yapısıyla bütünleşir, ömür boyu sallanma yapmaz.',
      },
      {
        question: 'Balkon cam korkuluklarında camın kırılıp aşağı düşme riski var mıdır?',
        answer: 'Sistemlerimizde kesinlikle tek kat düz veya sadece temperli cam kullanmıyoruz. Cam korkuluklarda zorunlu olarak "Lamine Cam" (iki camın arasında fabrikasyon PVB plastik tabaka olan yapı) kullanıyoruz. Bu camlar balyoz darbesi alsa bile aradaki plastik film sayesinde kırılan parçalar yerinde kalır, kesinlikle dağılmaz ve aşağıya düşerek tehlike yaratmaz.',
      },
    ],
    relatedIds: ['cam-balkon', 'aluminyum-dograma', 'giyotin-cam'],
  },

  // ── 10. MOTORLU PANJUR ───────────────────────────────────────────────────
  {
    id: 'motorlu-panjur',
    name: 'Motorlu Panjur',
    desc: 'Akıllı ev sistemleriyle uyumlu, Somfy motorlu, poliüretan yalıtımlı lamel yapısına sahip güvenlikli otomatik alüminyum panjur sistemleri.',
    image: '/images/panjur_result.webp',
    title: 'Motorlu Panjur Sistemleri | İstanbul Otomatik Panjur fiyatı',
    metaDescription: 'İstanbul motorlu otomatik panjur sistemleri imalatı. Somfy motorlu, poliüretan köpük dolgulu ısı ve hırsızlık korumalı alüminyum panjur fiyatları.',
    ogImage: '/images/panjur_result.webp',
    h1: 'Otomatik Motorlu Panjur Sistemleri',
    tagline: 'Eviniz İçin Akıllı Konfor, Isı Yalıtımı ve Maksimum Hırsızlık Koruması',
    intro:
      'Motorlu otomatik panjur sistemlerimiz; evlerinizi ve iş yerlerinizi hırsızlık gibi yetkisiz girişlere karşı fiziksel olarak korurken, aynı zamanda üstün bir güneş kontrolü, ısı yalıtımı ve mahremiyet sağlar. Ataşehir ve Ümraniye gibi kentsel dönüşümle modernleşen bölgelerde akıllı ev otomasyonlarına tam entegre sistemler kuruyoruz. Panjur lamellerimizin içi yüksek yoğunluklu poliüretan köpük dolguludur; bu yapı pencerelerinizdeki ısı kayıplarını %35\'e varan oranda azaltır ve dışarıdaki seslerin içeri girmesini engeller. Dünyanın en güvenilir ve sessiz motor üreticisi olan Somfy veya Becker tüp motorları yardımıyla, yerinizden bile kalkmadan tek bir uzaktan kumanda tuşuyla veya telefonunuzdan tüm panjurları tek seferde kapatıp açabilirsiniz. Entegre edilen askı kilit (hırsız emniyet kilidi) mekanizması yardımıyla panjurlar kapalı konumdayken dışarıdan elle yukarı doğru itilerek kesinlikle açılamaz.',
    benefits: [
      { title: 'Uzaktan Kumanda ve Mobil Kontrol', desc: 'Tek kanallı veya çok kanallı kumandalar ile tek tek ya da evdeki tüm panjurları tek tıkla grup olarak kapatabilirsiniz.' },
      { title: 'Poliüretan Köpüklü Isı Kalkanı', desc: 'Lamellerin içindeki poliüretan dolgu, kışın pencerelerden soğuk sızmasını engeller, yazın klimanın soğuk havasını içeride tutar.' },
      { title: 'Hırsızlığa Karşı Askı Emniyet Kilidi', desc: 'Sistem kapandığı an otomatik olarak devreye giren motor içi kilitler, panjurun dışarıdan levye ile yukarı kaldırılmasını tamamen engeller.' },
      { title: 'Sessiz ve Termik Korumalı Motor', desc: 'Dünyaca ünlü Somfy AC motorlar, ultra sessiz çalışır ve aşırı zorlanmalarda kendini korumaya alarak motor yanmalarını önler.' },
      { title: 'Hava Şartlarına Tam Direnç', desc: 'Fırtına, dolu ve şiddetli rüzgarlarda pencerelerinizi korur, camların kırılma veya zarar görme riskini ortadan kaldırır.' },
      { title: 'Akıllı Ev ve Zamanlayıcı Uyumu', desc: 'Sisteme ekleyeceğiniz zamanlayıcı modüllerle, siz evde olmasanız bile panjurların sabah otomatik açılmasını, akşam kapanmasını sağlayabilirsiniz.' },
    ],
    specs: [
      'Tüpsel Motor Sürücüsü: SOMFY RTS / io-homecontrol veya BECKER entegre alıcılı motorlar',
      'Lamel Tipi: İçi poliüretan enjeksiyon dolgulu 39mm, 43mm veya 55mm alüminyum lamel serileri',
      'Güvenlik Elemanı: Otomatik motorlu panjur askı emniyet kilit mekanizması',
      'Kasa Alternatifleri: Dıştan takma alüminyum kutu, Sıva altı gizli kasa veya Monoblok (pencereli entegre) kasa',
      'Çalışma Sesi Derecesi: < 45 dB ultra sessiz konfor sınıfı mekanizma',
      'Yüzey Boyası: UV filtreli fırınlanmış akrilik toz boya (solmaz, dökülmez yüzey garantisi)',
      'Aksesuarlar: Uzaktan kumanda, Duvar butonu, Akıllı telefon kontrol hub ünitesi'
    ],
    faq: [
      {
        question: 'Otomatik panjur elektrik kesildiğinde kapalı kalır mı, nasıl açılır?',
        answer: 'Bu durumun önüne geçmek için iki harika çözümümüz var. Birincisi, motor seçiminde "Manuel Redüktörlü" (kesintili) motor kullanabiliyoruz; bu sayede elektrik kesilse bile kutudan çıkan küçük bir çevirme koluyla panjuru elinizle kolayca açabilirsiniz. İkincisi ise sisteme küçük bir kesintisiz güç kaynağı (panjur aküsü) bağlayarak kesintilerden hiç etkilenmemeyi sağlayabilirsiniz.',
      },
      {
        question: 'Alüminyum lamel mi, PVC lamel mi tercih etmeliyim?',
        answer: 'PVC lameller daha ekonomiktir ancak geniş pencerelerde rüzgar yüküyle esneme yapabilir ve güneş altında zamanla çıt kırıldım hale gelebilir. Alüminyum lameller ise içi poliüretan dolgulu yapısıyla hem çok daha sağlamdır, eğrilmez, hırsızlığa karşı gerçek koruma sağlar hem de ömrü çok daha uzundur. Güvenlik ve uzun ömür için kesinlikle alüminyum lamel öneriyoruz.',
      },
    ],
    relatedIds: ['plastik-dograma', 'aluminyum-dograma', 'sineklik'],
  },

  // ── 11. PLASTİK DOĞRAMA (PVC) ────────────────────────────────────────────
  {
    id: 'plastik-dograma',
    name: 'Plastik Doğrama (PVC)',
    desc: 'Dünyaca ünlü markaların çok odacıklı profilleri ve çift/üçlü cam kombinasyonlarıyla yüksek enerji tasarrufu sağlayan PVC pencere ve kapı sistemleri imalatı.',
    image: '/images/pvc_result.webp',
    title: 'PVC Pencere Fiyatları İstanbul | Plastik Doğrama İmalatı',
    metaDescription: 'İstanbul yüksek yalıtımlı PVC pencere ve kapı sistemleri imalatı. Antrasit gri renk seçeneği, fabrikadan uygun m2 fiyatları ve sızdırmazlık garantili montaj.',
    ogImage: '/images/pvc_result.webp',
    h1: 'Yüksek Yalıtımlı PVC Doğrama Sistemleri',
    tagline: 'Evleriniz İçin Maksimum Isı ve Ses Yalıtımı, Minimum Enerji Tüketimi',
    intro:
      'PVC plastik doğrama pencere ve kapı sistemleri, günümüzde konut projelerinde fiyat/performans açısından en yüksek ısı ve ses yalıtım değerlerini sunan tartışmasız lider yapı elemanıdır. Kadıköy, Ümraniye ve Maltepe gibi hem gürültülü hem de kışın soğuk olan bölgelerde, evlerinizin enerji kimlik belgesi standartlarını yükselten çok odacıklı (5-6-7 odacıklı) premium profil serileriyle montaj yapıyoruz. İçerisindeki galvanizli destek sacları sayesinde profillerin zamanla eğrilmesi, rüzgarda esnemesi engellenir. Isıcam Konfor ve Sinerji serisi çift veya üç katlı nitelikli cam kombinasyonlarımızla birleştiğinde, kışın ısıtma, yazın ise klima elektrik faturalarınızda %40\'a varan kalıcı bir hafifleme sağlar. Eski sararan PVC algısını yıkan, dış cephe tasarımlarına muazzam uyum sağlayan antrasit gri, ahşap desenli altın meşe ve maun gibi zengin lamine renk alternatiflerimiz mevcuttur.',
    benefits: [
      { title: 'En Yüksek Isı Yalıtım Performansı', desc: 'Çok odacıklı gövde yapısı ve çift EPDM kauçuk contaları sayesinde ısı iletim katsayısını Uf 1.0 seviyelerine indirerek mükemmel yalıtım sağlar.' },
      { title: 'Şehir Gürültüsüne Karşı Akustik Duvar', desc: 'Asfalt sesi, korna ve dış gürültüleri 45 desibele kadar sönümler, evinizde sessiz ve huzurlu bir yaşam alanı sunar.' },
      { title: 'Galvanizli Çelik İç Destek Sacı', desc: 'Profillerin içine boydan boya yerleştirilen paslanmaz çelik saclar pencerenin statik yapısını güçlendirir, sarkma ve rüzgardan sarkmayı önler.' },
      { title: 'Zengin Antrasit ve Ahşap Laminasyon', desc: 'Modern mimarinin gözdesi mat antrasit gri başta olmak üzere, solmayan, soyulmayan 20\'den fazla renkli folyo kaplama seçeneği mevcuttur.' },
      { title: 'Çok Noktalı Güvenli Kilitleme', desc: 'Pencere kanadı kapatıldığında dört bir yandan gövdeye kilitlenen mantar başlıklı emniyet pimleri sayesinde hırsızlığa karşı yüksek dirençlidir.' },
      { title: 'Kolay Temizlik ve Sıfır Boya', desc: 'Ahşap pencereler gibi periyodik boya, cila gerektirmez. Sararma yapmayan özel antistatik formülü sayesinde nemli bezle silinmesi yeterlidir.' },
    ],
    specs: [
      'Profil Genişliği: 70mm, 76mm veya 80mm taban genişliğine sahip premium seriler',
      'Odacık Sayısı: Isı ve ses yalıtımını kademelendiren 5, 6 veya 7 odacıklı iç gövde mimarisi',
      'Conta Sistemi: Fabrikasyon çıkışlı, kaynak olabilen TPE veya EPDM çift sızdırmazlık contası',
      'Profil Isı Geçirgenliği: Uf ≤ 1.0 - 1.2 W/(m²·K) aralığında yüksek enerji tasarruf sınıfı',
      'Destek Sacı: Profil içine milimetrik yerleştirilen 1.5mm - 2.0mm et kalınlığında galvanizli çelik sac',
      'Donanım Teknolojisi: Çift açılım, vasistas ve sürme açılımlara uygun ağır hizmet kilit mekanizmaları',
      'Cam Kalınlığı: 24mm\'den 44mm\'ye kadar akustik lamine ve üçlü cam birim desteği'
    ],
    faq: [
      {
        question: 'PVC pencere takıldıktan sonra rüzgar veya ıslık sesi gelmesi neden olur?',
        answer: 'Bu durum tamamen iki hatadan kaynaklanır: Ya montaj sırasında pencerelerin etrafına sıkılan poliüretan köpükte boşluklar kalmıştır ya da pencerelerin kilit mekanizmalarındaki "Yaz-Kış ayarı" (baskı ayarı) yapılmamıştır. Biz montajlarımızda köpükleme sonrası dıştan özel sızdırmazlık silikonları çekiyor ve pencerelerin tam kapanma ayarlarını eksiksiz yapıyoruz. Bu sayede fırtınada bile kesinlikle ıslık veya hava sesi gelmez.',
      },
      {
        question: 'Renkli lamine (antrasit vb.) PVC pencereler güneşte soyulur veya solar mı?',
        answer: 'Piyasada merdiven altı kaplanan ucuz profillerde soyulma görülebilir. Ancak bizim kullandığımız renkli profiller orijinal fabrika çıkışlı, Alman Renolit lamine folyo teknolojisine sahiptir. Bu folyolar UV ışınlarına karşı tam korumalıdır; güneşte solma, kabarma veya soyulma yapmayacağına dair uluslararası sertifikalara sahiptir.',
      },
    ],
    relatedIds: ['aluminyum-dograma', 'motorlu-panjur', 'sineklik'],
  },

  // ── 12. SİNEKLİK ─────────────────────────────────────────────────────────
  {
    id: 'sineklik',
    name: 'Sineklik Sistemleri',
    desc: 'Pencereler, kapılar ve balkon kapıları için sivrisinek, haşere ve polen girişini %100 engelleyen alüminyum çerçeveli sineklik çözümleri imalatı.',
    image: '/images/sineklik_result.webp',
    title: 'Sineklik Modelleri ve Fiyatları | İstanbul Sineklik İmalatı',
    metaDescription: 'İstanbul Anadolu Yakası sineklik imalatı. Pileli, menteşeli, sürmeli ve kedi sinekliği modellerinde kaliteli fiberglas tül ve fabrikadan en uygun fiyatlar.',
    ogImage: '/images/sineklik_result.webp',
    h1: 'Profesyonel Sineklik Sistemleri',
    tagline: 'Kimyasal İlaçlar Kullanmadan Evinizi Sinek ve Haşerelerden Koruyun',
    intro:
      'Sineklik sistemlerimiz; yaz aylarında evlerinizi sinek, sivrisinek, arı, karasinek ve her türlü haşereden kimyasal ilaçlara başvurmadan korumanın en doğal, sağlıklı ve çevreci yoludur. Pencerelerinizin veya kapılarınızın markası ne olursa olsun (PVC, Alüminyum, Ahşap), doğramanın rengine birebir uyumlu alüminyum çerçevelerle özel ölçü imalat yapıyoruz. Sistemlerimizde kullandığımız tüller sıradan plastik sineklik telleri değildir; yanmaya, yırtılmaya ve güneşin UV ışınlarına karşı olağanüstü dayanıklı, gözenek yapısı mikron seviyesinde olan orijinal fiberglas tüllerdir. Bu özel tüller dışarıdaki manzarayı ve içeriye girecek taze hava akışını kesinlikle engellemez, evinizin havalandırma performansını korur. Menteşeli, cırt cırtlı, rulo, sürmeli ve evcil hayvan sahiplerine özel yırtılmaz çelik telli "Kedi Sinekliği" modellerimizle hizmetinizdeyiz.',
    benefits: [
      { title: '%100 Haşere ve Sinek Koruması', desc: 'En küçük tatarcık sivrisineğinin bile geçemeyeceği milimetrik mesh gözenek yapısıyla tam koruma sağlar.' },
      { title: 'Yırtılmaz Fiberglas Tül Yapısı', desc: 'Güneş altında gevreyip çıt kırıldım hale gelmez, sigara izmariti veya ısı karşısında alev almaz, uzun ömürlüdür.' },
      { title: 'Doğrama Rengine Birebir Uyum', desc: 'Alüminyum profillerimizi pencerelerinizin rengine (antrasit gri, ahşap desen, beyaz vb.) fırın boya ile birebir eşliyoruz.' },
      { title: 'Evcil Hayvanlar İçin Kedi Sinekliği', desc: 'Kedi ve köpek tırnaklarının yırtamayacağı özel yüksek mukavemetli yırtılmaz çelik tül ve emniyetli kilit sistemli modellerimiz mevcuttur.' },
      { title: 'Kolay Sökülüp Temizlenebilme', desc: 'Menteşeli ve bazı pileli modellerimiz kış aylarında yerinden kolayca sökülüp banyoda yıkanabilir, baharda tekrar takılabilir.' },
      { title: 'Görüş Alanını Engellemez', desc: 'Kömür grisi özel tül rengi sayesinde içeriden dışarıya bakıldığında yokmuş gibi görünür, gözü yormaz, manzarayı bozmaz.' },
    ],
    specs: [
      'Tül Malzemesi: UV dayanımlı, yanmaz fiberglas (cam elyafı) veya paslanmaz çelik tel örgü',
      'Mesh Gözenek Sıklığı: 18×16 mesh (inç başına gözenek sayısı - maksimum hava ve haşere koruma dengesi)',
      'Çerçeve Profili: Paslanmaz ve hafif, fırın boyalı 6063 T5 alüminyum ekstrüzyon profil',
      'Köşe Takozları: Isıya ve kırılmaya dayanıklı birinci kalite ABS plastik köşe bağlantıları',
      'Mekanizma Alternatifleri: Pileli (akordiyon), Menteşeli, Stor (rulo), Sürmeli raylı ve Sabit sineklik',
      'Tutamak ve Kilit: Ergonomik gizli tutamaklar ve rüzgarda açılmayı önleyen çıtçıt kilit setleri',
      'Montaj Tekniği: Doğramaya zarar vermeyen akıllı vidalı veya vidalanmayan klipsli montaj seçeneği'
    ],
    faq: [
      {
        question: 'Kedi sinekliği normal sineklikten neden farklı olmalıdır, kedim aşağı düşebilir mi?',
        answer: 'Normal sineklik tülleri fiberglastır ve kediler tırnaklarıyla bu tülleri yırtıp aşağı düşebilir. Ayrıca normal sinekliklerin kilitleri kedinin yaslanma ağırlığıyla açılabilir. "Kedi Sinekliği" modellerimizde yırtılmaz mikro çelik teller veya kalın tırnak dayanımlı "Pet Screen" tülleri kullanılır. Ek olarak kapı kilidi olarak mukavemetli metal sürmeli kilitler takılır. Kedinizin güvenliği için normal sineklik kesinlikle kullanılmamalıdır.',
      },
      {
        question: 'Sinekliklerin kışın sökülmesi zorunlu mudur?',
        answer: 'Zorunlu değildir çünkü alüminyum çerçeve ve fiberglas tül kar, don ve yağmurdan etkilenmez. Ancak menteşeli modelleri kışın söküp kaldırmak, tülün ömrünü daha da uzatır ve pencerelerin kışlık temizliğini kolaylaştırır. Pileli sineklikler ise kasa içinde tamamen kapalı konuma getirilerek kış boyunca rüzgardan korunabilir.',
      },
    ],
    relatedIds: ['pileli-sineklik', 'plastik-dograma', 'motorlu-panjur'],
  },

  // ── 13. PİLELİ SİNEKLİK ─────────────────────────────────────────────────
  {
    id: 'pileli-sineklik',
    name: 'Pileli Sineklik',
    desc: 'Açılırken odanın içine yer kaplamayan, tülü akordiyon şeklinde katlanıp gizlenebilen, modern ve lüks pileli sineklik sistemleri imalatı.',
    image: '/images/sineklik_result.webp',
    title: 'Pileli Sineklik Fiyatları İstanbul | Akordiyon Sineklik',
    metaDescription: 'İstanbul pileli (akordiyon) sineklik imalatı. Yatay ve dikey açılım, kapılara özel çift kanatlı pileli modeller, katlanır sineklikte fabrikadan şok fiyatlar.',
    ogImage: '/images/sineklik_result.webp',
    h1: 'Pileli (Akordiyon) Sineklik Sistemleri',
    tagline: 'Kapı ve Pencereler İçin İçeriye Doğru Yer Kaplamayan En Estetik Sineklik Modeli',
    intro:
      'Pileli sineklik sistemleri (akordiyon sineklik), modern pencerelerin ve özellikle balkona/terasa açılan kapıların en konforlu ve estetik sineklik çözümüdür. Bu sistemlerde sineklik tülü katlanarak pile haline getirilmiştir ve ray üzerinde sağa veya sola kaydırıldığında bir akordiyon gibi katlanarak kasanın içinde tamamen gizlenir. Menteşeli sineklikler gibi dışarıya veya içeriye doğru açılarak balkon kapınızın önündeki alanı işgal etmez, stor sineklikler gibi yukarı tırmanırken yay atma veya bozulma riski taşımaz. Kadıköy, Ümraniye, Ataşehir\'deki lüks dairelerde, sürme kapılarda ve cam balkon sistemlerinin üzerine ek katman olarak kusursuzca monte edilir. Tek elle, istediğiniz noktada durdurarak (stoplu mekanizma) rahatça kullanabilirsiniz. Geniş teras kapıları için iki kanadın ortada mıknatısla birleştiği "Duble Pileli Sineklik" modellerimizle devasa açıklıkları sineksiz koruma altına alıyoruz.',
    benefits: [
      { title: 'Sıfır Yer İşgali', desc: 'Kendi kasası içinde yatayda kayarak katlandığı için açılırken odanın veya balkonun içine doğru asla çıkıntı yapmaz.' },
      { title: 'İstenilen Noktada Durma (Stoplu)', desc: 'Yay mekanizması yoktur; sinekliği elinizle nereye çekerseniz orada sabit kalır, aniden fırlayıp elinizi çarpmaz.' },
      { title: 'Geniş Fransız Kapılara Özel Duble Model', desc: 'Sol ve sağ köşeden gelen iki kanat ortada güçlü mıknatıslarla kenetlenir; devasa teras kapıları için benzersizdir.' },
      { title: 'Cam Balkonlar ile %100 Uyumlu', desc: 'İncecik kasa profili sayesinde mevcut cam balkon sistemlerinizin ray dışına monte edilerek balkon keyfinizi sineksiz hale getirir.' },
      { title: 'Güneşte Eğrilmeyen Özel Pileli Tül', desc: 'Tüllerimiz katlanma çizgilerini ömür boyu kaybetmeyen, güneşte sarkma, gevşeme yapmayan özel poliester bazlı fiberglastır.' },
      { title: 'Eşiksiz Alt Ray Alternatifi', desc: 'Kapı zeminlerinde ayak takılmasını önlemek için alt ray yüksekliği sadece 3mm olan tank zincirli lüks modellerimiz mevcuttur.' },
    ],
    specs: [
      'Açılım Yönü: Yatay (sağa/sola sürgülü) veya Dikey (pencereler için yukarı/aşağı)',
      'Tül Teknolojisi: Plise edilmiş (pileli), geometrisini kaybetmeyen, UV dayanımlı fiberglas kumaş',
      'Taşıyıcı İpler: Kopmaya ve sürtünmeye dayanıklı yüksek mukavemetli orijinal paraşüt ipi mekanizması',
      'Çerçeve Şasesi: 6063 T5 elektrostatik fırın boyalı, et kalınlığı yüksek alüminyum profil',
      'Alt Ray Yapısı: Standart modelde 15mm, Eşiksiz kapı modelinde 3mm paletli zincir mekanizması',
      'Sızdırmazlık: Kasa birleşim kenarlarında boydan boya güçlü neodyum mıknatıs şeritleri',
      'Maksimum Genişlik: Tek kanatta 150cm, Duble (çift) kanatlı kapılarda 300cm\'e kadar geniş koruma cephesi'
    ],
    faq: [
      {
        question: 'Pileli sinekliğin ipleri kopar mı, tamiri mümkün müdür?',
        answer: 'Sistemlerimizde tülün dengede kalmasını sağlayan yüksek mukavemetli, sürtünmeye dirençli özel paraşüt ipleri kullanıyoruz. Normal kullanımda bu ipler kesinlikle kopmaz. Ancak evcil hayvan ısırması veya kesici bir aletle zarar görmesi durumunda, tüm çerçeveyi atmaya gerek yoktur. Fabrikamızda sadece ip ve tül yenilemesi (kartuş değişimi) yapılarak sinekliğiniz çok uygun fiyata ilk günkü haline getirilir.',
      },
      {
        question: 'Akordiyon sineklik tülü tozlandığında nasıl temizlenir?',
        answer: 'Temizliği oldukça pratiktir. Sineklik tülünü tamamen kapatıp (yani açık konuma getirip katlayarak) elektrikli süpürgenin fırçalı ucuyla tozunu çekebilirsiniz. Ya da sinekliği tamamen açıp tülü nemli, sabunlu bir bezle yukarıdan aşağıya doğru nazikçe silebilirsiniz. Tülün katlanma yapısını bozmamak için çok sert bastırmamanız yeterlidir.',
      },
    ],
    relatedIds: ['sineklik', 'plastik-dograma', 'aluminyum-dograma'],
  },

  // ── 14. KIŞ BAHÇESİ ──────────────────────────────────────────────────────
  {
    id: 'kis-bahcesi',
    name: 'Kış Bahçesi',
    desc: 'Villalar, müstakil evler ve teraslar için alüminyum/çelik statik taşıyıcılı, tavanı ve yanları tamamen ısıcamlı lüks kış bahçesi projeleri tasarımı ve anahtar teslim kurulumu.',
    image: '/images/cambalkon_result.webp',
    title: 'Kış Bahçesi Sistemleri | İstanbul Anahtar Teslim Proje',
    metaDescription: 'İstanbul anahtar teslim kış bahçesi imalatı. Statik hesaplı alüminyum/çelik konstrüksiyon, ısıcamlı tavan, cam duvarlar ve lüks villa teras çözümleri.',
    ogImage: '/images/cambalkon_result.webp',
    h1: 'Anahtar Teslim Kış Bahçesi Projeleri',
    tagline: 'Evinize Değer Katan, Gökyüzünü İçeri Taşıyan Lüks Cam Oda Tasarımları',
    intro:
      'Kış bahçesi sistemleri, betonarme duvarların boğucu etkisinden sıyrılarak, bahçenizin veya terasınızın ortasında gökyüzünü ve doğayı kesintisiz izleyebileceğiniz, evinizin en prestijli, lüks ve konforlu odasını inşa etme sürecidir. İstanbul genelinde villalar, penthouse daireler ve restoranlar için mimari projelendirme, statik mühendislik hesapları ve anahtar teslim montaj dahil tam kapsamlı kış bahçesi hizmeti sunuyoruz. Sistemlerimizin taşıyıcı konstrüksiyonu, ağır kar yüklerine ve şiddetli fırtınalara karşı mukavemetli özel statik alüminyum şaseler veya çelik iskeletlerden oluşur. Çatı kısmında kesinlikle kırılmaz, UV filtreli lamine temperli güvenlik camları veya yüksek yalıtımlı polikarbonat paneller kullanıyoruz. Yan cephelerde ise sürgülü, katlanır veya motorlu giyotin Isıcam Konfor sistemlerimizi entegre ederek, kışın kar yağarken bile tişörtünüzle oturabileceğiniz tam yalıtımlı, sıcacık bir yaşam alanı vaat ediyoruz.',
    benefits: [
      { title: 'Anahtar Teslim Mimari Proje', desc: 'Ev ve bahçe yapınıza en uygun 3D görselleştirme, statik mühendislik hesapları ve temel dahil komple kurulum desteği sunulur.' },
      { title: 'Dört Mevsim Gerçek Oda Konforu', desc: 'Gelişmiş ısı bariyerli profiller ve argon gazlı çift camlar sayesinde, kışın ısıtması, yazın soğutması normal bir odadan farksızdır.' },
      { title: 'Kırılmaz Güvenlikli Çatı Camları', desc: 'Çatıda kullanılan 4+4 lamine veya temperli camlar, yukarıdan düşebilecek taş, kiremit veya dolu darbelerine karşı tam korumalıdır, asla kırılıp aşağı düşmez.' },
      { title: 'Mülkünüze Olağanüstü Değer Katar', desc: 'Yapınıza modern mimari bir vizyon ve prestij kazandırır; villanızın veya dairenizin ticari değerini katlar.' },
      { title: 'Güneş Kontrolü ve Serinlik', desc: 'Çatıda ve yanlarda kullanılan reflekte veya Solar Low-E camlar, yazın güneş ışınlarının yakıcı etkisini %70 yansıtarak içeriyi serin tutar.' },
      { title: 'Entegre Gökyüzü Havalandırması', desc: 'Uzaktan kumandalı motorlu çatı pencereleri sayesinde, içerideki sıcak hava ve nem saniyeler içinde yukarıdan tahliye edilir.' },
    ],
    specs: [
      'Taşıyıcı İskelet: Statik hesaplı ağır hizmet çelik konstrüksiyon veya kalın kesitli alüminyum taşıyıcı kolonlar',
      'Çatı Cam Kombinasyonu: 6mm Temperli (Dış) + 16mm Argon Gazlı Ara Boşluk + 4+4mm Lamine Güvenlik Camı (İç)',
      'Yan Cephe Duvarları: Isıcam Konforlu sürme, katlanır veya giyotin cam cephe sistemleri entegrasyonu',
      'Isı Yalıtım Katsayısı: Sistem geneli Uw ≤ 1.2 W/(m²·K) yüksek yalıtım enerji tasarruf sınıfı',
      'Drenaj Altyapısı: Taşıyıcı kolonların içine gizlenmiş, dışarıdan görünmeyen gizli yağmur oluğu ve iniş boruları',
      'Çatı Eğimi: Su birikmesini önleyen, karın kaymasını sağlayan minimum 8 - maksimum 30 derece çatı eğimi',
      'Opsiyonel Aksesuarlar: Uzaktan kumandalı motorlu çatı perdesi, LED aydınlatma spotları, şömine bacası entegrasyonu'
    ],
    faq: [
      {
        question: 'Kış bahçesi yaptırmak için belediyeden imar izni / ruhsat almak gerekir mi?',
        answer: 'Kış bahçeleri, çatısı ve yanları tamamen camdan oluşan, tescilli kalıcı betonarme duvar niteliği taşımayan "hafif yapı" sınıfındadır. Ancak mülkünüzün imar durumuna, sitenizin yönetim planına ve belediyelerin yönetmeliklerine göre izin süreçleri değişiklik gösterebilir. Genellikle müstakil bahçelerde ve teraslarda açılır-kapanır sistemler sorun yaratmazken, sabit sistemlerde imar sınırlarına dikkat edilmelidir. Keşif sırasında mimar ekibimiz bu konuda size ücretsiz danışmanlık sağlamaktadır.',
      },
      {
        question: 'Kış bahçesinin tavanı cam olduğu için yağmurda çok ses yapar mı veya su sızdırır mı?',
        answer: 'Çatıda kullandığımız çift cam üniteleri kalın ve lamine yapıda olduğu için yağmur damlalarının çıkardığı sesi emerek içeriye minimum oranda iletir, rahatsızlık vermez. Su sızdırmazlığı konusunda ise, alüminyum profillerimizin birleşim noktalarında yüksek dayanımlı epoksi macunlar ve dış cephe silikonları (structural silikon) kullanıyoruz. Ayrıca iskelet içine entegre gizli su tahliye oluklarımız sayesinde sağanak fırtınalarda bile içeriye tek damla su sızması imkansızdır.',
      },
    ],
    relatedIds: ['isicamli-cam-balkon', 'pergola', 'cam-balkon'],
  },

  // ── 15. PERGOLA ───────────────────────────────────────────────────────────
  {
    id: 'pergola',
    name: 'Pergola',
    desc: 'Motorlu, uzaktan kumandalı katlanır lamel yapısına ve entegre LED aydınlatma şeritlerine sahip akıllı biyoklimatik alüminyum pergola sistemleri imalatı.',
    image: '/images/cambalkon_result.webp',
    title: 'Alüminyum Pergola Fiyatları | Motorlu Otomatik Tente',
    metaDescription: 'İstanbul motorlu otomatik alüminyum pergola sistemleri imalatı. Bioclimatic katlanır lamel, entegre LED aydınlatma, su tahliyeli lüks teras tenteleri.',
    ogImage: '/images/cambalkon_result.webp',
    h1: 'Motorlu Alüminyum Pergola Sistemleri',
    tagline: 'Teras ve Bahçeleriniz İçin Uzaktan Kumandalı Akıllı Gölgelendirme ve Çatı Çözümleri',
    intro:
      'Motorlu otomatik alüminyum pergola sistemlerimiz (biyoklimatik çatı), teraslarınızı, bahçelerinizi veya villa verandalarınızı dış hava şartlarından bağımsız, lüks bir açık hava yaşam alanına dönüştürmenin en modern ve akıllı yoludur. Sistemimizin tavanı kendi ekseninde dönebilen ve geriye doğru katlanabilen özel alüminyum lamellerden oluşur. Uzaktan kumanda yardımıyla lamellerin açısını ayarlayarak gölge miktarını, içeri girecek gün ışığını ve doğal havalandırmayı tam olarak kontrol edebilirsiniz. Yağmur başladığında sisteme entegre akıllı yağmur sensörleri sayesinde tavan otomatik olarak tamamen kapanır. Özel tasarım taşıyıcı oluk profillerimiz, tavan yüzeyine düşen yağmur suyunu hiçbir sızdırma yapmadan kolonların içinden zemine deşarj eder. Etrafını sürgülü cam veya zip perde ile kapatarak tam bir kapalı kış odası elde edebileceğiniz, entegre LED aydınlatmalı premium bir dış mekan ürünüdür.',
    benefits: [
      { title: 'Uzaktan Kumandalı Bioclimatic Çatı', desc: 'Lamelleri 0-90 derece arası dilediğiniz açıda durdurarak gölgeyi, taze hava akışını ve güneşi tam istediğiniz gibi yönetebilirsiniz.' },
      { title: 'Akıllı Yağmur ve Rüzgar Sensörü', desc: 'Siz evde olmasanız bile aniden başlayan sağanak yağışı veya fırtınayı algılayan sensörler tavanı otomatik kapatır, terasınızı korur.' },
      { title: 'Entegre Gizli LED Aydınlatma', desc: 'Alüminyum lamellerin içine gömülen dimmer özellikli (ışık şiddeti ayarlanabilir) LED spotlar veya şerit aydınlatmalar ile gece harika bir ambiyans sunar.' },
      { title: 'Asla Çürümez Ağır Şase Alüminyum', desc: 'Ahşap veya demir tenteler gibi çürüme, paslanma, branda yırtılması yapmaz; kalın alüminyum gövdesi boya bakım maliyeti çıkarmaz.' },
      { title: 'Gizli Su Tahliye Otomasyonu', desc: 'Lamellerden süzülen sular dışarı taşmaz; entegre gizli saçaklar yardımıyla kolon iskeletinin içinden gizlice zemine akıtılır.' },
      { title: 'Kar Yüküne Karşı Tam Mukavemet', desc: 'Kumaş tentelerin aksine, sert alüminyum paneller kışın biriken yoğun kar yükünü eğrilmeden, kırılmadan güvenle taşır.' },
    ],
    specs: [
      'İskelet ve Lamel Malzemesi: 6063 T6 yüksek mukavemetli, et kalınlığı yüksek yapısal mimari alüminyum',
      'Tavan Motoru Sürücüsü: SOMFY io / BECKER yüksek torklu, engel algılama özellikli tüp motor mekanizması',
      'Yüzey Koruma Boyası: AkzoNobel mimari sınıf elektrostatik toz boya (solmama ve soyulmama garantili)',
      'Aydınlatma Donanımı: Samsung / Osram 24V DC entegre LED spot veya linear şerit aydınlatma sistemi',
      'Kolonsuz Maksimum Ölçü: Tek modülde 4.5 metre genişlik × 6.0 metre ileri açılım kolonsuz tasarım desteği',
      'Sızdırmazlık Fitilleri: Lameller arası ses önleyici EPDM hava contaları ve profil içi poliüretan izolasyon dolgusu',
      'Drenaj Kapasitesi: Saatte metrekare başına 150 litre suyu tahliye edebilen tescilli gizli drenaj yapısı'
    ],
    faq: [
      {
        question: 'Alüminyum pergola su geçirir mi, lameller kapalıyken aralardan sızma olur mu?',
        answer: 'Kesinlikle hayır. Alüminyum lamellerimizin birleşim kulaklarında boydan boya çift tırnaklı EPDM kauçuk contalar yer alır. Lameller kumanda ile tam kapalı konuma getirildiğinde bu contalar birbirine preslenerek kenetlenir. Bu sayede en şiddetli sağanak yağışlarda dahi aralardan aşağıya tek bir damla su sızması mümkün değildir.',
      },
      {
        question: 'Otomatik pergolanın etrafını sonradan camla kapatıp kış bahçesi yapabilir miyim?',
        answer: 'Evet, sistemimizin ana taşıyıcı kolonları ve yan kirişleri tam da bu ihtiyaca yönelik, yüksek taşıma kapasiteli kare formda tasarlanmıştır. Pergolanız kurulduktan aylar sonra bile, kolon aralarına sürgülü cam balkon, motorlu giyotin cam veya rüzgar kesici dikey Zip Screen perdeler ekleyerek alanınızı komple kapalı, tam yalıtımlı lüks bir kış odasına dönüştürebilirsiniz.',
      },
    ],
    relatedIds: ['kis-bahcesi', 'cam-balkon', 'giyotin-cam'],
  },
];

// ── Yardımcı fonksiyonlar ─────────────────────────────────────────────────────

/** ID ile sayfa datası getir */
export function getServiceById(id: string): ServicePageData | undefined {
  return servicePages.find((p) => p.id === id);
}

/** Navigation dropdown için liste */
export const serviceNavItems = servicePages.map((p) => ({
  label: p.name,
  id: p.id,
  href: `/urunler/${p.id}`,
}));