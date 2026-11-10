import { lazy, Suspense } from 'react';
import { LazyMotion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';

// Carga las features de animación fuera de la ruta crítica
const loadMotionFeatures = () =>
  import('./motionFeatures').then((mod) => mod.default);
const FeaturedProject = lazy(() => import('./components/FeaturedProject'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Certifications = lazy(() => import('./components/Certifications'));
const SpotifyPlayer = lazy(() => import('./components/SpotifyPlayer'));
const WorkTogether = lazy(() => import('./components/WorkTogether'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const Loading = () => (
  <div className="min-h-loader flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <LazyMotion features={loadMotionFeatures} strict>
        <div className="min-h-screen bg-white dark:bg-ink-900 transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <Suspense fallback={<Loading />}>
              <FeaturedProject />
              <About />
              <Projects />
              <Skills />
              <Certifications />
              <SpotifyPlayer />
              <WorkTogether />
              <Contact />
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      </LazyMotion>
    </ThemeProvider>
  );
}

export default App;
