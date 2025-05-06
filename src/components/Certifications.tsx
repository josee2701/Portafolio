import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const certifications = [
  {
    title: "Django",
    organization: "Platzi.com",
    date: "2025",
    credentialUrl: "https://platzi.com/p/desarrollador8/curso/9574-course/diploma/detalle/",
    image: "https://1000marcas.net/wp-content/uploads/2021/06/Django-Logo.png"
  },
  {
    title: "Django Rest Framework",
    organization: "Platzi.com",
    date: "2025",
    credentialUrl: "https://platzi.com/p/desarrollador8/curso/10728-django-rest-framework/diploma/detalle/",
    image: "https://storage.caktusgroup.com/media/blog-images/drf-logo2.png"
  },
  {
    title: "Auditor Interno ISO 9001:2015 - Sistema de Gestión de la Calidad",
    organization: "SGS",
    date: "2025",
    credentialUrl: "https://learning.sgs.com/lmt/!clmscertificate.prVerify?site=sgsssc&in_region=co&in_token=MkQyODM1RDRDRUFDMjZEMjU3MzYxNEU3M0I4RkNFMjI5NTZFRUE4NEZBQ0EzMUNCMjQ4MzQ5Mzg1RTZENUU3RkY0N0RBNTIyMzg4M0NGMUU=",
    image: "https://c0.klipartz.com/pngpicture/987/451/gratis-png-logotipo-organizacion-certificacion-iso-9001-iso-9000-sgs-logo-iso-9001-thumbnail.png"
  },
  {
    title: "Gerencia de Proyectos bajo el enfoque del PMI®",
    organization: "Fundación Universitaria Los Libertadores",
    date: "2025",
    credentialUrl: "https://www.acreditta.com/credential/02147c0c-ed60-409d-8de3-16230d793c52?utm_source=linkedin_profile&resource_type=badge&resource=02147c0c-ed60-409d-8de3-16230d793c52",
    image: "https://images.credly.com/images/c8bcf967-5cd7-498a-97ee-da1390c12854/insignias_digitales_PMI.png"
  },
  {
    title: "Azure Fundation Az-900",
    organization: "Azure Microsoft Services",
    date: "2024",
    credentialUrl: "https://learn.microsoft.com/api/credentials/share/es-es/JoseFernandoCamposSanchez-6512/8E72554F03701228?sharingId=5235777B4AE99CFB",
    image: "https://www.techielass.com/content/images/2021/03/microsoft-certified-azure-fundamentals.png"
  },
  {
    title: "Python",
    organization: "Talently.tech",
    date: "2024",
    credentialUrl: "https://talently.tech/certification/530022cd-6848-48e0-a711-8f7956efe778",
    image: "https://i.blogs.es/1d8a5b/python1/1366_2000.jpg"
  },
  {
    title: "Curso Profesional de Git y GitHub",
    organization: "Platzi.com",
    date: "2023",
    credentialUrl: "https://platzi.com/p/desarrollador8/curso/1557-git-github/diploma/detalle/",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCQDnOYkL4KEU1k9WN4pMVnhb2ACxZlWwmg&s"
  },
  
  
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-16">
        Certificaciones y logros
        </h2>
        
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
          {certifications.map((cert, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="text-indigo-600 dark:text-indigo-400" size={20} />
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {cert.organization}
                  </p>
                  
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                  
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                  >
                    <span>Ver credenciales</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}