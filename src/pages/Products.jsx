import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
const Products = () => {
  const {
    toast
  } = useToast();
  const [cart, setCart] = useState([]);

  // Max 10 items per category as requested
  const productsData = [
    {
      category: 'Computadores',
      items: [{
        id: 'c1',
        image: 'https://i.postimg.cc/RhmgQrtv/HP_250_G10.png', 
        name: 'HP 250 G10',
        desc: 'Intel Core i5, 16GB RAM, 512GB NVMe SSD, Teclado numérico',
        price: 'Consultar'
      }, {
        id: 'c2',
        image: 'https://i.postimg.cc/3NhtCMvc/HP_Ryzen_7_7730U.png', 
        name: 'HP Ryzen 7 7730U',
        desc: 'Ryzen 7, 16GB RAM, 512GB SSD, 15.6"',
        price: 'Consultar'
      }, {
        id: 'c3',
        image: 'https://i.postimg.cc/k5ts0MFP/Lenovo_Idea_Pad.png', 
        name: 'Lenovo IdeaPad Slim 3',
        desc: 'AMD Ryzen 5, 8GB RAM, 512GB SSD',
        price: 'Consultar'
      }, {
        id: 'c4',
        image: 'https://i.postimg.cc/g22BTPTd/HP_i5_(1TB_SSD).jpg', 
        name: 'HP i5 (1TB SSD)',
        desc: 'Intel i5-1334U, 16GB RAM, 1TB SSD, 15.6"',
        price: 'Consultar'
      }, {
        id: 'c5',
        image: 'https://i.postimg.cc/g22BTPTd/HP_i5_(1TB_SSD).jpg', 
        name: 'HP 15 (17)',
        desc: 'Intel Core i7, 16GB RAM, 500GB SSD, Teclado numérico',
        price: 'Consultar'
      }, {
        id: 'c6',
        image: 'https://i.postimg.cc/C5C6WM05/LAPTOPCORE_I5_1235U_16GB_RAM_512GB_SSD_15_15_FD0053LA_HP_1_600x600.jpg', 
        name: 'HP i5 (512 SSD)',
        desc: 'Intel i5, 16GB RAM, 512 SSD, Teclado numérico',
        price: 'Consultar'
      }]
    }, {
      category: 'Computadores para ingeniería',
      items: [{
        id: 'c7',
        image: 'https://i.postimg.cc/8z3qms14/cpu15_img.png', 
        name: 'MSI KATANA 15',
        desc: 'Intel i7 13ra Gen, 32GB RAM, 1TB SSD, RTX 4060 8GB',
        price: 'Consultar'
      }, {
        id: 'c8',
        image: 'https://i.postimg.cc/RZ8jLqSv/ASUS_ROG_STRIX_Ryzen_7.png', 
        name: 'ASUS ROG STRIX Ryzen 7',
        desc: 'Ryzen 7 6800H, 16GB RAM, 512GB SSD, RTX 3060 6GB',
        price: 'Consultar'
      }, {
        id: 'c9',
        image: 'https://i.postimg.cc/6pTkZCNd/HP_VICTUS_15.jpg', 
        name: 'HP VICTUS 15',
        desc: 'Intel i5 12ra Gen, 16GB RAM, 512GB SSD, RTX 3050 4GB',
        price: 'Consultar'
      }]
    }, {
      category: 'Tablets',
      items: [{
        id: 't1',
        image: 'https://i.postimg.cc/XN1JSKhk/xiaomi.jpg', 
        name: 'XIAOMI REDMI PAD 2 11',
        desc: 'WIFI + 8+256GB GRIS, 11" IPS, Snapdragon 680',
        price: 'Consultar'
      }, {
        id: 't2',
        image: 'https://i.postimg.cc/FFCR5bqx/ipad11.jpg', 
        name: 'iPad 11',
        desc: ' Chip A16 -  / 128 GB / Wi-Fi - Gris Espacial',
        price: 'Consultar'
      }]
    }, {
      category: 'Impresoras',
      items: [{
        id: 'p1',
        image: 'https://i.postimg.cc/RZGXQ8p8/Impresora-Multifuncion-Epson-Expression-Home-XP-5200-Ecotank-Tinta-Fotografica.png',
        name: 'Epson XP5200',
        desc: 'Impresora - Copiadora - Escaner Wifi, Duplex (doble cara)',
        price: 'Consultar'
      }, {
        id: 'p2',
        image: 'https://i.postimg.cc/FzD7nytx/L1250_SPT_C11CJ71301_384x286.png',
        name: 'Epson L250',
        desc: 'Wifi - Aplicación Epson smart panel - carga inicial 4500 negro y 7500 color',
        price: 'Consultar'
      }, {
        id: 'p3',
        image: 'https://i.postimg.cc/SKyHmCHn/Impresora-Multifuncion-Epson-WF-2960-Ecotank-Tinta-Fotografica.png',
        name: 'Epson WF2960',
        desc: 'Impresora - Copiadora - Escaner Wifi, Duplex (doble cara) - Alimentador automático de copias ',
        price: 'Consultar'
      },{
        id: 'p4',
        image: 'https://i.postimg.cc/9F1sN1nX/Resma_de_papel_Xerox1.jpg',
        name: 'Resma de papel',
        desc: 'Toda clase de resmas de papel para tu impresora',
        price: 'Consultar'
      }, {
        id: 'p5',
        image: 'https://i.postimg.cc/dV1gMdzb/TINTA_IMPRESORA_EPSON_544.png',
        name: 'Tintas para impresora',
        desc: 'Toda clase de tintas para tu impresora',
        price: 'Consultar'

      }
    ]
    }, /*{
    category: 'Proyectores',
    items: [{
      id: 'pj1',
      name: 'Epson PowerLite E20',
      desc: '3400 Lúmenes, HDMI, XGA, Ideal Aulas',
      price: 'Consultar'
    }, {
      id: 'pj2',
      name: 'Epson CO-W01',
      desc: '3000 Lúmenes, WXGA, Portátil y Ligero',
      price: 'Consultar'
    }, {
      id: 'pj3',
      name: 'ViewSonic PA503W',
      desc: '3800 Lúmenes, WXGA, Alto Contraste',
      price: 'Consultar'
    }, {
      id: 'pj4',
      name: 'BenQ MW560',
      desc: '4000 Lúmenes, WXGA, Modo SmartEco',
      price: 'Consultar'
    }, {
      id: 'pj5',
      name: 'Epson BrightLink 725Wi',
      desc: 'Interactivo, WXGA, 4000 Lúmenes, Educación',
      price: 'Consultar'
    }]
  }*/, {
    category: 'Cámaras de Seguridad',
    items: [{
      id: 's1',
      image: 'https://i.postimg.cc/SRgSG8N5/cam1.png', 
      name: 'TP-Link Tapo C200',
      desc: 'WiFi Interior, 1080p, Movimiento 360°, Audio bidireccional, Visión nocturna',
      price: 'Consultar'
    }, {
      id: 's2',
      image: 'https://i.postimg.cc/rsfV9WFP/cam2.png', 
      name: 'EZVIZ C6N',
      desc: 'WiFi Interior, 1080p, Rotación 360°, Seguimiento inteligente, App móvil',
      price: 'Consultar'
    }, {
      id: 's3',
      image: 'https://i.postimg.cc/6qMWhR5b/cam3.png', 
      name: 'Imou Ranger 2',
      desc: 'Deteccion de personas, 1080p, Audio bidireccional, Audio',
      price: 'Consultar'
    }, {
      id: 's4',
      image: 'https://i.postimg.cc/vT0Yv9HP/cam4.png', 
      name: 'Hikvision DS-2CE16KOT-LPFS',
      desc: 'Bala Exterior, 3K/5MP, Resistente IP67, Largo alcance',
      price: 'Consultar'
    }, {
      id: 's5',
      image: 'https://i.postimg.cc/sxTjJSDG/cam8.png', 
      name: 'EZVIZ H8C',
      desc: 'PTZ Exterior, 2MP, Movimiento 360°, Seguimiento automático',
      price: 'Consultar'
    }, {
      id: 's6',
      image: 'https://i.postimg.cc/6qMWhR5f/cam9.png', 
      name: 'Kit Básico Hogar Hikvision',
      desc: '4 Cámaras WiFi, Full HD 1080p, Incluye microSD, Monitoreo desde celular',
      price: 'Consultar'
    }, {
      id: 's7',
      image: 'https://i.postimg.cc/prc9L3jw/cam10.png', 
      name: 'Kit Negocio Hikvision',
      desc: '8 Cámaras, Incluye DVR y Disco Duro, Grabación continua, Sistema completo',
      price: 'Consultar'
    }]
  }, {
    category: 'Sistemas Biométricos ',
    items: [{
      id: 's1',
      image: 'https://zktecocolombia.com/wp-content/uploads/2025/02/1.png',
      name: 'ZK-SENSEFACE-2A',
      desc: 'Control de asistencia y acceso - Rostro/Huella/Contraseña/Tarjeta',
      price: 'Consultar'
    }, {
      id: 's2',
      image: 'https://i.postimg.cc/dtXqtsYJ/ZK-SENSEFP-M2-CONTROL-DE-ASISTENCIA-ADMS-3000-HUELLA-Y-TARJETA-150000-EVENTOS-BATERIA-DE-RESPALDO.jpg',
      name: 'ZK-SENSEFP-M2-B',
      desc: 'Control de asistencia y acceso - Huella/Tarjeta/Contraseña',
      price: 'Consultar'
    }, {
      id: 's3',
      image: 'https://zktecocolombia.com/wp-content/uploads/2024/11/SerieFace-7-Fondo-blanco-thegem-gallery-sidebar.png',
      name: 'ZK-SENSEFACE-7A',
      desc: 'Control de asistencia y acceso - Rostro/Huella/Contraseña/Tarjeta',
      price: 'Consultar'
    }, {
      id: 's4',
      name: 'DS-K1A8503EF',
      image: 'https://clicksolucionesdigitales.com.ec/cdn/shop/files/CONTROLDETIEMPOYASISTENCIACONPANTALLALCDTCPIPHIKVISIONDS-K1A8503EF_2_a6ea5e25-19e7-45f0-a9ae-02817216335d.jpg?v=1697581301',
      desc: 'Control de asistencia - /Huella/Contraseña/Tarjeta',
      price: 'Consultar'
    }, {
      id: 's5',
      name: 'Teclado DS-K1T342MFWX-E1',
      image:'https://www.hommaxsistemas.com/media/catalog/product/4/0/406381107_1.png?quality=80&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265',
      desc: 'Control de asistencia y acceso - Audio bidireccional/Huella/Contraseña/Tarjeta',
      price: 'Consultar'
    }, {
      id: 's6',
      name: 'DS-K1T320MFX',
      image:'https://i.postimg.cc/HxzbWZft/BIOMETRICO-HIKVISION-DS-K1T320MFX.jpg',
      desc: 'Control de asistencia y acceso - Rostro/Huella/Contraseña/Tarjeta',
      price: 'Consultar'
    }]
  }, {
    category: 'Gadgets',
    items: [{
      id: 'g1',
      image: 'https://i.postimg.cc/6QGCQWZx/Gemini-Generated-Image-2nxzcd2nxzcd2nxz.png', // Agregar enlace de imagen aquí
      name: 'Soporte para Celular',
      desc: 'Dji osmo mobile 7 - Estabilizador para smartphone con control de gestos y seguimiento inteligente',
      price: 'Consultar'
    }]
  }];
  const addToCart = product => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? {
          ...item,
          qty: item.qty + 1
        } : item);
      }
      return [...prev, {
        ...product,
        qty: 1
      }];
    });
    toast({
      className: "bg-blue-600 text-white ",
      title: "Agregado a cotización",
      description: `${product.name} ha sido agregado.`,
      duration: 2000
    });
  };
  const removeFromCart = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };
  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + delta);
        return {
          ...item,
          qty: newQty
        };
      }
      return item;
    }));
  };
  const sendQuote = method => {
    const itemsList = cart.map(item => `- ${item.name} (Cant: ${item.qty})`).join('\n');
    const message = `Hola LIAVEX, deseo cotizar los siguientes productos de su catálogo web:\n\n${itemsList}`;
    if (method === 'whatsapp') {
      window.open(`https://wa.me/593983081575?text=${encodeURIComponent(message)}`, '_blank');
    } else {
      window.location.href = `mailto:ventas@liavex.com?subject=Solicitud de Cotización Web&body=${encodeURIComponent(message)}`;
    }
  };
  return <>
      <Helmet>
        <title>Catálogo de Productos - LIAVEX</title>
      </Helmet>

      <section className="pt-32 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Catálogo de Productos</h1>
            <p className="text-gray-600">Selecciona los productos y solicita tu cotización sin compromiso.</p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white relative h-12 px-6 font-bold shadow-md">
                 <ShoppingCart className="mr-2 h-5 w-5" />
                  Ver Cotización
                  {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center border-2 border-white font-bold">
                    {cart.reduce((acc, item) => acc + item.qty, 0)}
                  </span>}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-gray-50 border-gray-200">
              <DialogHeader>
                <DialogTitle>Productos Seleccionados</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                {cart.length === 0 ? <p className="text-center text-gray-500 py-8">Tu carrito de cotización está vacío.</p> : <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
                    {cart.map(item => <div key={item.id} className="flex justify-between items-center border-b border-gray-100 pb-3">
                        <div className="flex-1 pr-4">
                          <h4 className="font-semibold text-sm text-gray-800">{item.name}</h4>
                          <p className="text-xs text-gray-500">{item.category}</p>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => updateQty(item.id, -1)}>
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm w-4 text-center font-medium">{item.qty}</span>
                          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => updateQty(item.id, 1)}>
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400 hover:text-red-600 hover:bg-red-50 ml-2" onClick={() => removeFromCart(item.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>)}
                  </div>}
              </div>
              <DialogFooter className="flex-col sm:flex-col gap-2">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={cart.length === 0} onClick={() => sendQuote('whatsapp')}>
                  Enviar por WhatsApp
                </Button>
                
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 space-y-16">
          {productsData.map((category, idx) => <div key={idx}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-4 flex items-center gap-2">
                {category.category}
                <span className="text-sm font-normal text-gray-500 ml-2">({category.items.length} modelos)</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.items.map(product => <div key={product.id} className="group border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all hover:border-blue-200 bg-white">
                    <div className="bg-gray-50 rounded-lg h-60 mb-4 flex items-center justify-center overflow-hidden">
                       <img 
                        alt={product.name} 
                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" 
                        src={product.image || "https://horizons-cdn.hostinger.com/ba069417-ada1-430e-a509-2529b5ab75f5/hp_250r_g9_notebook_pc_15_inch_df_darkash_nt_nonircam_nonodd_fpr_catalog_win11_whitebg_front_m2858513-OQuf5.png"} 
                      />
                    </div>
                    <div className="mb-4">
                      <h3 className="font-bold text-gray-900 mb-1 line-clamp-1" title={product.name}>{product.name}</h3>
                      <p className="text-gray-500 text-xs line-clamp-2 h-8">{product.desc}</p>
                    </div>
                    <Button onClick={() => addToCart({
                ...product,
                category: category.category
              })} variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors">
                      <Plus className="w-4 h-4 mr-2" />
                      Agregar
                    </Button>
                  </div>)}
              </div>
            </div>)}
        </div>
      </section>
    </>;
};
export default Products;