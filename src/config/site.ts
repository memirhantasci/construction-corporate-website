export const SITE = {
  name: 'İstanbul Cam Balkon & Sineklik',
  domain: 'https://atasehircambalkon.com',
  defaultTitle: 'İstanbul Cam Balkon & Sineklik | Ücretsiz Keşif',
  defaultDescription:
    'İstanbul Cam Balkon & Sineklik. Anadolu Yakası\'nda katlanır cam balkon ve pileli sineklik montajı. Ücretsiz keşif.',
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
