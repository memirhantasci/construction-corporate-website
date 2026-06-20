// ─────────────────────────────────────────────────────────────────────────────
// src/pages/ProductsPage.tsx
//
// /urunler sayfası — tüm 15 kategori grid'de gösterilir.
// Veri servicePages.ts'den gelir; SEO meta tag'leri react-helmet-async ile yönetilir.
// ─────────────────────────────────────────────────────────────────────────────
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { servicePages } from '../data/servicePages';
import { SITE } from '../config/site';

const SITE_URL = typeof window !== 'undefined' ? window.location.origin : '';

export default function ProductsPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Hizmetlerimiz | {SITE.name}</title>
        <meta
          name="description"
          content={`${SITE.name} olarak cam balkon, alüminyum doğrama, PVC pencere, sineklik, duşakabin, korkuluk, pergola ve daha fazlası. İstanbul'un tüm ilçelerinde ücretsiz keşif.`}
        />
        <link rel="canonical" href={`${SITE_URL}/urunler`} />
        <meta property="og:title" content={`Hizmetlerimiz | ${SITE.name}`} />
        <meta property="og:url" content={`${SITE_URL}/urunler`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="pt-24 min-h-screen" style={{ backgroundColor: '#F7F7F5' }}>
        <section className="py-20 md:py-28">
          <div className="mx-auto px-8" style={{ maxWidth: 1440 }}>

            {/* Başlık */}
            <div className="mb-14 md:mb-18">
              <p
                className="uppercase mb-4"
                style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.05em', color: '#E06B5A' }}
              >
                HİZMETLERİMİZ VE ÇÖZÜMLERİMİZ
              </p>
              <h1
                className="uppercase"
                style={{
                  fontSize: 'clamp(32px, 4vw, 64px)',
                  fontWeight: 400,
                  lineHeight: 1.0,
                  letterSpacing: '-0.03em',
                  color: '#1C1F33',
                }}
              >
                Yaşam Alanlarınıza Değer Katan Dokunuşlar
              </h1>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {servicePages.map((product, i) => (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                  onClick={() => {
                    navigate(`/urunler/${product.id}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  {/* Görsel */}
                  <div
                    className="overflow-hidden rounded-sm bg-gray-200 relative w-full"
                    style={{ aspectRatio: '4/3', isolation: 'isolate' }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading={i < 3 ? 'eager' : 'lazy'}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform md:group-hover:scale-105"
                    />
                  </div>

                  {/* Metin */}
                  <div className="pt-5">
                    <h2
                      className="uppercase"
                      style={{ fontSize: 20, fontWeight: 400, lineHeight: 1.25, letterSpacing: '-0.01em', color: '#1C1F33' }}
                    >
                      {product.name}
                    </h2>
                    <p className="mt-2" style={{ fontSize: 15, lineHeight: 1.6, color: '#6b6f8a' }}>
                      {product.desc}
                    </p>
                    <div className="mt-3">
                      <span
                        className="uppercase hover:underline"
                        style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', color: '#E06B5A' }}
                      >
                        Detaylı Bilgi & İncele →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <button
                onClick={() => { navigate('/iletisim'); window.scrollTo(0, 0); }}
                className="inline-block text-white font-medium uppercase rounded-full transition-colors duration-300"
                style={{
                  backgroundColor: '#1C1F33',
                  padding: '16px 40px',
                  fontSize: 14,
                  letterSpacing: '0.08em',
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E06B5A')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1C1F33')}
              >
                TÜM HİZMETLERİMİZ İÇİN BİZE ULAŞIN
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
