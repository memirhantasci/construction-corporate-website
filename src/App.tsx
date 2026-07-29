import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';
import FloatingButtons from './components/FloatingButtons';

// Lazy loaded Sayfalar
const Home = React.lazy(() => import('./pages/Home'));
const ProductsPage = React.lazy(() => import('./pages/ProductsPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const AllDistrictsPage = React.lazy(() => import('./pages/AllDistrictsPage'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const DistrictPage = React.lazy(() => import('./pages/DistrictPage'));
const BlogDetail = React.lazy(() => import('./pages/BlogDetail'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const DinamikSeoSayfasi = React.lazy(() => import('./pages/DinamikSeoSayfasi'));

// Fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#F7F7F5]">
    <div className="w-8 h-8 border-4 border-[#E06B5A] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Navigation />
      
      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
      
      <Footer />
      
      <FloatingButtons /> 
    </Router>
  );
}