import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { Link } from 'react-router-dom';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Eyebrow Animasyonu
      gsap.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: 'power2.out' }
      );

      // Başlık Animasyonu (Karakter bazlı)
      if (headlineRef.current) {
        const split = new SplitType(headlineRef.current, { types: 'chars' });
        if (split.chars) {
          gsap.fromTo(
            split.chars,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, stagger: 0.025, duration: 0.5, ease: 'power3.out', delay: 0.6 }
          );
        }
      }

      // Alt Başlık Animasyonu
      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.2, ease: 'power2.out' }
      );

      // Butonlar Animasyonu
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.4, ease: 'power2.out' }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-navy"
    >
      {/* Arka Plan Görseli & Karartma Katmanı */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg"
          alt="İstanbul Cam Balkon & Sineklik arka plan" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Mobilde yazılar daha iyi okunsun diye karartmayı artırdık, md ekranlarda eski haline dönüyor */}
        <div className="absolute inset-0 bg-black/75 md:bg-black/60"></div>
      </div>

      {/* Metin İçeriği */}
      <div className="relative z-10 w-full md:w-2/3 flex flex-col justify-center px-8 md:pl-[120px] md:pr-8 py-24">
        <p
          ref={eyebrowRef}
          className="text-coral uppercase mb-6 opacity-0"
          style={{ fontSize: 14, fontWeight: 500, letterSpacing: '0.04em', lineHeight: 1.4 }}
        >
          
        </p>

        <h1
          ref={headlineRef}
          className="text-white uppercase break-words whitespace-pre-line"
          style={{
            // Mobilde kelimelerin sığması için minimum font boyutunu 28px'e çektik
            fontSize: 'clamp(28px, 5vw, 72px)',
            fontWeight: 600,
            lineHeight: 1.1, // Kelimeler üst üste binmesin diye line-height'ı hafifçe rahatlattık
            letterSpacing: '-0.02em',
          }}
        >
          İstanbul Cam Balkon
          <br />
          &amp; Sineklik Sistemleri
        </h1>

        <p
          ref={subRef}
          className="text-gray-200 opacity-0 max-w-lg mt-7"
          style={{ fontSize: 18, lineHeight: 1.6, fontWeight: 400 }}
        >
          Alüminyum doğramadan cam balkona, motorlu panjurdan sinekliğe kadar yaşam alanlarınız için estetik, dayanıklı ve fonksiyonel çözümler üretiyoruz.
        </p>

        <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mt-10 opacity-0">
          {/* BİZE ULAŞIN BUTONU */}
          <Link
            to="/iletisim"
            className="inline-block bg-coral text-white font-medium uppercase rounded-full transition-all duration-300 hover:scale-[1.03] hover:bg-[#C85A4A]"
            style={{ 
              padding: '14px 32px', 
              fontSize: 16, 
              letterSpacing: '0.08em', 
              fontWeight: 500 
            }}
          >
            BİZE ULAŞIN
          </Link>

          {/* TÜM İŞLERİMİZİ GÖR BUTONU */}
          <Link
            to="/islerimiz"
            className="text-white uppercase text-sm transition-all duration-300 group inline-flex items-center gap-2 hover:text-coral hover:tracking-[0.15em]"
            style={{ 
              fontWeight: 500, 
              letterSpacing: '0.05em' 
            }}
          >
            TÜM İŞLERİMİZİ GÖR 
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}