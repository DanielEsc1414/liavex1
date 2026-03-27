import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Cpu, Wrench, ArrowRight, CheckCircle2, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TrainingHighlight from '@/components/TrainingHighlight';
import PhotoCarousel from '@/components/PhotoCarousel';
const Home = () => {
  const services = [{
    icon: Shield,
    title: 'Cámaras de Seguridad',
    description: 'Paquetes residenciales y comerciales desde 2 hasta 16 cámaras.',
    slug: 'camaras-seguridad'
  }, {
    icon: Cpu,
    title: 'Control de Acceso',
    description: 'Sistemas biométricos ZKTeco y Hikvision para control de personal.',
    slug: 'biometricos'
  }, {
    icon: Zap,
    title: 'Automatización',
    description: 'Puertas automáticas y sistemas de iluminación inteligente.',
    slug: 'puertas-automaticas'
  }, {
    icon: Wrench,
    title: 'Mantenimiento PC',
    description: 'Planes preventivos y correctivos para computadoras e impresoras.',
    slug: 'computadoras'
  }];
  const features = ['Equipo Técnico Especializado', 'Garantía por un Año', 'Soporte Post-Venta', 'Instalación y Capacitación a Domicilio'];
  const testimonials = [{
    name: "ING. Esthela Amaya",
    role: "Presidente Conjunto El Bronte",
    text: "Excelente trabajo en la instalación de cámaras y automatización. Muy profesionales y el sistema es muy fácil de usar desde el celular."
  }, {
    name: "Amanda Cabrera",
    role: "Administradora de Edificio",
    text: "Contratamos a LIAVEX para las cámaras y el acceso automático del edificio. El cambio en seguridad ha sido notable y los vecinos están tranquilos."
  }, {
    name: "Jessica Ilbis",
    role: "Cliente Particular",
    text: "Me solucionaron un problema complejo de impresión desde móviles. Ahora imprimo directo desde mi celular sin cables. Muy recomendado."
  }];
  return <>
      <Helmet>
        <title>LIAVEX - Soluciones Tecnológicas de Seguridad y Automatización</title>
        <meta name="description" content="Expertos en cámaras de seguridad, control de acceso, mantenimiento de computadoras y automatización en Ecuador. Soluciones corporativas y residenciales." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }}>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Instalación Profesional de <span className="text-blue-400">Cámaras y Tecnología</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Protección inteligente para tu hogar y negocio. Expertos en seguridad electrónica, automatización y mantenimiento informático.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 className="text-blue-400 w-5 h-5" />
                  <span>Instalación Profesional</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 className="text-blue-400 w-5 h-5" />
                  <span>Configuración Remota</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 className="text-blue-400 w-5 h-5" />
                  <span>Monitoreo 24/7</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white border-none shadow-lg shadow-blue-900/50 h-14 px-8 text-lg">
                    Cotizar Ahora
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:text-white h-14 px-8 text-lg" onClick={() => window.open('https://wa.me/593983081575', '_blank')}>
                  WhatsApp Directo
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <img alt="Técnico profesional instalando cámara de seguridad CCTV en pared azul" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" src="https://i.postimg.cc/JhhXgTXs/Gemini-Generated-Image-7pwrrp7pwrrp7pwr.png" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                    <h3 className="text-blue-900 font-bold text-xl mb-1">Servicio Garantizado</h3>
                    <p className="text-gray-600">Más de 10 años protegiendo lo que más valoras.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Nuestros Servicios</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Soluciones Integrales</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{service.description}</p>
                <Link to={`/services/${service.slug}`} className="text-blue-600 font-bold text-sm inline-flex items-center hover:gap-2 transition-all">
                  Ver Detalles
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Value Proposition & New Training Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <img alt="Equipo de trabajo LIAVEX en oficina moderna revisando planos y equipos" className="w-full rounded-2xl shadow-2xl" src="https://i.postimg.cc/nrpRJhz1/Gemini-Generated-Image-rvv83prvv83prvv8.png" />
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Por qué elegir LIAVEX?</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Nos destacamos por ofrecer soluciones tecnológicas personalizadas con un enfoque humano y profesional. Como parte de Trascende Group, mantenemos altos estándares de calidad y servicio.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </div>)}
              </div>
              <div className="mt-8 flex gap-4">
                 <Link to="/about">
                  <Button variant="default" className="bg-gray-900 text-white hover:bg-gray-800">
                    Conocer Más
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="outline">
                    Ver Catálogo
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          <TrainingHighlight />
        </div>
      </section>

      {/* Photo Carousel */}
      <PhotoCarousel />

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Clientes Satisfechos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">La confianza de nuestros clientes es nuestra mejor carta de presentación.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-600 mb-6 italic flex-grow">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                    <span className="text-xs text-blue-600">{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="text-4xl font-bold text-white mb-6">Optimiza tu Seguridad Hoy Mismo</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Agenda una visita técnica gratuita y recibe una propuesta personalizada para tu hogar o empresa.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 h-12">
                Solicitar Visita Técnica
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>;
};
export default Home;