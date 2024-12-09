import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 py-20 text-center">
        <img
          src="/Gallery/Perfil.png"
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto mb-8 object-cover shadow-lg ring-4 ring-white dark:ring-gray-700"
        />
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
          Jose Campos
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Desarrollador Backend
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Crear soluciones backend escalables y robustas utilizando Python y sus frameworks modernos. 
          Apasionado por optimizar la experiencia del usuario a través de tecnologías eficientes y un enfoque innovador.
        </p>
        <a
          href="#about"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors"
        >
          Más información
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}