import React from 'react';
import {
  Blocks, // React
  BracesIcon, // JavaScript
  FileCode2, // TypeScript
  Palette, // Tailwind
  Server, // Node.js
  Database, // MongoDB
  Table2, // PostgreSQL
  GitBranch, // Git
  Container, // Docker
  Cloud, // AWS
  Terminal, // Linux
  Globe, // Next.js
  Layers // Vue.js
} from 'lucide-react';

const skills = {
  "Frontend": [
    { name: "React", icon: Blocks, color: "text-blue-500" },
    { name: "TypeScript", icon: FileCode2, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: Palette, color: "text-teal-500" },
    { name: "Next.js", icon: Globe, color: "text-gray-800 dark:text-gray-200" }
  ],
  "Backend": [
    { name: "Node.js", icon: Server, color: "text-green-600" },
    { name: "Python", icon: BracesIcon, color: "text-yellow-600" },
    { name: "PostgreSQL", icon: Table2, color: "text-blue-400" },
    { name: "MongoDB", icon: Database, color: "text-green-500" }
  ],
  "Tools": [
    { name: "Git", icon: GitBranch, color: "text-orange-600" },
    { name: "Docker", icon: Container, color: "text-blue-500" },
    { name: "AWS", icon: Cloud, color: "text-yellow-500" },
    { name: "Linux", icon: Terminal, color: "text-gray-800 dark:text-gray-200" }
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-16">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-8 text-center text-gray-800 dark:text-white">{category}</h3>
              <div className="grid grid-cols-2 gap-6">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:scale-110 transition-transform">
                      <skill.icon className={`w-8 h-8 ${skill.color}`} />
                    </div>
                    <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}