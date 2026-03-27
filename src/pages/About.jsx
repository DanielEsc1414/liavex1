import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Award, Users, Lightbulb, MapPin, Heart } from 'lucide-react';
const About = () => {
  return <>
      <Helmet>
        <title>Nosotros - LIAVEX | Empresa de Tecnología en Ecuador</title>
        <meta name="description" content="Conoce al equipo de LIAVEX. Historia, valores y equipo técnico profesional en Quito." />
      </Helmet>

      <section className="pt-32 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Nuestra Identidad</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más que una empresa de tecnología, somos tus aliados estratégicos en seguridad e innovación.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia y Valores</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                LIAVEX nace con la visión de proporcionar soluciones tecnológicas integrales en Ecuador, basándonos en principios de honestidad y excelencia técnica. A lo largo de los años, hemos crecido gracias a la confianza de nuestros clientes.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">Nos fundamentamos en valores profesionales, lo que garantiza un trato ético, transparente y comprometido en cada proyecto que emprendemos. No solo instalamos equipos; construimos relaciones de confianza a largo plazo.</p>
              <div className="flex items-center gap-3 mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <Heart className="text-blue-600 w-6 h-6" />
                <span className="font-medium text-blue-900">Compromiso ético y responsabilidad en cada servicio.</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img alt="Reunión corporativa equipo LIAVEX" className="w-full object-cover " src="https://i.postimg.cc/MHBLb2NF/Gemini-Generated-Image-m7n88gm7n88gm7n8.png" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo Profesional</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* CEO */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center group">
              <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full mb-4 overflow-hidden border-4 border-white shadow-lg group-hover:border-blue-500 transition-colors">
                <img alt="CEO LIAVEX - Director General" className="w-full h-full object-cover" src="https://i.postimg.cc/NfMKJCLb/ceo.png" />
              </div>
              <h3 className="font-bold text-lg">CEO - Gerente General</h3>
              <p className="text-blue-600 text-sm">Liderazgo y Estrategia</p>
            </motion.div>

            {/* Technical Team (2) */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} className="text-center group">
              <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full mb-4 overflow-hidden border-4 border-white shadow-lg group-hover:border-blue-500 transition-colors">
                <img alt="Jefe Técnico de Instalaciones" className="w-full h-full object-cover" src="https://i.postimg.cc/8P57KXs4/jefe_tecnico.png" />
              </div>
              <h3 className="font-bold text-lg">Jefe Técnico</h3>
              <p className="text-blue-600 text-sm">Proyectos e Instalaciones</p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="text-center group">
              <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full mb-4 overflow-hidden border-4 border-white shadow-lg group-hover:border-blue-500 transition-colors">
                <img alt="Técnico Especialista en Soporte" className="w-full h-full object-cover" src="https://i.postimg.cc/sxZ0gCQb/Gemini-Generated-Image-g798aag798aag798.png" />
              </div>
              <h3 className="font-bold text-lg">Especialista TI</h3>
              <p className="text-blue-600 text-sm">Soporte y Mantenimiento</p>
            </motion.div>

            {/* Admin Team (2) */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3
          }} className="text-center group">
              <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full mb-4 overflow-hidden border-4 border-white shadow-lg group-hover:border-blue-500 transition-colors">
                <img alt="Coordinadora Administrativa" className="w-full h-full object-cover" src="https://i.postimg.cc/CLkQyYVL/Gemini-Generated-Image-k1oygyk1oygyk1oy.png" />
              </div>
              <h3 className="font-bold text-lg">Administración</h3>
              <p className="text-blue-600 text-sm">Finanzas y RRHH</p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4
          }} className="text-center group">
              <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full mb-4 overflow-hidden border-4 border-white shadow-lg group-hover:border-blue-500 transition-colors">
                 <img alt="Asesor Comercial y Ventas" className="w-full h-full object-cover" src="https://i.postimg.cc/FFDKyt6J/Gemini-Generated-Image-maqdlimaqdlimaqd.png" />
              </div>
              <h3 className="font-bold text-lg">Marketing</h3>
              <p className="text-blue-600 text-sm">Manejo de redes sociales</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-12">Nuestras Oficinas en Quito</h2>
           <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
               <MapPin className="w-10 h-10 text-blue-400 mb-4" />
               <h3 className="text-xl font-bold mb-2">Matriz Centro</h3>
               <p className="text-gray-300">Av. 5 de Junio Oe2-48 y Ambato</p>
               <p className="text-gray-400 text-sm mt-2">Referencia: Sector El Panecillo</p>
             </div>
             
             <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
               <MapPin className="w-10 h-10 text-blue-400 mb-4" />
               <h3 className="text-xl font-bold mb-2">Sucursal Sur</h3>
               <p className="text-gray-300">Av. Maldonado E47 – Parada El Capulí</p>
               <p className="text-gray-400 text-sm mt-2">Referencia: Frente a la parada de la Ecovía</p>
             </div>
             <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
               <MapPin className="w-10 h-10 text-blue-400 mb-4" />
               <h3 className="text-xl font-bold mb-2">Sucursal Quito Norte</h3>
               <p className="text-gray-300">José Vicente Peñafiel y calle Oe24B</p>
               <p className="text-gray-400 text-sm mt-2">Referencia: Cerca al mercado Central</p>
             </div>
             
           </div>
           <h2 className="text-3xl font-bold text-center mb-12 pt-12">Nuestras Oficinas en Ambato</h2>
           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

             <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors text-center">
               <div className="flex justify-center mb-4">
                 <MapPin className="w-10 h-10 text-blue-400" />
               </div>
               <h3 className="text-xl font-bold mb-2">Sucursal 1</h3>
               <p className="text-gray-300">Maximiliano Rodríguez y Alberto Rosero</p>
               <p className="text-gray-400 text-sm mt-2">Referencia: Atrás de la fábrica Boho</p>
             </div>

             <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors text-center">
               <div className="flex justify-center mb-4">
                 <MapPin className="w-10 h-10 text-blue-400" />
               </div>
               <h3 className="text-xl font-bold mb-2">Sucursal 2</h3>
               <p className="text-gray-300">la Camino El Rey y Quispicacha 34</p>
               <p className="text-gray-400 text-sm mt-2">Referencia: Tienda Viche's</p>
             </div>
             
             </div>
           <h2 className="text-3xl font-bold text-center mb-12 pt-12">Nuestras Oficinas en Riobamba</h2>
           <div className="flex justify-center">
             <div className="w-full md:w-1/2">
               <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors text-center">
                 <div className="flex justify-center mb-4">
                   <MapPin className="w-10 h-10 text-blue-400" />
                 </div>
                 <h3 className="text-xl font-bold mb-2">Sucursal Riobamba Norte</h3>
                 <p className="text-gray-300">Av. lirzarzaburu 3-17 y Vicente Solano</p>
                 <p className="text-gray-400 text-sm mt-2">Referencia: </p>
               </div>
             </div>
           </div>
        </div>
      </section>
    </>;
};
export default About;