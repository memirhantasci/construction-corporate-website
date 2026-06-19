import { Link } from 'react-router-dom';
import { serviceAreaCards } from '../data/districtPages';

export default function ServiceAreas() {
  return (
    <section
      id="bolgeler"
      className="py-24 md:py-32"
      style={{ backgroundColor: '#1C1F33' }}
    >
      <div className="mx-auto px-8" style={{ maxWidth: 1440 }}>
        <div className="text-center mb-16 md:mb-20">
          <p
            className="text-coral uppercase mb-5"
            style={{ fontSize: 14, fontWeight: 400, letterSpacing: '0.02em', lineHeight: 1.4 }}
          >
            ANADOLU YAKASI
          </p>
          <h2
            className="text-white uppercase mx-auto"
            style={{
              fontSize: 'clamp(36px, 4.5vw, 72px)',
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              maxWidth: 900,
            }}
          >
            Hizmet Bölgelerimiz
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Şile hariç İstanbul Anadolu Yakası&apos;nın tüm ilçelerinde cam balkon ve sineklik montajı yapıyoruz.
            Size en yakın bölge sayfasından detaylı bilgi alabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {serviceAreaCards.map((area, i) => (
            <Link
              key={area.slug}
              to={`/bolgeler/${area.slug}`}
              className="group block bg-white/5 border border-white/10 rounded-sm overflow-hidden transition-all duration-300 hover:border-coral/50 hover:bg-white/10"
            >
              <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={area.image}
                  alt={`${area.district} cam balkon ve sineklik hizmeti`}
                  // Artık buradaki 'i' değişkeni yukarıdan geldiği için hata vermez ve ilk 2 görsel eager, kalanı lazy yüklenir.
                  loading={i < 2 ? "eager" : "lazy"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-white uppercase group-hover:text-coral transition-colors duration-300"
                  style={{ fontSize: 22, fontWeight: 500, lineHeight: 1.25, letterSpacing: '-0.01em' }}
                >
                  {area.district}
                </h3>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">{area.description}</p>
                <p
                  className="text-coral mt-4 uppercase text-xs font-bold tracking-widest inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                >
                  Bölge Detayları <span>→</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
