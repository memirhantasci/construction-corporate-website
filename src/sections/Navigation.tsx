// ─────────────────────────────────────────────────────────────────────────────
// src/sections/Navigation.tsx  —  TAM YENİLENMİŞ DOSYA
//
// Değişiklik: "HİZMETLERİMİZ" linki, serviceNavItems'dan beslenen
// bir dropdown'a dönüştürüldü. BÖLGELER dropdown'ıyla aynı pattern.
// Diğer hiçbir şey değişmedi.
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { districtNavItems } from '../data/districtPages';
import { serviceNavItems } from '../data/servicePages';
import { SITE } from '../config/site';

const navLinks = [
  { label: 'ANA SAYFA', href: '/' },
  { label: 'İŞLERİMİZ', href: '/islerimiz' },
  { label: 'BLOG', href: '/blog' },
  { label: 'ALBÜM', href: '/album' },
  { label: 'HAKKIMIZDA', href: '/hakkimizda' },
  { label: 'İLETİŞİM', href: '/iletisim' },
];

// Küçük yardımcı SVG
const Chevron = ({ open }: { open: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="11"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Dropdown state'leri
  const [servicesOpen, setServicesOpen] = useState(false);
  const [regionsOpen, setRegionsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileRegionsOpen, setMobileRegionsOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const regionsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Click-outside — iki dropdown için
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
      if (regionsRef.current && !regionsRef.current.contains(e.target as Node)) setRegionsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setRegionsOpen(false);
    setMobileServicesOpen(false);
    setMobileRegionsOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeAll();
    if (href.startsWith('/#')) {
      const id = href.replace('/', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
      } else {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  const isSolid = scrolled || location.pathname !== '/';
  const linkColor = isSolid ? '#1C1F33' : '#e5e7eb';
  const isServicesActive =
    location.pathname === '/urunler' ||
    serviceNavItems.some((s) => location.pathname === s.href);
  const isRegionsActive = location.pathname.startsWith('/bolgeler/');

  // ── Dropdown paneli ─────────────────────────────────────────────────────
  const dropdownClass =
    'absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-[#F7F7F5] border border-black/10 shadow-xl rounded-sm py-2 z-50 overflow-y-auto max-h-[70vh]';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isSolid ? 'rgba(247,247,245,0.95)' : 'transparent',
        borderBottom: isSolid ? '1px solid rgba(28,31,51,0.08)' : 'none',
        backdropFilter: isSolid ? 'blur(8px)' : 'none',
      }}
    >
      <div className="mx-auto flex h-14 items-center justify-between" style={{ maxWidth: 1440, padding: '0 32px' }}>

        {/* LOGO */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, '/')}
          className="font-medium text-xs sm:text-sm tracking-widest transition-colors duration-300 max-w-[200px] sm:max-w-none leading-tight"
          style={{ color: isSolid ? '#1C1F33' : '#ffffff' }}
        >
          {SITE.name.toLocaleUpperCase('tr-TR')}
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">

          {/* Ana Sayfa */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="text-xs uppercase tracking-widest font-medium transition-all duration-300 hover:tracking-[0.15em] group"
            style={{ color: linkColor }}
          >
            ANA SAYFA
            <span className="block h-px bg-[#E06B5A] transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left mt-0.5" />
          </a>

          {/* ── HİZMETLERİMİZ dropdown ───────────────────────────────── */}
          <div ref={servicesRef} className="relative">
            <button
              type="button"
              onClick={() => { setServicesOpen(!servicesOpen); setRegionsOpen(false); }}
              className="text-xs uppercase tracking-widest font-medium flex items-center gap-1.5 transition-all duration-300 hover:tracking-[0.15em]"
              style={{ color: isServicesActive ? '#E06B5A' : linkColor }}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              HİZMETLERİMİZ
              <Chevron open={servicesOpen} />
            </button>

            {servicesOpen && (
              <div className={dropdownClass} style={{ width: 240 }}>
                {/* Tüm hizmetler bağlantısı */}
                <a
                  href="/urunler"
                  onClick={(e) => handleNavClick(e, '/urunler')}
                  className="block px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[#E06B5A]/10 hover:text-[#E06B5A] border-b border-black/5 mb-1"
                  style={{ color: location.pathname === '/urunler' ? '#E06B5A' : '#1C1F33' }}
                >
                  Tüm Hizmetlerimiz
                </a>

                {serviceNavItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block px-4 py-2 text-sm transition-colors hover:bg-[#E06B5A]/10 hover:text-[#E06B5A]"
                    style={{ color: location.pathname === item.href ? '#E06B5A' : '#1C1F33' }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* ── BÖLGELER dropdown ────────────────────────────────────── */}
          <div ref={regionsRef} className="relative">
            <button
              type="button"
              onClick={() => { setRegionsOpen(!regionsOpen); setServicesOpen(false); }}
              className="text-xs uppercase tracking-widest font-medium flex items-center gap-1.5 transition-all duration-300 hover:tracking-[0.15em]"
              style={{ color: isRegionsActive ? '#E06B5A' : linkColor }}
              aria-expanded={regionsOpen}
              aria-haspopup="true"
            >
              BÖLGELER
              <Chevron open={regionsOpen} />
            </button>

            {regionsOpen && (
              <div className={dropdownClass} style={{ width: 224 }}>
                {districtNavItems.map((item) => (
                  <a
                    key={item.slug}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block px-4 py-2.5 text-sm transition-colors hover:bg-[#E06B5A]/10 hover:text-[#E06B5A]"
                    style={{ color: location.pathname === item.href ? '#E06B5A' : '#1C1F33' }}
                  >
                    {item.district}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Kalan linkler */}
          {navLinks.slice(1).map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs uppercase tracking-widest font-medium transition-all duration-300 hover:tracking-[0.15em] group"
              style={{ color: linkColor }}
            >
              {link.label}
              <span className="block h-px bg-[#E06B5A] transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left mt-0.5" />
            </a>
          ))}
        </nav>

        {/* MOBİL HAMBURGER */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {[
            mobileOpen ? 'rotate-45 translate-y-2' : '',
            mobileOpen ? 'opacity-0' : '',
            mobileOpen ? '-rotate-45 -translate-y-2' : '',
          ].map((cls, i) => (
            <span
              key={i}
              className={`block w-5 h-px transition-all duration-300 ${cls}`}
              style={{ backgroundColor: isSolid ? '#1C1F33' : '#ffffff' }}
            />
          ))}
        </button>
      </div>

      {/* MOBİL MENÜ */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-14 left-0 right-0 bg-[#F7F7F5] border-b border-black/10 py-6 px-8 shadow-xl max-h-[calc(100vh-3.5rem)] overflow-y-auto">
          <nav className="flex flex-col gap-4">

            <a href="/" onClick={(e) => handleNavClick(e, '/')} className="text-sm uppercase tracking-widest font-medium" style={{ color: '#1C1F33' }}>
              ANA SAYFA
            </a>

            {/* HİZMETLERİMİZ accordion */}
            <div className="border-t border-black/8 pt-4">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-sm uppercase tracking-widest font-medium"
                style={{ color: '#1C1F33' }}
              >
                HİZMETLERİMİZ
                <Chevron open={mobileServicesOpen} />
              </button>
              {mobileServicesOpen && (
                <div className="mt-3 pl-2 flex flex-col gap-1">
                  <a
                    href="/urunler"
                    onClick={(e) => handleNavClick(e, '/urunler')}
                    className="text-sm py-1.5 font-semibold"
                    style={{ color: '#1C1F33' }}
                  >
                    Tüm Hizmetlerimiz
                  </a>
                  {serviceNavItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-sm py-1.5"
                      style={{ color: location.pathname === item.href ? '#E06B5A' : '#6b6f8a' }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Diğer linkler */}
            {navLinks.slice(1).map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm uppercase tracking-widest font-medium"
                style={{ color: '#1C1F33' }}
              >
                {link.label}
              </a>
            ))}

            {/* BÖLGELER accordion */}
            <div className="border-t border-black/8 pt-4">
              <button
                type="button"
                onClick={() => setMobileRegionsOpen(!mobileRegionsOpen)}
                className="flex items-center justify-between w-full text-sm uppercase tracking-widest font-medium"
                style={{ color: '#1C1F33' }}
              >
                BÖLGELER
                <Chevron open={mobileRegionsOpen} />
              </button>
              {mobileRegionsOpen && (
                <div className="mt-3 pl-2 flex flex-col gap-1">
                  {districtNavItems.map((item) => (
                    <a
                      key={item.slug}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-sm py-1.5"
                      style={{ color: location.pathname === item.href ? '#E06B5A' : '#6b6f8a' }}
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
