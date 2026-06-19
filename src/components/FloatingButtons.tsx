import { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const FloatingButtons = () => {
  const phoneNumber = "905441846478";
  
  // Yazıların görünürlük stateleri
  const [showWhatsappLabel, setShowWhatsappLabel] = useState(false);
  const [showPhoneLabel, setShowPhoneLabel] = useState(false);

  // Sayfa ilk açıldığında mobilde (ve masaüstünde) yazıları 4 saniyeliğine gösterip kapatan efekt
  useEffect(() => {
    // İlk açılışta yazıları göster
    setShowWhatsappLabel(true);
    setShowPhoneLabel(true);

    // 4 saniye (4000 ms) sonra yazıları otomatik gizle
    const timer = setTimeout(() => {
      setShowWhatsappLabel(false);
      setShowPhoneLabel(false);
    }, 4000);

    // Bileşen kapandığında zamanlayıcıyı temizle
    return () => clearTimeout(timer);
  }, []);

  const buttonStyle = {
    backgroundColor: '#25D366',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    color: 'white',
    fontSize: '26px',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    position: 'relative' as const,
    cursor: 'pointer'
  };

  return (
    <div style={{ position: 'fixed', bottom: '25px', right: '25px', display: 'flex', flexDirection: 'column', gap: '15px', zIndex: 9999 }}>
      
      {/* WhatsApp Butonu */}
      <a 
        href={`https://wa.me/${phoneNumber}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          ...buttonStyle,
          transform: showWhatsappLabel ? 'scale(1.05)' : 'scale(1)'
        }}
        onMouseEnter={() => setShowWhatsappLabel(true)}
        onMouseLeave={() => setShowWhatsappLabel(false)}
        className="floating-btn"
      >
        <span className={`btn-label ${showWhatsappLabel ? 'force-show' : ''}`}>
          Ücretsiz Fiyat Al
        </span>
        <FaWhatsapp />
      </a>

      {/* Telefon Butonu */}
      <a 
        href={`tel:+${phoneNumber}`} 
        style={{ 
          ...buttonStyle, 
          backgroundColor: '#007bff',
          transform: showPhoneLabel ? 'scale(1.05)' : 'scale(1)'
        }}
        onMouseEnter={() => setShowPhoneLabel(true)}
        onMouseLeave={() => setShowPhoneLabel(false)}
        className="floating-btn"
      >
        <span className={`btn-label ${showPhoneLabel ? 'force-show' : ''}`}>
          Hemen Bilgi Al
        </span>
        <FaPhoneAlt style={{ fontSize: '20px' }} />
      </a>

      {/* Stil tanımlamaları */}
      <style>{`
        .btn-label {
          position: absolute;
          right: 60px;
          background-color: rgba(0, 0, 0, 0.85);
          color: white;
          padding: 6px 12px;
          borderRadius: 6px;
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          pointer-events: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        
        /* Aktif olduğunda görünecek sınıf */
        .force-show {
          opacity: 1;
          visibility: visible;
        }

        /* Mobil Ekran Düzenlemeleri */
        @media (max-width: 768px) {
          .btn-label {
            right: 55px;
            font-size: 12px;
            padding: 5px 10px;
          }
          .floating-btn {
            width: 45px !important;
            height: 45px !important;
            font-size: 22px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingButtons;