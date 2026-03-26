import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import Products from '@/pages/Products';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import News from '@/pages/News';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton phoneNumber="+593983081575" />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;