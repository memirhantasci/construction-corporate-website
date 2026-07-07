import { Link } from 'react-router-dom';
import { serviceAreaCards } from '../data/districtPages';

export default function AllDistrictsPage() {
  return (
    // Arka planı lacivertten bg-cream (krem/açık gri) tonuna çektik
    <div className="min-h-screen bg-cream">
      
      {/* Sayfa Başlığı Alanı */}
      <div className="pt-32 pb-12 px-8 text-center">
        <p className="text-coral uppercase mb-2 tracking-[0.2em] text-xs font-bold">ANADOLU YAKASI</p>
        
        {/* Başlık rengini text-white yerine text-navy yaptık */}
        <h1 className="text-navy uppercase tracking-widest text-4xl font-light">Tüm Hizmet Bölgelerimiz</h1>
        <div className="w-12 h-px bg-coral mx-auto mt-6"></div>
        
        {/* Alt metin rengini koyulaştırdık */}
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            İstanbul Anadolu Yakası'nın tüm ilçelerinde cam balkon ve sineklik montajı yapıyoruz.
            Detaylı bilgi almak istediğiniz bölgeyi seçebilirsiniz.
        </p>
      </div>

      {/* Tüm Bölgelerin Listelendiği Grid Alanı */}
      <section className="py-12 md:py-20">
        <div className="mx-auto px-8" style={{ maxWidth: 1440 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {serviceAreaCards.map((area, i) => (
              <Link
                key={area.slug}
                to={`/bolgeler/${area.slug}`}
                onClick={() => window.scrollTo(0, 0)}
                // Kartları beyaz yaptık, hafif gölge ve yukarı kayma (hover) efekti ekledik
                className="group block bg-white border border-gray-200/60 rounded-sm overflow-hidden transition-all duration-300 hover:border-coral/50 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={area.image}
                    alt={`${area.district} cam balkon ve sineklik`}
                    loading={i < 4 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  {/* Kart içi başlık text-navy oldu */}
                  <h3
                    className="text-navy uppercase group-hover:text-coral transition-colors duration-300"
                    style={{ fontSize: 22, fontWeight: 500, lineHeight: 1.25, letterSpacing: '-0.01em' }}
                  >
                    {area.district}
                  </h3>
                  
                  {/* Kart içi açıklama */}
                  <p className="text-gray-500 mt-2 text-sm leading-relaxed">{area.description}</p>
                  
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
    </div>
  );
}