import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        const split = new SplitType(headlineRef.current, { types: 'words' });
        if (split.words) {
          split.words.forEach((word) => {
            const wrapper = document.createElement('span');
            wrapper.style.display = 'inline-block';
            wrapper.style.overflow = 'hidden';
            word.parentNode?.insertBefore(wrapper, word);
            wrapper.appendChild(word);
          });

          gsap.fromTo(split.words,
            { y: '100%', opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.05,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: headlineRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
              onComplete: () => split.revert(),
            }
          );
        }
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleWhatsApp = () => {
    const kendiNumaram = "905441846478"; 
    const mesaj = encodeURIComponent("Merhaba, yapı sistemleriniz hakkında bilgi almak istiyorum.");
    window.open(`https://wa.me/${kendiNumaram}?text=${mesaj}`, '_blank');
  };

  return (
    <section ref={sectionRef} id="iletisim" className="py-24 md:py-32" style={{ backgroundColor: 'transparent' }}>
      <div className="mx-auto px-8" style={{ maxWidth: 1440 }}>
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
          
          {/* SOL TARAF: Yazılar ve Bilgiler */}
          <div ref={leftRef} className="w-full lg:w-1/3">
            <p className="text-coral uppercase mb-4" style={{ fontSize: 14, fontWeight: 400, letterSpacing: '0.02em' }}>İLETİŞİM</p>
            <h2 ref={headlineRef} className="text-navy uppercase" style={{ fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 400, lineHeight: 1.1 }}>Hemen Ulaşın</h2>
            
            <div className="mt-10 space-y-8">
              <div>
                <p className="text-navy-muted uppercase mb-1" style={{ fontSize: 12, letterSpacing: '0.1em' }}>Müşteri Hattı</p>
                <a href="tel:+905441846478" className="text-navy block text-2xl font-medium hover:text-coral transition-colors">0544 184 64 78</a>
              </div>
              <div>
                <p className="text-navy-muted uppercase mb-1" style={{ fontSize: 12, letterSpacing: '0.1em' }}>Adres</p>
                <p className="text-navy text-xl leading-relaxed font-light">Küçükbakkalköy, Sümer Sk. 8A,<br />34636 Ataşehir/İstanbul</p>
              </div>
            </div>
          </div>

          {/* SAĞ TARAF: Kartlar ve Harita */}
          <div ref={rightRef} className="w-full lg:w-2/3 flex flex-col gap-6">
            
            {/* Kartlar Izgarası */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* WHATSAPP KARTI */}
              <div className="bg-white rounded-sm p-8 text-center flex flex-col items-center shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-[#25D366]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-navy mb-6">+90 544 184 64 78</h3>
                <button
                  onClick={handleWhatsApp}
                  className="w-full text-white font-medium rounded-full transition-all duration-300 hover:bg-[#20ba5a]"
                  style={{ backgroundColor: '#25D366', padding: '14px 20px', fontSize: 15 }}
                >
                  WHATSAPP DESTEK
                </button>
              </div>

              {/* ARAMA KARTI */}
              <div className="bg-white rounded-sm p-8 text-center flex flex-col items-center shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-navy">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-navy mb-6">0544 184 64 78</h3>
                <a
                  href="tel:+905441846478"
                  className="w-full text-white font-medium rounded-full transition-all duration-300 hover:bg-navy/90 flex items-center justify-center"
                  style={{ backgroundColor: '#1C1F33', padding: '14px 20px', fontSize: 15 }}
                >
                  HEMEN ARAYIN
                </a>
              </div>

            </div>

            {/* GOOGLE HARİTA */}
            <div className="w-full h-[350px] rounded-sm overflow-hidden shadow-sm border border-gray-100">
              <iframe 
                title="Akın Yapı Google Harita"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.650233433543!2d29.112264!3d40.979249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac636b046097d%3A0x60037f401979b00!2sK%C3%BC%C3%A7%C3%BCkbakkalk%C3%B6y%2C%20S%C3%BCmer%20Sk.%208A%2C%2034636%20Ata%C5%9Fehir%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1715000000000!5m2!1str!2str"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}