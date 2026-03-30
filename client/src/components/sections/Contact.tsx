import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Send } from 'lucide-react';
import { useState, useCallback, memo } from 'react';
import SimpleClock from '@/components/SimpleClock';

const Contact = memo(function Contact() {
  // State for copy feedback
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.320, 1] },
    },
  };

  // Handle copy to clipboard
  const handleCopy = useCallback((value: string, id: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    });
  }, []);

  const contactItems = [
    {
      id: 'email',
      label: 'Email',
      value: 'aiethel.amjad@gmail.com',
      action: 'mailto:aiethel.amjad@gmail.com',
      icon: Mail,
      copyable: true,
    },
    {
      id: 'phone',
      label: 'Phone',
      value: '+20 111 699 6307',
      action: 'tel:+201116996307',
      icon: Phone,
      copyable: true,
    },
    {
      id: 'location',
      label: 'Location',
      value: 'Alexandria, Egypt',
      action: 'https://maps.app.goo.gl/wHpBjKZPDaWyusyZ7',
      icon: MapPin,
      copyable: true,
    },
  ];

  const socialLinks = [
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/aiethelamgad',
      icon: Github,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aiethelamgad',
      icon: Linkedin,
    },
  ];

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -150px 0px' }}
        >
          {/* Section Header - Refined Typography */}
          <motion.div variants={itemVariants} className="max-w-3xl mb-20">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Get In Touch</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Let's create something
              <span className="block text-accent">extraordinary together</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Whether you have a project in mind, want to collaborate, or just want to chat about technology and design, I'm always open to meaningful conversations. Reach out through any channel that works best for you.
            </p>
          </motion.div>

          {/* Main Contact Layout - Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* Left Column - Contact Methods */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
                  Direct Contact
                </h3>

                {/* Contact Items */}
                <div className="space-y-6">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const isCopied = copiedId === item.id;
                    const isHovered = hoveredId === item.id;

                    return (
                      <motion.div
                        key={item.id}
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className="group"
                      >
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <motion.div
                            animate={{ y: isHovered ? -2 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="pt-1 flex-shrink-0"
                          >
                            <Icon size={20} className="text-accent" aria-hidden="true" />
                          </motion.div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                              {item.label}
                            </p>
                            <motion.a
                              href={item.action}
                              onClick={(e) => {
                                if (item.copyable && item.action === '#') {
                                  e.preventDefault();
                                  handleCopy(item.value, item.id);
                                }
                              }}
                              className="text-foreground font-medium hover:text-accent transition-colors duration-300 break-all cursor-pointer group/link inline-block"
                              whileHover={{ x: 4 }}
                            >
                              {item.value}
                            </motion.a>

                            {/* Copy Button */}
                            {item.copyable && (
                              <motion.button
                                onClick={() => handleCopy(item.value, item.id)}
                                className="ml-2 text-xs text-muted-foreground hover:text-accent transition-colors duration-300 opacity-0 group-hover:opacity-100"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {isCopied ? '✓ Copied' : 'Copy'}
                              </motion.button>
                            )}
                          </div>
                        </div>

                        {/* Subtle underline on hover */}
                        <motion.div
                          className="h-px bg-accent/20 mt-4"
                          animate={{ scaleX: isHovered ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ originX: 0 }}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
                  Follow Along
                </h3>

                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-lg border border-accent/20 text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300 group"
                        aria-label={`Visit my ${social.label}`}
                        title={social.label}
                      >
                        <Icon size={20} aria-hidden="true" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Call to Action & Message Preview */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              {/* CTA Card with refined design */}
              <div className="relative">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-50 blur-2xl" aria-hidden="true" />

                {/* Card content */}
                <div className="relative p-8 lg:p-12 rounded-2xl border border-accent/10 bg-card/30 backdrop-blur-sm">
                  <div className="space-y-6">
                    {/* Heading */}
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                        Let's talk about your next project
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        I'm interested in freelance opportunities, collaborations, and interesting projects. If you have something you'd like to discuss, feel free to reach out.
                      </p>
                    </div>

                    {/* Quick Response Info */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-3 pt-4 border-t border-accent/10"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent/60 animate-pulse" aria-hidden="true" />
                      <p className="text-sm text-muted-foreground">
                        <span className="text-accent font-semibold">Typically respond</span> within 24 hours
                      </p>
                    </motion.div>

                    {/* Primary CTA Button */}
                    <motion.a
                      href="mailto:aiethel.amjad@gmail.com"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group/btn"
                    >
                      <Send size={18} aria-hidden="true" />
                      Send me an email
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight size={16} aria-hidden="true" />
                      </motion.div>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Additional Info Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 pt-10 border-t border-accent/10"
              >
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                      Availability
                    </p>
                    <p className="text-foreground font-medium">
                      Open for opportunities
                    </p>
                  </div>
                  <div>
                    <SimpleClock />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom CTA - Alternative Contact Method */}
          <motion.div
            variants={itemVariants}
            className="mt-20 pt-20 border-t border-accent/10 text-center"
          >
            <p className="text-muted-foreground mb-6">
              Prefer a different way to connect?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://www.linkedin.com/in/aiethelamgad"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-lg border border-accent/20 text-foreground hover:border-accent/50 hover:text-accent transition-all duration-300 text-sm font-medium"
              >
                Connect on LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/aiethelamgad"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-lg border border-accent/20 text-foreground hover:border-accent/50 hover:text-accent transition-all duration-300 text-sm font-medium"
              >
                Check my GitHub
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

export default Contact;
