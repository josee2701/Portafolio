import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const base = '/Gallery/despertador';

const screenshots = [
  { src: `${base}/lista.webp`, alt: 'Pantalla principal con la lista de alarmas activas' },
  { src: `${base}/detener.webp`, alt: 'Pantalla de alarma sonando con deslizador para detenerla o posponer 5 minutos' },
  { src: `${base}/temas.webp`, alt: 'Selección de temas visuales de la app' },
];

const stack = ['Flutter', 'Android', 'IA'];

export default function ProyectoDestacado() {
  return (
    <motion.section
      id="proyecto-destacado"
      aria-labelledby="proyecto-destacado-titulo"
      className="py-12 bg-white dark:bg-ink-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <p className="font-mono text-xs text-center text-accent mb-2">
          // caso destacado · mi primera app desde cero con IA
        </p>
        <h2
          id="proyecto-destacado-titulo"
          className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white"
        >
          Bella Durmiente
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 items-center p-6 rounded-card bg-gray-50 dark:bg-ink-800 border border-gray-200 dark:border-white/10 shadow-card">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <img
                src={`${base}/icono.webp`}
                alt="Icono de Bella Durmiente"
                width={56}
                height={56}
                loading="lazy"
                decoding="async"
                className="w-14 h-14 rounded-2xl shrink-0"
              />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Bella Durmiente</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Alarma que te obliga a demostrar que estás despierto. Publicada en Google Play.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full border border-blue-100 dark:border-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Hecho con IA: especificaciones, revisión por tarea y un bug real diagnosticado con ayuda de IA.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Próximamente: recordatorio a 1 hora con botones de acción.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.soy.josec.bella_durmiente"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-4 py-2 rounded-lg hover:shadow-glow transition-all"
              >
                <ExternalLink size={18} aria-hidden="true" />
                Descargar en Google Play
              </a>
              <a
                href="https://github.com/josee2701/despertador_novia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-accent underline-offset-4 hover:underline transition-colors"
              >
                Ver código
              </a>
            </div>
          </div>

          <div className="flex gap-3 justify-start sm:justify-center overflow-x-auto">
            {screenshots.map((s) => (
              <img
                key={s.src}
                src={s.src}
                alt={s.alt}
                width={540}
                height={960}
                loading="lazy"
                decoding="async"
                className="h-56 w-auto rounded-2xl border border-gray-200 dark:border-white/10 shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
