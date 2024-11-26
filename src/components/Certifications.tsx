import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    date: "2023",
    credentialUrl: "https://aws.amazon.com",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
  },
  {
    title: "Professional Scrum Master I",
    organization: "Scrum.org",
    date: "2023",
    credentialUrl: "https://scrum.org",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
  },
  {
    title: "Meta Frontend Developer",
    organization: "Meta",
    date: "2022",
    credentialUrl: "https://coursera.org",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"
  },
  {
    title: "Google Cloud Architect",
    organization: "Google Cloud",
    date: "2023",
    credentialUrl: "https://cloud.google.com",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop"
  },
  {
    title: "Azure DevOps Engineer Expert",
    organization: "Microsoft",
    date: "2023",
    credentialUrl: "https://microsoft.com",
    image: "https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?w=600&h=400&fit=crop"
  },
  {
    title: "Certified Kubernetes Administrator",
    organization: "Cloud Native Computing Foundation",
    date: "2022",
    credentialUrl: "https://kubernetes.io",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-16">
          Certifications & Achievements
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
                    <span>View Credential</span>
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