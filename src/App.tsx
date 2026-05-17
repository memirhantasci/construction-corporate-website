import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';

// Sayfalar
import Home from './pages/Home';
import Album from './pages/Album';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WorksPage from './pages/WorksPage'; // Yeni ekledik
import ProductDetail from './pages/ProductDetail'; // Bu satırı ekle

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/urunler" element={<ProductsPage />} />
        <Route path="/urunler/:id" element={<ProductDetail />} /> {/* Dinamik Sayfa */}
        <Route path="/islerimiz" element={<WorksPage />} />
        <Route path="/album" element={<Album />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

