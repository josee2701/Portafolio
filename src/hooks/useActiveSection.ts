import { useEffect, useState } from 'react';

/**
 * Devuelve el id de la sección que cruza la franja central del viewport.
 * Las secciones se cargan con lazy, así que un MutationObserver las añade al
 * IntersectionObserver cuando aparecen en el DOM.
 */
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(',');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const wanted = key.split(',');
    const observed = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    const scan = () => {
      wanted.forEach((id) => {
        const el = document.getElementById(id);
        if (el && !observed.has(el)) {
          observed.add(el);
          observer.observe(el);
        }
      });
    };
    scan();

    const mutations =
      typeof MutationObserver === 'undefined' ? null : new MutationObserver(scan);
    mutations?.observe(document.getElementById('root') ?? document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutations?.disconnect();
      observer.disconnect();
    };
  }, [key]);

  return active;
}
