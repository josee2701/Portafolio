import { motion } from 'framer-motion';
import { SiPython, SiJavascript, SiPostgresql, SiMysql, SiReact, SiGit, SiDocker, SiLinux } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const skills = {
  "Backend": [
    { name: "Python", icon: SiPython, color: "text-yellow-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "MySQL", icon: SiMysql, color: "text-sky-400" },
  ],
  "Frontend": [
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  ],
  "Tools": [
    { name: "Git", icon: SiGit, color: "text-orange-500" },
    { name: "Docker", icon: SiDocker, color: "text-blue-400" },
    { name: "Azure", icon: VscAzure, color: "text-blue-500" },
    { name: "Linux", icon: SiLinux, color: "text-yellow-300" },
  ],
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
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
          Skills y Experiencia
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-blue-700 to-sky-500 dark:from-blue-400 dark:to-sky-400 mx-auto mb-16"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />

        <div className="grid md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, categorySkills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-8 text-center text-gray-800 dark:text-white">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {categorySkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name + index}
                      className="flex flex-col items-center group cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 border-2 border-transparent group-hover:border-sky-500 group-hover:shadow-md group-hover:shadow-sky-500/20 group-hover:scale-110 transition-all duration-300">
                        <Icon className={`w-8 h-8 ${skill.color}`} />
                      </div>
                      <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
