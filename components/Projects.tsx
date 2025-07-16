'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Smartphone, Brain, Globe, Headphones, ChefHat } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Recipe Sharing App',
    description: 'A comprehensive recipe-sharing platform for restaurants featuring all dishes, descriptions, availability, timing, and personalized search functionality.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Search API', 'Real-time Updates'],
    category: 'Web',
    icon: ChefHat,
    color: 'from-orange-600 to-yellow-600',
    features: [
      'Restaurant dish cataloging',
      'Real-time availability tracking',
      'Personalized search functionality',
      'Recipe descriptions and timing'
    ],
    githubUrl: 'https://github.com/SudarshanBro/recipe-sharing-app'
  },
  {
    title: 'Wavelength - Podcast Player',
    description: 'A comprehensive podcast player application that allows users to listen to professional and tech-focused podcasts from YouTube across various categories.',
    technologies: ['React.js', 'YouTube API', 'Audio Streaming', 'Category Management'],
    category: 'Web',
    icon: Headphones,
    color: 'from-red-600 to-pink-600',
    features: [
      'YouTube podcast integration',
      'Category-based browsing',
      'Professional content curation',
      'Audio streaming optimization'
    ],
    githubUrl: 'https://github.com/SudarshanBro/wavelength'
  },
  {
    title: 'Crash Detection and Alerting System',
    description: 'Real-time vehicle crash detection system using IMUs, GPS, and GSM modules with advanced algorithms to reduce false positives.',
    technologies: ['Python', 'IoT', 'Machine Learning', 'GPS/GSM'],
    category: 'IoT/Hardware',
    icon: Smartphone,
    color: 'from-blue-600 to-cyan-600',
    features: [
      'Real-time sensor data analysis',
      'Emergency alert system',
      'False positive reduction algorithms',
      'GPS location tracking'
    ]
  },
  {
    title: 'AI-based Nepali Image Captioning',
    description: 'Deep learning system using CNN and LSTM for generating coherent Nepali language descriptions of heritage images.',
    technologies: ['Python', 'CNN', 'LSTM', 'TensorFlow', 'NLP'],
    category: 'AI/ML',
    icon: Brain,
    color: 'from-purple-600 to-pink-600',
    features: [
      'CNN feature extraction',
      'LSTM sequence prediction',
      'Nepali language processing',
      'Cultural relevance optimization'
    ]
  },
  {
    title: 'Drowsiness Detection Mobile App',
    description: 'Mobile application for real-time driver drowsiness detection using computer vision and emergency response workflows.',
    technologies: ['Flutter', 'Computer Vision', 'Mobile Dev', 'Real-time Processing'],
    category: 'Mobile',
    icon: Smartphone,
    color: 'from-green-600 to-blue-600',
    features: [
      'Real-time face detection',
      'Drowsiness monitoring',
      'Emergency alerts',
      'Driver safety analytics'
    ]
  },


  {
    title: 'Task Management App',
    description: 'Full-featured todo application with task categorization, deadlines, and productivity analytics.',
    technologies: ['React.js', 'LocalStorage', 'CSS3'],
    category: 'Web',
    icon: Code,
    color: 'from-indigo-600 to-purple-600',
    features: [
      'Task categorization',
      'Deadline management',
      'Priority levels',
      'Productivity insights'
    ]
  }
];

const categories = ['All', 'AI/ML', 'Web', 'Mobile', 'IoT/Hardware'];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects spanning AI/ML, web development, mobile apps, and IoT solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'glass-card hover:bg-white/20 dark:hover:bg-white/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedProject(project)}
              className="glass-card cursor-pointer hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.color} mb-4`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/20 dark:bg-white/10 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-purple-600/20 rounded-full text-xs font-medium text-purple-600">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/20 dark:border-white/10">
                  <span className="text-xs font-medium text-purple-600 dark:text-purple-400">
                    {project.category}
                  </span>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${selectedProject.color}`}>
                    <selectedProject.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {selectedProject.title}
                    </h3>
                    <span className="text-purple-600 dark:text-purple-400 font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white/20 dark:bg-white/10 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-8 pt-6 border-t border-white/20 dark:border-white/10">
                {selectedProject.githubUrl && (
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </motion.a>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 glass-card px-6 py-3 font-medium hover:bg-white/20 dark:hover:bg-white/10"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* GitHub Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/SudarshanBro"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 glass-card px-8 py-4 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}