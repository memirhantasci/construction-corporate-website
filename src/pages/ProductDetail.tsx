// ─────────────────────────────────────────────────────────────────────────────
// src/pages/ProductDetail.tsx
//
// Mevcut dosyanın güncellenmiş hali.
// Değişiklikler:
//   - Veri artık servicePages.ts'den geliyor (merkezi yönetim)
//   - react-helmet-async ile <title>, <meta description>, OG, JSON-LD (FAQ + Service)
//   - SSS accordion, avantaj kartları, ilgili hizmetler bölümü eklendi
// ─────────────────────────────────────────────────────────────────────────────
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getServiceById, servicePages } from '../data/servicePages';
import { SITE } from '../config/site';

const SITE_URL = typeof window !== 'undefined' ? window.location.origin : '';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const page = id ? getServiceById(id) : undefined;

  if (!page) {
    return (
      <div className="pt-40 text-center min-h-screen" style={{ backgroundColor: '#F7F7F5' }}>
        <h2 className="text-2xl mb-4" style={{ color: '#1C1F33' }}>Hizmet bulunamadı.</h2>
        <button
          onClick={() => navigate('/urunler')}
          style={{ color: '#E06B5A' }}
          className="underline"
        >
          Hizmetlerimize Geri Dön
        </button>
      </div>
    );
  }

  // ── JSON-LD Şemları ──────────────────────────────────────────────────────
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.h1,
    description: page.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE.name,
      url: SITE_URL,
    },
    url: `${SITE_URL}/urunler/${page.id}`,
    image: `${SITE_URL}${page.ogImage}`,
  };

  // ── İlgili hizmetler ────────────────────────────────────────────────────
  const related = servicePages.filter((p) => page.relatedIds.includes(p.id));

  return (
    <>
      {/* ── SEO HEAD ──────────────────────────────────────────────────────── */}
      <Helmet>
        <title>{page.title} | {SITE.name}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={`${SITE_URL}/urunler/${page.id}`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/urunler/${page.id}`} />
        <meta property="og:title" content={`${page.title} | ${SITE.name}`} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:image" content={`${SITE_URL}${page.ogImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content={SITE.name} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${page.title} | ${SITE.name}`} />
        <meta name="twitter:description" content={page.metaDescription} />
        <meta name="twitter:image" content={`${SITE_URL}${page.ogImage}`} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* ── SAYFA ─────────────────────────────────────────────────────────── */}
      <div className="min-h-screen" style={{ backgroundColor: '#F7F7F5' }}>

        {/* HERO */}
        <section
          className="relative flex items-end"
          style={{
            minHeight: '52vh',
            background: `linear-gradient(to bottom, rgba(28,31,51,0.50) 0%, rgba(28,31,51,0.78) 100%), url(${page.ogImage}) center/cover no-repeat`,
          }}
        >
          <div className="mx-auto w-full px-8 pb-14 md:pb-20" style={{ maxWidth: 1200 }}>
            {/* Breadcrumb */}
            <nav className="mb-5 flex items-center gap-2 text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <Link to="/urunler" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Hizmetlerimiz</Link>
              <span>/</span>
              <span style={{ color: 'rgba(255,255,255,0.9)' }}>{page.name}</span>
            </nav>

            <h1
              className="text-white uppercase"
              style={{
                fontSize: 'clamp(30px, 4.5vw, 68px)',
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              {page.h1}
            </h1>
            <p className="mt-4" style={{ fontSize: 'clamp(15px, 1.8vw, 20px)', color: 'rgba(255,255,255,0.75)', maxWidth: 560, lineHeight: 1.55 }}>
              {page.tagline}
            </p>
          </div>
        </section>

        {/* MAIN */}
        <div className="mx-auto px-8 py-16 md:py-24" style={{ maxWidth: 1200 }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* ── SOL: Ana içerik ────────────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-14">

              {/* Giriş */}
              <section>
                <p className="uppercase mb-3" style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', color: '#E06B5A' }}>
                  HİZMET HAKKINDA
                </p>
                <p style={{ fontSize: 17, lineHeight: 1.85, color: '#3a3d52' }}>
                  {page.intro}
                </p>
              </section>

              {/* Avantajlar */}
              <section>
                <p className="uppercase mb-6" style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', color: '#E06B5A' }}>
                  AVANTAJLAR
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {page.benefits.map((b, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-sm p-5"
                      style={{ border: '1px solid rgba(28,31,51,0.08)' }}
                    >
                      <h3
                        className="uppercase mb-2"
                        style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', color: '#1C1F33' }}
                      >
                        {b.title}
                      </h3>
                      <p style={{ fontSize: 14, lineHeight: 1.65, color: '#6b6f8a' }}>
                        {b.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SSS */}
              <section>
                <p className="uppercase mb-6" style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', color: '#E06B5A' }}>
                  SIK SORULAN SORULAR
                </p>
                <div className="space-y-3">
                  {page.faq.map((item, i) => (
                    <details
                      key={i}
                      className="group bg-white rounded-sm overflow-hidden"
                      style={{ border: '1px solid rgba(28,31,51,0.08)' }}
                    >
                      <summary
                        className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer select-none"
                        style={{ fontSize: 15, fontWeight: 500, color: '#1C1F33' }}
                      >
                        {item.question}
                        <span
                          className="flex-shrink-0 transition-transform duration-200 group-open:rotate-45"
                          style={{ fontSize: 20, color: '#E06B5A', lineHeight: 1 }}
                        >
                          +
                        </span>
                      </summary>
                      <div className="px-6 pb-5" style={{ fontSize: 14, lineHeight: 1.8, color: '#6b6f8a' }}>
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            {/* ── SAĞ: Teknik özellikler + CTA + İlgili ─────────────────── */}
            <aside className="space-y-6">

              {/* Teknik özellikler */}
              <div className="bg-white rounded-sm p-7" style={{ border: '1px solid rgba(28,31,51,0.08)' }}>
                <p className="uppercase mb-5" style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', color: '#E06B5A' }}>
                  TEKNİK ÖZELLİKLER
                </p>
                <ul className="space-y-3">
                  {page.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-3" style={{ fontSize: 13, lineHeight: 1.6, color: '#4a4d62' }}>
                      <span style={{ color: '#E06B5A', marginTop: 2, flexShrink: 0 }}>●</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="rounded-sm p-7" style={{ backgroundColor: '#1C1F33' }}>
                <p className="uppercase mb-2" style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)' }}>
                  ÜCRETSİZ KEŞİF
                </p>
                <p className="mb-6" style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.7)' }}>
                  Projenizi yerinde ölçüp size özel fiyat teklifi hazırlayalım.
                </p>
                <Link
                  to="/iletisim"
                  onClick={() => window.scrollTo(0, 0)}
                  className="block text-center text-white uppercase rounded-full font-medium transition-colors duration-300"
                  style={{ backgroundColor: '#E06B5A', padding: '13px 24px', fontSize: 12, letterSpacing: '0.1em' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c85947')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E06B5A')}
                >
                  TEKLİF AL →
                </Link>
              </div>

              {/* İlgili hizmetler */}
              {related.length > 0 && (
                <div className="bg-white rounded-sm p-7" style={{ border: '1px solid rgba(28,31,51,0.08)' }}>
                  <p className="uppercase mb-5" style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', color: '#E06B5A' }}>
                    İLGİLİ HİZMETLER
                  </p>
                  <ul className="space-y-3">
                    {related.map((rel) => (
                      <li key={rel.id}>
                        <Link
                          to={`/urunler/${rel.id}`}
                          onClick={() => window.scrollTo(0, 0)}
                          className="flex items-center gap-2 transition-colors duration-200"
                          style={{ fontSize: 14, color: '#1C1F33' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#E06B5A')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '#1C1F33')}
                        >
                          <span style={{ color: '#E06B5A' }}>→</span>
                          {rel.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Geri dön */}
              <button
                onClick={() => { navigate('/urunler'); window.scrollTo(0, 0); }}
                className="flex items-center gap-2 uppercase transition-colors duration-200"
                style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: '#E06B5A' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#c85947')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#E06B5A')}
              >
                ← TÜM HİZMETLERE DÖN
              </button>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
