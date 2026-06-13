interface DistrictGalleryProps {
  district: string;
}

const PLACEHOLDER_COUNT = 6;

export default function DistrictGallery({ district }: DistrictGalleryProps) {
  return (
    <section className="mt-16">
      <p
        className="text-coral uppercase mb-3"
        style={{ fontSize: 13, letterSpacing: '0.1em', fontWeight: 500 }}
      >
        REFERANS İŞLER
      </p>
      <h2
        className="text-navy uppercase mb-3"
        style={{ fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 500, lineHeight: 1.2 }}
      >
        {district}&apos;de Yaptığımız İşlerden
      </h2>
      <p className="text-navy-muted mb-8 leading-relaxed">
        Aşağıdaki alanlara {district} bölgesinde tamamladığımız cam balkon ve sineklik uygulama
        fotoğraflarını ekleyebilirsiniz.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {Array.from({ length: PLACEHOLDER_COUNT }, (_, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-sm border border-dashed border-navy/20 bg-white aspect-[4/3] flex flex-col items-center justify-center transition-colors duration-300 hover:border-coral/40"
          >
            <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-navy-muted"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>
            <p className="text-navy-muted text-xs uppercase tracking-widest font-medium">
              Fotoğraf {index + 1}
            </p>
            <p className="text-navy-muted/60 text-xs mt-1 px-4 text-center">
              {district} — cam balkon / sineklik
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
