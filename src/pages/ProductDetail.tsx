import { useParams, useNavigate } from 'react-router-dom';

// 1. Ürün detayının veri yapısını tanımlıyoruz
interface Product {
  title: string;
  description: string;
  features: string[];
  images: string[];
}

// 2. productData'nın anahtar kelimelerinin string, değerinin ise Product tipinde olduğunu belirtiyoruz
const productData: Record<string, Product> = {
  'aluminyum-dograma': {
    title: 'Alüminyum Doğrama & Ofis Bölme',
    description: 'Yüksek kaliteli alüminyum profiller ile ofislerinizde modern ve şık bölme sistemleri oluşturuyoruz. Dayanıklı yapısı ve estetik görünümüyle kurumsal mekanların vazgeçilmezi.',
    features: ['Elektrostatik Toz Boya Seçenekleri', 'Isı Yalıtımlı ve Yalıtımsız Profil', 'Ses İzolasyonlu Cam Kombinasyonları', 'Minimum Profil Genişliği, Maksimum Görüş'],
    images: ['/images/aluminyum-1_result.webp', '/images/aluminyum-2_result.webp']
  },
  'cam-balkon': {
    title: 'Cam Balkon Sistemleri',
    description: 'Balkonlarınızı dört mevsim kullanılabilir yaşam alanlarına dönüştürüyoruz. Katlanır ve sürme seçeneklerimizle konforu estetikle buluşturuyoruz.',
    features: ['8mm ve 10mm Temperli Güvenli Cam', 'Alüminyum Fitil ile Maksimum Sızdırmazlık', 'Paslanmaz Tekerlek Takımları', 'Çocuk Kilidi Güvenlik Sistemi'],
    images: ['/images/cambalkon-1_result.webp', '/images/cambalkon-2_result.webp']
  },
  'dusakabin': {
    title: 'Modern Duşakabin Çözümleri',
    description: 'Banyonuzun ölçülerine özel, şık ve sızdırmaz duş kabinleri. Temperli cam kalitesiyle güvenli kullanım.',
    features: ['Özel Ölçü Üretim', 'Leke Tutmayan Kolay Temizlenen Cam', 'Mıknatıslı Kapı Kapama Sistemi', 'Farklı Profil Renk Seçenekleri'],
    images: ['/images/dusakabin-1_result.webp']
  },
  'korkuluk': {
    title: 'Alüminyum & Cam Korkuluk',
    description: 'Merdiven, balkon ve teraslar için emniyetli ve modern korkuluk sistemleri.',
    features: ['Paslanmaya Dayanıklı Alüminyum', 'Lamine ve Temperli Cam Seçenekleri', 'Modern Kare ve Yuvarlak Küpeşte', 'Hızlı ve Temiz Montaj'],
    images: ['/images/korkuluk-1_result.webp']
  },
  'motorlu-panjur': {
    title: 'Otomatik Motorlu Panjur',
    description: 'Akıllı ev sistemleriyle uyumlu, güvenliği ve konforu artıran otomatik panjur sistemleri.',
    features: ['Kumandalı ve Butonlu Kontrol', 'Sessiz Çalışan Somfy/Mosel Motor', 'Isı ve Ses Yalıtımlı Poliüretan Dolgu', 'Hırsızlığa Karşı Emniyet Kilidi'],
    images: ['/images/panjur-1_result.webp']
  },
  'plastik-dograma': {
    title: 'PVC Plastik Doğrama',
    description: 'Yüksek enerji tasarrufu sağlayan PVC pencere ve kapı sistemleri ile evinizde huzuru yakalayın.',
    features: ['Çok Odacıklı Profil Yapısı', 'Çift ve Üçlü Cam Desteği', 'Maksimum Isı ve Ses Yalıtımı', 'Antrasit ve Ahşap Desen Seçenekleri'],
    images: ['/images/pvc-1_result.webp']
  },
  'sineklik': {
    title: 'Profesyonel Sineklik Sistemleri',
    description: 'Her tip pencere ve kapıya uygun, uzun ömürlü ve pratik sineklik çözümleri.',
    features: ['Yırtılmaz Fiberglas Tül', 'Pileli (Akordiyon) Pratik Kullanım', 'Sürme ve Menteşeli Model Seçenekleri', 'Alüminyum Dayanıklı Çerçeve'],
    images: ['/images/sineklik-1_result.webp']
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // URL'den gelen id var ise productData içinden o ürünü çekiyoruz
  const product = id ? productData[id] : undefined;

  // Eğer URL'deki ID listede yoksa hata göstermemesi için koruma
  if (!product) {
    return (
      <div className="pt-40 text-center min-h-screen">
        <h2 className="text-2xl text-navy mb-4">Hizmet bulunamadı.</h2>
        <button onClick={() => navigate('/urunler')} className="text-coral underline">Hizmetlerimize Geri Dön</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        {/* Geri Dön Butonu */}
        <button 
          onClick={() => navigate('/urunler')} 
          className="group flex items-center gap-2 text-coral mb-12 uppercase text-xs font-bold tracking-widest"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span> HİZMETLERİMİZE DÖN
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Sol Kolon: Metinler */}
          <div>
            <h1 className="text-navy text-4xl md:text-5xl uppercase font-light mb-8 leading-tight">
              {product.title}
            </h1>
            <p className="text-gray-600 leading-relaxed text-lg mb-10">
              {product.description}
            </p>
            
            <div className="bg-[#F7F7F5] p-8 rounded-sm">
              <h3 className="text-navy font-bold mb-6 tracking-widest text-sm uppercase">TEKNİK ÖZELLİKLER</h3>
              <ul className="space-y-4">
                {product.features.map((f: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-500 text-sm">
                    <span className="text-coral mt-1">●</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => navigate('/iletisim')}
              className="mt-12 w-full md:w-auto bg-navy text-white px-12 py-5 uppercase text-xs tracking-[0.2em] font-bold hover:bg-coral transition-all duration-300 shadow-lg hover:shadow-coral/20"
            >
              ÜCRETSİZ KEŞİF & TEKLİF AL
            </button>
          </div>

          {/* Sağ Kolon: Görseller */}
          <div className="flex flex-col gap-6">
             {product.images.map((img: string, i: number) => (
               <div key={i} className="overflow-hidden rounded-sm shadow-xl bg-gray-100">
                 <img 
                    src={img} 
                    alt={product.title} 
                    loading={i < 2 ? "eager" : "lazy"}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                    // HTMLImageElement atamasıyla any hatasını giderdik
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/600x400?text=Gorsel+Hazirlaniyor'; }}
                 />
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}