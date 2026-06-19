import Hero from '../sections/Hero';
import Products from '../sections/Products';
import Portfolio from '../sections/Portfolio';
import About from '../sections/About';
import ServiceAreas from '../sections/ServiceAreas';
import Contact from '../sections/Contact';
import SeoMeta from '../components/SeoMeta';
import { SITE } from '../config/site';

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
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
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "12:00",
        "closes": "17:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hizmetlerimiz",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cam Balkon" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Alüminyum Doğrama" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Duşakabin" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Korkuluk Sistemleri" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Motorlu Panjur" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plastik Doğrama (PVC)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sineklik Sistemleri" } }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "3"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sohiba Sohiba" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "Evimizin balkonu için katlanır cam balkon yaptık. Ölçü almaya da tam vaktinde geldiler. Çok güzel oldu. Teşekkürler."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Hatice Efe" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "İnönü mahallesindeki evimizin pencereleri için filmli sineklik ihtiyacımız vardı internetten bulup ulaştık. Necati usta ve ekibine çok teşekkür ederiz, memnun kaldık."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Muharrem Emirhan Taşcı" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "Necati Usta ve Mustafa Usta’ya teşekkür ederiz. Evimize bu kış bahçesini yaptırdık, sonuç beklediğimizden de güzel oldu."
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