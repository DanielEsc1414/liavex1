import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Instalación Exitosa en Conjunto Residencial El Bronte',
      date: '15 de Octubre, 2023',
      category: 'Proyectos',
      content: 'Completamos la instalación de un sistema de seguridad integral que incluye 32 cámaras IP y control de acceso vehicular automatizado. Los residentes ahora cuentan con monitoreo 24/7 desde sus dispositivos móviles.',
      imageAlt: "Instalación de cámaras en conjunto residencial"
    },
    {
      id: 2,
      title: 'LIAVEX presente en la Feria de Tecnología Quito 2023',
      date: '05 de Noviembre, 2023',
      category: 'Eventos',
      content: 'Participamos en el evento tecnológico más importante de la ciudad, presentando las últimas novedades en domótica y sistemas biométricos de reconocimiento facial sin contacto.',
      imageAlt: "Stand de LIAVEX en feria tecnológica"
    },
    {
      id: 3,
      title: 'Nuevo Servicio de Mantenimiento Express',
      date: '20 de Noviembre, 2023',
      category: 'Servicios',
      content: 'Lanzamos nuestro nuevo servicio de mantenimiento preventivo para laptops con entrega en 24 horas. Ideal para profesionales y estudiantes que no pueden detener su trabajo.',
      imageAlt: "Técnico realizando mantenimiento rápido a laptop"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Novedades y Noticias - LIAVEX</title>
        <meta name="description" content="Últimas noticias, proyectos completados y eventos de LIAVEX Tecnología." />
      </Helmet>

      <section className="pt-32 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Novedades LIAVEX</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mantente al día con nuestros últimos proyectos, eventos y actualizaciones tecnológicas.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <motion.article 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img alt={item.imageAlt} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" src="https://images.unsplash.com/photo-1617469001581-20eb5ca99e7b" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase tracking-wider">{item.category}</span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug">{item.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{item.content}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;