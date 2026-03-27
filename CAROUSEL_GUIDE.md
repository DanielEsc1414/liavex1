# 📸 Guía del Carrusel de Fotos

## ¿Qué se creó?

Se crearon dos archivos para el carrusel infinito:

1. **PhotoCarousel.jsx** - Componente React del carrusel
2. **PhotoCarousel.css** - Estilos y animaciones

## ⚠️ IMPORTANTE: El carrusel SOLO funciona con URLs externas

**No puedes usar rutas locales como `/images/carousel-1.jpg`.** El carrusel requiere URLs completas.

## 🚀 Cómo agregar tus imágenes

### Opción 1: Usar URLs de hosting externo (RECOMENDADO)
Sube tus imágenes a servicios como:
- **Postimg.cc** (gratuito)
- **Imgbb.com** (gratuito)
- **Imgur.com** (gratuito)
- Tu propio servidor

Luego edita `PhotoCarousel.jsx` y actualiza el array `images`:

```javascript
const images = [
  { id: 1, src: 'https://i.postimg.cc/qBCSqx7y/proyecto_1.jpg', alt: 'Proyecto 1' },
  { id: 2, src: 'https://i.postimg.cc/3rDVNFw2/pryecto_2.jpg', alt: 'Proyecto 2' },
  { id: 3, src: 'https://i.postimg.cc/DfbH0PzG/proyecto_3.jpg', alt: 'Proyecto 3'},
  // ... más imágenes
];
```

## ⚙️ Personalización

### Cambiar velocidad del carrusel
En `PhotoCarousel.jsx`, busca esta línea:
```javascript
duration: 20, // Velocidad en segundos
```
- **Valores menores = más rápido** (ej: 15, 10)
- **Valores mayores = más lento** (ej: 30, 40)

### Cambiar cantidad de imágenes visibles
En `PhotoCarousel.css`, modifica `.carousel-item`:
```css
flex: 0 0 calc(100% / 6); /* Cambia 6 por la cantidad de imágenes visibles */
```

### Cambiar altura de las imágenes
En `PhotoCarousel.css`:
```css
.carousel-image-wrapper {
  height: 300px; /* Aumentar o disminuir según necesites */
}
```

### Cambiar el texto del título
En `PhotoCarousel.jsx`:
```javascript
<h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
  Nuestros <span className="text-blue-600">Proyectos</span>
</h2>
```

## 📱 Responsividad

El carrusel se adapta automáticamente:
- **Desktop**: 6 imágenes visibles
- **Tablets**: 4 imágenes visibles
- **Móviles grandes**: 3 imágenes visibles
- **Móviles pequeños**: 2 imágenes visibles

## 🎨 Efectos incluidos

✅ Movimiento infinito y continuo
✅ Efecto zoom al pasar el mouse
✅ Overlay con etiquetas oscuras
✅ Indicadores punteados abajo
✅ Totalmente responsive
✅ Sin necesidad de pulsadores

## 📝 Agregar más imágenes

1. Abre `PhotoCarousel.jsx`
2. En el array `images`, agrega nuevas entradas:
```javascript
{ id: 7, src: '/images/carousel-7.jpg', alt: 'Proyecto 7' },
{ id: 8, src: '/images/carousel-8.jpg', alt: 'Proyecto 8' },
```
3. Los indicadores punteados se ajustarán automáticamente

## 💡 Consejos

- Usa imágenes con el mismo tamaño para mejor apariencia
- Las imágenes deben ser optimizadas (reducidas en tamaño)
- Se recomienda formato JPG o WebP para web
- Si una imagen no carga, se muestra un placeholder automáticamente

¡Ya está listo para usar! Solo agrega tus imágenes de proyectos en `/public/images/`.
