'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Code } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'B.E. Electronics, Communication and Information from Tribhuvan University',
    color: 'text-purple-600'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Full Stack Developer with expertise in React.js, AI/ML, and Mobile Apps',
    color: 'text-blue-600'
  },
  {
    icon: Award,
    title: 'Achievements',
    description: 'Silver Medal in Robo-Soccer, Gold Medal in Inter College Hackathon',
    color: 'text-green-600'
  },
  {
    icon: Users,
    title: 'Leadership',
    description: 'Strong teamwork and leadership skills with proven project management',
    color: 'text-orange-600'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Electronics Engineer and Full Stack Developer with a deep interest in AI/ML, 
            mobile development, and creating innovative solutions. My journey combines technical expertise 
            with creative problem-solving to build impactful applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card text-center hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex p-4 rounded-full ${item.color} bg-opacity-10 mb-4`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently pursuing my B.E. in Electronics, Communication and Information at Tribhuvan University, 
                I've developed a strong foundation in both hardware and software development. My academic journey 
                has been complemented by hands-on experience in building real-world applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My expertise spans from frontend development with React.js to backend systems, mobile applications 
                with Flutter, and cutting-edge AI/ML projects. I'm particularly passionate about developing solutions 
                that bridge the gap between technology and real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Beyond coding, I enjoy participating in hackathons, contributing to open-source projects, and 
                continuously learning new technologies to stay at the forefront of innovation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white">Core Values</h4>
                <div className="space-y-3">
                  {[
                    'Innovation through Technology',
                    'Continuous Learning & Growth',
                    'Quality Code & Best Practices',
                    'Collaborative Problem Solving'
                  ].map((value, index) => (
                    <motion.div
                      key={value}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Let's Connect
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}