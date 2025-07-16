'use client';

import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-white/20 dark:border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Sudarshan Acharya
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Electronics Engineer & Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com/SudarshanBro', label: 'GitHub' },
              { icon: Mail, href: 'mailto:avilashisudarshan@gmail.com', label: 'Email' },
              { icon: Linkedin, href: 'https://linkedin.com/in/sudarshan-acharya', label: 'LinkedIn' },
              { icon: Facebook, href: 'https://www.facebook.com/maheshacharya.0126', label: 'Facebook' },
              { icon: Instagram, href: 'https://www.instagram.com/ach_mahesh_2.0/', label: 'Instagram' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="glass-card p-3 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </motion.a>
            ))}
          </div>



          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Sudarshan Acharya. All rights reserved.
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-1"
            >
              <span>Made with</span>
              <motion.span
                animate={{ scale: [0.8, 1.6, 1.2] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>
              <span>using Next.js</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}