import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

// FOTOLARI BURADAN DÜZENLE:
const portfolioItems = [
  { 
    image: '/images/aluminyum_result.webp', 
    category: 'Alüminyum Doğrama', 
    location: 'Ofis Bölme — Ataşehir',
    aspect: 'aspect-square' 
  },
  { 
    image: '/images/cambalkon_result.webp', 
    category: 'Cam Balkon', 
    location: 'Cam Balkon — Kadıköy',
    aspect: 'aspect-video' 
  },
  { 
    image: '/images/panjur_result.webp', 
    category: 'Motorlu Panjur', 
    location: 'Otomatik Sistem — Beşiktaş',
    aspect: 'aspect-square' 
  },
  { 
    image: '/images/sineklik_result.webp', 
    category: 'Sineklik', 
    location: 'Pileli Sineklik — Etiler',
    aspect: 'aspect-[3/4]' 
  },
  { 
    image: '/images/dusakabin_result.webp', 
    category: 'Duşakabin', 
    location: 'Duşakabin — Moda',
    aspect: 'aspect-square' 
  },
  { 
    image: '/images/korkuluk_result.webp', 
    category: 'Korkuluk', 
    location: 'Merdiven Korkuluk — Bebek',
    aspect: 'aspect-video' 
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        const split = new SplitType(headlineRef.current, { types: 'words' });
        if (split.words) {
          gsap.fromTo(split.words,
            { y: '100%', opacity: 0 },
            {
              y: 0, opacity: 1, stagger: 0.05, duration: 0.8, ease: 'power2.out',
              scrollTrigger: { trigger: headlineRef.current, start: 'top 85%' }
            }
          );
        }
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="portfoy" className="py-24 bg-white">
      <div className="mx-auto px-8" style={{ maxWidth: 1440 }}>
        
        <div className="text-center mb-16">
          <p className="text-coral uppercase mb-5 font-bold tracking-widest text-xs">REFERANS PROJELERİMİZ</p>
          <h2 ref={headlineRef} className="uppercase text-navy text-4xl md:text-5xl font-light">İşlerimiz Konuşuyor</h2>
        </div>

        {/* 442x591 Oranına Göre Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, i) => (
            <div 
              key={i} 
              className="group relative overflow-hidden rounded-sm cursor-pointer"
              onClick={() => navigate('/islerimiz')}
              // CSS ile 442.66 / 591.73 oranını tam olarak buraya gömüyoruz
              style={{ aspectRatio: '442.66 / 591.73' }}
            >
              <img 
                src={item.image} 
                alt={item.category} 
                // İlk 2 görsel hemen yüklensin (Eager), diğerleri kaydırınca yüklensin (Lazy)
                loading={i < 2 ? "eager" : "lazy"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />

              
              <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <p className="text-coral text-xs uppercase font-bold mb-2">{item.category}</p>
                <h3 className="text-white text-xl font-light">{item.location}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            to="/album"
            onClick={() => window.scrollTo(0, 0)}
            className="bg-coral text-white font-bold uppercase rounded-full px-12 py-4 transition-all hover:scale-105 inline-block"
          >
            TÜM PROJELERİ İNCELE
          </Link>
        </div>
      </div>
    </section>
  );
}