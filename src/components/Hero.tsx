import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-ink-900"
      aria-label="Presentación"
    >
      {/* Rejilla técnica + glows de acento */}
      <div className="absolute inset-0 bg-grid opacity-70 dark:opacity-100" />
      <div className="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-sky-300/30 dark:bg-sky-500/10 rounded-full blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-1/3 -right-24 w-[26rem] h-[26rem] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-ink-900 to-transparent" />

      <div className="container mx-auto px-6 py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Columna texto */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs sm:text-sm text-sky-600 dark:text-sky-400 mb-5">
              // backend developer &amp; systems engineer
            </p>

            {/* Badge de disponibilidad */}
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 font-mono text-xs text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Disponible para proyectos
            </span>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Jose Campos
            </h1>

            <p className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Construyo{' '}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-400 dark:from-blue-400 dark:to-cyan-300">
                soluciones backend
              </span>{' '}
              escalables.
            </p>

            <p className="mt-5 max-w-xl text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              APIs robustas con Python, Django y FastAPI, apoyándome en herramientas
              modernas —incluida IA como Claude— para entregar más rápido. Siempre con
              ganas de sumarme a proyectos nuevos y resolver problemas reales.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:shadow-glow hover:scale-[1.02] transition-all duration-300"
              >
                Ver proyectos
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-white/15 hover:border-sky-400 dark:hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors duration-300"
              >
                <MessageSquare size={18} />
                Trabajemos juntos
              </a>
            </div>
          </motion.div>

          {/* Columna foto (protagonista) */}
          <motion.div
            className="order-1 lg:order-2 lg:justify-self-end w-full max-w-sm mx-auto"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative">
              {/* Glow y anillo de acento detrás de la foto */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/30 to-sky-400/20 rounded-[2rem] blur-2xl" />
              <div className="relative rounded-[1.75rem] p-[2px] bg-gradient-to-tr from-blue-500 to-sky-400 shadow-2xl">
                <div className="relative rounded-[1.65rem] overflow-hidden bg-ink-800">
                  <img
                    src="/Gallery/Perfil.webp"
                    alt="Retrato de Jose Campos, desarrollador backend"
                    width={768}
                    height={1344}
                    fetchPriority="high"
                    className="w-full h-auto max-h-[30rem] object-cover object-top"
                  />
                  {/* Degradado inferior para legibilidad de la tira */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-950/95 to-transparent" />

                  {/* Badge de disponibilidad flotante */}
                  <span className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/40 bg-ink-950/70 backdrop-blur font-mono text-xs text-emerald-300">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    Disponible
                  </span>

                  {/* Tira terminal con identidad */}
                  <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/10 bg-ink-950/70 backdrop-blur px-3 py-2 font-mono text-xs">
                    <p className="text-sky-400">jose@portfolio:~$ <span className="text-gray-200">whoami</span></p>
                    <p className="text-gray-300">Jose Campos — Backend Developer<span className="caret text-sky-400"> ▊</span></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
