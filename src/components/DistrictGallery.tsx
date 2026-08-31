interface DistrictGalleryProps {
  district: string;
}

const galleryItems = [
  {
    image: '/images/cambalkon-1.jpeg',
    title: 'Katlanır Cam Balkon Montajı',
    category: 'Cam Balkon',
  },
  {
    image: '/images/cambalkon-3.jpeg',
    title: 'Isıcamlı Cam Balkon Uygulaması',
    category: 'Isıcamlı Sistem',
  },
  {
    image: '/images/sineklik-1.png',
    title: 'Pileli Sineklik Sistemi',
    category: 'Sineklik',
  },
  {
    image: '/images/cambalkon-2.jpeg',
    title: 'Sürme Cam Balkon Kapatma',
    category: 'Sürme Sistem',
  },
  {
    image: '/images/kis_bahcesi.jpeg',
    title: 'Teras & Kış Bahçesi',
    category: 'Kış Bahçesi',
  },
  {
    image: '/images/aluminyum_dograma.jpeg',
    title: 'Alüminyum Doğrama Çözümü',
    category: 'Alüminyum',
  },
];

export default function DistrictGallery({ district }: DistrictGalleryProps) {
  return (
    <section className="mt-16">
      <p
        className="text-coral uppercase mb-3"
        style={{ fontSize: 13, letterSpacing: '0.1em', fontWeight: 500 }}
      >
        REFERANS İŞLER
      </p>
      <h2
        className="text-navy uppercase mb-3"
        style={{ fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 500, lineHeight: 1.2 }}
      >
        {district}&apos;de Yaptığımız İşlerden Örnekler
      </h2>
      <p className="text-navy-muted mb-8 leading-relaxed">
        {district} genelinde tamamladığımız cam balkon, pileli sineklik, alüminyum doğrama ve kış bahçesi montajlarımızdan bazı kareler:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-sm border border-navy/10 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-coral/40"
          >
            <div className="overflow-hidden aspect-[4/3]">
              <img
                src={item.image}
                alt={`${district} ${item.title}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white">
              <span className="text-[11px] font-bold uppercase tracking-widest text-coral">
                {item.category}
              </span>
              <h3 className="text-navy text-sm font-medium mt-1">
                {district} — {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
