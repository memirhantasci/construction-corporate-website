import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 'aluminyum-dograma',
    name: 'Alüminyum Doğrama',
    desc: 'Ofis bölme panelleri ve yüksek kaliteli alüminyum doğrama işleri.',
    image: '/images/aluminyum.jpeg',
  },
  {
    id: 'cam-balkon',
    name: 'Cam Balkon',
    desc: 'Katlanır ve sürme cam sistemleri ile balkon keyfini dört mevsim yaşayın.',
    image: '/images/cambalkon.jpeg',
  },
  {
    id: 'dusakabin',
    name: 'Duşakabin',
    desc: 'Banyonuza özel ölçü, modern ve dayanıklı cam kabin çözümleri.',
    image: '/images/dusakabin.jpeg',
  },
  {
    id: 'korkuluk',
    name: 'Korkuluk Sistemleri',
    desc: 'Alüminyum ve cam korkuluklar ile güvenli ve şık mekanlar.',
    image: '/images/korkuluk.jpeg',
  },
  {
    id: 'motorlu-panjur',
    name: 'Motorlu Panjur',
    desc: 'Konfor ve güvenliği bir araya getiren akıllı panjur sistemleri.',
    image: '/images/panjur.jpeg',
  },
  {
    id: 'plastik-dograma',
    name: 'Plastik Doğrama (PVC)',
    desc: 'Isı ve ses yalıtımı sağlayan yüksek kaliteli PVC sistemleri.',
    image: '/images/pvc.jpeg',
  },
  {
    id: 'sineklik',
    name: 'Sineklik Sistemleri',
    desc: 'Her pencereye uygun profesyonel sineklik çözümleri.',
    image: '/images/sineklik.jpeg',
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.product-card');
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );

          const img = card.querySelector('.product-img');
          if (img) {
            gsap.fromTo(
              img,
              { y: 30 },
              {
                y: -30,
                ease: 'none',
                scrollTrigger: {
                  trigger: card,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: true,
                },
              }
            );
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="urunler"
      className="py-24 md:py-32"
      style={{ backgroundColor: '#F7F7F5' }}
    >
      <div className="mx-auto px-8" style={{ maxWidth: 1440 }}>
        <div className="mb-16 md:mb-20">
          <p
            className="text-coral uppercase mb-4"
            style={{ fontSize: 14, fontWeight: 500, letterSpacing: '0.05em', lineHeight: 1.4 }}
          >
            HİZMETLERİMİZ VE ÇÖZÜMLERİMİZ
          </p>
          <h2
            ref={headlineRef}
            className="text-navy uppercase"
            style={{
              fontSize: 'clamp(36px, 4.5vw, 72px)',
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
            }}
          >
            Yaşam Alanlarınıza Değer Katan Dokunuşlar
          </h2>
        </div>



        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  {products.map((product, i) => (
    <div 
      key={i} 
      className="product-card group cursor-pointer"
      onClick={() => {
        navigate(`/urunler/${product.id}`);
        window.scrollTo(0, 0);
      }}
    >
      {/* Kutuyu 'isolate' ve 'transform-z-0' ile tamamen stabilize ettik */}
      <div 
        className="overflow-hidden rounded-sm bg-gray-100 relative w-full isolate transform-gpu" 
        style={{ aspectRatio: '4/3', touchAction: 'pan-y' }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="product-img absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform md:group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="pt-6">
        <h3
          className="text-navy uppercase"
          style={{ fontSize: 24, fontWeight: 400, lineHeight: 1.25, letterSpacing: '-0.01em' }}
        >
          {product.name}
        </h3>
        <p className="text-navy-muted mt-2" style={{ fontSize: 16, lineHeight: 1.6 }}>
          {product.desc}
        </p>
        <div className="text-coral mt-4">
          <span className="uppercase text-xs font-bold tracking-widest">Detaylı Bilgi & İncele →</span>
        </div>
      </div>
    </div>
  ))}
</div>
        
        
        <div className="text-center mt-16">
          <button
            onClick={() => {
              navigate('/iletisim');
              window.scrollTo(0, 0);
            }}
            className="inline-block text-[#F7F7F5] font-medium uppercase rounded-full transition-colors duration-300"
            style={{
              backgroundColor: '#1C1F33',
              padding: '16px 40px',
              fontSize: 16,
              letterSpacing: '0.08em',
              fontWeight: 500,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E06B5A')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1C1F33')}
          >
            TÜM HİZMETLERİMİZ İÇİN BİZE ULAŞIN
          </button>
        </div>
      </div>
    </section>
  );
}