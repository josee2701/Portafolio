import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import CVDownload from './CVDownload';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800 dark:text-white">
            Portafolio
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Info</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Proyectos</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Skills</a>
            <a href="#certifications" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Certificaciones</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Contacto</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <CVDownload />
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="https://github.com/josee2701" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/josee-py/" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:j.camposs2701@gmail.com"
               className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <CVDownload />
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className="text-gray-600 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800 shadow-lg">
            <div className="flex flex-col space-y-4 px-6 py-4">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                 onClick={() => setIsMenuOpen(false)}>Info</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                 onClick={() => setIsMenuOpen(false)}>Proyectos</a>
              <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                 onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#certifications" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                 onClick={() => setIsMenuOpen(false)}>Certificaciones</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                 onClick={() => setIsMenuOpen(false)}>Contacto</a>
              <div className="flex space-x-4 pt-2 border-t dark:border-gray-800">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:your.email@example.com"
                   className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}