import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono / WhatsApp',
      details: ['+593 98 308 1575'],
      action: 'https://wa.me/593983081575'
    },
    {
      icon: Mail,
      title: 'Email Ventas',
      details: ['ventas@liavex.com'],
      action: 'mailto:ventas@liavex.com'
    },
    {
      icon: MapPin,
      title: 'Ubicaciones',
      details: ['Av. 5 de Junio Oe2-48 y Ambato', 'Av. Maldonado E47 – Parada El Capulí', 'Riobamba', 'Ambato'],
      action: null
    },
    {
      icon: Clock,
      title: 'Horario',
      details: ['Lunes - Viernes: 8:00 - 18:00', 'Sábados: 9:00 - 13:00'],
      action: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contacto - LIAVEX</title>
      </Helmet>

      <section className="pt-32 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h1>
          <p className="text-gray-600">Estamos listos para atender tus requerimientos tecnológicos.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="grid gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {info.action && idx === 0 ? (
                            <a href={info.action} target={info.action.startsWith('http') ? '_blank' : '_self'} className="hover:text-blue-600 underline decoration-blue-200 underline-offset-2">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;