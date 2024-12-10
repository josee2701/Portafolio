import { ExternalLink, Github } from 'lucide-react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    title: "Plataforma De E-Commerce",
    description: "Una plataforma de e-commerce para gestionar una pequeña empresa: subir productos, mantener stock y validar ventas. Desarrollada en Django con una arquitectura monolítica, todo el control se realiza a través de esta tecnología.",
    image: "/Gallery/Tienda.png",
    technologies: ["Python","Django","Html","JavaScrip","Pythonanywhere"],
    githubUrl: "https://github.com/josee2701/Django_Class",
    liveUrl: "https://josee270114.pythonanywhere.com/"
  },
  {
    title: "Plataforma de Rastreo GPS",
    description: "Plataforma monolítica basada en Django para rastreo GPS y APIs interactivas, con CSRF para seguridad, MySQL con procedimientos almacenados, empaquetada con Docker y desplegada en Kubernetes.",
    image: "/Gallery/NP.png",
    technologies: ["Python","Django","Redis","JavaScrip","Docker","Kubernetes","Azure"],
    liveUrl: "https://gpsmobile.pro/es/login/"
  },
  {
    title: "Api's de Envio de Correo",
    description: "API para envío de correos mediante POST, integrada con Gmail para confirmar al usuario y notificar al administrador. Registra toda la información en PostgreSQL.",
    image: "/Gallery/Gmail.png",
    technologies: ["Django", "Gmail", "Rest Api's","Render","PostgreSQL"],
    githubUrl: "https://github.com/josee2701/backend",
    liveUrl: "https://backend-yw41.onrender.com/from_contact/"
  },
  {
    title: "Portafolo CV Inicial",
    description: "Portafolio desarrollado desde cero con React para comprender su estructura, componentes y flujos de trabajo. Integra una API en Django para el apartado de contacto y emplea Git Actions para automatizar el proceso de publicación.",
    image: "/Gallery/image.png",
    technologies: ["React", "GitHub Action", "Django"],
    githubUrl: "https://github.com/josee2701/CV",
    liveUrl: "https://josee2701.github.io/CV/"
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-16">Proyectos destacados</h2>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      <Github size={20} />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}