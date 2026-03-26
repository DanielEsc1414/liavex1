import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Music2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/18KQdZ5zyG/?mibextid=wwXIfr', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Instagram, href: 'https://instagram.com/tu-usuario', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Music2, href: 'https://tiktok.com/@tu-usuario', label: 'TikTok', color: 'hover:text-white' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LV</span>
              </div>
              <span className="text-xl font-bold text-white">LIAVEX</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Soluciones tecnológicas profesionales en seguridad electrónica, automatización y mantenimiento informático.
            </p>
          </div>

          <div>
            <span className="text-white font-semibold text-lg mb-4 block">Enlaces Rápidos</span>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm hover:text-blue-400 transition-colors">Inicio</Link>
              <Link to="/services" className="text-sm hover:text-blue-400 transition-colors">Servicios</Link>
              <Link to="/products" className="text-sm hover:text-blue-400 transition-colors">Productos</Link>
              <Link to="/about" className="text-sm hover:text-blue-400 transition-colors">Nosotros</Link>
              <Link to="/contact" className="text-sm hover:text-blue-400 transition-colors">Contacto</Link>
            </nav>
          </div>

          <div>
            <span className="text-white font-semibold text-lg mb-4 block">Servicios</span>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/services/camaras-seguridad" className="hover:text-blue-400 transition-colors">Cámaras de Seguridad</Link>
              <Link to="/services/biometricos" className="hover:text-blue-400 transition-colors">Sistemas Biométricos</Link>
              <Link to="/services/puertas-automaticas" className="hover:text-blue-400 transition-colors">Puertas Automáticas</Link>
              <Link to="/services/proyectores" className="hover:text-blue-400 transition-colors">Proyectores</Link>
              <Link to="/services/computadoras" className="hover:text-blue-400 transition-colors">Mantenimiento PC</Link>
            </div>
          </div>

          <div>
            <span className="text-white font-semibold text-lg mb-4 block">Contacto</span>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-blue-400 shrink-0" />
                <span className="text-sm">+593 98 308 1575</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-blue-400 shrink-0" />
                <a href="mailto:ventas@liavex.com" className="text-sm hover:text-blue-400">ventas@liavex.com</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-blue-400 shrink-0" />
                <div className="text-sm flex flex-col gap-1">
                  <span>Av. 5 de Junio Oe2-48 y Ambato</span>
                  <span>Av. Maldonado E47 – Parada El Capulí</span>
                  <span className="text-gray-500">Quito, Ecuador</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-white font-semibold text-lg mb-4 block">Síguenos</span>
            <div className="flex flex-col gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center gap-3 text-sm text-gray-300 transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} LIAVEX. Todos los derechos reservados.
            </p>
            <p className="text-xs text-gray-500 italic">
              Liavex es una marca que forma parte de Trascende Group.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;