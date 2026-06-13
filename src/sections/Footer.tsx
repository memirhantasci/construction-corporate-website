import { useNavigate } from 'react-router-dom';
import { SITE } from '../config/site';

const footerLinks = [
  { label: 'Hizmetlerimiz', href: '/urunler' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'İletişim', href: '/iletisim' },
  { label: 'İşlerimiz', href: '/islerimiz' },
];

// İstediğin yeni formata göre güncellenen SEO link yapısı (/bolgeler/ilce-cam-balkon-sineklik)
const serviceDistricts = [
  { label: 'Ataşehir', href: '/bolgeler/atasehir-cam-balkon-sineklik' },
  { label: 'Beykoz', href: '/bolgeler/beykoz-cam-balkon-sineklik' },
  { label: 'Çekmeköy', href: '/bolgeler/cekmekoy-cam-balkon-sineklik' },
  { label: 'Kadıköy', href: '/bolgeler/kadikoy-cam-balkon-sineklik' },
  { label: 'Kartal', href: '/bolgeler/kartal-cam-balkon-sineklik' },
  { label: 'Maltepe', href: '/bolgeler/maltepe-cam-balkon-sineklik' },
  { label: 'Pendik', href: '/bolgeler/pendik-cam-balkon-sineklik' },
  { label: 'Sancaktepe', href: '/bolgeler/sancaktepe-cam-balkon-sineklik' },
  { label: 'Sultanbeyli', href: '/bolgeler/sultanbeyli-cam-balkon-sineklik' },
  { label: 'Şile', href: '/bolgeler/sile-cam-balkon-sineklik' },
  { label: 'Tuzla', href: '/bolgeler/tuzla-cam-balkon-sineklik' },
  { label: 'Ümraniye', href: '/bolgeler/umraniye-cam-balkon-sineklik' },
  { label: 'Üsküdar', href: '/bolgeler/uskudar-cam-balkon-sineklik' },
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
            <h3 className="text-white text-lg sm:text-xl font-medium uppercase tracking-widest mb-6">
              {SITE.name.toUpperCase()}
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

        {/* Orta Satır: Hizmet Bölgeleri (SEO) */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(247, 247, 245, 0.08)' }}>
          <h4 className="text-coral uppercase text-xs font-bold tracking-widest mb-4">HİZMET BÖLGELERİMİZ</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {serviceDistricts.map((district) => (
              <a
                key={district.href}
                href={district.href}
                onClick={(e) => handleClick(e, district.href)}
                className="transition-colors duration-300 hover:text-white text-sm"
                style={{ color: '#6B6E82' }}
              >
                {district.label} Cam Balkon & Sineklik
              </a>
            ))}
          </div>
        </div>

        {/* Ayırıcı Çizgi */}
        <div
          className="my-8"
          style={{ height: 1, backgroundColor: 'rgba(247, 247, 245, 0.08)' }}
        />

        {/* Alt Satır */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ color: '#6B6E82', fontSize: 13, letterSpacing: '0.02em' }}>
            &copy; 2026 {SITE.name}. Tüm hakları saklıdır.
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