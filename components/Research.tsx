'use client';

import { motion } from 'framer-motion';
import { BookOpen, Award, Calendar, ExternalLink } from 'lucide-react';

const research = [
  {
    title: 'Nepali Image Captioning: Generating Coherent Paragraph-Length Descriptions Using Transformer',
    date: 'March 2024',
    doi: '10.36548/jscp.2024.1.006',
    description: 'Advanced NLP research focusing on Transformer models for generating fluent and context-rich descriptions in Nepali language.',
    highlights: [
      'Transformer architecture implementation',
      'Low-resource language processing',
      'Cultural and linguistic relevance',
      'Dataset preprocessing and validation'
    ],
    type: 'Research Paper'
  },
  {
    title: 'Drowsiness and Crash Detection Mobile Application for Vehicle\'s Safety',
    date: 'April 2024',
    doi: '10.36548/jismac.2024.1.005',
    description: 'Mobile application development research focused on real-time monitoring and alert mechanisms for driver safety.',
    highlights: [
      'Computer vision implementation',
      'Real-time monitoring systems',
      'Emergency response workflows',
      'Mobile application architecture'
    ],
    type: 'Research Paper'
  }
];

const certificates = [
  {
    title: 'React.js - Basics to Advance',
    issuer: 'Digital Pathshala',
    date: 'April 2024',
    certificateNo: 'CN-0000-0023',
    description: 'Comprehensive React.js course covering fundamentals, state management, hooks, and UI optimization.',
    skills: ['React Fundamentals', 'State Management', 'Hooks', 'UI Optimization']
  },
  {
    title: 'Front-End Professional Advance React Developer',
    issuer: 'Meta',
    date: 'July 2024',
    certificateId: '7J62KEQ7NTNL',
    description: 'Advanced React development certification covering Redux, performance tuning, and scalable application architecture.',
    skills: ['Redux', 'Performance Tuning', 'Scalable Architecture', 'Production-Ready UIs']
  }
];

const achievements = [
  {
    title: 'Silver Medal Winner',
    event: 'Province Level Robo-Soccer Competition',
    description: 'Achieved second place in competitive robotics tournament showcasing technical skills and teamwork.',
    icon: Award,
    color: 'from-gray-400 to-gray-600'
  },
  {
    title: 'Gold Medal Winner',
    event: 'Inter College Hackathon',
    description: 'First place winner in inter-college hackathon demonstrating innovation and problem-solving abilities.',
    icon: Award,
    color: 'from-yellow-400 to-yellow-600'
  }
];

export function Research() {
  return (
    <section id="research" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Research & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Published research, professional certifications, and academic achievements that showcase my commitment to continuous learning and innovation.
          </p>
        </motion.div>

        {/* Research Papers */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-gray-800 dark:text-white flex items-center"
          >
            <BookOpen className="w-8 h-8 mr-3 text-purple-600" />
            Published Research
          </motion.h3>

          <div className="space-y-8">
            {research.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.01, y: -2 }}
                className="glass-card hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="px-3 py-1 bg-purple-600/20 text-purple-600 rounded-full text-xs font-medium">
                        {paper.type}
                      </span>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {paper.date}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3 leading-tight">
                      {paper.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {paper.description}
                    </p>
                  </div>
                  
                  <motion.a
                    href={`https://doi.org/${paper.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 glass p-3 rounded-lg hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 mt-4 lg:mt-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">View Paper</span>
                  </motion.a>
                </div>

                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-800 dark:text-white">Key Contributions:</h5>
                  <div className="grid md:grid-cols-2 gap-2">
                    {paper.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/20 dark:border-white/10">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    DOI: {paper.doi}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-gray-800 dark:text-white flex items-center"
          >
            <Award className="w-8 h-8 mr-3 text-green-600" />
            Professional Certifications
          </motion.h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="glass-card hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-green-600/20 text-green-600 rounded-full text-xs font-medium">
                      Certificate
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{cert.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-800 dark:text-white">Skills Acquired:</h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white/20 dark:bg-white/10 rounded-full text-xs text-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/20 dark:border-white/10">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Certificate ID: {cert.certificateId || cert.certificateNo}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-gray-800 dark:text-white flex items-center"
          >
            <Award className="w-8 h-8 mr-3 text-yellow-600" />
            Awards & Recognition
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="glass-card hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color}`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                      {achievement.event}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}