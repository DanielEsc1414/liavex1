import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = ({ phoneNumber }) => {
  const handleClick = () => {
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    const message = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-colors group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-16 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg hidden group-hover:block"
      >
        ¿Necesitas ayuda?
      </motion.div>
    </motion.button>
  );
};

export default WhatsAppButton;