export interface NavLink {
  href: string;
  label: string;
  inHeader: boolean;
  inFooter: boolean;
}

export const navLinks: NavLink[] = [
  { href: '#about', label: 'Sobre mí', inHeader: true, inFooter: true },
  { href: '#projects', label: 'Proyectos', inHeader: true, inFooter: true },
  { href: '#featured', label: 'Mi app', inHeader: true, inFooter: true },
  { href: '#skills', label: 'Habilidades', inHeader: true, inFooter: true },
  { href: '#certifications', label: 'Certificaciones', inHeader: true, inFooter: true },
  { href: '#music', label: 'Música', inHeader: false, inFooter: true },
  { href: '#contact', label: 'Contacto', inHeader: true, inFooter: true },
];
