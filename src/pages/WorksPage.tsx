import Portfolio from '../sections/Portfolio';

export default function WorksPage() {
  return (
    <div className="min-h-screen">
      {/* Sayfa Başlığı Alanı - Açık ve Ferah Ton */}
      <div className="pt-32 pb-16 px-8 text-center" style={{ backgroundColor: '#F0F0EE' }}>
        <p className="text-coral uppercase mb-2 tracking-[0.2em] text-xs font-bold">Referanslarımız</p>
        <h1 className="text-navy uppercase tracking-widest text-4xl font-light">Öne Çıkan İşlerimiz</h1>
        <div className="w-12 h-px bg-coral mx-auto mt-6"></div>
      </div>
      
      {/* Portfolio içeriği kendi içindeki lacivert arka planı koruyabilir 
          veya Portfolio.tsx içinden o rengi de açık tona çekebilirsin. */}
      <Portfolio />
    </div>
  );
}