import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';
import FloatingButtons from './components/FloatingButtons';

// Sayfalar
import Home from './pages/Home';
//import Album from './pages/Album';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AllDistrictsPage from './pages/AllDistrictsPage';
// WorksPage importu SİLİNDİ
import ProductDetail from './pages/ProductDetail';
import DistrictPage from './pages/DistrictPage';
import BlogDetail from './pages/BlogDetail';
import BlogPage from './pages/BlogPage';
import DinamikSeoSayfasi from './pages/DinamikSeoSayfasi';

export default function App() {
  return (
    <Router>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/urunler" element={<ProductsPage />} />
        <Route path="/urunler/:id" element={<ProductDetail />} />
        {/* /islerimiz rotası SİLİNDİ */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        {/* <Route path="/album" element={<Album />} /> */}
        <Route path="/album" element={<Navigate to="/" replace />} />
        <Route path="/hizmetlerimiz" element={<Navigate to="/" replace />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
        <Route path="/bolgeler" element={<AllDistrictsPage />} />
        <Route path="/bolgeler/:slug" element={<DistrictPage />} />
        <Route path="/bolgeler/:ilceSlug/:hizmetSlug" element={<DinamikSeoSayfasi />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      <Footer />
      
      <FloatingButtons /> 
    </Router>
  );
}