import Hero from '../sections/Hero';
import Products from '../sections/Products';
import Portfolio from '../sections/Portfolio';
import About from '../sections/About';
import ServiceAreas from '../sections/ServiceAreas';
import Contact from '../sections/Contact';
import SeoMeta from '../components/SeoMeta';
import { SITE } from '../config/site';

export default function Home() {
  return (
    <main>
      <SeoMeta
        title={SITE.defaultTitle}
        description={SITE.defaultDescription}
        path="/"
      />
      <Hero />
      <Products />
      <Portfolio />
      <ServiceAreas />
      <About />
      <Contact />
    </main>
  );
}
