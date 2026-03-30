import { motion, Variants, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useState, useMemo, memo, useCallback, useEffect } from 'react';
import { projects, categories } from '@/lib/projectsData';

const Projects = memo(function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: projects.length };
    projects.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Memoize filtered projects
  const filteredProjects = useMemo(
    () =>
      activeFilter === 'all'
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  // Memoize filter handler
  const handleFilterChange = useCallback((filterId: string) => {
    setActiveFilter(filterId);
  }, []);

  // ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [selectedImage]);

// Add empty state component
  const EmptyState = memo(() => (
    <motion.div
      variants={itemVariants}
      className="col-span-full text-center py-16"
      role="alert"
    >
      <div className="text-6xl mb-4 opacity-40">📭</div>
      <h3 className="text-2xl font-bold text-foreground mb-2">No projects found</h3>
      <p className="text-muted-foreground max-w-md mx-auto">
        No projects match the selected filter. Try another category.
      </p>
    </motion.div>
  ));

  return (
    <section
      id="projects"
      className="py-20 relative"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663073290344/B58jeHyc967LBypXwKiwRX/projects-bg-ACFWugkkSjLqarksJdEAvv.webp)',
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
            <h2 className="section-title">Featured Projects</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" aria-hidden="true" />
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
            role="group"
            aria-label="Filter projects"
          >
{categories.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              return (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleFilterChange(cat.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeFilter === cat.id
                      ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/30'
                      : 'bg-secondary text-foreground hover:bg-secondary/80 border border-border'
                  }`}
                  aria-pressed={activeFilter === cat.id}
                  aria-label={`Filter by ${cat.label} (${count})`}
                >
                  <span className="items-center gap-0.5">
                    {cat.label}
                    <span className="ml-2 text-xs opacity-75">
                      ({count})
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
<motion.div
            layout
            variants={containerVariants}
            initial="hidden"
            animate={filteredProjects.length > 0 ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={`${project.id}-${activeFilter}`}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="glass-effect rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all group"
                  role="listitem"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-secondary">
                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer hover:ring-2 hover:ring-accent/50 rounded"
                      loading="lazy"
                      onClick={() => setSelectedImage({ src: project.image, title: project.title })}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors pointer-events-none" aria-hidden="true" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="tech-badge-accent text-xs"
                          role="listitem"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary hover:bg-accent/20 text-foreground hover:text-accent rounded-lg transition-colors"
                          aria-label={`View ${project.title} code on GitHub`}
                          title="View code"
                        >
                          <Github size={16} aria-hidden="true" />
                          <span className="text-sm font-medium">Code</span>
                        </motion.a>
                      )}
                      {project.liveDemo && (
                        <motion.a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg transition-colors"
                          aria-label={`View ${project.title} live demo`}
                          title="View live demo"
                        >
                          <ExternalLink size={16} aria-hidden="true" />
                          <span className="text-sm font-medium">Live</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <EmptyState />
            )}
          </motion.div>

          {/* Image Lightbox Modal */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-2xl bg-black/30 overflow-y-auto"
                onClick={(e) => e.target === e.currentTarget && setSelectedImage(null)}
                role="dialog"
                aria-label={`Full size view of ${selectedImage.title}`}
                aria-modal="true"
              >
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="relative max-w-4xl max-h-[80vh] backdrop-blur-xl rounded-3xl shadow-2xl p-0 glass-effect border-transparent"
                >
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-auto max-w-[95vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl mx-auto block"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
});

export default Projects;
