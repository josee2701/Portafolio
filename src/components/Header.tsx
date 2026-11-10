import { Mail, Menu, X } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi'; // lucide 1.x retiró los iconos de marca
import { useEffect, useRef, useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { navLinks } from '../navLinks';
import CVDownload from './CVDownload';
import IconLink from './IconLink';
import ThemeToggle from './ThemeToggle';

const linkClass = 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors';
const activeClass = 'text-gray-900 dark:text-white';
const headerLinks = navLinks.filter((l) => l.inHeader);
const headerIds = headerLinks.map((l) => l.href.slice(1));

const socials = (
  <>
    <IconLink href="https://github.com/josee2701" icon={Github} aria-label="GitHub" />
    <IconLink href="https://www.linkedin.com/in/josee-py/" icon={Linkedin} aria-label="LinkedIn" />
    <IconLink href="mailto:j.camposs2701@gmail.com" icon={Mail} aria-label="Enviar correo" />
  </>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const active = useActiveSection(headerIds);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  const renderLink = (href: string, label: string, onClick?: () => void) => {
    const isActive = active === href.slice(1);
    return (
      <a
        key={href}
        href={href}
        aria-current={isActive ? 'location' : undefined}
        className={`${linkClass} ${isActive ? activeClass : ''}`}
        onClick={onClick}
      >
        {label}
      </a>
    );
  };

  return (
    <header className="fixed w-full bg-white/80 dark:bg-ink-900/80 backdrop-blur-md z-50 border-b border-gray-200/70 dark:border-white/5">
      <nav className="container mx-auto px-6 py-4" aria-label="Principal">
        <div className="flex items-center justify-between">
          <a href="#home" className="font-mono text-lg font-bold text-gray-900 dark:text-white">
            jose<span className="text-accent">.campos</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {headerLinks.map((l) => renderLink(l.href, l.label))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <CVDownload />
            <ThemeToggle />
            {socials}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <CVDownload />
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              type="button"
              className="text-gray-600 dark:text-gray-300"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-ink-900 border-t border-gray-200 dark:border-white/10 shadow-card-hover">
            <div className="flex flex-col space-y-4 px-6 py-4">
              {headerLinks.map((l) => renderLink(l.href, l.label, () => setIsMenuOpen(false)))}
              <div className="flex space-x-4 pt-2 border-t dark:border-gray-800">{socials}</div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
