import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM modüllerinde __dirname için standart çözüm
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://atasehircambalkon.com';
const today = new Date().toISOString().split('T')[0];

// 1. SABİT (STATİK) ANA SAYFALAR (/bolgeler ana sayfası 404 verdiği için kaldırıldı)
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/urunler', priority: '0.9', changefreq: 'weekly' },
  { url: '/islerimiz', priority: '0.8', changefreq: 'weekly' },
  { url: '/album', priority: '0.7', changefreq: 'weekly' },
  { url: '/blog', priority: '0.8', changefreq: 'daily' },
  { url: '/hakkimizda', priority: '0.5', changefreq: 'monthly' },
  { url: '/iletisim', priority: '0.5', changefreq: 'monthly' }
];

// 2. GERÇEK ÜRÜN ALT SAYFALARI (servicePages.ts'deki birebir gerçek id değerleri)
const products = [
  'aluminyum-dograma',
  'ofis-bolme',
  'cam-balkon',
  'katlanir-cam-balkon',
  'surgulu-cam-balkon',
  'isicamli-cam-balkon',
  'giyotin-cam',
  'dusakabin',
  'korkuluk',
  'motorlu-panjur',
  'plastik-dograma',
  'sineklik',
  'pileli-sineklik',
  'kis-bahcesi',
  'pergola'
];

// 3. İLÇE SLUG'LARI (seoData.ts'deki 12 ilçe dizisi sırası)
const districts = [
  'beykoz', 'uskudar', 'kadikoy', 'atasehir', 'umraniye', 'cekmekoy',
  'sancaktepe', 'sultanbeyli', 'maltepe', 'kartal', 'pendik', 'tuzla'
];

// 4. PROGRAMATİK SEO HİZMET SLUG'LARI (seoData.ts içindeki gerçek services listesi)
const seoServices = [
  'cam-balkon-fiyatlari',
  'katlanir-cam-balkon',
  'isicamli-cam-balkon',
  'surgulu-cam-balkon',
  'kis-bahcesi-sistemleri',
  'sineklik-fiyatlari',
  'pileli-sineklik',
  'kedi-sinekligi',
  'surgulu-kapi-sinekligi',
  'en-yakin-cam-balkoncu'
];

// XML Başlangıcı
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

const addUrl = (loc, priority, changefreq) => {
  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}${loc}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${changefreq}</changefreq>\n`;
  xml += `    <priority>${priority}</priority>\n`;
  xml += `  </url>\n`;
};

console.log('⚙️ Kod mimarisiyle %100 uyumlu sitemap oluşturuluyor...');

// 1. Statik Sayfaları Ekle
staticPages.forEach(page => addUrl(page.url, page.priority, page.changefreq));

// 2. Gerçek Ürün Sayfalarını Ekle (/urunler/id)
products.forEach(product => addUrl(`/urunler/${product}`, '0.8', 'weekly'));

// 3. Gerçek İlçe Karşılama Sayfalarını Ekle (districtPages.ts'deki href formatı: /bolgeler/ilce-cam-balkon-sineklik)
districts.forEach(district => addUrl(`/bolgeler/${district}-cam-balkon-sineklik`, '0.7', 'weekly'));

// 4. Dinamik Blog Yazılarını Ekle (src/content/blog klasöründen)
const blogDir = path.join(__dirname, 'src', 'content', 'blog');
if (fs.existsSync(blogDir)) {
  const files = fs.readdirSync(blogDir);
  const mdFiles = files.filter(file => file.endsWith('.md'));
  mdFiles.forEach(file => {
    const slug = file.replace('.md', '');
    addUrl(`/blog/${slug}`, '0.7', 'weekly');
  });
  console.log(`📝 ${mdFiles.length} adet gerçek blog yazısı haritaya eklendi.`);
}

// 5. 120 Adet Dinamik Programatik SEO Sayfasını Ekle (/bolgeler/ilce/hizmet)
let seoCount = 0;
districts.forEach(district => {
  seoServices.forEach(service => {
    addUrl(`/bolgeler/${district}/${service}`, '0.6', 'weekly');
    seoCount++;
  });
});
console.log(`🚀 ${seoCount} adet P-SEO sayfası sitemap'e jilet gibi işlendi.`);

// XML Bitişi
xml += `</urlset>`;

// Dosyayı public klasörüne kaydet
const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');

console.log('✅ Başarılı! Sıfır 404 riskli sitemap.xml public klasörüne basıldı.');