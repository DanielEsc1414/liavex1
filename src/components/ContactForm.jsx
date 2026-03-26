import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, MessageCircle, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [method, setMethod] = useState('whatsapp'); // 'email' | 'whatsapp'
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const { toast } = useToast();

  const onSubmit = async (data) => {
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1000));

    const message = `Hola LIAVEX, mi nombre es ${data.name}. \n${data.message}`;

    if (method === 'whatsapp') {
      window.open(`https://wa.me/593983081575?text=${encodeURIComponent(message)}`, '_blank');
      toast({
        title: "Abriendo WhatsApp",
        description: "Serás redirigido al chat para continuar tu consulta.",
      });
    } else {
      // Mailto fallback
      window.location.href = `mailto:ventas@liavex.com?subject=Solicitud de Visita Técnica - ${data.name}&body=${encodeURIComponent(message + `\n\nTeléfono: ${data.phone}`)}`;
      toast({
        title: "Cliente de correo abierto",
        description: "Por favor envía el correo desde tu aplicación predeterminada.",
      });
      reset();
    }
  };

  return (
    <div className="w-full">
      <div className="flex bg-gray-100 p-1 rounded-lg mb-6">
        <button
          type="button"
          onClick={() => setMethod('whatsapp')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-md transition-all ${
            method === 'whatsapp' 
              ? 'bg-white text-green-700 shadow-sm' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <MessageCircle className="w-4 h-4" />
          Vía WhatsApp
        </button>
        <button
          type="button"
          onClick={() => setMethod('email')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-md transition-all ${
            method === 'email' 
              ? 'bg-white text-blue-700 shadow-sm' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Mail className="w-4 h-4" />
          Vía Correo
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
          <input
            {...register('name', { required: 'El nombre es requerido' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="Ej: Juan Pérez"
          />
          {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
        </div>

        {method === 'email' && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
            <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
            <input
              {...register('phone')}
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Ej: 0987654321"
            />
          </motion.div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje / Requerimiento</label>
          <textarea
            {...register('message', { required: 'El mensaje es requerido' })}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
            placeholder={method === 'whatsapp' ? "Hola, quisiera solicitar una visita técnica para..." : "Detalles de su solicitud..."}
          ></textarea>
          {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full h-12 text-base ${
            method === 'whatsapp' 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              {method === 'whatsapp' ? 'Enviar a WhatsApp' : 'Enviar Correo'}
            </>
          )}
        </Button>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          {method === 'whatsapp' 
            ? 'Se abrirá WhatsApp Web o la App para enviar el mensaje.' 
            : 'Se abrirá tu cliente de correo predeterminado.'}
        </p>
      </form>
    </div>
  );
};

export default ContactForm;