import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Facebook, Instagram, Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    path: '/',
    label: 'Inicio'
  }, {
    path: '/services',
    label: 'Servicios'
  }, {
    path: '/products',
    label: 'Catálogo'
  }, {
    path: '/about',
    label: 'Nosotros'
  },/* {
    path: '/news',
    label: 'Novedades'
  }*/, {
    path: '/contact',
    label: 'Contacto'
  }];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/18KQdZ5zyG/?mibextid=wwXIfr', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Instagram, href: 'https://www.instagram.com/liavex.ec?igsh=MTRibHNtMzI3OWplYw==', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Music2, href: 'https://www.tiktok.com/@liavex.ec?_r=1&_t=ZS-9506xOIjZbO', label: 'TikTok', color: 'hover:text-black' }, // Music2 para TikTok
  ];

  const isActive = path => location.pathname === path;
  return <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-xl">LVX</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900">LIAVEX</span>
              <span className="text-xs text-gray-600 -mt-1">Soluciones Tecnológicas</span>
            </div>
          </Link>

          {/* LINKS ESCRITORIO + REDES SOCIALES */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8 border-r pr-8">
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`relative text-sm font-medium transition-colors hover:text-blue-600 ${isActive(link.path) ? 'text-blue-600' : 'text-gray-700'}`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <motion.div layoutId="activeNav" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600" />
                  )}
                </Link>
              ))}
            </div>

            {/* ICONOS REDES SOCIALES ESCRITORIO */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`text-gray-500 transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }} 
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(link.path) ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* REDES SOCIALES MÓVIL */}
              <div className="flex items-center justify-around py-4 border-t mt-2">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center gap-1 text-gray-500"
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="text-[10px]">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
};
export default Navigation;