import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { m } from 'framer-motion';
import Button from './Button';
import SectionHeading from './SectionHeading';

const contactInfo = [
  { icon: Mail, label: "Email", value: "j.camposs2701@gmail.com", href: "mailto:j.camposs2701@gmail.com" },
  { icon: Phone, label: "Celular", value: "+57 312 326 8867", href: "tel:+573123268867" },
  { icon: MapPin, label: "Ubicación", value: "Bogotá D.C", href: null },
];

type Field = 'name' | 'apellido' | 'email' | 'phone' | 'message';
type Errors = Partial<Record<Field, string>>;

const validate = (d: Record<Field, string>): Errors => {
  const e: Errors = {};
  if (!d.name.trim()) e.name = 'Ingresa tu nombre.';
  if (!d.apellido.trim()) e.apellido = 'Ingresa tu apellido.';
  if (!d.email.trim()) e.email = 'Ingresa tu email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())) e.email = 'Ingresa un email válido.';
  if (!d.phone.trim()) e.phone = 'Ingresa tu celular o teléfono.';
  if (!d.message.trim()) e.message = 'Escribe tu mensaje.';
  return e;
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', apellido: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hasSubmitted) return;
    const found = validate(formData);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('https://backend-yw41.onrender.com/from_contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: AbortSignal.timeout(15000),
      });
      if (response.ok) {
        toast.success('¡Mensaje enviado correctamente!', { position: 'top-right', autoClose: 3000 });
        setFormData({ name: '', apellido: '', email: '', phone: '', message: '' });
        setHasSubmitted(true);
      } else {
        const err = await response.json().catch(() => ({} as { message?: string }));
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
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const inputClass = "w-full px-4 py-3 bg-white dark:bg-ink-800 border border-gray-200 dark:border-white/10 aria-[invalid=true]:border-red-500 dark:aria-[invalid=true]:border-red-400 rounded-chip focus:ring-2 focus:ring-accent focus-visible:outline-none focus:border-transparent dark:text-white placeholder-gray-400 transition-all duration-200 text-sm disabled:opacity-60";
  const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5";

  return (
    <m.section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-ink-950"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="// hablemos" title="Póngase en contacto" />

        <m.div
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Contact info */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-gray-900 dark:text-white">
              Información de contacto
            </h3>
            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-card shadow-card bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/40">
                  <div className="w-11 h-11 bg-accent/10 text-accent rounded-chip flex items-center justify-center flex-shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-accent font-medium uppercase tracking-wide">{label}</p>
                    {href ? (
                      <a href={href} className="text-gray-800 dark:text-gray-200 font-medium hover:text-accent transition-colors text-sm">
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
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className={labelClass}>Nombre</label>
                <input type="text" id="name" name="name" disabled={isSubmitting} aria-invalid={errors.name ? true : undefined} aria-describedby={errors.name ? 'name-error' : undefined} value={formData.name} onChange={handleChange} className={inputClass} placeholder="Tu nombre" required />
                {errors.name && <p id="name-error" role="alert" className="text-sm text-red-500 dark:text-red-400 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="apellido" className={labelClass}>Apellido</label>
                <input type="text" id="apellido" name="apellido" disabled={isSubmitting} aria-invalid={errors.apellido ? true : undefined} aria-describedby={errors.apellido ? 'apellido-error' : undefined} value={formData.apellido} onChange={handleChange} className={inputClass} placeholder="Tu apellido" required />
                {errors.apellido && <p id="apellido-error" role="alert" className="text-sm text-red-500 dark:text-red-400 mt-1">{errors.apellido}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Celular o Teléfono</label>
              <input type="tel" id="phone" name="phone" disabled={isSubmitting} aria-invalid={errors.phone ? true : undefined} aria-describedby={errors.phone ? 'phone-error' : undefined} value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+57 300 000 0000" required />
                {errors.phone && <p id="phone-error" role="alert" className="text-sm text-red-500 dark:text-red-400 mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email</label>
              <input type="email" id="email" name="email" disabled={isSubmitting} aria-invalid={errors.email ? true : undefined} aria-describedby={errors.email ? 'email-error' : undefined} value={formData.email} onChange={handleChange} className={inputClass} placeholder="tu@email.com" required />
                {errors.email && <p id="email-error" role="alert" className="text-sm text-red-500 dark:text-red-400 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className={labelClass}>Mensaje</label>
              <textarea id="message" name="message" disabled={isSubmitting} aria-invalid={errors.message ? true : undefined} aria-describedby={errors.message ? 'message-error' : undefined} value={formData.message} onChange={handleChange} rows={4} className={inputClass} placeholder="Escribe tu mensaje aquí..." required />
                {errors.message && <p id="message-error" role="alert" className="text-sm text-red-500 dark:text-red-400 mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" size="lg" fullWidth loading={isSubmitting} loadingText="Enviando…" disabled={hasSubmitted} className="hover:scale-102">
              {hasSubmitted ? '✓ Mensaje enviado' : 'Enviar mensaje'}
            </Button>
          </form>
        </m.div>
      </div>
      <ToastContainer />
    </m.section>
  );
}
