import { motion } from 'framer-motion';
import { SiSpotify } from 'react-icons/si';

export default function SpotifyPlayer() {
  return (
    <section id="music" className="py-20 bg-white dark:bg-ink-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex items-center justify-center gap-3 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SiSpotify className="text-green-500 w-8 h-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Mi música mientras codifico
          </h2>
        </motion.div>

        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mb-12 rounded-full"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />

        <motion.p
          className="text-center text-gray-500 dark:text-gray-400 mb-10 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          La playlist que me acompaña en cada sesión de desarrollo
        </motion.p>

        <motion.div
          className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <iframe
            style={{ borderRadius: '16px' }}
            src="https://open.spotify.com/embed/playlist/2ADMZojC3bht20YQdxKEvv?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify playlist"
          />
        </motion.div>
      </div>
    </section>
  );
}
