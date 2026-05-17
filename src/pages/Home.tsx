import Hero from '../sections/Hero';
import Products from '../sections/Products';
import Portfolio from '../sections/Portfolio';
import About from '../sections/About';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <Portfolio /> {/* İşlerimiz (Ana işlerin olduğu kısım) */}
      <About />     {/* İletişimden bir önce */}
      <Contact />
    </main>
  );
}