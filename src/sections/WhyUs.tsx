import React from 'react';

export default function WhyUs() {
  return (
    <section className="py-24 px-8" style={{ backgroundColor: '#F7F7F5' }}>
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Sol Taraf: Açıklama */}
          <div>
            <p className="uppercase mb-4" style={{ fontSize: 14, fontWeight: 500, letterSpacing: '0.05em', color: '#E06B5A' }}>
              Neden Bizi Seçmelisiniz?
            </p>
            <h2 className="uppercase mb-6" style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 400, lineHeight: 1.1, color: '#1C1F33' }}>
              Neden Biz?
            </h2>
            <p className="mb-8" style={{ fontSize: 18, lineHeight: 1.7, color: '#4a4e6a' }}>
              İstanbul merkezli firmamız, alüminyum doğrama ve cam balkon sektöründe yılların tecrübesine sahip <strong style={{ color: '#1C1F33' }}>Necati Usta</strong> ve <strong style={{ color: '#1C1F33' }}>Mustafa Usta</strong> liderliğinde hizmet vermektedir. Her projede en kaliteli malzemeleri kullanarak, evinize milimetrik uyum sağlayan çözümler üretiyoruz.
            </p>
            <a
              href="tel:+905441846478"
              className="inline-block font-medium uppercase rounded-full transition-all duration-300"
              style={{ backgroundColor: '#E06B5A', color: '#fff', padding: '14px 32px', fontSize: 16, letterSpacing: '0.05em' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1C1F33')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E06B5A')}
            >
              Ücretsiz Keşif İste
            </a>
          </div>

          {/* Sağ Taraf: Avantajlar Kartı */}
          <div className="bg-[#1C1F33] rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <h3 className="text-white text-2xl font-medium mb-8 pb-4 border-b border-white/10">
              Avantajlarımız
            </h3>
            
            <ul className="space-y-6 mb-10">
              {/* Madde 1 */}
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#E06B5A]/20 text-[#E06B5A] mt-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <div>
                  <strong className="block text-white text-lg mb-1">Usta İşçilik</strong>
                  <span className="text-gray-400 text-sm">Necati & Mustafa Usta liderliğinde sıfır hata montaj.</span>
                </div>
              </li>
              {/* Madde 2 */}
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#E06B5A]/20 text-[#E06B5A] mt-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <div>
                  <strong className="block text-white text-lg mb-1">Ücretsiz Keşif</strong>
                  <span className="text-gray-400 text-sm">Anadolu Yakası genelinde milimetrik ölçü ve analiz.</span>
                </div>
              </li>
              {/* Madde 3 */}
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#E06B5A]/20 text-[#E06B5A] mt-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <div>
                  <strong className="block text-white text-lg mb-1">Garantili Malzeme</strong>
                  <span className="text-gray-400 text-sm">Avrupa standartlarında dayanıklı profiller ve çelik tüller.</span>
                </div>
              </li>
              {/* Madde 4 */}
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#E06B5A]/20 text-[#E06B5A] mt-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <div>
                  <strong className="block text-white text-lg mb-1">Zamanında & Temiz Montaj</strong>
                  <span className="text-gray-400 text-sm">Söz verilen günde, tertemiz teslimat.</span>
                </div>
              </li>
            </ul>

            {/* Alt Badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 text-sm font-medium text-gray-300 justify-center sm:justify-start">
              <span className="flex items-center gap-1.5"><span className="text-[#E06B5A]">✓</span> 2 Yıl Garanti</span>
              <span className="hidden lg:inline text-white/20">|</span>
              <span className="flex items-center gap-1.5"><span className="text-[#E06B5A]">📐</span> Ücretsiz Keşif</span>
              <span className="hidden lg:inline text-white/20">|</span>
              <span className="flex items-center gap-1.5"><span className="text-[#E06B5A]">⚡</span> Hızlı Montaj</span>
              <span className="hidden lg:inline text-white/20">|</span>
              <span className="flex items-center gap-1.5"><span className="text-[#E06B5A]">🏅</span> CE Belgeli</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
