import { m } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  id?: string;
  size?: 'lg' | 'sm';
  className?: string;
}

const viewport = { once: true };

export default function SectionHeading({ title, eyebrow, id, size = 'lg', className }: SectionHeadingProps) {
  const lg = size === 'lg';
  return (
    <div className={className}>
      {eyebrow && (
        <m.p
          className="eyebrow text-center mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={viewport}
        >
          {eyebrow}
        </m.p>
      )}
      <m.h2
        id={id}
        className={`${lg ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} font-bold text-center mb-4 text-gray-900 dark:text-white`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={viewport}
      >
        {title}
      </m.h2>
      <m.div
        className={`w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto ${lg ? 'mb-16' : 'mb-8'} rounded-full`}
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={viewport}
      />
    </div>
  );
}
