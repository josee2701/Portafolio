import { motion } from 'framer-motion';
import { Briefcase, Handshake, FileSignature, ArrowUpRight } from 'lucide-react';

const modalidades = [
  {
    icon: Handshake,
    title: 'Freelance',
    description: 'Proyectos puntuales, entregables claros y comunicación directa.',
  },
  {
    icon: Briefcase,
    title: 'Por servicios',
    description: 'Colaboración continua para construir y mantener tu backend.',
  },
  {
    icon: FileSignature,
    title: 'Contrato',
    description: 'Disponible para incorporarme a tu equipo de tiempo completo.',
  },
];

export default function WorkTogether() {
  return (
    <section id="work" className="py-20 bg-gray-50 dark:bg-ink-950" aria-label="Trabajemos juntos">
      <div className="container mx-auto px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-ink-800/70 p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-24 -right-16 w-72 h-72 bg-sky-400/20 dark:bg-sky-500/10 rounded-full blur-3xl" />

          <div className="relative">
            <p className="font-mono text-xs text-sky-600 dark:text-sky-400 mb-3">// abierto a nuevos retos</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white max-w-2xl">
              ¿Tienes un proyecto en mente? Construyámoslo juntos.
            </h2>
            <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Me entusiasman los proyectos nuevos y adoptar herramientas modernas —incluida
              IA— para avanzar más rápido y sin perder calidad. Cualquiera que sea el reto,
              estoy dispuesto a apoyar en la construcción de la solución.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {modalidades.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={m.title}
                    className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-ink-900/60 p-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-sky-500/10 flex items-center justify-center mb-4">
                      <Icon size={22} className="text-sky-600 dark:text-sky-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{m.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{m.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:shadow-glow hover:scale-[1.02] transition-all duration-300"
            >
              Hablemos de tu proyecto
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
