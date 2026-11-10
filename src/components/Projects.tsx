import { ExternalLink, Github } from 'lucide-react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { m } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionHeading from './SectionHeading';
import { cardHover } from './cardStyles';

const projects = [
  {
    title: "Plataforma De E-Commerce",
    description: "Plataforma para gestionar una pequeña empresa: subir productos, mantener stock y validar ventas. Desarrollada en Django con arquitectura monolítica.",
    image: "/Gallery/Tienda-sm.webp",
    technologies: ["Python", "Django", "HTML", "JavaScript", "Pythonanywhere"],
    githubUrl: "https://github.com/josee2701/Django_Class",
    liveUrl: "https://josee270114.pythonanywhere.com/",
  },
  {
    title: "Envío de Correos con Django, DRF y FastAPI",
    description: "API para envío de correos mediante POST, integrada con Gmail para confirmar al usuario y notificar al administrador. Registra información en PostgreSQL.",
    image: "/Gallery/django-fasapi-gmail-sm.webp",
    technologies: ["Django", "Gmail", "REST APIs", "Render", "PostgreSQL"],
    githubUrl: "https://github.com/josee2701/Envio-Correos",
  },
  {
    title: "Portafolio CV Inicial",
    description: "Portafolio desarrollado desde cero con React para comprender su estructura, componentes y flujos de trabajo. Integra una API en Django y GitHub Actions para publicación automática.",
    image: "/Gallery/image-sm.webp",
    technologies: ["React", "GitHub Actions", "Django"],
    githubUrl: "https://github.com/josee2701/CV",
    liveUrl: "https://josee2701.github.io/CV/",
  },
];

export default function Projects() {
  return (
    <m.section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-ink-950"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="// lo que he construido" title="Proyectos destacados" />

        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className={cardHover}>
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={`Captura del proyecto ${project.title}`}
                      width={640}
                      height={384}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full border border-blue-100 dark:border-blue-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-2 border-t border-gray-100 dark:border-gray-800">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-accent-strong transition-colors"
                      >
                        <Github size={16} />
                        Código
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-accent-strong transition-colors"
                        >
                          <ExternalLink size={16} />
                          Demo en vivo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </m.div>
      </div>
    </m.section>
  );
}
