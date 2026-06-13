import { Link, useNavigate, useParams } from 'react-router-dom';
import DistrictGallery from '../components/DistrictGallery';
import SeoMeta from '../components/SeoMeta';
import { SITE } from '../config/site';
import { districtPages } from '../data/districtPages';

export default function DistrictPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const page = slug ? districtPages[slug] : undefined;

  if (!page) {
    return (
      <div className="pt-40 text-center min-h-screen bg-cream">
        <h2 className="text-2xl text-navy mb-4">Sayfa bulunamadı.</h2>
        <button onClick={() => navigate('/')} className="text-coral underline">
          Ana Sayfaya Dön
        </button>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const mesaj = encodeURIComponent(
      `Merhaba, ${page.district} bölgesi için cam balkon ve sineklik hakkında ücretsiz keşif almak istiyorum.`
    );
    window.open(`https://wa.me/${SITE.whatsapp}?text=${mesaj}`, '_blank');
  };

  return (
    <>
      <SeoMeta
        title={page.title}
        description={page.description}
        path={`/bolgeler/${page.slug}`}
      />

      <div className="min-h-screen bg-cream pt-24">
        <div className="max-w-[1200px] mx-auto px-8 py-16">
          <Link
            to="/"
            className="group flex items-center gap-2 text-coral mb-10 uppercase text-xs font-bold tracking-widest"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span> ANA SAYFAYA DÖN
          </Link>

          <p
            className="text-coral uppercase mb-4"
            style={{ fontSize: 14, fontWeight: 500, letterSpacing: '0.05em' }}
          >
            HİZMET BÖLGESİ
          </p>

          <h1
            className="text-navy uppercase"
            style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            {page.district} Cam Balkon &amp; Sineklik
          </h1>

          <p className="text-navy-muted mt-4 text-lg">{page.heroSubtitle}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {page.neighborhoods.map((neighborhood) => (
              <span
                key={neighborhood}
                className="text-navy bg-white border border-gray-100 px-3 py-1 rounded-full text-sm"
              >
                {neighborhood}
              </span>
            ))}
          </div>

          <p className="text-navy-muted mt-10 text-lg leading-relaxed">{page.intro}</p>

          <div className="mt-14 space-y-12">
            {page.sections.map((section) => (
              <article key={section.heading}>
                <h2
                  className="text-navy uppercase mb-4"
                  style={{ fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 500, lineHeight: 1.2 }}
                >
                  {section.heading}
                </h2>
                <p className="text-navy-muted text-lg leading-relaxed">{section.body}</p>
              </article>
            ))}
          </div>

          <DistrictGallery district={page.district} />

          <div
            className="mt-20 bg-navy rounded-sm p-10 md:p-14 text-center"
            style={{ border: '1px solid rgba(28, 31, 51, 0.08)' }}
          >
            <p
              className="text-coral uppercase mb-3"
              style={{ fontSize: 13, letterSpacing: '0.1em', fontWeight: 500 }}
            >
              ÜCRETSİZ KEŞİF
            </p>
            <h2
              className="text-white uppercase mb-4"
              style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 500, lineHeight: 1.15 }}
            >
              {page.district} İçin Hemen Teklif Alın
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
              Keşif ekibimiz {page.district}&apos;de adresinize gelir, ölçü alır ve aynı gün fiyat teklifi sunar.
              Katlanır cam balkon, ısıcamlı cam balkon, pileli sineklik ve kedi sinekliği için bizi arayın.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/iletisim"
                className="inline-block bg-coral text-white font-medium uppercase rounded-full transition-all duration-300 hover:scale-[1.03] hover:bg-coral-hover"
                style={{ padding: '14px 32px', fontSize: 15, letterSpacing: '0.08em' }}
              >
                ÜCRETSİZ KEŞİF AL
              </Link>
              <button
                onClick={handleWhatsApp}
                className="inline-block text-white font-medium uppercase rounded-full border border-white/30 transition-all duration-300 hover:bg-white/10"
                style={{ padding: '14px 32px', fontSize: 15, letterSpacing: '0.08em' }}
              >
                WHATSAPP YAZ
              </button>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="inline-block text-coral font-medium uppercase text-sm tracking-widest hover:text-white transition-colors"
              >
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
