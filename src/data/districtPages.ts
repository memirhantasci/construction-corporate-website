export interface DistrictPageData {
  slug: string;
  district: string;
  title: string;
  description: string;
  cardDescription: string;
  heroSubtitle: string;
  intro: string;
  sections: { heading: string; body: string }[];
  neighborhoods: string[];
}

export const districtPages: Record<string, DistrictPageData> = {
  "atasehir-cam-balkon-sineklik": {
    slug: "atasehir-cam-balkon-sineklik",
    district: "Ataşehir",
    title: "Ataşehir Cam Balkon & Sineklik Sistemleri",
    description:
      "Ataşehir cam balkon, katlanır cam balkon, ısıcamlı cam balkon ve pileli sineklik montajı. Küçükbakkalköy, İçerenköy, Barbaros ve tüm Ataşehir semtlerine ücretsiz keşif.",
    cardDescription: "Merkez atölyemiz ve Küçükbakkalköy servisi",
    heroSubtitle: "Ataşehir merkezli ekip, aynı gün keşif imkânı",
    intro:
      "Dükkanımız Ataşehir Küçükbakkalköy'de; bu yüzden ilçe genelinde en hızlı servisi biz veriyoruz. İçerenköy, Barbaros, Aşık Veysel ve Yeni Sahra mahallelerinde yüzlerce cam balkon ve sineklik işi tamamladık. Site yönetimine uygun çalışır, iş bitiminde alanı temiz bırakırız.",
    neighborhoods: [
      "Küçükbakkalköy",
      "İçerenköy",
      "Barbaros",
      "Aşık Veysel",
      "Yeni Sahra",
      "Esatpaşa",
    ],
    sections: [
      {
        heading: "Ataşehir'de Katlanır Cam Balkon Montajı",
        body: "Ataşehir'deki yeni sitelerin balkonları genelde geniş ve köşeli. Katlanır cam balkon sistemlerimiz bu alanları yağmur ve rüzgârdan korur, yazın camı tamamen açarak ferah bir teras sunar. Profil ve cam kalitesini birlikte seçeriz; ucuz malzeme satmayız, garantili işçilik veririz.",
      },
      {
        heading: "Isıcamlı Cam Balkon ile Enerji Tasarrufu",
        body: "Ataşehir'in yüksek katlı bloklarında ısıcamlı cam balkon ciddi fark yaratır. Çift cam yapısı ısı kaybını azaltır, dış gürültüyü keser. Balkonunuzu kışın ek oda gibi kullanabilirsiniz. Montajı kendi ustalarımız yapar, contaları su sızdırmazlık testinden geçirir.",
      },
      {
        heading: "Pileli Sineklik ve Kedi Sinekliği",
        body: "Ataşehir sitelerinde pileli sineklik talebi yıl boyu devam ediyor. Pencere ve balkon kapılarına ölçüye özel sineklik üretiyoruz. Evcil hayvan sahipleri için kedi sinekliği modellerimiz var; pet kapısı sayesinde kediniz rahatça çıkıp girer, sinek içeri giremez.",
      },
    ],
  },
  "kadikoy-cam-balkon-sineklik": {
    slug: "kadikoy-cam-balkon-sineklik",
    district: "Kadıköy",
    title: "Kadıköy Cam Balkon & Sineklik Sistemleri",
    description:
      "Kadıköy cam balkon, katlanır cam balkon, ısıcamlı cam balkon ve pileli sineklik montajı. Moda, Bostancı, Göztepe ve tüm Kadıköy semtlerine ücretsiz keşif.",
    cardDescription: "Moda, Bostancı, Göztepe ve sahil hattı",
    heroSubtitle:
      "Moda'dan Bostancı'ya, deniz manzaralı balkonlara özel çözümler",
    intro:
      "Kadıköy'de yıllardır balkon ve pencere işleri yapıyoruz. Deniz havası ve rüzgâr Kadıköy balkonlarında kaliteli malzeme şart. Moda, Bostancı, Göztepe, Fenerbahçe ve Caferağa semtlerine servisimiz vardır; keşif ekibimiz aynı gün randevu verebilir.",
    neighborhoods: [
      "Moda",
      "Bostancı",
      "Göztepe",
      "Fenerbahçe",
      "Caferağa",
      "Suadiye",
    ],
    sections: [
      {
        heading: "Kadıköy'de Katlanır Cam Balkon Uygulamaları",
        body: "Dar sokaklı apartmanlardan geniş teraslı villalara kadar her ölçüye katlanır cam balkon kuruyoruz. Paslanmaz aksesuarlı profiller, ısıcamlı cam balkon seçenekleriyle sunuluyor. Yazın balkonu açıp ferahlatıyor, kışın ısı kaybını minimuma indiriyorsunuz.",
      },
      {
        heading: "Isıcamlı Cam Balkon ile Dört Mevsim Konfor",
        body: "Denize bakan dairelerde ısıcamlı cam balkon tercih ediyoruz. Çift cam rüzgâr sesini azaltır, ısı yalıtımını artırır. Profil rengini cepheye göre seçiyoruz; montajı kendi ekibimiz yapıyor, iş bitiminde temiz teslim ediyoruz.",
      },
      {
        heading: "Pileli Sineklik ve Kedi Sinekliği Çözümleri",
        body: "Kadıköy'de eski binalardan yeni yapılara pileli sineklik montajı yoğun talep görüyor. Kapı ve pencere sinekliklerini atölyemizde hazırlıyoruz. Kedi sinekliği modellerimizle evcil hayvan sahiplerine pratik çözüm sunuyoruz.",
      },
    ],
  },
  "umraniye-cam-balkon-sineklik": {
    slug: "umraniye-cam-balkon-sineklik",
    district: "Ümraniye",
    title: "Ümraniye Cam Balkon & Sineklik Sistemleri",
    description:
      "Ümraniye yeni konut projeleri ve site dairelerine katlanır cam balkon, ısıcamlı cam balkon, pileli sineklik ve kedi sinekliği montajı. Ücretsiz keşif.",
    cardDescription: "Yeni konut projeleri ve siteler",
    heroSubtitle: "Finans Merkezi çevresi ve yeni yapılara hızlı montaj",
    intro:
      "Ümraniye son yıllarda Anadolu Yakası'nın en hızlı gelişen ilçelerinden. Finans Merkezi çevresindeki projeler, Çamlık ve Altınşehir sitelerinde cam balkon ve sineklik işleri yapıyoruz. Site kurallarına uygun, sessiz çalışan ekibimizle teslim tarihine sadık kalıyoruz.",
    neighborhoods: [
      "Çamlık",
      "Altınşehir",
      "Finans Merkezi",
      "Parseller",
      "Şerifali",
      "Yamanevler",
    ],
    sections: [
      {
        heading: "Yeni Konutlara Katlanır Cam Balkon",
        body: "Ümraniye'deki yeni yapıların çoğu geniş balkonlu. Katlanır cam balkon bu alanları yağmurda koruyup yazın oturma alanına çeviriyor. Site giriş izinleri ve asansör taşıma planlamasını biz hallediyoruz.",
      },
      {
        heading: "Isıcamlı Cam Balkon ile Enerji Tasarrufu",
        body: "Yüksek katlı bloklarda rüzgâr etkisi ciddi. Isıcamlı cam balkon ısıtma giderini düşürür, gürültüyü keser. Profil contalarımız su sızdırmazlık testinden geçiyor; montaj sonrası garanti belgesi veriyoruz.",
      },
      {
        heading: "Pileli Sineklik ve Kedi Sinekliği Montajı",
        body: "Ümraniye sitelerinde pileli sineklik talebi artıyor. Balkon kapılarına sürme, pencerelere menteşeli sineklik takıyoruz. Kedi sinekliği sistemlerimiz pet geçişine izin verirken sinekleri dışarıda tutuyor.",
      },
    ],
  },
  "maltepe-cam-balkon-sineklik": {
    slug: "maltepe-cam-balkon-sineklik",
    district: "Maltepe",
    title: "Maltepe Cam Balkon & Sineklik Sistemleri",
    description:
      "Maltepe cam balkon, katlanır ve ısıcamlı cam balkon sistemleri, pileli sineklik ve kedi sinekliği. Başıbüyük, Cevizli, Küçükyalı semtlerine servis.",
    cardDescription: "Sahil şeridi ve iç mahalleler",
    heroSubtitle: "Başıbüyük'ten Küçükyalı'ya yerinde keşif",
    intro:
      "Maltepe'de sahil hattındaki apartmanlardan Başıbüyük, Cevizli ve Küçükyalı iç mahallelerine kadar iş yapıyoruz. Deniz tuzuna dayanıklı profil seçeneklerimiz sahil dairelerinde fark yaratıyor. Fiyat teklifini keşif sonrası net yazıyoruz.",
    neighborhoods: [
      "Başıbüyük",
      "Cevizli",
      "Küçükyalı",
      "Feyzullah",
      "Girne",
      "Altıntepe",
    ],
    sections: [
      {
        heading: "Maltepe'de Katlanır Cam Balkon Sistemleri",
        body: "Maltepe balkonları genelde geniş. Katlanır cam balkon ile dört mevsim değerlendirebilirsiniz. Cam panelleri tamamen toplanır; profil sistemlerimiz sessiz kayar, paslanmaya karşı korumalıdır.",
      },
      {
        heading: "Isıcamlı Cam Balkon ile Balkonunuzu Odaya Çevirin",
        body: "Rüzgârlı günlerde ısıcamlı cam balkon ciddi konfor sağlıyor. Çift cam buhar tutmaz, balkonunuzu çay odası veya çalışma alanı olarak kullanabilirsiniz.",
      },
      {
        heading: "Pileli Sineklik ve Kedi Sinekliği Hizmeti",
        body: "Eski apartman pencerelerinden yeni site girişlerine pileli sineklik montajı yapıyoruz. Kedi sinekliği modellerimiz pet kapısıyla pratik kullanım sunar. Sineklik tamiri için de arayabilirsiniz.",
      },
    ],
  },
  "uskudar-cam-balkon-sineklik": {
    slug: "uskudar-cam-balkon-sineklik",
    district: "Üsküdar",
    title: "Üsküdar Cam Balkon & Sineklik Sistemleri",
    description:
      "Üsküdar cam balkon, katlanır cam balkon, ısıcamlı cam balkon, pileli sineklik ve kedi sinekliği. Kuzguncuk, Altunizade, Bulgurlu semtlerine montaj.",
    cardDescription: "Boğaz manzaralı balkonlar",
    heroSubtitle: "Kuzguncuk'tan Altunizade'ye özenli uygulama",
    intro:
      "Üsküdar'ın tarihi dokusundan yeni yapılarına geniş yelpazede hizmet veriyoruz. Kuzguncuk, Altunizade, Bulgurlu ve Çengelköy'de referans işlerimiz var. Boğaz manzaralı balkonlarda cam kalitesi ve estetik bir arada olmalı.",
    neighborhoods: [
      "Kuzguncuk",
      "Altunizade",
      "Bulgurlu",
      "Çengelköy",
      "Beylerbeyi",
      "Acıbadem",
    ],
    sections: [
      {
        heading: "Üsküdar'da Katlanır Cam Balkon Montajı",
        body: "Manzara odaklı balkonlarda katlanır cam balkon camı kenara toplayarak görüşü kapatmaz. İnce profil serilerimiz estetik kaybı minimum tutar. Eski binalarda güvenli montaj için gerekli önlemleri alıyoruz.",
      },
      {
        heading: "Isıcamlı Cam Balkon ile Sessiz Balkon",
        body: "Yokuşlu sokaklarda rüzgâr ve trafik sesi rahatsız edici olabiliyor. Isıcamlı cam balkon ses yalıtımını artırır, kışın balkonunuz sıcak kalır.",
      },
      {
        heading: "Pileli Sineklik ve Kedi Sinekliği Çözümleri",
        body: "Ahşap doğramadan PVC'ye pileli sineklik uyumlu montaj yapıyoruz. Her ölçüye özel üretim. Kedi sinekliği talebi zemin kat dairelerde yoğun; pet geçişli modellerimiz dayanıklıdır.",
      },
    ],
  },
  "beykoz-cam-balkon-sineklik": {
    slug: "beykoz-cam-balkon-sineklik",
    district: "Beykoz",
    title: "Beykoz Cam Balkon & Sineklik Sistemleri",
    description:
      "Beykoz cam balkon, katlanır cam balkon, ısıcamlı cam balkon, pileli sineklik ve kedi sinekliği. Kavacık, Çubuklu, Anadoluhisarı semtlerine montaj.",
    cardDescription: "Boğaz kıyısı ve yeşil mahalleler",
    heroSubtitle: "Villa ve müstakil evlere özel cam balkon çözümleri",
    intro:
      "Beykoz'da hem Boğaz kıyısındaki villalarda hem Kavacık ve Çubuklu mahallelerinde cam balkon işleri yapıyoruz. Anadoluhisarı ve Paşabahçe çevresinde geniş teraslı evlerde katlanır cam balkon tecrübemiz var. Yeşil alana bakan balkonlarda sineklik ihtiyacı yaz aylarında ciddi artıyor.",
    neighborhoods: [
      "Kavacık",
      "Çubuklu",
      "Anadoluhisarı",
      "Paşabahçe",
      "Göktürk",
      "Riva",
    ],
    sections: [
      {
        heading: "Beykoz'da Katlanır Cam Balkon",
        body: "Geniş teraslı Beykoz evlerinde katlanır cam balkon balkonu kapalı alana çevirir. Cam tamamen açıldığında manzara korunur. Profil renklerini doğayla uyumlu tonlarda seçebilirsiniz.",
      },
      {
        heading: "Isıcamlı Cam Balkon ile Kış Bahçesi",
        body: "Beykoz'un serin günlerinde ısıcamlı cam balkon balkonunuzu kullanılabilir tutar. Çift cam ısı kaybını azaltır; kış bahçesi gibi kullanan müşterilerimiz var.",
      },
      {
        heading: "Pileli Sineklik ve Kedi Sinekliği",
        body: "Yeşil alana yakın evlerde pileli sineklik şart. Geniş kapı açılımlarına sürme sineklik, pencerelere menteşeli model takıyoruz. Bahçeli evlerde kedi sinekliği talebi de yoğun.",
      },
    ],
  },
  "kartal-cam-balkon-sineklik": {
    slug: "kartal-cam-balkon-sineklik",
    district: "Kartal",
    title: "Kartal Cam Balkon & Sineklik Sistemleri",
    description:
      "Kartal cam balkon, katlanır cam balkon, ısıcamlı cam balkon, pileli sineklik ve kedi sinekliği. Yakacık, Soğanlık, Petrol-İş semtlerine servis.",
    cardDescription: "Yakacık, Soğanlık ve sahil bölgesi",
    heroSubtitle: "Yakacık'tan Soğanlık'a hızlı keşif ekibi",
    intro:
      "Kartal'da Yakacık, Soğanlık ve Petrol-İş mahallelerinde sık iş yapıyoruz. Sahil şeridindeki apartmanlarda tuzlu hava dayanımlı profil kullanıyoruz. Kartal'ın yeni dönüşüm bölgelerinde geniş balkonlu dairelerde katlanır cam balkon montajı yapıyoruz.",
    neighborhoods: [
      "Yakacık",
      "Soğanlık",
      "Petrol-İş",
      "Cevizli",
      "Karlıktepe",
      "Orta",
    ],
    sections: [
      {
        heading: "Kartal'da Katlanır Cam Balkon Montajı",
        body: "Kartal balkonlarına ölçü alarak katlanır cam balkon üretiyoruz. Köşe profilleri sağlam, cam kayması sessiz. İş öncesi plan çıkarıp onayınızı alıyoruz.",
      },
      {
        heading: "Isıcamlı Cam Balkon Uygulaması",
        body: "Soğanlık ve Yakacık'taki yüksek katlı bloklarda ısıcamlı cam balkon rüzgâr ve soğuğu keser. Enerji tasarrufu sağlar, balkon kullanım alanını genişletir.",
      },
      {
        heading: "Pileli Sineklik ve Kedi Sinekliği",
        body: "Kartal genelinde pileli sineklik montajı yapıyoruz. Balkon kapılarına sürme, pencerelere menteşeli sineklik. Kedi sinekliği ile evcil hayvan sahiplerine pratik çözüm sunuyoruz.",
      },
    ],
  },
  "pendik-cam-balkon-sineklik": {
    slug: "pendik-cam-balkon-sineklik",
    district: "Pendik",
    title: "Pendik Cam Balkon & Sineklik Sistemleri",
    description:
      "Pendik cam balkon, katlanır cam balkon, ısıcamlı cam balkon, pileli sineklik ve kedi sinekliği. Kurtköy, Kaynarca, Güzelyalı semtlerine montaj.",
    cardDescription: "Kurtköy, Kaynarca ve havalimanı hattı",
    heroSubtitle: "Kurtköy ve Kaynarca'da yoğun referans",
    intro:
      "Pendik'te Kurtköy, Kaynarca ve Güzelyalı mahallelerinde cam balkon ve sineklik işlerinin büyük kısmını biz yapıyoruz. Yeni konut projeleri hızla artıyor; site dairelerine toplu montaj da organize edebiliriz. Pendik'ten Ataşehir'e geçiş kısa, keşif ekibimiz aynı gün gelebilir.",
    neighborhoods: [
      "Kurtköy",
      "Kaynarca",
      "Güzelyalı",
      "Velibaba",
      "Bahçelievler",
      "Yenişehir",
    ],
    sections: [
      {
        heading: "Pendik'te Katlanır Cam Balkon",
        body: "Pendik'in geniş balkonlu sitelerinde katlanır cam balkon ideal çözüm. Cam panelleri toplanır, balkon yazın açık hava keyfine döner. Profil garantisi ve işçilik belgesi veriyoruz.",
      },
      {
        heading: "Isıcamlı Cam Balkon ile Konfor",
        body: "Kurtköy'deki yeni bloklarda ısıcamlı cam balkon ısı ve ses yalıtımı sağlar. Kışın balkonunuzu kullanmaya devam edebilirsiniz. Cam ve profil seçiminde bütçenize uygun seçenekler sunuyoruz.",
      },
      {
        heading: "Pileli Sineklik ve Kedi Sinekliği",
        body: "Pendik sitelerinde pileli sineklik standart ihtiyaç haline geldi. Ölçüye özel üretim, hızlı montaj. Kedi sinekliği modellerimiz pet sahiplerine yaz aylarında büyük kolaylık sağlıyor.",
      },
    ],
  },
  "sancaktepe-cam-balkon-sineklik": {
    slug: "sancaktepe-cam-balkon-sineklik",
    district: "Sancaktepe",
    title: "Sancaktepe Cam Balkon & Sineklik Sistemleri",
    description:
      "Sancaktepe cam balkon, katlanır cam balkon, ısıcamlı cam balkon, pileli sineklik ve kedi sinekliği. Sarıgazi, Abdurrahmangazi, Veysel Karani semtlerine servis.",
    cardDescription: "Sarıgazi ve yeni yerleşim alanları",
    heroSubtitle: "Sancaktepe'nin gelişen mahallelerine montaj",
    intro:
      "Sancaktepe son yıllarda hızla büyüyen bir ilçe. Sarıgazi, Abdurrahmangazi ve Veysel Karani mahallelerinde yeni yapılara cam balkon ve sineklik montajı yapıyoruz. Aile sitelerinde pileli sineklik ve kedi sinekliği birlikte talep ediliyor; ikisini de aynı gün keşfedebiliriz.",
    neighborhoods: [
      "Sarıgazi",
      "Abdurrahmangazi",
      "Veysel Karani",
      "Samandıra",
      "Mevlana",
      "Yenidoğan",
    ],
    sections: [
      {
        heading: "Sancaktepe'de Katlanır Cam Balkon",
        body: "Yeni sitelerin balkonlarına katlanır cam balkon kuruyoruz. Geniş açılım, sağlam profil, uzun ömürlü aksesuar. Montaj sürecini site yönetimine bildiriyoruz.",
      },
      {
        heading: "Isıcamlı Cam Balkon Montajı",
        body: "Sancaktepe'nin rüzgârlı konumunda ısıcamlı cam balkon balkon konforunu artırır. Çift cam yapısı ısı kaybını azaltır; kış aylarında balkonunuz kullanılabilir kalır.",
      },
      {
        heading: "Pileli Sineklik ve Kedi Sinekliği",
        body: "Sancaktepe'de pileli sineklik fiyatını keşif sonrası net söylüyoruz. Pencere ve kapı sinekliklerini atölyemizde üretiyoruz. Kedi sinekliği ile evcil hayvanınız özgürce dışarı çıkabilir.",
      },
    ],
  },
  "sultanbeyli-cam-balkon-sineklik": {
    slug: "sultanbeyli-cam-balkon-sineklik",
    district: "Sultanbeyli",
    title: "Sultanbeyli Cam Balkon & Sineklik Sistemleri",
    description:
      "Sultanbeyli cam balkon, katlanır cam balkon, ısıcamlı cam balkon, pileli sineklik ve kedi sinekliği. Necip Fazıl, Fatih, Abdurrahmangazi semtlerine montaj.",
    cardDescription: "Aile siteleri ve yoğun konut bölgeleri",
    heroSubtitle: "Sultanbeyli'de uygun fiyat, kaliteli işçilik",
    intro:
      "Sultanbeyli'de Necip Fazıl, Fatih ve Abdurrahmangazi mahallelerinde cam balkon ve sineklik işleri yapıyoruz. Bölgede fiyat-kalite dengesine önem veriyoruz; ucuz malzeme yerine uzun ömürlü profil öneriyoruz. Keşif ücretsiz, teklif aynı gün.",
    neighborhoods: [
      "Necip Fazıl",
      "Fatih",
      "Abdurrahmangazi",
      "Hasanpaşa",
      "Mimar Sinan",
      "Mehmet Akif",
    ],
    sections: [
      {
        heading: "Sultanbeyli'de Katlanır Cam Balkon",
        body: "Sultanbeyli dairelerinde katlanır cam balkon ile balkonunuzu koruyup genişletiyoruz. Cam panelleri tamamen açılır; yaz-kış kullanım imkânı sunar. Montaj ekibimiz deneyimli, iş bitiminde temizlik yapılır.",
      },
      {
        heading: "Isıcamlı Cam Balkon Sistemleri",
        body: "Kış aylarında balkonunuzu ısıtmak pahalı olabilir. Isıcamlı cam balkon ısı kaybını ciddi azaltır. Sultanbeyli'de birçok dairede bu sistemi kurduk; referans gösterebiliriz.",
      },
      {
        heading: "Pileli Sineklik ve Kedi Sinekliği",
        body: "Sultanbeyli'de pileli sineklik en çok yaz aylarında talep görüyor. Erken randevu almanızı öneririz. Kedi sinekliği modellerimiz apartman dairelerinde pratik kullanım sağlar.",
      },
    ],
  },
  "tuzla-cam-balkon-sineklik": {
    slug: "tuzla-cam-balkon-sineklik",
    district: "Tuzla",
    title: "Tuzla Cam Balkon & Sineklik Sistemleri",
    description:
      "Tuzla cam balkon, katlanır cam balkon, ısıcamlı cam balkon, pileli sineklik ve kedi sinekliği. Aydınlı, İçmeler, Postane semtlerine servis.",
    cardDescription: "Sahil ve sanayi bölgesi konutları",
    heroSubtitle: "Tuzla sahilinde tuz dayanımlı profil",
    intro:
      "Tuzla'da Aydınlı, İçmeler ve Postane mahallelerinde cam balkon montajı yapıyoruz. Denize yakın konutlarda korozyona dayanıklı profil ve paslanmaz aksesuar kullanıyoruz. Tuzla'nın sanayi bölgesindeki lojman ve konut sitelerine de servis veriyoruz.",
    neighborhoods: [
      "Aydınlı",
      "İçmeler",
      "Postane",
      "Orhanlı",
      "Tepeören",
      "Mimarsinan",
    ],
    sections: [
      {
        heading: "Tuzla'da Katlanır Cam Balkon",
        body: "Sahil bölgesinde katlanır cam balkon için deniz havasına dayanıklı malzeme şart. Profillerimiz bu koşullara uygun. Geniş balkonlara özel ölçü üretim yapıyoruz.",
      },
      {
        heading: "Isıcamlı Cam Balkon Uygulaması",
        body: "Tuzla'nın rüzgârlı sahil hattında ısıcamlı cam balkon konfor sağlar. Çift cam ısı ve ses yalıtımı sunar. Balkonunuzu kış bahçesi gibi kullanabilirsiniz.",
      },
      {
        heading: "Pileli Sineklik ve Kedi Sinekliği",
        body: "Tuzla sitelerinde pileli sineklik montajı yapıyoruz. Deniz kenarında sinek yoğunluğu artar; kaliteli tül ve sağlam profil önemli. Kedi sinekliği taleplerini de karşılıyoruz.",
      },
    ],
  },
  "cekmekoy-cam-balkon-sineklik": {
    slug: "cekmekoy-cam-balkon-sineklik",
    district: "Çekmeköy",
    title: "Çekmeköy Cam Balkon & Sineklik Sistemleri",
    description:
      "Çekmeköy cam balkon, katlanır cam balkon, ısıcamlı cam balkon, pileli sineklik ve kedi sinekliği. Alemdağ, Taşdelen, Ömerli semtlerine montaj.",
    cardDescription: "Orman kenarı villalar ve yeni siteler",
    heroSubtitle: "Taşdelen ve Alemdağ'da villa uygulamaları",
    intro:
      "Çekmeköy'de Alemdağ, Taşdelen ve Ömerli bölgelerinde hem villa hem apartman işleri yapıyoruz. Orman kenarı evlerde sineklik ihtiyacı yazın çok artıyor; pileli sineklik ve kedi sinekliği birlikte kuruyoruz. Geniş teraslı villalarda katlanır cam balkon tecrübemiz güçlü.",
    neighborhoods: [
      "Alemdağ",
      "Taşdelen",
      "Ömerli",
      "Hamidiye",
      "Mehmet Akif",
      "Sultançiftliği",
    ],
    sections: [
      {
        heading: "Çekmeköy'de Katlanır Cam Balkon",
        body: "Villa teraslarında katlanır cam balkon manzarayı kapatmadan koruma sağlar. Geniş açılımlı sistemlerimiz sağlam profille desteklenir. Ölçü alımından montaja titiz çalışıyoruz.",
      },
      {
        heading: "Isıcamlı Cam Balkon ile Dört Mevsim",
        body: "Çekmeköy'ün serin mahallelerinde ısıcamlı cam balkon balkonu kullanılabilir tutar. Kışın ek oda, yazın açık teras — ikisini de sunuyoruz.",
      },
      {
        heading: "Pileli Sineklik ve Kedi Sinekliği",
        body: "Yeşil alana yakın evlerde pileli sineklik olmazsa olmaz. Geniş kapılara sürme sineklik takıyoruz. Kedi sinekliği ile bahçe kapısı geçişlerini güvenli hale getiriyoruz.",
      },
    ],
  },
};
const districtImages = {
  atasehir: "/images/cambalkon_result.webp",
  kadikoy: "/images/sineklik_result.webp",
  umraniye: "/images/panjur_result.webp",
  maltepe: "/images/pvc_result.webp",
  kartal: "/images/aluminyum_result.webp",
  pendik: "/images/dusakabin_result.webp",
  sancaktepe: "/images/korkuluk_result.webp",
  cekmekoy: "/images/cambalkon-1_result.webp",
};

// Geri getirdiğimiz ve dışa aktardığımız (export) kısım:
export const districtNavItems = Object.values(districtPages)
  .sort((a, b) => a.district.localeCompare(b.district, "tr"))
  .map((page) => ({
    district: page.district,
    slug: page.slug,
    href: `/bolgeler/${page.slug}`,
  }));

export const serviceAreaCards = Object.values(districtPages).map((item) => ({
  district: item.district,
  slug: item.slug,
  description: districtPages[item.slug].cardDescription,
  image: districtImages[item.slug] || "/images/cambalkon_result.webp",
}));
