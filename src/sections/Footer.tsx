import { useNavigate } from 'react-router-dom';
import { SITE } from '../config/site';
import { servicePages } from '../data/servicePages'; // Hizmetleri dinamik çekmek için kullandık[cite: 1]

const footerLinks = [
  { label: 'Hakkımızda', href: '/hakkimizda' },
  // { label: 'İşlerimiz', href: '/islerimiz' }, -> BU SATIR SİLİNDİ
  { label: 'İletişim', href: '/iletisim' },
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
        {/* Üst Satır - 3 Kolonlu Temiz Düzen */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-8">
          
          {/* 1. Kolon: Şirket Bilgisi */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 bg-white shadow-sm shrink-0 flex items-center justify-center">
                <img
                  src="/favicon.png"
                  alt={SITE.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-white text-base sm:text-lg font-medium uppercase tracking-widest leading-tight">
                {SITE.name.toLocaleUpperCase('tr-TR')}
              </h3>
            </div>
            <p className="text-gray-400 max-w-xs leading-relaxed" style={{ fontSize: 14 }}>
              Alüminyum, PVC ve Cam sistemlerinde 18 yılı aşkın tecrübe ile yaşam alanlarınıza değer katıyoruz.
            </p>
          </div>

          {/* 2. Kolon: Kurumsal Linkler */}
          <div className="flex flex-col gap-3">
            <h4 className="text-coral uppercase text-xs font-bold tracking-widest mb-3">KURUMSAL</h4>
            <a
              href="/urunler"
              onClick={(e) => handleClick(e, '/urunler')}
              className="transition-colors duration-300 hover:text-white"
              style={{ color: '#F7F7F5', fontSize: 15, lineHeight: 1.6 }}
            >
              Tüm Ürünlerimiz
            </a>
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="transition-colors duration-300 hover:text-white"
                style={{ color: '#F7F7F5', fontSize: 15, lineHeight: 1.6 }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* 3. Kolon: İletişim Bilgileri */}
          <div className="flex flex-col gap-4">
            <h4 className="text-coral uppercase text-xs font-bold tracking-widest mb-3">İLETİŞİM</h4>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="transition-colors duration-300 hover:text-white flex items-center gap-2"
              style={{ color: '#6B6E82', fontSize: 14 }}
            >
              {SITE.phone}
            </a>
            <a
              href="mailto:emirhanekin94@gmail.com"
              className="transition-colors duration-300 hover:text-white truncate"
              style={{ color: '#6B6E82', fontSize: 14 }}
            >
              emirhanekin94@gmail.com
            </a>
            <p style={{ color: '#6B6E82', fontSize: 14, lineHeight: 1.4 }}>
              {SITE.address}
            </p>
            {/* SEOptimer Sosyal Medya Optimizasyonu */}
            <div className="flex gap-4 mt-2">
              <a href="https://facebook.com/atasehircambalkon" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-white" style={{ color: '#6B6E82' }} aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com/atasehircambalkon" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-white" style={{ color: '#6B6E82' }} aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://twitter.com/atasehircambalk" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-white" style={{ color: '#6B6E82' }} aria-label="X (Twitter)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://youtube.com/atasehircambalkon" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-white" style={{ color: '#6B6E82' }} aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
              <a href="https://linkedin.com/company/atasehircambalkon" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-white" style={{ color: '#6B6E82' }} aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Orta Satır 1: Hizmetlerimiz (Yatay SEO Blok Yapısı) */}
        <div className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(247, 247, 245, 0.08)' }}>
          <h4 className="text-coral uppercase text-xs font-bold tracking-widest mb-4">HİZMETLERİMİZ</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {servicePages.map((service) => (
              <a
                key={service.id}
                href={`/urunler/${service.id}`}
                onClick={(e) => handleClick(e, `/urunler/${service.id}`)}
                className="transition-colors duration-300 hover:text-white text-sm"
                style={{ color: '#6B6E82' }}
                title={service.name} // Üzerine gelince tam adı gözüksün[cite: 1]
              >
                {service.name}
              </a>
            ))}
          </div>
        </div>

        {/* Orta Satır 2: Hizmet Bölgeleri (Yatay İlçe SEO Alt Alanı) */}
        <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(247, 247, 245, 0.04)' }}>
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