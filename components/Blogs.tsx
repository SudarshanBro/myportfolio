'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Clock, ArrowRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: 'Edge Computing and Cloud Integration: Bridging the Gap Between Centralized and Distributed Computing',
    description: 'Exploring the convergence of edge computing and cloud technologies, examining how they work together to create more efficient and responsive computing architectures.',
    url: 'https://thinknew.tech/blog/edge-computing-and-cloud-integration-bridging-the-gap-between-centralized-and-distributed-computing',
    category: 'Cloud Computing',
    readTime: '8 min read',
    date: '2024-12-15',
    tags: ['Edge Computing', 'Cloud Integration', 'Distributed Systems']
  },
  {
    id: 2,
    title: 'Serverless Architecture in Web Development: The Evolution to 2025 and Beyond',
    description: 'A comprehensive look at serverless architecture trends, its impact on web development, and predictions for the future of cloud-native applications.',
    url: 'https://thinknew.tech/blog/serverless-architecture-in-web-development-the-evolution-to-2025-and-beyond',
    category: 'Web Development',
    readTime: '10 min read',
    date: '2024-12-10',
    tags: ['Serverless', 'Web Development', 'Cloud Architecture']
  },
  {
    id: 3,
    title: 'TanStack: Addressing Next.js Vulnerabilities',
    description: 'Deep dive into TanStack solutions for Next.js security vulnerabilities, providing practical approaches to enhance application security and performance.',
    url: 'https://thinknew.tech/blog/tanstack-addressing-next-js-vulnerabilities',
    category: 'Security',
    readTime: '6 min read',
    date: '2024-12-05',
    tags: ['TanStack', 'Next.js', 'Security', 'Vulnerabilities']
  }
];

export function Blogs() {
  return (
    <section id="blogs" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Blogs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Exploring cutting-edge technologies, industry trends, and technical insights through in-depth articles and analysis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-medium rounded-full">
                    {blog.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-3">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {blog.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/20 dark:bg-white/10 rounded text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {blog.tags.length > 2 && (
                    <span className="px-2 py-1 bg-purple-600/20 rounded text-xs font-medium text-purple-600">
                      +{blog.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <motion.a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Blogs Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://thinknew.tech/blog"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 glass-card px-8 py-4 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
          >
            <ExternalLink className="w-5 h-5" />
            <span className="font-medium">View All Blogs on ThinkNew.Tech</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 