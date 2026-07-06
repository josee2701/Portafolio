import { FileDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function CVDownload() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Descargar CV"
        aria-expanded={isOpen}
        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-4 py-2 rounded-lg hover:shadow-glow transition-all"
      >
        <FileDown size={20} />
        <span className="hidden sm:inline">Descargar CV</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-ink-800 border border-transparent dark:border-white/10 rounded-lg shadow-lg py-2 z-50">
          <a
            href="/cv/Cv-English-.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-ink-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <FileDown size={16} />
            CV English
          </a>
          <a
            href="/cv/Cv-Español.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-ink-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <FileDown size={16} />
            CV Español
          </a>
        </div>
      )}
    </div>
  );
}