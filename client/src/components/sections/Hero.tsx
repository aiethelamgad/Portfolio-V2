import { motion, Variants } from 'framer-motion';
import profileImg from '@/images/profile-photo.png';
import Typewriter from 'typewriter-effect';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { memo, useMemo } from 'react';

const Hero = memo(function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  // Memoize social links
  const socialLinks = useMemo(
    () => [
      { icon: Github, href: 'https://github.com/aiethelamgad', label: 'GitHub' },
      { icon: Linkedin, href: 'https://www.linkedin.com/in/aiethelamgad', label: 'LinkedIn' },
      { icon: Mail, href: 'mailto:aiethel.amjad@gmail.com', label: 'Email' },
    ],
    []
  );

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663073290344/B58jeHyc967LBypXwKiwRX/hero-bg-43zG5RyTLKvtguiAZc9p72.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" aria-hidden="true" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 relative z-10 text-center"
      >
        {/* Profile Photo */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
            <img
              src={profileImg}
              alt="Profile photo"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight"
        >
          Hi, I'm <span className="text-accent">Aiethel Amgad</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground mb-6 text-center"
        >
          <span>
            <Typewriter
              options={{
                strings: ["Frontend Web Developer", "Full-Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            /> </span>


        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Junior Software Developer specializing in React, TypeScript, and Node.js, building responsive interfaces and scalable web applications. Passionate about clean code, performance, and creating seamless user experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <ScrollLink to="projects" smooth={true} duration={500}>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full sm:w-auto"
              aria-label="View my projects"
            >
              View My Projects
            </Button>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 w-full sm:w-auto"
              aria-label="Contact me"
            >
              Get In Touch
            </Button>
          </ScrollLink>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-10"
          role="list"
        >
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
                className="p-3 rounded-lg bg-secondary hover:bg-accent/20 transition-colors text-foreground hover:text-accent"
                aria-label={`Visit my ${link.label}`}
                title={`Visit my ${link.label}`}
                role="listitem"
              >
                <Icon size={22} aria-hidden="true" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="flex justify-center"
        >
          <ScrollLink to="about" smooth={true} duration={500}>
            <button
              className="p-2 rounded-full border border-accent/30 cursor-pointer hover:border-accent transition-colors"
              aria-label="Scroll to about section"
              title="Scroll down"
            >
              <ChevronDown size={22} className="text-accent" aria-hidden="true" />
            </button>
          </ScrollLink>
        </motion.div>
      </motion.div>
    </section>
  );
});

export default Hero;
