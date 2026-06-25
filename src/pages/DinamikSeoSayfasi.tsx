// ─────────────────────────────────────────────────────────────────────────────
// src/pages/DinamikSeoSayfasi.tsx
// Route: /bolgeler/:ilceSlug/:hizmetSlug
// 12 ilçe × 10 hizmet = 120 dinamik sayfa, tek bileşen
//
// VERİ KAYNAKLARI:
//  - seoData.ts      → SEO içeriği (uzman rehberi, SSS, avantajlar, link havuzu)
//  - servicesData.ts → GERÇEK ürünler ("Diğer Hizmetlerimiz" kartları için)
//  - lib/blog.ts     → GERÇEK blog yazıları ("Faydalı Yazılar" bölümü için)
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  getDistrictBySlug,
  getServiceBySlug,
  getRelatedBlogs,
  fillTemplate,
  services,
  reviews,
  districts,
} from '../data/seoData';
import { servicePages } from '../data/servicePages'; // Gerçek ürün verisi (id, name, desc, image)
import { allBlogPosts } from '../lib/blog'; // Gerçek blog verisi (.md dosyalarından)

const PHONE = '+905441846478';
const WA_URL = `https://wa.me/905441846478`;
const MAPS_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.1008059316932!2d29.112208076423855!3d40.97927342120971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7ddfcfb49db%3A0x405e218759df107f!2s%C4%B0stanbul%20Cam%20Balkon%20%26%20Sineklik!5e0!3m2!1str!2str!4v1782349602394!5m2!1str!2str`;

// Renk sabitleri
const NAVY = '#1C1F33';
const CORAL = '#E06B5A';
const CREAM = '#F7F7F5';

// İstatistik kartları - sabit, tüm sayfalarda aynı kalır
const STATS = [
  { value: '3000+', label: 'Tamamlanan Proje' },
  { value: 'İstanbul', label: 've Çevresi Hizmet' },
  { value: '5.0★', label: 'Google Puanı' },
  { value: '%100', label: 'Müşteri Memnuniyeti' },
];

export default function DinamikSeoSayfasi() {
  const { ilceSlug, hizmetSlug } = useParams<{ ilceSlug: string; hizmetSlug: string }>();
  const navigate = useNavigate();

  const district = ilceSlug ? getDistrictBySlug(ilceSlug) : undefined;
  const service = hizmetSlug ? getServiceBySlug(hizmetSlug) : undefined;

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [reviewIdx, setReviewIdx] = useState(0);

  // 404 guard
  if (!district || !service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ backgroundColor: CREAM }}>
        <h1 className="text-2xl font-bold" style={{ color: NAVY }}>Sayfa Bulunamadı</h1>
        <p style={{ color: '#6b6f8a' }}>İlçe veya hizmet bilgisi geçersiz.</p>
        <button onClick={() => navigate('/')} className="underline" style={{ color: CORAL }}>Ana Sayfaya Dön</button>
      </div>
    );
  }

  const fill = (t: string) => fillTemplate(t, district.name);
  const h1 = fill(service.h1Template);
  const intro = fill(service.introTemplate);

  // MADDE 2: Sahte blog üretimi yok — gerçek allBlogPosts'tan alakalı/yedek bloglar çekiliyor.
  // Havuzda kaç blog varsa o kadarı listelenir; "bulunamadı" mesajı basılmaz.
  const relatedBlogs = getRelatedBlogs(allBlogPosts, service, 6);

  // İlgili hizmetler (SEO içeriği için, seoData'dan)
  const relatedServices = services.filter((s) => service.relatedServiceSlugs.includes(s.slug));
  // Diğer ilçeler (mevcut ilçe hariç — kısmi liste)
  const otherDistricts = districts.filter((d) => d.slug !== district.slug).slice(0, 8);

  // Review slider
  const VISIBLE = 3;
  const maxIdx = Math.max(0, reviews.length - VISIBLE);
  const visibleReviews = reviews.slice(reviewIdx, reviewIdx + VISIBLE);

  const advantageBadges = ['✅ 2 Yıl Garanti', '📐 Ücretsiz Keşif', '⚡ Hızlı Montaj', '🏅 CE Belgeli'];

  return (
    <>
      {/* ── SEO HEAD ──────────────────────────────────────────────────────── */}
      <Helmet>
        <title>{fill(service.metaTitleTemplate)}</title>
        <meta name="description" content={fill(service.metaDescTemplate)} />
        <link rel="canonical" href={`https://istanbulcambalkon.com/bolgeler/${ilceSlug}/${hizmetSlug}`} />
        <meta property="og:title" content={fill(service.metaTitleTemplate)} />
        <meta property="og:description" content={fill(service.metaDescTemplate)} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: service.faq.map((f) => ({
            '@type': 'Question',
            name: fill(f.question),
            acceptedAnswer: { '@type': 'Answer', text: fill(f.answer) },
          })),
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'İstanbul Cam Balkon & Sineklik',
          telephone: PHONE,
          address: { '@type': 'PostalAddress', addressLocality: district.name, addressCountry: 'TR' },
          areaServed: district.name,
          url: `https://istanbulcambalkon.com/bolgeler/${ilceSlug}/${hizmetSlug}`,
        })}</script>
      </Helmet>

      <div className="min-h-screen pt-20" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* ════════════════════════════════════════════════════════════
              BÖLÜM 1 — BREADCRUMB & INTRO (beyaz kart)
          ════════════════════════════════════════════════════════════ */}
          <section
            className="rounded-2xl mt-6 px-6 sm:px-10 py-8 sm:py-10"
            style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 24px rgba(28,31,51,0.06)' }}
          >
            {/* MADDE 1: Breadcrumb ilçe linki düzeltildi → /bolgeler/[ilceSlug]-cam-balkon-sineklik */}
            <nav className="flex items-center gap-2 text-xs uppercase tracking-widest mb-5" style={{ color: '#9ca3af' }}>
              <Link to="/" className="hover:text-[#E06B5A] transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <Link to={`/bolgeler/${ilceSlug}-cam-balkon-sineklik`} className="hover:text-[#E06B5A] transition-colors">
                {district.name}
              </Link>
              <span>/</span>
              <span style={{ color: NAVY, fontWeight: 600 }}>{service.name}</span>
            </nav>

            <h1
              className="uppercase"
              style={{
                fontSize: 'clamp(28px, 4.2vw, 56px)',
                fontWeight: 300,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: NAVY,
              }}
            >
              {h1}
            </h1>

            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: CORAL, padding: '12px 28px', fontSize: 14, letterSpacing: '0.06em' }}
              >
                📞 Hemen Ara
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full font-semibold transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: '#25D366', color: '#ffffff', padding: '12px 28px', fontSize: 14, letterSpacing: '0.06em' }}
              >
                💬 WhatsApp
              </a>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════
              BÖLÜM 2 — VURGULU GİRİŞ METNİ (blockquote)
          ════════════════════════════════════════════════════════════ */}
          <section
            className="mt-6 px-6 sm:px-8 py-6 sm:py-7 rounded-xl"
            style={{ backgroundColor: '#FFF7ED', borderLeft: `4px solid ${CORAL}` }}
          >
            <p style={{ fontSize: 16, lineHeight: 1.85, color: '#3a3d52' }}>
              <strong style={{ color: NAVY }}>{district.nameGenitive} {service.name.toLocaleLowerCase('tr-TR')}</strong>{' '}
              ihtiyacınız için doğru adrestesiniz. {intro}
            </p>
          </section>

          {/* ════════════════════════════════════════════════════════════
              BÖLÜM 3 — 2 KOLONLU HİZMET DETAYI & AVANTAJLAR
          ════════════════════════════════════════════════════════════ */}
          <section className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

              {/* SOL KART: Hizmet detayı */}
              <div
                className="rounded-2xl p-7 sm:p-9 h-full flex flex-col"
                style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 24px rgba(28,31,51,0.06)' }}
              >
                <span
                  className="inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold mb-5"
                  style={{ backgroundColor: '#EFF6FF', color: '#2563EB' }}
                >
                  2026 Hizmet Odaklı Sayfa
                </span>

                <h2 className="mb-4" style={{ fontSize: 'clamp(20px,2vw,28px)', fontWeight: 600, color: NAVY }}>
                  {service.shortName} Hakkında Detaylı Bilgi
                </h2>

                <p className="flex-grow" style={{ fontSize: 15, lineHeight: 1.85, color: '#4a4d62' }}>
                  {intro}
                </p>

                <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(28,31,51,0.08)' }}>
                  <p className="uppercase tracking-widest mb-3" style={{ fontSize: 11, fontWeight: 600, color: CORAL }}>
                    İLGİLİ ARAMALAR
                  </p>
                  <ul className="space-y-2">
                    {service.lsiKeywords.slice(0, 4).map((kw, i) => (
                      <li key={i} className="flex items-start gap-2" style={{ fontSize: 13, color: '#6b6f8a' }}>
                        <span style={{ color: CORAL }}>•</span>
                        <strong style={{ color: NAVY, fontWeight: 600 }}>{district.name} {kw}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* SAĞ KART: Avantajlar (lacivert) — MADDE 6 & 7: premium ikon + h-full flex-grow */}
              <div className="rounded-2xl p-7 sm:p-9 h-full flex flex-col" style={{ backgroundColor: NAVY }}>
                <h2 className="mb-6" style={{ fontSize: 'clamp(20px,2vw,28px)', fontWeight: 600, color: '#ffffff' }}>
                  Avantajlar
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                  {service.advantages.map((adv, i) => (
                    <div key={i} className="h-full flex flex-col">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 mb-3 flex-shrink-0">
                        <span className="text-2xl">{adv.icon}</span>
                      </div>
                      <h3 className="font-semibold mb-1.5" style={{ fontSize: 14, color: '#ffffff' }}>{adv.title}</h3>
                      <p className="flex-grow" style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                        {adv.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-7 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                  {advantageBadges.map((badge) => (
                    <span key={badge} className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{badge}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════
              BÖLÜM 4 — İSTATİSTİK KARTLARI
          ════════════════════════════════════════════════════════════ */}
          <section className="mt-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl p-6 text-center h-full flex flex-col items-center justify-center"
                  style={{ backgroundColor: '#5C3A21' }}
                >
                  <p style={{ fontSize: 'clamp(22px,2.6vw,34px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.1 }}>
                    {stat.value}
                  </p>
                  <p className="mt-1.5" style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.03em' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════
              BÖLÜM 5 — UZMAN REHBERİ
          ════════════════════════════════════════════════════════════ */}
          <section className="mt-6 mb-2">
            <div
              className="rounded-2xl p-7 sm:p-10"
              style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 24px rgba(28,31,51,0.06)' }}
            >
              <p className="uppercase tracking-widest mb-2" style={{ fontSize: 11, fontWeight: 600, color: CORAL }}>
                UZMAN REHBERİ
              </p>
              <h2 className="mb-7" style={{ fontSize: 'clamp(20px,2.2vw,30px)', fontWeight: 400, color: NAVY }}>
                İstanbul için Cam ve Doğrama Seçiminde Uzman Rehberi
              </h2>
              <div className="space-y-5" style={{ fontSize: 16, lineHeight: 1.9, color: '#3a3d52' }}>
                <p>
                  İstanbul'un Anadolu Yakası'nda {district.nameGenitive} yoğunlaşan kentsel dönüşüm ve artan yaşam kalitesi beklentisi, <strong>{service.name}</strong> sistemlerine olan talebi her geçen yıl artırmaktadır. Doğru sistem seçimi; balkon ölçüsü, bina cephesi yönü, kat yüksekliği ve kişisel kullanım alışkanlıklarına göre farklılık gösterir. Bu nedenle salt fiyat üzerinden karar vermek yerine, teknik özellikleri ve uzun vadeli performansı birlikte değerlendirmek büyük önem taşır.
                </p>
                <p>
                  Özellikle <strong>{district.nameGenitive}</strong> konumlanan yapılarda deniz ve rüzgar yükü değerlerinin standartlara uygunluğu kritiktir. Sistemin EN 12211 veya TS 825 gibi Avrupa ve Türk standartlarıyla uyumlu olması, hem güvenlik hem de enerji verimliliği açısından zorunludur. CE belgeli profil ve aksesuarlar bu standardın olmazsa olmaz göstergesidir. Kurulum sonrası yapılan hava geçirmezlik ve su sızdırmazlık testleri, montaj kalitesini doğrulayan en güvenilir yöntemdir.
                </p>
                <p>
                  Uzun vadeli memnuniyet için; işçilik garantisi, servis ağının genişliği ve yedek parça temininin kolaylığı da sistem seçiminde göz önünde bulundurulmalıdır. İstanbul Cam Balkon & Sineklik olarak {district.nameGenitive} gerçekleştirdiğimiz projelerde; ön keşiften montaj sonrası takibe kadar tüm süreçlerde şeffaf, belgeli ve garantili hizmet anlayışıyla çalışmaktayız. Ücretsiz keşif randevunuzu alarak size en uygun sistem hakkında tarafsız teknik değerlendirme sunabiliriz.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* ════════════════════════════════════════════════════════════
            BÖLÜM 6 — DİĞER HİZMETLERİMİZ
            MADDE 5: servicesData.ts'deki GERÇEK ürünler, /urunler/:id'ye link
        ════════════════════════════════════════════════════════════ */}
        <section className="py-16 px-6" style={{ backgroundColor: NAVY }}>
          <div className="max-w-6xl mx-auto">
            <p className="uppercase mb-2 tracking-widest" style={{ fontSize: 11, fontWeight: 600, color: CORAL }}>
              KEŞFEDİN
            </p>
            <h2 className="mb-8" style={{ fontSize: 'clamp(20px,2.2vw,30px)', fontWeight: 400, color: '#ffffff' }}>
              Diğer Hizmetlerimiz
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {servicePages.map((p) => (
                <Link
                  key={p.id}
                  to={`/urunler/${p.id}`}
                  className="group rounded-xl overflow-hidden h-full flex flex-col transition-all duration-200 hover:-translate-y-1"
                  style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-white/5">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <p
                      className="font-semibold mb-1 transition-colors duration-200 group-hover:text-[#E06B5A]"
                      style={{ fontSize: 14, color: '#ffffff' }}
                    >
                      {p.name}
                    </p>
                    <p className="flex-grow" style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                      {p.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            BÖLÜM 7 — GOOGLE YORUMLARI SLIDER
        ════════════════════════════════════════════════════════════ */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="uppercase tracking-widest mb-1" style={{ fontSize: 11, color: '#9ca3af' }}>
                  MÜŞTERİ YORUMLARI
                </p>
                <h2 style={{ fontSize: 'clamp(20px,2.2vw,30px)', fontWeight: 400, color: NAVY }}>
                  Google'da 5 Yıldız ⭐⭐⭐⭐⭐
                </h2>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setReviewIdx(Math.max(0, reviewIdx - 1))}
                  disabled={reviewIdx === 0}
                  className="rounded-full flex items-center justify-center transition-all"
                  style={{
                    width: 40, height: 40,
                    backgroundColor: reviewIdx === 0 ? 'rgba(28,31,51,0.08)' : CORAL,
                    color: '#ffffff', fontSize: 18,
                  }}
                >
                  ‹
                </button>
                <button
                  onClick={() => setReviewIdx(Math.min(maxIdx, reviewIdx + 1))}
                  disabled={reviewIdx >= maxIdx}
                  className="rounded-full flex items-center justify-center transition-all"
                  style={{
                    width: 40, height: 40,
                    backgroundColor: reviewIdx >= maxIdx ? 'rgba(28,31,51,0.08)' : CORAL,
                    color: '#ffffff', fontSize: 18,
                  }}
                >
                  ›
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {visibleReviews.map((r, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 h-full flex flex-col"
                  style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 24px rgba(28,31,51,0.06)' }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold" style={{ fontSize: 14, color: NAVY }}>{r.name}</p>
                      <p style={{ fontSize: 12, color: '#9ca3af' }}>{r.location} · {r.date}</p>
                    </div>
                    <div className="text-yellow-400 text-sm">★★★★★</div>
                  </div>
                  <p className="flex-grow" style={{ fontSize: 13, lineHeight: 1.7, color: '#6b6f8a' }}>"{r.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            BÖLÜM 8 — SSS AKORDEON
        ════════════════════════════════════════════════════════════ */}
        <section className="py-16 px-6" style={{ backgroundColor: '#f0f0ee' }}>
          <div className="max-w-3xl mx-auto">
            <p className="uppercase tracking-widest mb-2 text-center" style={{ fontSize: 11, fontWeight: 600, color: CORAL }}>
              SIK SORULAN SORULAR
            </p>
            <h2 className="text-center mb-10" style={{ fontSize: 'clamp(20px,2.2vw,32px)', fontWeight: 400, color: NAVY }}>
              {district.name} {service.shortName} Hakkında
            </h2>

            <div className="space-y-3">
              {service.faq.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden"
                  style={{ border: '1px solid rgba(28,31,51,0.1)', backgroundColor: '#ffffff' }}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-medium pr-4" style={{ fontSize: 15, color: NAVY }}>
                      {fill(item.question)}
                    </span>
                    <span
                      className="flex-shrink-0 transition-transform duration-200"
                      style={{
                        fontSize: 22, color: CORAL, lineHeight: 1,
                        transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5" style={{ fontSize: 14, lineHeight: 1.8, color: '#6b6f8a' }}>
                      {fill(item.answer)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            BÖLÜM 9 — DİNAMİK BLOG ALANI
            MADDE 2: gerçek allBlogPosts'tan, "bulunamadı" mesajı yok
        ════════════════════════════════════════════════════════════ */}
        {relatedBlogs.length > 0 && (
          <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <p className="uppercase tracking-widest mb-2" style={{ fontSize: 11, fontWeight: 600, color: CORAL }}>
                BİLİNMESİ GEREKEN KONULAR
              </p>
              <h2 className="mb-8" style={{ fontSize: 'clamp(20px,2.2vw,30px)', fontWeight: 400, color: NAVY }}>
                {service.shortName} Hakkında Faydalı Yazılar
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedBlogs.map((blog) => (
                  <Link
                    key={blog.slug}
                    to={`/blog/${blog.slug}`}
                    className="rounded-xl overflow-hidden h-full flex flex-col transition-all hover:shadow-lg hover:-translate-y-1"
                    style={{ backgroundColor: '#ffffff', border: '1px solid rgba(28,31,51,0.08)' }}
                  >
                    {blog.image && (
                      <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
                        <img src={blog.image} alt={blog.title} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="p-6 flex-grow flex flex-col">
                      <p className="text-xs mb-2" style={{ color: '#9ca3af' }}>
                        {new Date(blog.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                      <h3 className="font-medium mb-2" style={{ fontSize: 15, color: NAVY, lineHeight: 1.4 }}>
                        {blog.title}
                      </h3>
                      <p className="flex-grow" style={{ fontSize: 13, color: '#6b6f8a', lineHeight: 1.6 }}>
                        {blog.description}
                      </p>
                      <span className="mt-4 inline-block text-xs font-bold uppercase tracking-wider" style={{ color: CORAL }}>
                        Devamını Oku →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ════════════════════════════════════════════════════════════
            BÖLÜM 10 — LİNK HAVUZU
            MADDE 3: items-start eklendi + bg-[#F7F7F5] section'a alındı
        ════════════════════════════════════════════════════════════ */}
        <section className="py-16 px-6" style={{ backgroundColor: CREAM }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

              {/* İlgili Hizmet Sayfaları */}
              <div>
                <p className="uppercase tracking-widest mb-4 pb-3" style={{ fontSize: 11, fontWeight: 600, color: NAVY, borderBottom: `2px solid ${NAVY}` }}>
                  İlgili Hizmet Sayfaları
                </p>
                <ul>
                  {relatedServices.map((s, i) => (
                    <li key={s.slug} style={{ borderBottom: i < relatedServices.length - 1 ? '1px solid rgba(28,31,51,0.08)' : 'none' }}>
                      <Link
                        to={`/bolgeler/${ilceSlug}/${s.slug}`}
                        className="flex items-center justify-between py-3 transition-colors duration-200 group"
                        style={{ fontSize: 14, color: '#4a4d62' }}
                      >
                        <span className="group-hover:text-[#1C1F33] transition-colors duration-200">
                          {district.name} {s.shortName}
                        </span>
                        <span className="transition-transform duration-200 group-hover:translate-x-1" style={{ color: CORAL }}>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Diğer İlçeler */}
              <div>
                <p className="uppercase tracking-widest mb-4 pb-3" style={{ fontSize: 11, fontWeight: 600, color: NAVY, borderBottom: `2px solid ${NAVY}` }}>
                  Diğer İlçeler
                </p>
                <ul>
                  {otherDistricts.map((d, i) => (
                    <li key={d.slug} style={{ borderBottom: i < otherDistricts.length - 1 ? '1px solid rgba(28,31,51,0.08)' : 'none' }}>
                      <Link
                        to={`/bolgeler/${d.slug}/${hizmetSlug}`}
                        className="flex items-center justify-between py-3 transition-colors duration-200 group"
                        style={{ fontSize: 14, color: '#4a4d62' }}
                      >
                        <span className="group-hover:text-[#1C1F33] transition-colors duration-200">
                          {d.name} {service.shortName}
                        </span>
                        <span className="transition-transform duration-200 group-hover:translate-x-1" style={{ color: CORAL }}>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* İlgili Aramalar + Tüm Hizmetlerimiz */}
              <div>
                <p className="uppercase tracking-widest mb-4 pb-3" style={{ fontSize: 11, fontWeight: 600, color: NAVY, borderBottom: `2px solid ${NAVY}` }}>
                  İlgili Aramalar
                </p>
                <ul>
                  {service.lsiKeywords.map((kw, i) => (
                    <li key={i} style={{ borderBottom: i < service.lsiKeywords.length - 1 ? '1px solid rgba(28,31,51,0.08)' : 'none' }}>
                      <span className="block py-3" style={{ fontSize: 14, color: '#4a4d62' }}>
                        {district.name} {kw}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="uppercase tracking-widest mb-4 mt-8 pb-3" style={{ fontSize: 11, fontWeight: 600, color: NAVY, borderBottom: `2px solid ${NAVY}` }}>
                  Tüm Hizmetlerimiz
                </p>
                <ul>
                  {services.map((s, i) => (
                    <li key={s.slug} style={{ borderBottom: i < services.length - 1 ? '1px solid rgba(28,31,51,0.08)' : 'none' }}>
                      <Link
                        to={`/bolgeler/${ilceSlug}/${s.slug}`}
                        className="flex items-center justify-between py-2.5 transition-colors duration-200 group"
                        style={{
                          fontSize: 13.5,
                          color: s.slug === service.slug ? CORAL : '#4a4d62',
                          fontWeight: s.slug === service.slug ? 600 : 400,
                        }}
                      >
                        <span className="group-hover:text-[#1C1F33] transition-colors duration-200">{s.name}</span>
                        <span className="transition-transform duration-200 group-hover:translate-x-1" style={{ color: CORAL }}>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            BÖLÜM 11 — HIZLI TEKLİF & İLETİŞİM CTA
            MADDE 4: kart w-full, container'ı tam kaplıyor
        ════════════════════════════════════════════════════════════ */}
        <section className="py-16 px-6" style={{ backgroundColor: '#ffffff' }}>
          <div className="max-w-6xl mx-auto">
            <div
              className="w-full rounded-2xl p-8 sm:p-12"
              style={{ backgroundColor: '#ffffff', boxShadow: '0 8px 40px rgba(28,31,51,0.10)', border: '1px solid rgba(28,31,51,0.06)' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Sol: CTA metin + butonlar */}
                <div className="w-full">
                  <p className="uppercase tracking-widest mb-2" style={{ fontSize: 11, fontWeight: 600, color: CORAL }}>
                    HIZLI TEKLİF ALIN
                  </p>
                  <h2 className="mb-4" style={{ fontSize: 'clamp(22px,2.5vw,36px)', fontWeight: 300, color: NAVY, lineHeight: 1.2 }}>
                    {district.name} için Ücretsiz Keşif Randevusu
                  </h2>
                  <p className="mb-8" style={{ fontSize: 15, lineHeight: 1.75, color: '#6b6f8a' }}>
                    Cam balkon için fiyat, uygulama detayları ve keşif planlaması konusunda hemen ulaşabilirsiniz. Uzman ekibimiz {district.nameGenitive} en kısa sürede adresinizde.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <a
                      href={`tel:${PHONE}`}
                      className="flex-1 flex items-center justify-center gap-3 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                      style={{ backgroundColor: CORAL, padding: '16px 24px', fontSize: 15, letterSpacing: '0.04em' }}
                    >
                      📞 Telefonla Ulaşın
                    </a>
                    <a
                      href={WA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
                      style={{ backgroundColor: '#25D366', color: '#ffffff', padding: '16px 24px', fontSize: 15, letterSpacing: '0.04em' }}
                    >
                      💬 WhatsApp
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8">
                    {advantageBadges.map((badge) => (
                      <span key={badge} className="text-sm" style={{ color: '#6b6f8a' }}>{badge}</span>
                    ))}
                  </div>
                </div>

                {/* Sağ: Harita */}
                <div className="w-full rounded-xl overflow-hidden" style={{ boxShadow: '0 4px 24px rgba(28,31,51,0.10)' }}>
                  <iframe
                    src={MAPS_EMBED}
                    width="100%"
                    height="360"
                    style={{ border: 0, display: 'block', width: '100%' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="İstanbul Cam Balkon & Sineklik Konum"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
