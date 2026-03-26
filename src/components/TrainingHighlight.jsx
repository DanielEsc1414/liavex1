import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

const TrainingHighlight = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white shadow-xl overflow-hidden relative my-12"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400 opacity-10 rounded-full -ml-20 -mb-20 blur-2xl"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
        <div className="bg-white/10 p-6 rounded-full shrink-0">
          <GraduationCap className="w-12 h-12 text-blue-200" />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Instalación y Capacitación a Domicilio</h3>
          <p className="text-blue-100 text-lg mb-6 leading-relaxed">
            Creemos que la tecnología debe ser fácil de usar. Por eso, al adquirir nuestros sistemas (impresoras, cámaras de seguridad, computadoras o proyectores), nuestro servicio incluye una <strong>capacitación personalizada en tu domicilio u oficina</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <div className="flex items-center gap-2 bg-blue-950/30 px-4 py-2 rounded-lg border border-blue-700/50">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Entrenamiento práctico</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-950/30 px-4 py-2 rounded-lg border border-blue-700/50">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Resolución de dudas</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrainingHighlight;