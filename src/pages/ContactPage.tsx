import Contact from '../sections/Contact';
import SeoMeta from '../components/SeoMeta';
import { SITE } from '../config/site';

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#F5F5F0]">
      <SeoMeta
        title={`İletişim | ${SITE.name}`}
        description={`${SITE.name} iletişim: ${SITE.address}. Telefon ${SITE.phone}. Cam balkon ve sineklik için ücretsiz keşif.`}
        path="/iletisim"
      />
      <Contact />
    </div>
  );
}
