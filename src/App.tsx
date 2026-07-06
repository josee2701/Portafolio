import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Certifications = lazy(() => import('./components/Certifications'));
const SpotifyPlayer = lazy(() => import('./components/SpotifyPlayer'));
const WorkTogether = lazy(() => import('./components/WorkTogether'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const Loading = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-ink-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<Loading />}>
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
    </ThemeProvider>
  );
}

export default App;
