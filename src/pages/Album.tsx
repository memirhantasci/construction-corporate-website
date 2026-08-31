const allAlbumPhotos = [
  { image: '/images/cambalkon-1.jpeg', title: 'Katlanır Cam Balkon', location: 'Ataşehir — İstanbul' },
  { image: '/images/cambalkon-3.jpeg', title: 'Isıcamlı Cam Balkon', location: 'Kadıköy — İstanbul' },
  { image: '/images/sineklik-1.png', title: 'Pileli Sineklik Montajı', location: 'Ümraniye — İstanbul' },
  { image: '/images/cambalkon-2.jpeg', title: 'Sürme Cam Balkon', location: 'Maltepe — İstanbul' },
  { image: '/images/kis_bahcesi.jpeg', title: 'Lüks Kış Bahçesi', location: 'Beykoz — İstanbul' },
  { image: '/images/giyotin.jpeg', title: 'Motorlu Giyotin Cam', location: 'Pendik — İstanbul' },
  { image: '/images/pergola.jpeg', title: 'Bioklimatik Pergola', location: 'Sancaktepe — İstanbul' },
  { image: '/images/aluminyum_dograma.jpeg', title: 'Isı Yalıtımlı Alüminyum', location: 'Kartal — İstanbul' },
  { image: '/images/panjur_balkon.jpeg', title: 'Otomatik Motorlu Panjur', location: 'Sultanbeyli — İstanbul' },
  { image: '/images/dusakabin.jpeg', title: 'Özel Ölçü Duşakabin', location: 'Üsküdar — İstanbul' },
  { image: '/images/korkuluk.jpeg', title: 'Alüminyum & Cam Korkuluk', location: 'Tuzla — İstanbul' },
  { image: '/images/ofis_bolme.jpeg', title: 'Modüler Ofis Bölme', location: 'Çekmeköy — İstanbul' },
];

export default function Album() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      {/* Sayfa Başlığı Alanı */}
      <div className="pt-16 pb-14 px-8 text-center bg-white border-b border-navy/10">
        <p className="text-coral uppercase tracking-widest text-xs font-bold mb-2">GALERİ</p>
        <h1 className="text-navy uppercase tracking-[0.2em] text-3xl md:text-5xl font-light">FOTOĞRAF ALBÜMÜ</h1>
        <p className="text-navy-muted mt-4 text-base md:text-lg">Tamamlanan cam balkon, sineklik ve alüminyum uygulamalarımızdan seçme kareler</p>
      </div>
      
      {/* Galeri Alanı */}
      <div className="py-16 px-6 sm:px-8 max-w-[1440px] mx-auto">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allAlbumPhotos.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white border border-navy/10 rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.location} - ${item.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-navy font-semibold text-sm group-hover:text-coral transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">
                    📍 {item.location}
                  </p>
                </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}