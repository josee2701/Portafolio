import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-sky-300 dark:bg-sky-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-cyan-200 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-25 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        {/* Profile image with animated ring */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-700 to-sky-400 animate-pulse-ring scale-110" />
          <img
            src="/Gallery/Perfil.png"
            alt="Jose Campos"
            className="relative w-40 h-40 rounded-full mx-auto object-cover shadow-2xl ring-4 ring-white dark:ring-gray-800"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-500 dark:from-blue-400 dark:to-sky-400 animate-fade-in-up">
          Jose Campos
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 animate-fade-in-up animation-delay-200">
          Desarrollador Backend
        </p>

        <div className="flex justify-center mb-8 animate-fade-in-up animation-delay-200">
          <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700">
            Python · Django · FastAPI · PostgreSQL
          </span>
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
          Creo soluciones backend escalables y robustas utilizando Python y sus frameworks modernos.
          Apasionado por optimizar la experiencia del usuario a través de tecnologías eficientes.
        </p>

        <a
          href="#about"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-sky-500 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-600"
        >
          Más información
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}
