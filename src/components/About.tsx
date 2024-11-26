import React from 'react';
import { Code2, Palette, Server } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Code2 size={32} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Frontend Development</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Specialized in building responsive and interactive user interfaces using
              modern frameworks like React and Vue.js.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Server size={32} className="text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Backend Development</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Experienced in building scalable APIs and server-side applications
              using Node.js, Python, and various databases.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Palette size={32} className="text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">UI/UX Design</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Passionate about creating beautiful and intuitive user experiences
              with attention to detail and modern design principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}