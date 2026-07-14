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
    'https://maps.google.com/maps?q=Küçükbakkalköy,+Sümer+Sokak+8A,+34636+Ataşehir/İstanbul&t=&z=15&ie=UTF8&iwloc=&output=embed',
} as const;

export function canonicalUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.domain}${normalized === '/' ? '' : normalized}`;
}
