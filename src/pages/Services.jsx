import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Camera, Fingerprint, DoorOpen, Lightbulb, Monitor, Printer, GraduationCap, ArrowRight, Projector, SpeakerIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const servicesList = [
    {
      id: 'camaras-seguridad',
      title: 'Cámaras de Seguridad',
      icon: Camera,
      description: 'Paquetes de vigilancia CCTV residenciales y profesionales con acceso remoto.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'biometricos',
      title: 'Sistemas Biométricos',
      icon: Fingerprint,
      description: 'Control de acceso y asistencia con tecnología de huella y reconocimiento facial.',
      color: 'bg-green-50 text-green-600'
    },
    {
      id: 'puertas-automaticas',
      title: 'Puertas Automáticas',
      icon: DoorOpen,
      description: 'Automatización de accesos corredizos, batientes e industriales.',
      color: 'bg-orange-50 text-orange-600'
    },
    {
      id: 'iluminacion-inteligente',
      title: 'Iluminación Inteligente',
      icon: Lightbulb,
      description: 'Control de iluminación por App y asistentes de voz.',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      id: 'proyectores',
      title: 'Instalación de Proyectores',
      icon: Projector,
      description: 'Soluciones audiovisuales para salas de reuniones, aulas y cine en casa.',
      color: 'bg-teal-50 text-teal-600'
    },
    {
      id: 'computadoras',
      title: 'Mantenimiento de PC',
      icon: Monitor,
      description: 'Planes de mantenimiento preventivo y correctivo, upgrades de hardware.',
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      id: 'impresoras',
      title: 'Impresoras',
      icon: Printer,
      description: 'Venta y servicio técnico para equipos de impresión empresarial.',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      id: 'capacitacion',
      title: 'Capacitación',
      icon: GraduationCap,
      description: 'Cursos de ofimática (Excel, Word, PowerPoint) para personal.',
      color: 'bg-red-50 text-red-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nuestros Servicios - LIAVEX</title>
        <meta name="description" content="Catálogo completo de servicios LIAVEX: Cámaras, Biométricos, Puertas Automáticas, Proyectores, Computación, Impresoras y Capacitación." />
      </Helmet>

      <section className="pt-32 pb-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Soluciones Tecnológicas Integrales
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Seleccione una categoría para ver paquetes detallados y especificaciones técnicas.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow">{service.description}</p>
                <Link to={`/services/${service.id}`} className="mt-auto">
                  <Button className="w-full bg-white text-gray-900 border border-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                    Ver Planes y Precios
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;