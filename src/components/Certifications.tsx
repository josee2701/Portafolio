import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { m } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionHeading from './SectionHeading';
import { cardHover } from './cardStyles';

const certifications = [
  {
    title: "Django",
    organization: "Platzi.com",
    date: "2025",
    credentialUrl: "https://platzi.com/p/desarrollador8/curso/9574-course/diploma/detalle/",
    image: "/Gallery/certs/django-sm.webp",
  },
  {
    title: "Django Rest Framework",
    organization: "Platzi.com",
    date: "2025",
    credentialUrl: "https://platzi.com/p/desarrollador8/curso/10728-django-rest-framework/diploma/detalle/",
    image: "/Gallery/certs/drf-sm.webp",
  },
  {
    title: "Auditor Interno ISO 9001:2015",
    organization: "SGS",
    date: "2025",
    credentialUrl: "https://learning.sgs.com/lmt/!clmscertificate.prVerify?site=sgsssc&in_region=co&in_token=MkQyODM1RDRDRUFDMjZEMjU3MzYxNEU3M0I4RkNFMjI5NTZFRUE4NEZBQ0EzMUNCMjQ4MzQ5Mzg1RTZENUU3RkY0N0RBNTIyMzg4M0NGMUU=",
    image: "/Gallery/certs/iso9001-sm.webp",
  },
  {
    title: "Gerencia de Proyectos PMI®",
    organization: "Fund. Universitaria Los Libertadores",
    date: "2025",
    credentialUrl: "https://www.acreditta.com/credential/02147c0c-ed60-409d-8de3-16230d793c52",
    image: "/Gallery/certs/pmi-sm.webp",
  },
  {
    title: "Azure Fundamentals AZ-900",
    organization: "Microsoft",
    date: "2024",
    credentialUrl: "https://learn.microsoft.com/api/credentials/share/es-es/JoseFernandoCamposSanchez-6512/8E72554F03701228?sharingId=5235777B4AE99CFB",
    image: "/Gallery/certs/az900-sm.webp",
  },
  {
    title: "Python",
    organization: "Talently.tech",
    date: "2024",
    credentialUrl: "https://talently.tech/certification/530022cd-6848-48e0-a711-8f7956efe778",
    image: "/Gallery/certs/python-sm.webp",
  },
  {
    title: "Curso Profesional de Git y GitHub",
    organization: "Platzi.com",
    date: "2023",
    credentialUrl: "https://platzi.com/p/desarrollador8/curso/1557-git-github/diploma/detalle/",
    image: "/Gallery/certs/git-sm.webp",
  },
];

export default function Certifications() {
  return (
    <m.section
      id="certifications"
      className="py-20 bg-gray-50 dark:bg-ink-950"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="// formación continua" title="Certificaciones y logros" />

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
            {certifications.map((cert, index) => (
              <SwiperSlide key={index}>
                <div className={cardHover}>
                  <div className="h-44 overflow-hidden bg-white">
                    <img
                      src={cert.image}
                      alt={`Certificado: ${cert.title}`}
                      width={640}
                      height={352}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <Award className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug">
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
                      className="mt-auto inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-strong transition-colors font-medium"
                    >
                      Ver credencial
                      <ExternalLink size={14} />
                    </a>
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
