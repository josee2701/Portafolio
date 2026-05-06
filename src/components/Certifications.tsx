import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const certifications = [
  {
    title: "Django",
    organization: "Platzi.com",
    date: "2025",
    credentialUrl: "https://platzi.com/p/desarrollador8/curso/9574-course/diploma/detalle/",
    image: "https://1000marcas.net/wp-content/uploads/2021/06/Django-Logo.png",
  },
  {
    title: "Django Rest Framework",
    organization: "Platzi.com",
    date: "2025",
    credentialUrl: "https://platzi.com/p/desarrollador8/curso/10728-django-rest-framework/diploma/detalle/",
    image: "https://storage.caktusgroup.com/media/blog-images/drf-logo2.png",
  },
  {
    title: "Auditor Interno ISO 9001:2015",
    organization: "SGS",
    date: "2025",
    credentialUrl: "https://learning.sgs.com/lmt/!clmscertificate.prVerify?site=sgsssc&in_region=co&in_token=MkQyODM1RDRDRUFDMjZEMjU3MzYxNEU3M0I4RkNFMjI5NTZFRUE4NEZBQ0EzMUNCMjQ4MzQ5Mzg1RTZENUU3RkY0N0RBNTIyMzg4M0NGMUU=",
    image: "https://c0.klipartz.com/pngpicture/987/451/gratis-png-logotipo-organizacion-certificacion-iso-9001-iso-9000-sgs-logo-iso-9001-thumbnail.png",
  },
  {
    title: "Gerencia de Proyectos PMI®",
    organization: "Fund. Universitaria Los Libertadores",
    date: "2025",
    credentialUrl: "https://www.acreditta.com/credential/02147c0c-ed60-409d-8de3-16230d793c52",
    image: "https://images.credly.com/images/c8bcf967-5cd7-498a-97ee-da1390c12854/insignias_digitales_PMI.png",
  },
  {
    title: "Azure Fundamentals AZ-900",
    organization: "Microsoft",
    date: "2024",
    credentialUrl: "https://learn.microsoft.com/api/credentials/share/es-es/JoseFernandoCamposSanchez-6512/8E72554F03701228?sharingId=5235777B4AE99CFB",
    image: "https://www.techielass.com/content/images/2021/03/microsoft-certified-azure-fundamentals.png",
  },
  {
    title: "Python",
    organization: "Talently.tech",
    date: "2024",
    credentialUrl: "https://talently.tech/certification/530022cd-6848-48e0-a711-8f7956efe778",
    image: "https://i.blogs.es/1d8a5b/python1/1366_2000.jpg",
  },
  {
    title: "Curso Profesional de Git y GitHub",
    organization: "Platzi.com",
    date: "2023",
    credentialUrl: "https://platzi.com/p/desarrollador8/curso/1557-git-github/diploma/detalle/",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCQDnOYkL4KEU1k9WN4pMVnhb2ACxZlWwmg&s",
  },
];

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      className="py-20 bg-blue-50 dark:bg-gray-800"
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
          Certificaciones y logros
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-blue-700 to-sky-500 dark:from-blue-400 dark:to-sky-400 mx-auto mb-16"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />

        <motion.div
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
            {certifications.map((cert, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className="h-44 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <Award className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" size={18} />
                      <h3 className="text-base font-semibold text-gray-800 dark:text-white leading-snug">
                        {cert.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{cert.organization}</p>
                    <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500 text-sm mb-4">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors font-medium"
                    >
                      Ver credencial
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.section>
  );
}
