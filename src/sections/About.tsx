import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

// variant='light' → açık krem (AboutPage'de kullanılır, footer ile çakışmaz)
// variant='dark'  → lacivertin %40 aydınlatılmışı (ana sayfada kullanılır)
export function About({ variant = 'dark' }: { variant?: 'light' | 'dark' }) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline word-by-word reveal
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

          gsap.fromTo(
            split.words,
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

      // Content fade in
      if (contentRef.current) {
        const children = contentRef.current.children;
        gsap.fromTo(
          children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Image parallax
      if (imageRef.current && imageContainerRef.current) {
        gsap.fromTo(
          imageRef.current,
          { y: 60 },
          {
            y: -60,
            ease: 'none',
            scrollTrigger: {
              trigger: imageContainerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hakkimizda"
      className="py-24 md:py-32"
      style={{ backgroundColor: variant === 'light' ? '#F5F5F0' : '#1C1F33' }}
    >
      <div className="mx-auto px-8" style={{ maxWidth: 1440 }}>
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p
            className="text-coral uppercase mb-5"
            style={{ fontSize: 14, fontWeight: 400, letterSpacing: '0.02em', lineHeight: 1.4 }}
          >
            HAKKIMIZDA
          </p>
          <h2
            ref={headlineRef}
            className="uppercase mx-auto"
            style={{
              fontSize: 'clamp(36px, 4.5vw, 72px)',
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              maxWidth: 900,
              color: variant === 'light' ? '#1C1F33' : '#F7F7F5',
            }}
          >
            Yaşam Alanlarınıza Estetik ve Konfor Katıyoruz
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Image */}
          <div
            ref={imageContainerRef}
            className="w-full md:w-[45%] overflow-hidden rounded-sm"
            style={{ border: '1px solid rgba(28, 31, 51, 0.08)' }}
          >
            <img
              ref={imageRef}
              src="/images/about_result.webp"
              alt="Ataşehir'de tamamlanmış, estetik ve ısı yalıtımlı modern cam balkon uygulaması"
              title="Yüksek Kaliteli Cam Balkon Uygulamalarımız"
              loading="lazy"
              className="w-full h-auto object-cover"
              style={{ aspectRatio: '3/4' }}
            />
          </div>
          {/* Text */}
          <div ref={contentRef} className="w-full md:w-[55%] flex flex-col justify-center">
            <p style={{ fontSize: 18, lineHeight: 1.6, color: variant === 'light' ? '#4a4e6a' : '#F7F7F5' }}>
              İstanbul Cam Balkon & Sineklik olarak, 2008 yılından bu yana Ataşehir başta olmak üzere tüm Anadolu Yakası'nda mekanlarınıza değer katan projeler geliştiriyoruz. İstanbul'un değişken nem oranlarına ve yüksek binalardaki rüzgar yüküne tam dayanıklı, paslanmaz alüminyum profillerden ürettiğimiz katlanır ve ısıcamlı cam balkon sistemlerimizle uzun ömürlü kullanım garantisi sunuyoruz.
            </p>
            <p className="mt-7" style={{ fontSize: 18, lineHeight: 1.6, color: variant === 'light' ? '#4a4e6a' : '#F7F7F5' }}>
              Sadece estetik değil, aynı zamanda evcil hayvanlarınızın güvenliği için özel güçlendirilmiş yırtılmaz kedi sinekliği ve kullanım kolaylığı sağlayan plise (pileli) sineklik modellerimizle yaşam alanlarınızı daha ferah hale getiriyoruz. Her projemizde ezbere montaj yapmak yerine; mekanın rüzgar açısı, cephe yönü ve mimari yapısını analiz ederek, en yüksek ısı yalıtımı ve sızdırmazlığı sağlayacak özel çözümler üretiyoruz.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 mt-12">
              <div>
                <p className="text-coral" style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em' }}>18+</p>
                <p className="uppercase mt-1" style={{ fontSize: 14, letterSpacing: '0.02em', lineHeight: 1.4, color: variant === 'light' ? '#6b6f8a' : 'rgba(247,247,245,0.7)' }}>Yıllık Tecrübe</p>
              </div>
              <div>
                <p className="text-coral" style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em' }}>10.000+</p>
                <p className="uppercase mt-1" style={{ fontSize: 14, letterSpacing: '0.02em', lineHeight: 1.4, color: variant === 'light' ? '#6b6f8a' : 'rgba(247,247,245,0.7)' }}>Tamamlanan Proje</p>
              </div>
              <div>
                <p className="text-coral" style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em' }}>100%</p>
                <p className="uppercase mt-1" style={{ fontSize: 14, letterSpacing: '0.02em', lineHeight: 1.4, color: variant === 'light' ? '#6b6f8a' : 'rgba(247,247,245,0.7)' }}>Müşteri Memnuniyeti</p>
              </div>
            </div>
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 uppercase text-sm mt-10 transition-all duration-400 group"
              style={{ color: variant === 'light' ? '#1C1F33' : '#F7F7F5', fontWeight: 400, letterSpacing: '0.05em', width: 'fit-content' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.letterSpacing = '0.15em';
                e.currentTarget.style.color = '#E06B5A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.letterSpacing = '0.05em';
                e.currentTarget.style.color = variant === 'light' ? '#1C1F33' : '#F7F7F5';
              }}
            >
              PROJENİZ İÇİN TEKLİF ALIN 
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}