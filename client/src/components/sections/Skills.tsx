import { motion, Variants } from 'framer-motion';
import { memo, useMemo } from 'react';
import { skillsData } from '@/lib/skillsData';

const Skills = memo(function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Memoize skill categories
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' as const },
    },
    hover: {
      scale: 1.15,
      transition: { duration: 0.2 },
    },
  };

  const skillCategories = useMemo(
    () => Object.entries(skillsData).map(([key, category]) => ({ key, ...category })),
    []
  );

  return (
    <section
      id="skills"
            className="py-20 relative"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663073290344/B58jeHyc967LBypXwKiwRX/skills-pattern-Z6DzduLoB7GkshiDCNc27n.webp)',
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
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Technical Skills</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" aria-hidden="true" />

          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.key}
                variants={itemVariants}
                className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-colors"
              >
                {/* Category Title */}
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="flex flex-wrap gap-4 justify-center">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true }}
                      className="flex flex-col items-center gap-2 group cursor-pointer"
                      title={skill.name}
                    >
                      <div className="w-16 h-16 flex items-center justify-center bg-secondary rounded-lg group-hover:bg-accent/10 transition-colors">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-12 h-12 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-sm text-muted-foreground text-center group-hover:text-accent transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default Skills;
