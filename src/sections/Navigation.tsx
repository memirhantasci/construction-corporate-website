import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'ANA SAYFA', href: '/' },
  { label: 'HİZMETLERİMİZ', href: '/urunler' },
  { label: 'İŞLERİMİZ', href: '/islerimiz' },
  { label: 'ALBÜM', href: '/album' },
  { label: 'HAKKIMIZDA', href: '/hakkimizda' },
  { label: 'İLETİŞİM', href: '/iletisim' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // Mobil menü state'i
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false); // Menü tıklandığında kapansın
    
    // Eğer link bir hash (#) içeriyorsa ve ana sayfadaysak kaydır, değilsek ana sayfaya git
    if (href.startsWith('/#')) {
      const id = href.replace('/', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Normal sayfa yönlendirmesi
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  const isSolidBg = scrolled || location.pathname !== '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isSolidBg ? 'rgba(247, 247, 245, 0.95)' : 'transparent',
        borderBottom: isSolidBg ? '1px solid rgba(28, 31, 51, 0.08)' : 'none',
        backdropFilter: isSolidBg ? 'blur(8px)' : 'none'
      }}>
      <div className="mx-auto flex h-14 items-center justify-between" style={{ maxWidth: 1440, padding: '0 32px' }}>
        
        {/* LOGO GÜNCELLEME: AKIN YAPI SİSTEMLERİ */}
        <a href="/" onClick={(e) => handleNavClick(e as any, '/')} 
           className={`font-medium text-sm tracking-widest transition-colors duration-300 ${isSolidBg ? 'text-navy' : 'text-white'}`}>
          EMSEZ YAPI SİSTEMLERİ
        </a>

        {/* Masaüstü Navigasyon */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
               className={`text-xs uppercase tracking-widest font-medium transition-all duration-400 hover:tracking-[0.15em] group ${isSolidBg ? 'text-navy' : 'text-gray-200'}`}>
              {link.label}
              <span className={`block h-px bg-coral transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left mt-0.5`} />
            </a>
          ))}
        </nav>

        {/* Mobil Hamburger Butonu */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          <span className={`block w-5 h-px transition-all duration-300 ${isSolidBg ? 'bg-navy' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px transition-all duration-300 ${isSolidBg ? 'bg-navy' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px transition-all duration-300 ${isSolidBg ? 'bg-navy' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobil Menü İçeriği */}
      {mobileOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-[#F7F7F5] border-b border-navy/10 py-8 px-8 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-navy text-sm uppercase tracking-widest font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}