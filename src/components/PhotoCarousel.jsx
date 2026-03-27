import React from 'react';
import { motion } from 'framer-motion';
import './PhotoCarousel.css';

const PhotoCarousel = () => {
  // Array de espacios para las imágenes - Ajusta la cantidad según necesites
  const images = [
    { id: 1, src: 'https://i.postimg.cc/SN30MdP5/Gemini_Generated_Image_9xwdpn9xwdpn9xwd.png', alt: 'Proyecto 1' },
    { id: 2, src: 'https://i.postimg.cc/3rDVNFw2/pryecto_2.jpg', alt: 'Proyecto 2' },
    { id: 3, src: 'https://i.postimg.cc/DfbH0PzG/proyecto_3.jpg', alt: 'Proyecto 3' },
    { id: 4, src: 'https://i.postimg.cc/YqZcWRPT/Gemini_Generated_Image_yzd5psyzd5psyzd5.png', alt: 'Proyecto 4' },
    { id: 5, src: 'https://i.postimg.cc/yYtqZjGr/Gemini_Generated_Image_8ed77u8ed77u8ed7.png', alt: 'Proyecto 5' },
    { id: 6, src: 'https://i.postimg.cc/4NVCpVT3/Gemini-Generated-Image-uyej52uyej52uyej.png', alt: 'Proyecto 6' },
  ];

  // Duplicar imágenes para el efecto infinito
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Nuestros <span className="text-blue-600">Proyectos</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Visualiza algunos de nuestros trabajos en instalaciones de seguridad y automatización
        </p>

        <div className="carousel-container">
          <motion.div
            className="carousel-track"
            animate={{ x: '-100%' }}
            transition={{
              duration: 20, // Velocidad: reduce el número para ir más rápido
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop'
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div key={`${image.id}-${index}`} className="carousel-item">
                <div className="carousel-image-wrapper">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="carousel-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=' + image.alt;
                    }}
                  />
                  <div className="carousel-overlay">
                    <p className="carousel-label">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Indicador visual */}
        <div className="flex justify-center mt-8 gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full bg-blue-400"
              style={{ opacity: 0.6 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
