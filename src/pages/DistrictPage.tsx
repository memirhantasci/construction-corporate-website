import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import DistrictGallery from '../components/DistrictGallery';
import { SITE, canonicalUrl } from '../config/site';
import { districtPages, serviceAreaCards } from '../data/districtPages';
import { servicePages } from '../data/servicePages';
import { buildLocalBusinessSchema } from '../lib/localBusinessSchema';

const districtImages: Record<string, string> = {
  "atasehir-cam-balkon-sineklik": "/images/cambalkon.jpeg",
  "kadikoy-cam-balkon-sineklik": "/images/cambalkon-1.jpeg",
  "umraniye-cam-balkon-sineklik": "/images/cambalkon-2.jpeg",
  "maltepe-cam-balkon-sineklik": "/images/cambalkon-3.jpeg",
  "uskudar-cam-balkon-sineklik": "/images/cambalkon-4.jpeg",
  "beykoz-cam-balkon-sineklik": "/images/kis_bahcesi.jpeg",
  "kartal-cam-balkon-sineklik": "/images/cambalkon-5.jpeg",
  "pendik-cam-balkon-sineklik": "/images/giyotin.jpeg",
  "sancaktepe-cam-balkon-sineklik": "/images/pergola.jpeg",
  "sultanbeyli-cam-balkon-sineklik": "/images/panjur_balkon.jpeg",
  "tuzla-cam-balkon-sineklik": "/images/korkuluk.jpeg",
  "cekmekoy-cam-balkon-sineklik": "/images/kis_bahcesi-2.jpeg",
};

const sectionPhotos = [
  {
    image: '/images/cambalkon-1.jpeg',
    badge: 'Katlanır Cam Balkon',
    keyword: 'Katlanır Cam Balkon Sistemleri',
  },
  {
    image: '/images/cambalkon-3.jpeg',
    badge: 'Isıcamlı Çift Cam',
    keyword: 'Isı Yalıtımlı Konfor Cam',
  },
  {
    image: '/images/sineklik-1.png',
    badge: 'Pileli & Kedi Sinekliği',
    keyword: 'Akordiyon & Çelik Tül Sineklik',
  },
];

export default function DistrictPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const page = slug ? districtPages[slug] : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!page) {
    return (
      <div className="pt-40 text-center min-h-screen bg-cream">
        <h2 className="text-2xl text-navy mb-4">Sayfa bulunamadı.</h2>
        <button onClick={() => navigate('/bolgeler')} className="text-coral underline">
          Tüm Bölgelere Geri Dön
        </button>
      </div>
    );
  }

  const districtCover = (slug && districtImages[slug]) || '/images/cambalkon.jpeg';
  const pageUrl = canonicalUrl(`/bolgeler/${page.slug}`);

  // ── SSS (FAQ) Verisi ───────────────────────────────────────────────────────
  const faqs = [
    {
      question: `${page.district}'de cam balkon ve sineklik keşif hizmeti ücretli mi?`,
      answer: `Hayır, ${page.district} genelindeki tüm mahallelere keşif ve ölçülendirme hizmetimiz tamamen ücretsizdir. Uzman ustalarımız adresinize gelerek net ölçüleri alır, katalog üzerinden sistemleri tanıtır ve yerinde bağlayıcı fiyat teklifi sunar.`,
    },
    {
      question: `${page.district} cam balkon m² fiyatları neye göre belirlenir?`,
      answer: `Cam balkon fiyatları; tercih edilen modele (klasik katlanır, sürgülü veya argon gazlı ısıcamlı), balkonun geometrisine (düz, L veya U köşe), profil renk seçeneğine (antrasit gri, eloksal, beyaz vb.) ve toplam metrekareye göre hesaplanır.`,
    },
    {
      question: `Sipariş sonrası imalat ve montaj süreci ne kadar sürer?`,
      answer: `Ölçü onayının ardından fabrikamızda milimetrik lazer kesimle imalat başlar. Ortalama 4-7 iş günü içerisinde hazır olan sisteminiz, kararlaştırılan randevu gününde kendi kadrolu ustalarımız tarafından 1 günde montajlanıp temiz teslim edilir.`,
    },
    {
      question: `Katlanır cam balkon mu yoksa Isıcamlı cam balkon mu tercih etmeliyim?`,
      answer: `Balkonunuzu kış aylarında evin oda sıcaklığında kullanmak ve %40'a varan ısı tasarrufu sağlamak istiyorsanız Isıcamlı Cam Balkon önerilir. Yaz aylarında balkonunuzu tamamen açık hale getirmek ve ekonomik çözüm arıyorsanız 8mm Temperli Katlanır Cam Balkon idealdir.`,
    },
    {
      question: `Yapılan montaj ve profillerin garanti kapsamı nedir?`,
      answer: `Tüm cam balkon, sineklik ve alüminyum doğrama işlerimiz; su sızdırmazlığı, tekerlek mekanizmaları ve montaj işçiliği dahil olmak üzere 2 yıl tam garanti kapsamındadır.`,
    },
  ];

  // ── JSON-LD Structured Data (SEO) ──────────────────────────────────────────
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: `${SITE.name} - ${page.district} Şubesi`,
    description: page.description,
    url: pageUrl,
    telephone: SITE.phoneTel,
    priceRange: '₺₺',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: `${page.district}, İstanbul`,
    },
    address: buildLocalBusinessSchema().address,
    image: `${SITE.domain}${districtCover}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE.domain },
      { '@type': 'ListItem', position: 2, name: 'Hizmet Bölgelerimiz', item: `${SITE.domain}/bolgeler` },
      { '@type': 'ListItem', position: 3, name: `${page.district} Cam Balkon & Sineklik`, item: pageUrl },
    ],
  };

  const handleWhatsApp = () => {
    const mesaj = encodeURIComponent(
      `Merhaba, ${page.district} bölgesi için cam balkon ve sineklik hakkında ücretsiz keşif almak istiyorum.`
    );
    window.open(`https://wa.me/${SITE.whatsapp}?text=${mesaj}`, '_blank');
  };

  // Diğer ilçeler (link havuzu için)
  const otherDistricts = serviceAreaCards.filter((d) => d.slug !== page.slug).slice(0, 8);

  return (
    <>
      <Helmet>
        <title>{page.title} | {SITE.name}</title>
        <meta name="description" content={page.description} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={`${page.title} | ${SITE.name}`} />
        <meta property="og:description" content={page.description} />
        <meta property="og:image" content={`${SITE.domain}${districtCover}`} />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content={SITE.name} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${page.title} | ${SITE.name}`} />
        <meta name="twitter:description" content={page.description} />
        <meta name="twitter:image" content={`${SITE.domain}${districtCover}`} />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-cream pt-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-10 md:py-14">
          
          {/* Breadcrumb Navigasyon */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-widest mb-8 text-gray-500">
            <Link to="/" className="hover:text-coral transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link to="/bolgeler" className="hover:text-coral transition-colors">Hizmet Bölgeleri</Link>
            <span>/</span>
            <span className="text-navy font-bold">{page.district}</span>
          </nav>

          {/* ══════════════════════════════════════════════════════════════
              BÖLÜM 1: HERO ALANI (YUVARLAK FOTOĞRAF FORMATI)
          ══════════════════════════════════════════════════════════════ */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-navy/10 shadow-sm mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Sol Metin Alanı */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral/10 text-coral text-xs font-bold uppercase tracking-wider mb-4">
                  <span>📍</span> {page.district} YETKİLİ İMALAT VE MONTAJ
                </div>

                <h1
                  className="text-navy uppercase font-semibold mb-4"
                  style={{
                    fontSize: 'clamp(28px, 3.8vw, 48px)',
                    lineHeight: 1.12,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {page.district} Cam Balkon &amp; Sineklik Sistemleri
                </h1>

                <p className="text-navy-muted text-base sm:text-lg leading-relaxed mb-6">
                  {page.heroSubtitle}. {page.intro}
                </p>

                {/* Güven Rozetleri */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-gray-100 mb-6">
                  <div className="text-center p-2 rounded-lg bg-gray-50">
                    <span className="text-coral font-bold text-base">2 Yıl</span>
                    <p className="text-[11px] text-gray-500 font-medium uppercase mt-0.5">Tam Garanti</p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-gray-50">
                    <span className="text-coral font-bold text-base">Ücretsiz</span>
                    <p className="text-[11px] text-gray-500 font-medium uppercase mt-0.5">Yerinde Keşif</p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-gray-50">
                    <span className="text-coral font-bold text-base">18+ Yıl</span>
                    <p className="text-[11px] text-gray-500 font-medium uppercase mt-0.5">Usta Tecrübe</p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-gray-50">
                    <span className="text-coral font-bold text-base">%100</span>
                    <p className="text-[11px] text-gray-500 font-medium uppercase mt-0.5">CE Belgeli</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/iletisim"
                    className="bg-coral text-white font-semibold uppercase rounded-full px-7 py-3.5 text-xs sm:text-sm tracking-wider hover:bg-coral-hover transition-all shadow-md hover:scale-105"
                  >
                    ÜCRETSİZ KEŞİF AL
                  </Link>
                  <button
                    onClick={handleWhatsApp}
                    className="bg-[#25D366] text-white font-semibold uppercase rounded-full px-7 py-3.5 text-xs sm:text-sm tracking-wider hover:opacity-95 transition-all shadow-md hover:scale-105"
                  >
                    WHATSAPP DESTEK
                  </button>
                </div>
              </div>

              {/* Sağ: KULLANICININ İSTEDİĞİ YUVARLAK FOTOĞRAF FORMATI */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="relative group">
                  {/* Dış halka parıltısı ve çerçeve */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-coral to-navy/30 opacity-70 blur-xs transition duration-500 group-hover:opacity-100"></div>
                  
                  {/* Yuvarlak Fotoğraf Kapsayıcısı */}
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
                    <img
                      src={districtCover}
                      alt={`${page.district} Cam Balkon ve Sineklik Montajı`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Yuvarlak Rozet */}
                  <div className="absolute -bottom-2 right-2 bg-navy text-white px-4 py-2 rounded-full border-2 border-white shadow-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="text-coral">★</span> {page.district} Ekibi
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Mahalleler Bölümü */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-navy/10 shadow-xs mb-12">
            <h3 className="text-xs uppercase font-bold text-coral tracking-widest mb-3">
              {page.district} HİZMET VERİLEN MAHALLELER
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {page.district} genelinde tüm sitelere, müstakil yapılara ve apartman dairelerine aynı gün keşif randevusu verilmektedir:
            </p>
            <div className="flex flex-wrap gap-2">
              {page.neighborhoods.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="text-navy bg-cream/70 border border-navy/10 px-3.5 py-1.5 rounded-full text-xs font-medium"
                >
                  📍 {neighborhood} {page.district}
                </span>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              BÖLÜM 2: HİZMET VE SEO DETAY KARTLARI (YUVARLAK GÖRSEL DÜZENİ)
          ══════════════════════════════════════════════════════════════ */}
          <div className="mb-14">
            <p className="text-coral uppercase tracking-widest text-xs font-bold text-center mb-2">
              UZMAN İMALAT &amp; MONTAJ
            </p>
            <h2 className="text-navy text-center uppercase text-2xl sm:text-3xl font-semibold mb-8">
              {page.district} Bölgesine Özel Çözümlerimiz
            </h2>

            <div className="space-y-8">
              {page.sections.map((section, idx) => {
                const photo = sectionPhotos[idx % sectionPhotos.length];
                const isEven = idx % 2 === 0;
                return (
                  <article
                    key={section.heading}
                    className="bg-white rounded-2xl border border-navy/10 overflow-hidden shadow-xs hover:shadow-md transition-all p-6 sm:p-9"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      
                      {/* Metin İçeriği */}
                      <div className={`lg:col-span-8 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-coral text-xs font-bold uppercase tracking-widest">
                            {photo.badge}
                          </span>
                          <span className="text-gray-300">•</span>
                          <span className="text-gray-400 text-xs font-medium">
                            {page.district} Özel İmalat
                          </span>
                        </div>

                        <h3
                          className="text-navy uppercase mb-3 font-semibold"
                          style={{ fontSize: 'clamp(20px, 2.2vw, 24px)', lineHeight: 1.25 }}
                        >
                          {section.heading}
                        </h3>

                        <p className="text-navy-muted text-base leading-relaxed mb-4">
                          {section.body}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 pt-3 border-t border-gray-100">
                          <span className="flex items-center gap-1 text-navy font-semibold">
                            ✓ Paslanmaz Rulmanlar
                          </span>
                          <span className="flex items-center gap-1 text-navy font-semibold">
                            ✓ Sararmayan Alüminyum Fitil
                          </span>
                          <span className="flex items-center gap-1 text-navy font-semibold">
                            ✓ Milimetrik Lazer Ölçüm
                          </span>
                        </div>
                      </div>

                      {/* Yuvarlak Görsel Formatı */}
                      <div className={`lg:col-span-4 flex justify-center items-center ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                        <div className="relative group/circle">
                          <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-50">
                            <img
                              src={photo.image}
                              alt={`${page.district} ${section.heading}`}
                              loading="lazy"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/circle:scale-110"
                            />
                          </div>
                          <span className="absolute bottom-1 right-1 bg-coral text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-md">
                            {page.district}
                          </span>
                        </div>
                      </div>

                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              BÖLÜM 3: SSS (SIKÇA SORULAN SORULAR) ACCORDION & SCHEMA
          ══════════════════════════════════════════════════════════════ */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-navy/10 shadow-sm mb-14">
            <p className="text-coral uppercase tracking-widest text-xs font-bold text-center mb-2">
              MERAK EDİLENLER
            </p>
            <h2 className="text-navy text-center uppercase text-2xl sm:text-3xl font-semibold mb-8">
              {page.district} Cam Balkon &amp; Sineklik Sıkça Sorulan Sorular
            </h2>

            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-navy/10 overflow-hidden transition-colors"
                  style={{ backgroundColor: openFaq === i ? '#F7F7F5' : '#ffffff' }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-navy text-base transition-colors"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <span className="text-coral text-2xl leading-none flex-shrink-0 transition-transform duration-200">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>

                  {openFaq === i && (
                    <div className="px-5 pb-5 text-navy-muted text-sm sm:text-base leading-relaxed border-t border-navy/5 pt-3">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              BÖLÜM 4: REFERANS PROJELER GALERİSİ
          ══════════════════════════════════════════════════════════════ */}
          <DistrictGallery district={page.district} />

          {/* ══════════════════════════════════════════════════════════════
              BÖLÜM 5: DİĞER İLÇELER & DİĞER HİZMETLER (İÇ LİNK HAVUZU)
          ══════════════════════════════════════════════════════════════ */}
          <div className="mt-16 pt-12 border-t border-navy/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Diğer İlçeler */}
              <div className="bg-white rounded-xl p-6 border border-navy/10">
                <h3 className="text-navy font-bold text-base uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <span>📍</span> Diğer Hizmet Bölgelerimiz
                </h3>
                <div className="grid grid-cols-2 gap-2.5">
                  {otherDistricts.map((d) => (
                    <Link
                      key={d.slug}
                      to={`/bolgeler/${d.slug}`}
                      className="text-xs text-gray-600 hover:text-coral transition-colors flex items-center gap-1.5 py-1"
                    >
                      <span>→</span> {d.district} Cam Balkon
                    </Link>
                  ))}
                </div>
              </div>

              {/* Diğer Hizmetlerimiz */}
              <div className="bg-white rounded-xl p-6 border border-navy/10">
                <h3 className="text-navy font-bold text-base uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <span>🛠️</span> Tüm Ürün ve Hizmetlerimiz
                </h3>
                <div className="grid grid-cols-2 gap-2.5">
                  {servicePages.slice(0, 8).map((s) => (
                    <Link
                      key={s.id}
                      to={`/urunler/${s.id}`}
                      className="text-xs text-gray-600 hover:text-coral transition-colors flex items-center gap-1.5 py-1"
                    >
                      <span>→</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              BÖLÜM 6: ALT ÇAĞRI (CTA)
          ══════════════════════════════════════════════════════════════ */}
          <div
            className="mt-16 bg-navy rounded-2xl p-10 md:p-14 text-center text-white"
            style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <p
              className="text-coral uppercase mb-3 text-xs tracking-widest font-bold"
            >
              ÜCRETSİZ YERİNDE KEŞİF
            </p>
            <h2
              className="text-white uppercase mb-4 text-2xl sm:text-3xl md:text-4xl font-semibold"
            >
              {page.district} İçin Hemen Teklif Alın
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed text-sm sm:text-base">
              {page.district} bölgesindeki adresinize aynı gün uzman keşif ekibimiz gelir, milimetrik ölçü alır ve bütçenize en uygun fiyat teklifini sunar.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/iletisim"
                className="bg-coral text-white font-semibold uppercase rounded-full px-8 py-4 text-sm tracking-wider hover:bg-coral-hover transition-all shadow-lg hover:scale-105"
              >
                ÜCRETSİZ KEŞİF FORMU
              </Link>
              <button
                onClick={handleWhatsApp}
                className="bg-[#25D366] text-white font-semibold uppercase rounded-full px-8 py-4 text-sm tracking-wider hover:opacity-90 transition-all shadow-lg hover:scale-105"
              >
                WHATSAPP BİLGİ AL
              </button>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="text-coral font-bold uppercase text-sm tracking-widest hover:text-white transition-colors"
              >
                📞 {SITE.phone}
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
