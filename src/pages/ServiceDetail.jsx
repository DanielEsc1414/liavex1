import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Check, MessageCircle, Mail, ArrowLeft, Shield, Cpu, DoorOpen, Lightbulb, Monitor, Printer, GraduationCap, Laptop, Projector, CheckCircle2, Table, FileText, Airplay, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
const serviceData = {
  'camaras-seguridad': {
    title: 'Cámaras de Seguridad',
    icon: Shield,
    showCatalogBtn: true,
    intro: 'Sistemas de videovigilancia CCTV de alta definición para monitoreo 24/7.',
    imageAlt: "Instalación de cámaras de seguridad CCTV",
    imageUrl: "https://i.postimg.cc/qR7QGJzT/Gemini-Generated-Image-g0wanbg0wanbg0wa.png",
    customSection: {
      title: "Instalación de cámaras de seguridad para tu hogar o empresa",
      description: "Protege tu hogar o negocio con un sistema de videovigilancia correctamente instalado y configurado. Nuestro servicio incluye instalación técnica, configuración de grabación, conexión a internet para acceso remoto desde tu celular y capacitación personalizada para que puedas monitorear tus cámaras fácilmente desde cualquier lugar.",
      points: [
        { name: "Instalación de Cámaras", icon: Shield },
        { name: "Mantenimiento de cámaras", icon: Cpu },
        { name: "Acceso Remoto", icon: Cloud },
        { name: "Capacitación Personalizada", icon: GraduationCap },
        { name: "Soporte Técnico Especializado", icon: Monitor }
      ]
    },
    packages: [
      {
        name: 'Pack Básico',
        cameras: 2,
        features: ['2 Cámaras 1080p HD', 'DVR 4 Canales', 'Disco Duro 1TB', 'Cableado e Instalación', 'Configuración App Móvil'],
        recommended: false
      },
      {
        name: 'Pack Estándar',
        cameras: 4,
        features: ['4 Cámaras 1080p HD', 'DVR 4 Canales', 'Disco Duro 1TB', 'Cableado e Instalación', 'Configuración App Móvil'],
        recommended: true
      },
      {
        name: 'Pack Avanzado',
        cameras: 8,
        features: ['8 Cámaras 1080p HD', 'DVR 8 Canales', 'Disco Duro 2TB', 'Fuente Centralizada', 'Instalación Profesional'],
        recommended: false
      },
      {
        name: 'Pack Profesional',
        cameras: 16,
        features: ['16 Cámaras 1080p HD', 'DVR 16 Canales', 'Disco Duro 4TB', 'Rack de Seguridad', 'Monitoreo Central'],
        recommended: false
      },
      {
        name: 'Pack Personalizado',
        cameras: 'Custom',
        features: ['Diseño a medida', 'Cámaras IP / PTZ', 'Analítica de Video', 'Proyectos Especiales', 'Integración Total'],
        recommended: false
      },
      {
        name: 'Catálogo Completo',
        cameras: 'Equipos',
        features: ['Cámaras IP y Wi-Fi', 'Cámaras PTZ (360°)', 'Cámaras con Audio', 'Accesorios y Discos', 'Soportes y Fuentes'],
        recommended: false,
        isCatalogCard: true // Marcador para identificarla en el componente
      }
      ]
  },
  'biometricos': {
    title: 'Sistemas Biométricos',
    icon: Cpu,
    intro: 'Control de asistencia y acceso seguro con tecnología de punta.',
    imageAlt: "Dispositivo biométrico de control de acceso",
    imageUrl: "https://i.postimg.cc/gcVq6LMG/Gemini_Generated_Image_f3hugwf3hugwf3hu.png",
    showCatalogBtn: true,
    customSection: {
      title: "Instalación y Capacitación en Control de Acceso",
      description: "Implementamos sistemas biométricos de huella y reconocimiento facial para empresas, instituciones y conjuntos residenciales. Instalamos el equipo, configuramos usuarios, horarios y permisos, y capacitamos al personal encargado para una administración eficiente.",
      points: [
        { name: "Instalación del equipo", icon: Cpu },
        { name: "Mantenimiento de sistemas de acceso", icon: Shield },
        { name: "Configuración de horarios y permisos", icon: Monitor },
        { name: "Capacitación al personal", icon: GraduationCap },
        { name: "Soporte técnico especializado", icon: MessageCircle }
      ]
    },
    standardCards: [
    { 
      title: 'Instalación de sistemas biométricos', 
      subtitle: 'Control de Acceso',
      features: ['Montaje Profesional', 'Configuración de Software', 'Capacitación de Uso', 'Cableado Estructurado'],
      buttonText: 'WhatsApp',
      type: 'service'
    },
    { 
      title: 'Mantenimiento de sistemas biométricos', 
      subtitle: 'Soporte Técnico',
      isFeatured: true, // Esto resalta el borde como en la imagen
      features: ['Limpieza de Sensores', 'Actualización de Firmware', 'Respaldo de Datos', 'Servicio Preventivo'],
      buttonText: 'WhatsApp',
      type: 'service'
    },
    { 
      title: 'Productos', 
      subtitle: 'Equipos Top',
      features: ['Relojes Biométricos', 'Lectores Facial/Huella', 'Cerraduras Magnéticas', 'Tarjetas de Proximidad'],
      buttonText: 'Ver Catálogo',
      type: 'catalog'
    }
  ]
  },
  'puertas-automaticas': {
    title: 'Puertas Automáticas',
    icon: DoorOpen,
    //showCatalogBtn: true,
    intro: 'Automatización de accesos para mayor comodidad y seguridad.',
    imageAlt: "Motor para puerta automática de garaje",
    imageUrl: "https://i.postimg.cc/YCZmPtXs/Gemini-Generated-Image-bf6letbf6letbf6l.png",
    customSection: {
      title: "Automatización Segura y Profesional de puertas automáticas",
      description: "Instalamos motores para puertas corredizas, batientes e industriales, garantizando seguridad, comodidad y funcionamiento eficiente. Nuestro servicio incluye calibración del motor, configuración de controles remotos y capacitación básica de uso.",
      points: [
        { name: "Instalación del motor", icon: DoorOpen },
        { name: "Programación de controles", icon: Laptop },
        { name: "Ajuste de sensores de seguridad", icon: Shield },
        { name: "Capacitación Personalizada", icon: GraduationCap },
        { name: "Soporte Técnico Especializado", icon: MessageCircle }
      ]
    },
    standardCards: [
    { 
      title: 'Pack Residencial', 
      subtitle: 'Motores Corredizos',
      features: ['Motor hasta 400kg', '2 Controles Remotos', 'Cremalleras de Acero', 'Luz de Cortesía', 'Instalación Básica'],
      buttonText: 'WhatsApp',
      type: 'service'
    },
    { 
      title: 'Pack Industrial', 
      subtitle: 'Alto Tráfico',
      isFeatured: true, // Este tendrá el borde azul resaltado
      features: ['Motor hasta 1000kg+', 'Uso Intensivo (Condominios)', 'Sensores de Fotocélula', 'Batería de Respaldo', 'Soporte Técnico 24/7'],
      buttonText: 'WhatsApp',
      type: 'service'
    },
    { 
      title: 'Mantenimiento', 
      subtitle: 'Servicio Técnico',
      features: ['Engrase de Mecanismos', 'Ajuste de Final de Carrera', 'Copia de Controles', 'Reparación de Motores', 'Cambio de Sensores'],
      buttonText: 'WhatsApp',
      type: 'service'
    },
    /*{ 
      title: 'Productos', 
      subtitle: 'Equipos Top',
      features: ['Motores para Puertas Corredizas', 'Motores para Puertas Batientes', 'Sensores de Seguridad', 'Controles Remotos', 'Accesorios y Repuestos'],
      buttonText: 'Ver Catálogo',
      type: 'catalog'
    }*/
  ]
  },
  'iluminacion-inteligente': {
    title: 'Iluminación Inteligente',
    icon: Lightbulb,
    intro: 'Domótica para el control total de la iluminación de tus espacios.',
    imageAlt: "Control de iluminación inteligente desde smartphone",
    imageUrl: "https://i.postimg.cc/KznqzqkF/Gemini-Generated-Image-1fcasn1fcasn1fca.png",
    showCatalogBtn: false, // En este caso no mostramos el botón de catálogo porque no es un producto específico
    customSection: {
      title: "Transforma tu Hogar con Iluminación Inteligente",
      description: "Lleva tu hogar al siguiente nivel con sistemas de domótica fáciles de usar. Controla el encendido y apagado de tus luces desde cualquier parte del mundo a través de tu celular, programa horarios automáticos para simular presencia o ahorrar energía, y crea ambientes personalizados con comandos de voz.",
      points: [
        { name: "Ahorro Energético", icon: Lightbulb },
        { name: "Control por Voz (Alexa/Google)", icon: MessageCircle }
      ]
    },
    standardCards: [
    { 
      title: 'Kit Inicial', 
      subtitle: 'Control WiFi',
      features: ['3 Interruptores Smart', 'Configuración App Móvil', 'Control Remoto (Fuera de casa)', 'Programación de Horarios', 'Instalación Técnica'],
      buttonText: 'WhatsApp',
      type: 'service'
    },
    { 
      title: 'Smart Home Plus', 
      subtitle: 'Casa Automatizada',
      isFeatured: true, // Resaltado con borde azul
      features: ['6+ Interruptores Smart', 'Integración Alexa/Google Home', 'Escenas Personalizadas', 'Sensores de Movimiento', 'Soporte Técnico Especializado'],
      buttonText: 'WhatsApp',
      type: 'service'
    },
    { 
      title: 'Kit Tiras LED', 
      subtitle: 'Ambientes RGB',
      features: ['Instalación Tiras LED RGB', 'Sincronización con Música', 'Control de Colores por App', 'Perfiles de Aluminio', 'Diseño de Iluminación'],
      buttonText: 'WhatsApp',
      type: 'service'
    }
  ]
  },
  'proyectores': {
    title: 'Instalación de Proyectores',
    icon: Projector,
    intro: 'Soluciones audiovisuales profesionales para educación, empresas y entretenimiento.',
    imageAlt: "Sala de conferencias moderna con proyector instalado en techo",
    imageUrl: "https://i.postimg.cc/rwN5KBgH/Gemini_Generated_Image_qokvf9qokvf9qokv.png",
    showCatalogBtn: false,
    customSection: {
      title: "Sistemas Audiovisuales de Alto Impacto",
      description: "Llevamos la experiencia visual de tu empresa o institución al siguiente nivel. Realizamos instalaciones profesionales en techo o pared con cableado oculto, configuración de pantallas de proyección y calibración de imagen para garantizar la máxima nitidez en cualquier condición de luz.",
      points: [
        { name: "Instalación en Techo/Pared", icon: Projector },
        { name: "Calibración de Imagen Profesional", icon: Monitor }
      ]
    },
    standardCards: [
    { 
      title: 'Básicos / Pymes', 
      subtitle: 'Salas Pequeñas',
      features: ['Ideales para reuniones', 'Brillo estándar', 'Conectividad HDMI', 'Soporte de Techo', 'Configuración Básica'],
      buttonText: 'WhatsApp',
      type: 'service'
    },
    { 
      title: 'Profesionales', 
      subtitle: 'Auditorios y Juntas',
      isFeatured: true, // Resaltado en azul
      features: ['Alta luminosidad', 'Resolución WUXGA/4K', 'Salas ejecutivas', 'Cableado Oculto', 'Calibración Pro'],
      buttonText: 'WhatsApp',
      type: 'service'
    },
    { 
      title: 'Interactivos', 
      subtitle: 'Educación Moderna',
      features: ['Proyectores Táctiles', 'Colaboración activa', 'Uso empresarial', 'Software Incluido', 'Capacitación'],
      buttonText: 'WhatsApp',
      type: 'service'
    },
    { 
      title: 'Exteriores', 
      subtitle: 'Alto Rendimiento',
      features: ['Eventos al aire libre', 'Proyecciones nocturnas', 'Gran formato', 'Resistente a intemperie', 'Montaje Especial'],
      buttonText: 'WhatsApp',
      type: 'service'
    },
    /*{ 
      title: 'Productos', 
      subtitle: 'Equipos Top',
      features: ['Proyectores de Alta Luminosidad', 'Proyectores Interactivos', 'Pantallas de Proyección', 'Accesorios Profesionales', 'Sistemas de Montaje'],
      buttonText: 'Ver Catálogo',
      type: 'catalog'
    }*/
  ]
  },
  'computadoras': {
    title: 'Mantenimiento de PC',
    icon: Monitor,
    intro: 'Servicio técnico especializado para mantener tus equipos al 100%.',
    imageAlt: "Técnico reparando computadora laptop",
    imageUrl: "https://i.postimg.cc/Hk9bVq3K/Gemini_Generated_Image_jghkcijghkcijghk.png",
    showCatalogBtn : true,
    customSection: {
      title: "Optimización y Reparación Profesional",
      description: "Prolonga la vida útil de tus equipos con nuestro servicio técnico especializado. No solo limpiamos el hardware, sino que optimizamos el sistema operativo para que tu computadora vuele. Trabajamos con componentes de alta calidad y brindamos garantía técnica en cada intervención.",
      points: [
        { name: "Optimización de Sistema", icon: Laptop },
        { name: "Garantía Técnica", icon: Shield }
      ]
    },
    standardCards: [
      { 
        title: 'Mantenimiento Básico', 
        subtitle: 'Limpieza Express',
        features: ['Limpieza física externa', 'Sopleteo de componentes', 'Limpieza de temporales', 'Revisión de conexiones'],
        buttonText: 'WhatsApp',
        type: 'service'
      },
      { 
        title: 'Mantenimiento Preventivo', 
        subtitle: 'Máximo Rendimiento',
        isFeatured: true, 
        features: ['Limpieza física profunda', 'Cambio de pasta térmica', 'Optimización de Software', 'Eliminación de Virus/Malware'],
        buttonText: 'WhatsApp',
        type: 'service'
      },
      { 
        title: 'Mantenimiento Correctivo', 
        subtitle: 'Reparación Técnica',
        features: ['Diagnóstico de fallas', 'Reparación de placa base', 'Reballing de chip', 'Recuperación de datos'],
        buttonText: 'WhatsApp',
        type: 'service'
      },
      { 
        title: 'Productos', 
        subtitle: 'Equipos Top',
        features: ['Laptops de Alto Rendimiento', 'PCs de Escritorio', 'Componentes y Repuestos', 'Periféricos Profesionales', 'Sistemas de Refrigeración'],
        buttonText: 'Ver Catálogo',
        type: 'catalog'
      }
  ]
  },
  'impresoras': {
    title: 'Impresoras',
    icon: Printer,
    intro: 'Venta y soporte técnico para tus equipos de impresión Epson.',
    imageAlt: "Impresora multifuncional Epson EcoTank",
    imageUrl: "https://i.postimg.cc/fRD9nHZq/Gemini-Generated-Image-s73f5es73f5es73f.png",
    showCatalogBtn: true,
    customSection: {
      title: "Venta y suministros para tu impresora",
      description: "Somos expertos en la línea de impresoras, como también suministros. No solo te vendemos el equipo, sino que lo dejamos instalado y configurado en tu red WiFi. Además, contamos con servicio técnico especializado para limpieza de cabezales y reseteo de almohadillas para que tu inversión dure años.",
      points: [
        { name: "Venta de Impresoras", icon: Printer },
        { name: "Mantenimiento de impresoras", icon: Shield },
        { name: "Instalación a domicilio", icon: Monitor },
        { name: "Todo tipo de tintas", icon: Cloud }
      ]
    },
    upgrades: [], 
    standardCards: [
    { 
      title: 'Línea Estudiante', 
      subtitle: 'Epson L1250 / XP 5200 Duplex',
      features: ['Impresión WiFi Direct', 'Sistema EcoTank (Ahorro)', 'Configuración en Laptop/Celular', 'Ideal para tareas y hogar', 'Garantía de Fábrica'],
      buttonText: 'WhatsApp',
      type: 'service'
    },
    { 
      title: 'Línea Oficina', 
      subtitle: 'Epson L4260 Dúplex',
      isFeatured: true, // Recomendado
      features: ['Impresión doble cara automática', 'Mayor velocidad de copiado', 'Conexión WiFi de largo alcance', 'Ideal para PYMES', 'Capacitación de uso'],
      buttonText: 'WhatsApp',
      type: 'service'
    },
    { 
      title: 'Línea Profesional', 
      subtitle: 'Epson WF7830 (A3+)',
      features: ['Formatos A3, A4', 'Doble bandeja de papel', 'Escáner de alta resolución', 'Conexión Ethernet/WiFi', 'Soporte técnico premium'],
      buttonText: 'WhatsApp',
      type: 'service'
    },
    { 
      title: 'Productos', 
      subtitle: 'Equipos Top',
      features: ['Impresoras Multifunción', 'Impresoras de Formato Grande', 'Tinta Original Epson', 'Accesorios y Repuestos', 'Sistemas de Recarga'],
      buttonText: 'Ver Catálogo',
      type: 'catalog'
    }
  ],
  },
  'capacitacion': {
    title: 'Capacitación',
    icon: GraduationCap,
    intro: 'Cursos prácticos para potenciar las habilidades digitales de tu equipo.',
    imageAlt: "Sesión de capacitación corporativa",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop",
    courses: [
      { name: 'Microsoft Excel', desc: 'Básico, Intermedio y Avanzado. Tablas dinámicas, fórmulas.', icon: Table },
      { name: 'Microsoft Word', desc: 'Redacción profesional, formatos corporativos, correspondencia.', icon: FileText },
      { name: 'PowerPoint', desc: 'Presentaciones de alto impacto, animaciones y diseño.', icon: Airplay },
      { name: 'Correo Electrónico', desc: 'Gestión eficiente de Outlook/Gmail, etiquetas, filtros.', icon: Mail },
      { name: 'Sistemas en la Nube', desc: 'Uso de Google Drive, OneDrive, trabajo colaborativo.', icon: Cloud }
    ]
  }
};

const ServiceDetail = () => {
  // --- INICIO DE ZONA SEGURA (HOOKS) ---
  // IMPORTANTE: Estas dos líneas SIEMPRE deben ser las primeras
  const { slug } = useParams();
  const navigate = useNavigate();
  // --- FIN DE ZONA SEGURA ---

  // Ahora sí, buscamos los datos
  const data = serviceData[slug];

  // Y verificamos si existen. Si no existen, cortamos la ejecución (Return temprano)
  if (!data) return <div className="pt-32 text-center pb-20">Servicio no encontrado</div>;

  const handleContactOld = (type, detail) => {
     const body = `Hola LVX, info sobre ${data.title} - ${detail}`;
     if (type === 'whatsapp') window.open(`https://wa.me/593983081575?text=${encodeURIComponent(body)}`, '_blank');
  };

  const handleAction = (item) => {
    if (item.type === 'catalog') {
      navigate('/products'); 
      return;
    }

    const body = `Hola LVX, estoy interesado en el servicio de ${data.title} (${item.title}). Por favor contactarme.`;
    window.open(`https://wa.me/593983081575?text=${encodeURIComponent(body)}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>{data.title} - LVX Servicios</title>
      </Helmet>

      <section className="pt-32 pb-12 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/services" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Servicios
          </Link>
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="p-6 bg-blue-600 rounded-2xl shrink-0">
              <data.icon className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
              <p className="text-xl text-gray-300 max-w-2xl">{data.intro}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" suppressHydrationWarning>
        <div className="container mx-auto px-4">
          
          <div className="mb-16 rounded-2xl overflow-hidden shadow-xl bg-gray-100">
            <img 
              alt={data.imageAlt} 
              className="w-full h-auto object-contain max-h-[500px] mx-auto" 
              src={data.imageUrl || "https://images.unsplash.com/photo-1456339445756-beb5120afc42"}
              loading="lazy"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1456339445756-beb5120afc42";
              }}
            />
          </div>

          {/* CUADRO INFORMATIVO PERSONALIZADO POR SERVICIO */}
          {data.customSection && (
            <div className="mb-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white shadow-xl overflow-hidden relative border border-blue-700">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400 opacity-10 rounded-full -ml-20 -mb-20 blur-2xl"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="bg-white/10 p-6 rounded-full shrink-0 border border-white/20">
                  <data.icon className="w-12 h-12 text-blue-200" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {data.customSection.title}
                  </h3>
                  <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                    {data.customSection.description}
                  </p>
                  

                  <div className="flex flex-col sm:flex-row gap-4 mb-6 flex-wrap">
                    {data.customSection.points.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-blue-950/40 px-4 py-2 rounded-lg border border-blue-600/50">
                        {point.icon ? (
                          <point.icon className="w-5 h-5 text-green-400 shrink-0" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-green-400" />
                        )}
                        <span className="text-sm font-bold text-white uppercase tracking-wide">
                          {point.name || point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {data.showCatalogBtn && (
                    <Button 
                      onClick={() => navigate('/products')} 
                      className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-10 h-12 rounded-xl shadow-lg transition-all active:scale-95"
                    >
                      <Monitor className="w-5 h-5 mr-2" />
                      Ver Catálogo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}

          

          {/* PAQUETES DE CÁMARAS (Legacy) */}
          {data.packages && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {data.packages.map((pkg, idx) => (
                <div key={idx} className={`relative border rounded-xl p-5 flex flex-col hover:shadow-lg transition-shadow ${pkg.recommended ? 'border-blue-600 ring-1 ring-blue-600 bg-blue-50/30' : 'border-gray-200'}`}>
                  {pkg.recommended && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide">
                      Recomendado
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{pkg.cameras === 'Custom' ? 'A Medida' : `${pkg.cameras} Cámaras`}</div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                        <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  
                  
                  <div className="grid gap-2">
                    {pkg.isCatalogCard ? (
    <Button 
      onClick={() => navigate('/products')} 
      size="sm" 
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold"
    >
      <Monitor className="w-4 h-4 mr-2" /> Ver Catálogo
    </Button>
  ) : (
    <>
      <Button 
        onClick={() => handleContactOld('whatsapp', pkg.name)} 
        size="sm" 
        className="w-full bg-green-600 hover:bg-green-700 text-white"
      >
        <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
      </Button>
      <Button 
        onClick={() => handleContactOld('email', pkg.name)} 
        size="sm" 
        variant="outline" 
        className="w-full"
      >
        <Mail className="w-4 h-4 mr-2" /> Email
      </Button>
    </>
  )}
                  </div>
                </div>
              ))}
            </div>
          )}
          

          {/* TARJETAS ESTILO PACKS (Biométricos) */}
          {data.standardCards && (
            <div className="grid md:grid-cols-3 gap-6">
              {data.standardCards.map((card, idx) => (
                <div 
                  key={idx} 
                  className={`relative border rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow bg-white ${
                    card.isFeatured ? 'border-blue-600 ring-1 ring-blue-600' : 'border-gray-200'
                  }`}
                >
                  {card.isFeatured && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                      Recomendado
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-gray-900 mb-1">{card.title}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{card.subtitle}</div>
                  
                  <ul className="space-y-3 mb-8 flex-1">
                    {card.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => handleAction(card)} 
                    className={`w-full h-11 text-white font-bold rounded-lg transition-transform active:scale-95 ${
                      card.type === 'catalog' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
                    }`}
                  >
                    {card.type === 'catalog' ? (
                      <Monitor className="w-4 h-4 mr-2" />
                    ) : (
                      <MessageCircle className="w-4 h-4 mr-2" />
                    )}
                    {card.buttonText}
                  </Button>
                </div>
              ))}
            </div>
          )}

          {/* PUERTAS Y PROYECTORES */}
          {data.types && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.types.map((type, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                    {data.icon ? <data.icon className="w-5 h-5" /> : <DoorOpen className="w-5 h-5" />}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{type.desc}</p>
                  <Button onClick={() => handleContactOld('whatsapp', type.name)} size="sm" className="w-full">
                    Consultar Modelo
                  </Button>
                </div>
              ))}
            </div>
          )}

          {/* PLANES COMPUTADORAS */}
          {data.plans && (
            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">Planes de Mantenimiento</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {data.plans.map((plan, idx) => (
                    <div key={idx} className="border border-gray-200 p-8 rounded-2xl bg-white hover:shadow-xl transition-shadow flex flex-col">
                      <h4 className="font-bold text-xl mb-4 text-blue-900">{plan.name}</h4>
                      <p className="text-gray-600 mb-8 flex-grow">{plan.desc}</p>
                      <Button onClick={() => handleContactOld('whatsapp', plan.name)} className="w-full">Cotizar Ahora</Button>
                    </div>
                  ))}
                </div>
              </div>
              
              {data.upgrades && (
                <div className="bg-gray-50 p-8 md:p-12 rounded-3xl">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Laptop className="w-8 h-8 text-blue-600" />
                    Upgrades y Repuestos
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.upgrades.map((upg, idx) => (
                      <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                          <Check className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{upg.name}</h4>
                          <p className="text-xs text-gray-600">{upg.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <Button onClick={() => handleContactOld('whatsapp', 'Repuestos')} variant="outline" className="bg-white">
                      Consultar Disponibilidad de Repuestos
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* MODELOS (Impresoras, etc) */}
          {data.models && data.models.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.models.map((item, idx) => (
                <div key={idx} className="border border-gray-200 p-6 rounded-xl hover:border-blue-400 hover:shadow-md transition-all bg-white group">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">{item.name}</h4>
                  <p className="text-gray-600 mb-6 text-sm">{item.desc}</p>
                  <Button onClick={() => handleContactOld('whatsapp', item.name)} variant="secondary" size="sm" className="w-full">
                    Más Información
                  </Button>
                </div>
              ))}
            </div>
          )}

          {/* CURSOS (Capacitación) */}
          {data.courses && data.courses.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {data.courses.map((item, idx) => (
      <div key={idx} className="border border-gray-200 p-6 rounded-xl hover:border-blue-400 hover:shadow-md transition-all bg-white group flex flex-col">
        
        {/* LOGO / ICONO DE LA SECCIÓN */}
        <div className="mb-4 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          {item.icon ? <item.icon className="w-6 h-6" /> : <GraduationCap className="w-6 h-6" />}
        </div>

        <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">{item.name}</h4>
        <p className="text-gray-600 mb-6 text-sm flex-grow">{item.desc}</p>
        
        <Button onClick={() => handleContactOld('whatsapp', item.name)} variant="secondary" size="sm" className="w-full">
          Más Información
        </Button>
      </div>
    ))}
  </div>
          )}



        </div>
      </section>
    </>
  );
};

export default ServiceDetail;