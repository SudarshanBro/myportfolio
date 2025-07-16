'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Database, 
  Smartphone, 
  Brain, 
  Settings,
  Globe,
  FileText,
  Layers,
  Zap,
  Type,
  GitBranch,
  FileSpreadsheet,
  Users,
  Clock,
  MessageSquare,
  Target,
  Crown,
  Lightbulb,
  RefreshCw,
  Sparkles,
  Eye,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Box,
  Atom,
  Cpu,
  Server
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    color: 'from-purple-600 to-blue-600',
    skills: [
      { name: 'React.js', level: 95, icon: Atom },
      { name: 'HTML5', level: 98, icon: Box },
      { name: 'CSS3', level: 95, icon: Circle },
      { name: 'Tailwind CSS', level: 90, icon: Zap },
      { name: 'JavaScript', level: 92, icon: Code },
      { name: 'TypeScript', level: 90, icon: Type },
      { name: 'Next.js', level: 90, icon: Globe }
    ]
  },
  {
    title: 'Design & UI/UX',
    icon: Palette,
    color: 'from-pink-600 to-purple-600',
    skills: [
      { name: 'Figma', level: 85, icon: Square },
      { name: 'Responsive Design', level: 95, icon: Globe },
      { name: 'User Experience', level: 80, icon: Users },
      { name: 'Prototyping', level: 75, icon: Sparkles }
    ]
  },
  {
    title: 'Backend & Database',
    icon: Database,
    color: 'from-green-600 to-teal-600',
    skills: [
      { name: 'MySQL', level: 80, icon: Database },
      { name: 'Python', level: 88, icon: Cpu },
      { name: 'C/C++', level: 85, icon: Server },
      { name: 'Data Structures', level: 90, icon: Layers }
    ]
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: 'from-blue-600 to-cyan-600',
    skills: [
      { name: 'Flutter', level: 85, icon: Smartphone },
      { name: 'Cross Platform', level: 80, icon: Globe },
      { name: 'Mobile UI', level: 85, icon: Palette }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-orange-600 to-red-600',
    skills: [
      { name: 'Deep Learning', level: 85, icon: Brain },
      { name: 'CNN/LSTM', level: 80, icon: Layers },
      { name: 'NLP', level: 75, icon: MessageSquare },
      { name: 'Computer Vision', level: 78, icon: Eye }
    ]
  },
  {
    title: 'Tools & Others',
    icon: Settings,
    color: 'from-purple-500 to-red-900',
    skills: [
      { name: 'Git', level: 90, icon: GitBranch },
      { name: 'MySQL Workbench', level: 85, icon: Database },
      { name: 'Microsoft Office', level: 95, icon: FileSpreadsheet },
      { name: 'Project Management', level: 85, icon: Settings }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that enable me to build 
            innovative and scalable solutions across various domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300"
                  >
                    <skill.icon className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Time Management', icon: Clock },
              { name: 'Teamwork', icon: Users },
              { name: 'Communication', icon: MessageSquare },
              { name: 'Problem Solving', icon: Target },
              { name: 'Leadership', icon: Crown },
              { name: 'Critical Thinking', icon: Lightbulb },
              { name: 'Adaptability', icon: RefreshCw },
              { name: 'Creativity', icon: Sparkles }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card px-6 py-3 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-2">
                  <skill.icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}