import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM modüllerinde __dirname için standart çözüm
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://atasehircambalkon.com';
const today = new Date().toISOString().split('T')[0];

// 1. SABİT (STATİK) SAYFALAR
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/urunler', priority: '0.9', changefreq: 'weekly' },
  { url: '/islerimiz', priority: '0.8', changefreq: 'weekly' },
  { url: '/album', priority: '0.7', changefreq: 'weekly' },
  { url: '/blog', priority: '0.8', changefreq: 'daily' },
  { url: '/hakkimizda', priority: '0.5', changefreq: 'monthly' },
  { url: '/iletisim', priority: '0.5', changefreq: 'monthly' }
];

// 2. GERÇEK ÜRÜN ALT SAYFALARI (15 Adet)
const products = [
  'aluminyum-dograma', 'ofis-bolme', 'cam-balkon', 'katlanir-cam-balkon', 
  'surme-cam-balkon', 'isicamli-cam-balkon', 'giyotin-cam', 'dusakabin', 
  'korkuluk-sistemleri', 'motorlu-panjur', 'plastik-dograma-pvc', 
  'sineklik-sistemleri', 'pileli-sineklik', 'kis-bahcesi', 'pergola'
];

// 3. İLÇE SLUG'LARI (12 Adet - Adalar ve Şile Hariç)
const districts = [
  'atasehir', 'kadikoy', 'umraniye', 'uskudar', 'maltepe', 'kartal', 
  'pendik', 'tuzla', 'sancaktepe', 'cekmekoy', 'sultanbeyli', 'beykoz'
];

// 4. SEO HİZMET SLUG'LARI (seoData.ts içindeki 10 Hizmet)
// NOT: Kanka buraya senin projendeki o 10 SEO hizmetinin tam slug'larını yazdım, 
// farklılık varsa sadece bu diziyi güncellersin.
const seoServices = [
  'cam-balkon', 'katlanir-cam-balkon', 'isicamli-cam-balkon', 
  'sineklik-sistemleri', 'pileli-sineklik', 'kedi-sinekligi',
  'aluminyum-dograma', 'ofis-bolme', 'korkuluk-sistemleri', 'kis-bahcesi'
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

// --- XML OLUŞTURMA İŞLEMLERİ ---

console.log('Sitemap oluşturuluyor...');

// 1. Statik Sayfaları Ekle
staticPages.forEach(page => addUrl(page.url, page.priority, page.changefreq));

// 2. Ürün Sayfalarını Ekle
products.forEach(product => addUrl(`/urunler/${product}`, '0.8', 'weekly'));

// 3. İlçe Ana Sayfalarını Ekle
districts.forEach(district => addUrl(`/bolgeler/${district}-cam-balkon-sineklik`, '0.7', 'weekly'));

// 4. Dinamik Blogları Ekle (src/content/blog klasöründen)
const blogDir = path.join(__dirname, 'src', 'content', 'blog');
if (fs.existsSync(blogDir)) {
  const files = fs.readdirSync(blogDir);
  const mdFiles = files.filter(file => file.endsWith('.md'));
  
  mdFiles.forEach(file => {
    const slug = file.replace('.md', '');
    addUrl(`/blog/${slug}`, '0.7', 'weekly');
  });
  console.log(`${mdFiles.length} adet blog yazısı sitemap'e eklendi.`);
} else {
  console.warn('Uyarı: src/content/blog klasörü bulunamadı!');
}

// 5. 120 Adet Dinamik SEO Sayfasını Ekle (İlçe + Hizmet)
let seoCount = 0;
districts.forEach(district => {
  seoServices.forEach(service => {
    addUrl(`/bolgeler/${district}/${service}`, '0.6', 'weekly');
    seoCount++;
  });
});
console.log(`${seoCount} adet dinamik SEO sayfası sitemap'e eklendi.`);

// XML Bitişi
xml += `</urlset>`;

// Dosyayı public klasörüne kaydet
const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');

console.log('✅ Başarılı! sitemap.xml public klasörüne güncel olarak oluşturuldu.');