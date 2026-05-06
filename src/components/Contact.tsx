import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const contactInfo = [
  { icon: Mail, label: "Email", value: "j.camposs2701@gmail.com", href: "mailto:j.camposs2701@gmail.com" },
  { icon: Phone, label: "Celular", value: "+57 312 326 8867", href: "tel:+573123268867" },
  { icon: MapPin, label: "Ubicación", value: "Bogotá D.C", href: null },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', apellido: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hasSubmitted) return;
    setIsSubmitting(true);
    try {
      const response = await fetch('https://backend-yw41.onrender.com/from_contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success('¡Mensaje enviado correctamente!', { position: 'top-right', autoClose: 3000 });
        setFormData({ name: '', apellido: '', email: '', phone: '', message: '' });
        setHasSubmitted(true);
      } else {
        const err = await response.json();
        toast.error(`Error: ${err.message || 'No se pudo enviar.'}`, { position: 'top-right', autoClose: 3000 });
      }
    } catch {
      toast.error('Error de red: No se pudo conectar con el servidor.', { position: 'top-right', autoClose: 3000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:text-white placeholder-gray-400 transition-all duration-200 text-sm";
  const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5";

  return (
    <motion.section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-500 dark:from-blue-400 dark:to-sky-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Póngase en contacto
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-blue-700 to-sky-500 dark:from-blue-400 dark:to-sky-400 mx-auto mb-16"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Contact info */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-gray-800 dark:text-white">
              Información de contacto
            </h3>
            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/40">
                  <div className="w-11 h-11 bg-blue-600 dark:bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wide">{label}</p>
                    {href ? (
                      <a href={href} className="text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-800 dark:text-gray-200 font-medium text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className={labelClass}>Nombre</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="Tu nombre" required />
              </div>
              <div>
                <label htmlFor="apellido" className={labelClass}>Apellido</label>
                <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} className={inputClass} placeholder="Tu apellido" required />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Celular o Teléfono</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+57 300 000 0000" required />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="tu@email.com" required />
            </div>
            <div>
              <label htmlFor="message" className={labelClass}>Mensaje</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className={inputClass} placeholder="Escribe tu mensaje aquí..." required />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || hasSubmitted}
              className="w-full bg-gradient-to-r from-blue-700 to-sky-500 text-white px-6 py-3.5 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 font-medium disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
            >
              {isSubmitting ? 'Enviando...' : hasSubmitted ? '✓ Mensaje enviado' : 'Enviar mensaje'}
            </button>
          </form>
        </motion.div>
      </div>
      <ToastContainer />
    </motion.section>
  );
}
