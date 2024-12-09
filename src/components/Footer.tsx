import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Jose Campos</h3>
            <p className="text-gray-400 mt-2">Ingeniero de Sistemas</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/josee2701"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/josee-py/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:j.camposs2701@gmail.com"
              className="hover:text-gray-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jose Campos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}