import Hero from '../sections/Hero';
import Products from '../sections/Products';
import Portfolio from '../sections/Portfolio';
import About from '../sections/About';
import ServiceAreas from '../sections/ServiceAreas';
import Contact from '../sections/Contact';
import SeoMeta from '../components/SeoMeta';
import { SITE } from '../config/site';

export default function Home() {
  // Google Botları için Google Haritalar profilinizle entegre edilmiş 4 kritik şema yapısı
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://atasehircambalkon.com/#organization",
        "name": "İstanbul Cam Balkon & Sineklik",
        "alternateName": "Ataşehir Cam Balkon & Sineklik",
        "image": "https://atasehircambalkon.com/images/cambalkon_result.webp",
        "url": "https://atasehircambalkon.com",
        "telephone": "+905441846478",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Küçükbakkalköy, Sümer Sokak 8A, 34636 Ataşehir/İstanbul",
          "addressLocality": "Ataşehir",
          "addressRegion": "İstanbul",
          "postalCode": "34636",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.979260,
          "longitude": 29.114834
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "21:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "12:00",
            "closes": "17:00"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Cam Balkon, Alüminyum Doğrama ve Sineklik Sistemleri Uygulamaları",
        "provider": {
          "@type": "LocalBusiness",
          "name": "İstanbul Cam Balkon & Sineklik"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Ataşehir" },
          { "@type": "AdministrativeArea", "name": "Kadıköy" },
          { "@type": "AdministrativeArea", "name": "Ümraniye" },
          { "@type": "AdministrativeArea", "name": "Maltepe" },
          { "@type": "AdministrativeArea", "name": "Kartal" }
        ],
        "description": "Profesyonel kadromuzla katlanır ve sürme cam balkon, alüminyum doğrama, duşakabin, korkuluk sistemleri, motorlu panjur, plastik doğrama (PVC) ve sineklik sistemleri imalat, tamir ve profesyonel montaj hizmetleri."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Cam balkon fiyatları neye göre belirlenir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cam balkon fiyatları, uygulamanın yapılacağı alanın metraj ölçüsüne, tercih edilen cam kalınlığına (8mm/10mm), ısıcam özelliklerine ve profil rengine göre değişkenlik göstermektedir. Ücretsiz keşif sonrası net fiyat sunulur."
            }
          },
          {
            "@type": "Question",
            "name": "Keşif hizmetiniz ücretli mi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hayır, Anadolu Yakası genelinde gerçekleştirdiğimiz ölçümlendirme, model seçimi ve keşif hizmetlerimiz tamamen ücretsizdir."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "name": "İstanbul Cam Balkon & Sineklik Hizmetleri",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "3",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sohiba Sohiba"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody": "Evimizin balkonu için katlanır cam balkon yaptık. Ölçü almaya da tam vaktinde geldiler. Çok güzel oldu. Teşekkürler."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Hatice Efe"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody": "İnönü mahallesindeki evimizin pencereleri için filmli sineklik ihtiyacımız vardı internetten bulup ulaştık. Necati usta ve ekibine çok teşekkür ederiz, memnun kaldık."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Muharrem Emirhan Taşcı"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody": "Necati Usta ve Mustafa Usta’ya teşekkür ederiz. Evimize bu kış bahçesini yaptırdık, sonuç beklediğimizden de güzel oldu."
          }
        ]
      }
    ]
  };

  return (
    <main>
      <SeoMeta
        title={SITE.defaultTitle}
        description={SITE.defaultDescription}
        path="/"
      />
      
      {/* Schema (Yapısal Veri) JSON-LD Script Enjeksiyonu */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <Hero />
      <Products />
      <Portfolio />
      <ServiceAreas />
      <About />
      <Contact />
    </main>
  );
}