export const SITE = {
  name: 'İstanbul Cam Balkon & Sineklik',
  domain: 'https://atasehircambalkon.com',
  defaultTitle: 'İstanbul Cam Balkon & Sineklik | Ataşehir',
  defaultDescription:
    'Ataşehir merkezli İstanbul Cam Balkon & Sineklik: Anadolu Yakası genelinde katlanır cam balkon, ısıcamlı cam balkon, pileli sineklik ve kedi sinekliği montajı. Ücretsiz keşif.',
  phone: '0544 184 64 78',
  phoneTel: '+905441846478',
  whatsapp: '905441846478',
  address: 'Küçükbakkalköy, Sümer Sk. 8A, 34636 Ataşehir/İstanbul',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.100805937106!2d29.112202711811648!3d40.97927342109055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7ddfcfb49db%3A0x405e218759df107f!2s%C4%B0stanbul%20Cam%20Balkon%20%26%20Sineklik!5e0!3m2!1str!2str!4v1781307663461!5m2!1str!2str',
} as const;

export function canonicalUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.domain}${normalized === '/' ? '' : normalized}`;
}
