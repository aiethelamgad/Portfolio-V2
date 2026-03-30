import { motion, Variants } from 'framer-motion';
import { Code2, Zap, Target } from 'lucide-react';
import { memo, useMemo } from 'react';

const About = memo(function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Memoize highlights to prevent unnecessary re-renders
  const highlights = useMemo(
    () => [
      {
        icon: Code2,
        title: 'Clean Code',
        description: 'Writing maintainable, scalable code following best practices and design patterns.',
      },
      {
        icon: Zap,
        title: 'Performance',
        description: 'Optimizing applications for speed and efficiency across all devices.',
      },
      {
        icon: Target,
        title: 'User-Focused',
        description: 'Creating intuitive interfaces that prioritize user experience and accessibility.',
      },
    ],
    []
  );

  // Memoize key strengths
  const keyStrengths = useMemo(
    () => ['Full-Stack Development', 'React & Modern JavaScript', 'UI/UX Design', 'Database Design', 'API Development'],
    []
  );

  return (
    <section
      id="about"
      className="py-20 relative"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663073290344/B58jeHyc967LBypXwKiwRX/about-bg-Axb79t2VRswW2HMQJ27Hxh.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">About Me</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" aria-hidden="true" />
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                I’m a Software Engineering graduate passionate about frontend development and building interactive web applications. With hands-on experience in React.js, JavaScript, Node.js, and database optimization, I focus on creating clean, responsive, and user-friendly solutions that bring ideas to life. My projects — including an AI-powered voice assistant — reflect my drive to combine innovation with real-world impact.              </p>

              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                I’ve successfully completed the DEPI React Developer program, where I strengthened my expertise in modern frontend technologies and scalable application development. Beyond technical skills, I bring strong communication, problem-solving, and adaptability, with a keen attention to detail that ensures high-quality results. I’m driven to build performant, user-centered applications and continuously grow as a full-stack developer. </p>


              <div className="pt-4">
                <h3 className="text-xl font-bold text-accent mb-4">Key Strengths</h3>
                <ul className="space-y-3" role="list">
                  {keyStrengths.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-foreground" role="listitem">
                      <span className="w-2 h-2 bg-accent rounded-full" aria-hidden="true" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 gap-6"
              role="list"
            >
              {highlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="glass-effect p-6 rounded-lg border border-border hover:border-accent/50 transition-all"
                    role="listitem"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10 flex-shrink-0">
                        <Icon size={24} className="text-accent" aria-hidden="true" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {highlight.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default About;
