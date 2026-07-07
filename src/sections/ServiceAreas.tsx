import { useState } from 'react';
import { Link } from 'react-router-dom';
import { serviceAreaCards } from '../data/districtPages';

export default function ServiceAreas() {
  // Başlangıçta tüm bölgelerin gösterilip gösterilmeyeceğini tutan state
  const [showAll, setShowAll] = useState(false);

  // Eğer showAll true ise tüm listeyi, false ise sadece ilk 4 elemanı al
  const displayedAreas = showAll ? serviceAreaCards : serviceAreaCards.slice(0, 4);

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

        {/* displayedAreas üzerinden map yapıyoruz (ilk 4 veya hepsi) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {displayedAreas.map((area, i) => (
            <Link
              key={area.slug}
              to={`/bolgeler/${area.slug}`}
              className="group block bg-white/5 border border-white/10 rounded-sm overflow-hidden transition-all duration-300 hover:border-coral/50 hover:bg-white/10"
            >
              <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={area.image}
                  alt={`${area.district} cam balkon ve sineklik hizmeti`}
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

        {/* Eğer toplam bölge sayısı 4'ten fazlaysa butonu göster */}
        {serviceAreaCards.length > 4 && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-block border border-coral text-coral hover:bg-coral hover:text-white font-medium uppercase rounded-full transition-all duration-300"
              style={{
                padding: '12px 32px',
                fontSize: 15,
                letterSpacing: '0.08em',
              }}
            >
              {showAll ? 'DAHA AZ GÖSTER' : 'TÜM BÖLGELERİ GÖSTER'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}