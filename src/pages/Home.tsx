import Hero from '../sections/Hero';
import Products from '../sections/Products';
import { About } from '../sections/About';
import ServiceAreas from '../sections/ServiceAreas';
import Contact from '../sections/Contact';
import SeoMeta from '../components/SeoMeta';
import { SITE } from '../config/site';
import { Helmet } from 'react-helmet-async';
import { buildLocalBusinessSchema } from '../lib/localBusinessSchema';

export default function Home() {
  return (
    <main>
      <SeoMeta
        title={SITE.defaultTitle}
        description={SITE.defaultDescription}
        path="/"
      />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            ...buildLocalBusinessSchema(),
            openingHoursSpecification: [
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
            aggregateRating: {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "3"
            },
            review: [
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
          })}
        </script>
      </Helmet>

      <Hero />
      <Products />
      <ServiceAreas />
      <About />
      <Contact />
    </main>
  );
}