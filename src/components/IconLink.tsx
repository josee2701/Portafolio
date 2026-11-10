import type { ComponentType } from 'react';

interface IconLinkProps {
  href: string;
  'aria-label': string;
  icon: ComponentType<{ size?: number | string }>; // lucide o react-icons
  size?: number;
}

export default function IconLink({ href, icon: Icon, size = 20, 'aria-label': ariaLabel }: IconLinkProps) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      <Icon size={size} />
    </a>
  );
}
