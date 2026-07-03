import { motion } from 'framer-motion';
import {
  SiPython, SiJavascript, SiTypescript, SiOpenjdk,
  SiDjango, SiFastapi, SiPostgresql, SiMysql,
  SiReact, SiTailwindcss,
  SiGit, SiDocker, SiLinux,
  SiAnthropic, SiOpenai, SiGithubcopilot,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

type Skill = { name: string; icon: React.ComponentType<{ className?: string }>; color: string };

const skills: Record<string, Skill[]> = {
  'Lenguajes': [
    { name: 'Python', icon: SiPython, color: 'text-yellow-500' },
    { name: 'Java', icon: SiOpenjdk, color: 'text-red-500' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  ],
  'Backend': [
    { name: 'Django', icon: SiDjango, color: 'text-emerald-500' },
    { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-400' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
    { name: 'MySQL', icon: SiMysql, color: 'text-sky-400' },
  ],
  'Frontend': [
    { name: 'React', icon: SiReact, color: 'text-cyan-400' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-sky-400' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  ],
  'DevOps & Cloud': [
    { name: 'Git', icon: SiGit, color: 'text-orange-500' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
    { name: 'Azure', icon: VscAzure, color: 'text-blue-500' },
    { name: 'Linux', icon: SiLinux, color: 'text-yellow-300' },
  ],
  'IA & Herramientas': [
    { name: 'Claude', icon: SiAnthropic, color: 'text-orange-400' },
    { name: 'ChatGPT', icon: SiOpenai, color: 'text-teal-300' },
    { name: 'Copilot', icon: SiGithubcopilot, color: 'text-gray-500 dark:text-gray-300' },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-ink-900">
      <div className="container mx-auto px-6">
        <motion.p
          className="font-mono text-xs text-center text-sky-600 dark:text-sky-400 mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          // stack tecnológico
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills y experiencia
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mb-16 rounded-full"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, categorySkills], catIndex) => (
            <motion.div
              key={category}
              className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-ink-800/60 p-6 hover:border-sky-400/60 dark:hover:border-sky-400/40 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-mono text-sm text-gray-500 dark:text-gray-400 mb-6">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {categorySkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-3 rounded-xl border border-transparent bg-gray-50 dark:bg-ink-900/70 px-3 py-2.5 hover:border-sky-400/50 hover:bg-white dark:hover:bg-ink-700/60 transition-all duration-300"
                    >
                      <Icon className={`w-6 h-6 shrink-0 ${skill.color} transition-transform duration-300 group-hover:scale-110`} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
