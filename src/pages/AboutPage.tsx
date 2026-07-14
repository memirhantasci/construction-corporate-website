import { SITE } from '../config/site';
import { About } from "../sections/About";
import SeoMeta from '../components/SeoMeta';

export default function AboutPage() {
  return (
    <>
      <SeoMeta
        title={`Hakkımızda | ${SITE.name} — Ataşehir`}
        description="2008'den beri Ataşehir merkezli İstanbul Cam Balkon & Sineklik. Anadolu Yakası'nda cam balkon, pileli sineklik ve kedi sinekliği montajı. 18+ yıl tecrübe."
        path="/hakkimizda"
      />
      <div className="pt-24 min-h-screen bg-white">
        <About />
      </div>
    </>
  );
}