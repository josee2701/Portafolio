import { Code2, MonitorSpeaker, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { number: "3+", label: "Proyectos Completados" },
  { number: "7", label: "Certificaciones" },
  { number: "2+", label: "Años de Experiencia" },
  { number: "8+", label: "Tecnologías" },
];

const areas = [
  {
    icon: Server,
    iconBg: "bg-green-100 dark:bg-green-900/40",
    iconColor: "text-green-600 dark:text-green-400",
    borderHover: "hover:border-green-500 hover:shadow-green-500/10",
    title: "Backend Development",
    description: "Creación de APIs REST seguras y escalables con Python, integrando WebSockets y adaptando soluciones a necesidades específicas.",
  },
  {
    icon: MonitorSpeaker,
    iconBg: "bg-blue-100 dark:bg-blue-900/40",
    iconColor: "text-blue-600 dark:text-blue-400",
    borderHover: "hover:border-blue-500 hover:shadow-blue-500/10",
    title: "Developer",
    description: "Desarrollador con experiencia en Azure, contenedores Docker y el uso de componentes como Storage y Kubernetes, con principios sólidos y enfoques prácticos.",
  },
  {
    icon: Code2,
    iconBg: "bg-sky-100 dark:bg-sky-900/40",
    iconColor: "text-sky-600 dark:text-sky-400",
    borderHover: "hover:border-sky-500 hover:shadow-sky-500/10",
    title: "Frontend Development",
    description: "Creación de interfaces responsive e interactivas con React y Vue.js, iniciándome en el mundo del front-end.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-500 dark:from-blue-400 dark:to-sky-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Áreas de trabajo
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-blue-700 to-sky-500 dark:from-blue-400 dark:to-sky-400 mx-auto mb-16"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                className={`text-center p-6 rounded-2xl bg-white dark:bg-gray-800/60 border-2 border-transparent shadow-sm hover:shadow-lg ${area.borderHover} transition-all duration-300`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 ${area.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Icon size={32} className={area.iconColor} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{area.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{area.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats integradas dentro de About */}
        <motion.div
          className="rounded-2xl bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-950 dark:to-blue-800 p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
