import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Info', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificaciones', href: '#certifications' },
  { label: 'Música', href: '#music' },
  { label: 'Contacto', href: '#contact' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/josee2701' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/josee-py/' },
  { icon: Mail, label: 'Email', href: 'mailto:j.camposs2701@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-6 pt-14 pb-8">
        <motion.div
          className="grid md:grid-cols-3 gap-10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Columna 1 — Identidad */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Jose Campos</h3>
            <p className="text-sky-400 text-sm font-medium mb-4">Ingeniero de Sistemas</p>
            <p className="text-blue-200 text-sm leading-relaxed">
              Desarrollador Backend especializado en Python, Django y FastAPI.
              Apasionado por construir soluciones escalables y eficientes.
            </p>
          </div>

          {/* Columna 2 — Navegación */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-sky-400 mb-5">Navegación</h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors duration-200 hover:pl-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Redes sociales */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-sky-400 mb-5">Conectemos</h4>
            <div className="space-y-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-800 dark:bg-blue-900 group-hover:bg-sky-500 flex items-center justify-center transition-colors duration-200">
                    <Icon size={18} />
                  </div>
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="border-t border-blue-800 dark:border-blue-900 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-blue-400">
          <p>&copy; {new Date().getFullYear()} Jose Campos. All rights reserved.</p>
          <p>Hecho con React + Vite + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
