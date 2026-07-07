import { SITE } from "../config/site";

export const CORE_SERVICES = [
  "Isıcamlı Cam Balkon",
  "Sürme Cam Balkon",
  "Kış Bahçesi",
  "Pileli Sineklik",
  "Kedi Sinekliği",
] as const;

export function buildLocalBusinessSchema(options?: {
  areaServed?: string;
  pageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.domain}/#localbusiness`,
    name: SITE.name,
    alternateName: "Ataşehir Cam Balkon & Sineklik",
    image: `${SITE.domain}/images/cambalkon_result.webp`,
    url: options?.pageUrl ?? SITE.domain,
    telephone: SITE.phoneTel,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Küçükbakkalköy, Sümer Sokak 8A",
      addressLocality: "Ataşehir",
      addressRegion: "İstanbul",
      postalCode: "34636",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.97926,
      longitude: 29.114834,
    },
    areaServed: options?.areaServed
      ? { "@type": "City", name: options.areaServed }
      : [
          { "@type": "City", name: "Ataşehir" },
          { "@type": "AdministrativeArea", name: "İstanbul Anadolu Yakası" },
        ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hizmetlerimiz",
      itemListElement: CORE_SERVICES.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
}
