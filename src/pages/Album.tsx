
// Tüm albüm fotoğraflarını buraya ekleyebilirsin
/*const allAlbumPhotos = [
  { image: '/images/portfolio1.jpg', location: 'Bebek — İstanbul' },
  { image: '/images/portfolio2.jpg', location: 'Levent — İstanbul' },
  { image: '/images/portfolio3.jpg', location: 'Ataşehir — İstanbul' },
  { image: '/images/portfolio4.jpg', location: 'Moda — İstanbul' },
  { image: '/images/portfolio5.jpg', location: 'Kadıköy — İstanbul' },
  { image: '/images/portfolio6.jpg', location: 'Etiler — İstanbul' },
  { image: '/images/portfolio7.jpg', location: 'Şişli — İstanbul' },
  { image: '/images/portfolio8.jpg', location: 'Üsküdar — İstanbul' },
  { image: '/images/portfolio9.jpg', location: 'Beykoz — İstanbul' },
];*/

export default function Album() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sayfa Başlığı Alanı - Yumuşak Gri */}
      <div className="pt-32 pb-20 px-8 text-center" style={{ backgroundColor: '#F7F7F5' }}>
        <h1 className="text-navy uppercase tracking-[0.3em] text-5xl font-light">FOTOĞRAF ALBÜMÜ</h1>
        <p className="text-navy-muted mt-4 italic font-light">Uygulamalarımızdan seçme kareler ve detaylar</p>
      </div>
      
      {/* Galeri Alanı */}
      <div className="py-20 px-8 max-w-[1440px] mx-auto">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Fotoğraflar buraya gelecek. Şimdilik placeholder: */}
            {[...Array(12)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-50 border border-gray-100 rounded-sm overflow-hidden flex items-center justify-center text-gray-300">
                Görsel {i + 1}
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}