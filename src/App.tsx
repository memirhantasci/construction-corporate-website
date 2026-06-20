import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';
import FloatingButtons from './components/FloatingButtons'; // Bileşeni import ettik

// Sayfalar
import Home from './pages/Home';
import Album from './pages/Album';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WorksPage from './pages/WorksPage';
import ProductDetail from './pages/ProductDetail';
import DistrictPage from './pages/DistrictPage';
import BlogDetail from './pages/BlogDetail';
import BlogPage from './pages/BlogPage';
export default function App() {
  return (
    <Router>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/urunler" element={<ProductsPage />} />
        <Route path="/urunler/:id" element={<ProductDetail />} />
        <Route path="/islerimiz" element={<WorksPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/album" element={<Album />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
        <Route path="/bolgeler/:slug" element={<DistrictPage />} />
      </Routes>
      
      <Footer />
      
      {/* Sabit butonlar tüm sayfalarda görünecek */}
      <FloatingButtons /> 
    </Router>
  );
}