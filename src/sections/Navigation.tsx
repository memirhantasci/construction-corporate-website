import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { districtNavItems } from '../data/districtPages';
import { SITE } from '../config/site';

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [regionsOpen, setRegionsOpen] = useState(false);
  const [mobileRegionsOpen, setMobileRegionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setRegionsOpen(false);
    setMobileRegionsOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setRegionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    setMobileRegionsOpen(false);
    setRegionsOpen(false);

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
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  const isSolidBg = scrolled || location.pathname !== '/';
  const linkColor = isSolidBg ? 'text-navy' : 'text-gray-200';
  const isRegionsActive = location.pathname.startsWith('/bolgeler/');

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isSolidBg ? 'rgba(247, 247, 245, 0.95)' : 'transparent',
        borderBottom: isSolidBg ? '1px solid rgba(28, 31, 51, 0.08)' : 'none',
        backdropFilter: isSolidBg ? 'blur(8px)' : 'none',
      }}
    >
      <div
        className="mx-auto flex h-14 items-center justify-between"
        style={{ maxWidth: 1440, padding: '0 32px' }}
      >
        <a
          href="/"
          onClick={(e) => handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, '/')}
          className={`font-medium text-xs sm:text-sm tracking-widest transition-colors duration-300 max-w-[200px] sm:max-w-none leading-tight ${isSolidBg ? 'text-navy' : 'text-white'}`}
        >
          {SITE.name.toLocaleUpperCase('tr-TR')}
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.slice(0, 2).map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-xs uppercase tracking-widest font-medium transition-all duration-400 hover:tracking-[0.15em] group ${linkColor}`}
            >
              {link.label}
              <span className="block h-px bg-coral transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left mt-0.5" />
            </a>
          ))}

          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setRegionsOpen(!regionsOpen)}
              className={`text-xs uppercase tracking-widest font-medium transition-all duration-400 hover:tracking-[0.15em] flex items-center gap-1.5 ${linkColor} ${isRegionsActive ? 'text-coral' : ''}`}
              aria-expanded={regionsOpen}
              aria-haspopup="true"
            >
              BÖLGELER
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`transition-transform duration-200 ${regionsOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {regionsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 max-h-[70vh] overflow-y-auto bg-[#F7F7F5] border border-navy/10 shadow-xl rounded-sm py-2 z-50">
                {districtNavItems.map((item) => (
                  <a
                    key={item.slug}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-4 py-2.5 text-sm transition-colors duration-200 hover:bg-coral/10 hover:text-coral ${
                      location.pathname === item.href ? 'text-coral font-medium' : 'text-navy'
                    }`}
                  >
                    {item.district}
                  </a>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-xs uppercase tracking-widest font-medium transition-all duration-400 hover:tracking-[0.15em] group ${linkColor}`}
            >
              {link.label}
              <span className="block h-px bg-coral transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left mt-0.5" />
            </a>
          ))}
        </nav>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          <span
            className={`block w-5 h-px transition-all duration-300 ${isSolidBg ? 'bg-navy' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-5 h-px transition-all duration-300 ${isSolidBg ? 'bg-navy' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-px transition-all duration-300 ${isSolidBg ? 'bg-navy' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden absolute top-14 left-0 right-0 bg-[#F7F7F5] border-b border-navy/10 py-6 px-8 shadow-xl max-h-[calc(100vh-3.5rem)] overflow-y-auto">
          <nav className="flex flex-col gap-4">
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

            <div className="border-t border-navy/10 pt-4">
              <button
                type="button"
                onClick={() => setMobileRegionsOpen(!mobileRegionsOpen)}
                className="flex items-center justify-between w-full text-navy text-sm uppercase tracking-widest font-medium"
              >
                BÖLGELER
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform duration-200 ${mobileRegionsOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {mobileRegionsOpen && (
                <div className="mt-3 pl-2 flex flex-col gap-2">
                  {districtNavItems.map((item) => (
                    <a
                      key={item.slug}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`text-sm py-1 ${location.pathname === item.href ? 'text-coral font-medium' : 'text-navy-muted'}`}
                    >
                      {item.district}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
