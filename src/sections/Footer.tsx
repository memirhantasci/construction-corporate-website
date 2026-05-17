import { useNavigate} from 'react-router-dom';

const footerLinks = [
  { label: 'Hizmetlerimiz', href: '/urunler' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'İletişim', href: '/iletisim' },
  { label: 'İşlerimiz', href: '/islerimiz' },
];

export default function Footer() {
  const navigate = useNavigate();
  

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // Eğer zaten o sayfadaysak ve sayfa içi bir linkse (# gibi) kaydır
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Farklı bir sayfaya gidiyorsak yönlendir ve en üste çık
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer style={{ backgroundColor: '#1C1F33', padding: '80px 0 40px' }}>
      <div className="mx-auto px-8" style={{ maxWidth: 1440 }}>
        {/* Üst Satır */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Sol: Şirket Bilgisi */}
          <div>
            <h3 className="text-white text-xl font-medium uppercase tracking-widest mb-6">
              AKIN YAPI SİSTEMLERİ
            </h3>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              Alüminyum, PVC ve Cam sistemlerinde 18 yılı aşkın tecrübe ile yaşam alanlarınıza değer katıyoruz.
            </p>
          </div>

          {/* Orta: Hızlı Linkler */}
          <div className="flex flex-col gap-3">
            <h4 className="text-coral uppercase text-xs font-bold tracking-widest mb-3">KURUMSAL</h4>
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="transition-colors duration-300 hover:text-white"
                style={{ color: '#F7F7F5', fontSize: 16, lineHeight: 1.6 }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Sağ: İletişim Bilgileri */}
          <div className="flex flex-col gap-4">
            <h4 className="text-coral uppercase text-xs font-bold tracking-widest mb-3">İLETİŞİM</h4>
            <a
              href="tel:+905441846478"
              className="transition-colors duration-300 hover:text-white flex items-center gap-2"
              style={{ color: '#6B6E82', fontSize: 14 }}
            >
              0544 184 64 78
            </a>
            <a
              href="mailto:emirhanekin94@gmail.com"
              className="transition-colors duration-300 hover:text-white"
              style={{ color: '#6B6E82', fontSize: 14 }}
            >
              emirhanekin94@gmail.com
            </a>
            <p style={{ color: '#6B6E82', fontSize: 14, lineHeight: 1.4 }}>
              Küçükbakkalköy, Sümer Sk. 8A, <br /> 34636 Ataşehir/İstanbul
            </p>
          </div>
        </div>

        {/* Ayırıcı Çizgi */}
        <div
          className="my-12"
          style={{ height: 1, backgroundColor: 'rgba(247, 247, 245, 0.08)' }}
        />

        {/* Alt Satır */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ color: '#6B6E82', fontSize: 13, letterSpacing: '0.02em' }}>
            &copy; 2026 Akın Yapı Sistemleri. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors duration-300 hover:text-white" style={{ color: '#6B6E82', fontSize: 13 }}>
              Gizlilik Politikası
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-white" style={{ color: '#6B6E82', fontSize: 13 }}>
              Kullanım Koşulları
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}