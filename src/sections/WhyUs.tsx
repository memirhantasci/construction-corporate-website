import React from 'react';

const reasons = [
  {
    title: "Usta İşçilik",
    desc: "Sektörde yılların tecrübesine sahip Necati Usta ve Mustafa Usta liderliğindeki profesyonel montaj kadromuzla her projede sıfır hata hedefliyoruz."
  },
  {
    title: "Ücretsiz Keşif & Analiz",
    desc: "İstanbul Anadolu Yakası genelinde adresinize gelerek milimetrik ölçülerinizi tamamen ücretsiz alıyor, en doğru sistemi birlikte seçiyoruz."
  },
  {
    title: "Garantili & Kaliteli Malzeme",
    desc: "Avrupa standartlarında alüminyum profiller, yırtılmaz çelik kedi sinekliği tülleri ve ısı yalıtımlı cam paneller kullanarak uzun ömürlü çözümler sunuyoruz."
  },
  {
    title: "Zamanında & Temiz Montaj",
    desc: "Söz verdiğimiz gün ve saatte montajı tamamlıyor, evinizi kirletmeden, jilet gibi temizleyerek teslim ediyoruz."
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 px-8 bg-[#1C1F33]">
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center mb-16">
          <p className="uppercase mb-4" style={{ fontSize: 14, fontWeight: 500, letterSpacing: '0.05em', color: '#E06B5A' }}>
            Neden Bizi Seçmelisiniz?
          </p>
          <h2 className="text-white uppercase" style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 400, lineHeight: 1.1 }}>
            Neden Biz?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: '#E06B5A' }}>
                {i + 1}
              </div>
              <h3 className="text-white text-xl font-medium mb-4">{r.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
