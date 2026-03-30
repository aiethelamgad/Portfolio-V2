import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = useMemo(() => [
    { icon: Github, href: 'https://github.com/aiethelamgad', label: 'GitHub' },
      { icon: Linkedin, href: 'https://www.linkedin.com/in/aiethelamgad', label: 'LinkedIn' },
      { icon: Mail, href: 'mailto:aiethel.amjad@gmail.com', label: 'Email' },
  ], []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <footer className="bg-card border-t border-border mt-10">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-accent mb-4">{'<AA />'}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting beautiful, functional digital experiences with modern web technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-accent mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2 text-sm">
                {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
                      aria-label={`Go to ${link} section`}
                    >
                      <span className="w-1 h-1 bg-accent rounded-full" aria-hidden="true" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-accent mb-4">Connect</h3>
            <div className="flex gap-4" role="list" aria-label="Social media links">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-secondary hover:bg-accent text-foreground hover:text-accent-foreground transition-all"
                    aria-label={`Visit my ${link.label}`}
                    title={link.label}
                    role="listitem"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border my-8" aria-hidden="true" />

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
        >
          <p>
            &copy; {currentYear} Aiethel Amgad. All rights reserved.
          </p>
          <p>
            Built using React, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
});

export default Footer;
