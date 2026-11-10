import { FileDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Button from './Button';

const itemClass =
  'flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-ink-700 transition-colors';

export default function CVDownload() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Escape cierra el menú y devuelve el foco al botón
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        dropdownRef.current?.querySelector('button')?.focus(); // Button no reenvía ref
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Flechas arriba/abajo recorren los ítems
  const handleMenuKey = (event: React.KeyboardEvent) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    const items = Array.from(menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? []);
    const i = items.indexOf(document.activeElement as HTMLElement);
    const step = event.key === 'ArrowDown' ? 1 : -1;
    items[(i + step + items.length) % items.length]?.focus();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Descargar CV"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls="cv-menu"
      >
        <FileDown size={20} />
        <span className="hidden sm:inline">Descargar CV</span>
      </Button>

      {isOpen && (
        <div
          id="cv-menu"
          ref={menuRef}
          role="menu"
          onKeyDown={handleMenuKey}
          className="absolute right-0 mt-2 w-48 bg-white dark:bg-ink-800 border border-transparent dark:border-white/10 rounded-chip shadow-card-hover py-2 z-50"
        >
          <a href="/cv/cv-en.pdf" download role="menuitem" className={itemClass} onClick={() => setIsOpen(false)}>
            <FileDown size={16} />
            CV English
          </a>
          <a href="/cv/cv-es.pdf" download role="menuitem" className={itemClass} onClick={() => setIsOpen(false)}>
            <FileDown size={16} />
            CV Español
          </a>
        </div>
      )}
    </div>
  );
}
