import { Menu, X, Download } from 'lucide-react';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Memoize nav items to prevent unnecessary re-renders
  const navItems = useMemo(
    () => [
      { label: 'Home', to: 'home' },
      { label: 'About', to: 'about' },
      { label: 'Skills', to: 'skills' },
      { label: 'Projects', to: 'projects' },
      { label: 'Contact', to: 'contact' },
    ],
    []
  );

  // Throttled scroll handler for performance
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu when clicking a link
  const handleNavClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Handle resume download
  const handleDownloadResume = useCallback(() => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/assets/resume/Aiethel Amgad CV.pdf'; // public folder path
    link.download = 'Aiethel Amgad CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
        : 'bg-transparent'
        }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold"
          >
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer text-accent hover:text-accent/80 transition-colors"
              aria-label="Go to home"
            >
              {'<AA />'}
            </ScrollLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-foreground hover:text-accent transition-colors cursor-pointer font-medium"
                role="button"
                tabIndex={0}
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>

          {/* Download Resume & Mobile Menu */}
          <div className="flex items-center gap-4">

            {/* Resume Download Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-accent hover:bg-accent/90 text-background font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
              aria-label="Download resume"
              title="Download my resume"
            >
              <Download size={18} aria-hidden="true" />
              <span>Resume</span>
            </motion.button>

            {/* Mobile Resume Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="sm:hidden p-2 rounded-lg bg-accent hover:bg-accent/90 text-background transition-colors"
              aria-label="Download resume"
              title="Download my resume"
            >
              <Download size={20} aria-hidden="true" />
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-secondary hover:bg-accent/20 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X size={24} className="text-foreground" aria-hidden="true" />
              ) : (
                <Menu size={24} className="text-foreground" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 pt-4 border-t border-border space-y-3"
            id="mobile-menu"
            role="menu"
          >
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="block text-foreground hover:text-accent transition-colors cursor-pointer font-medium py-2"
                onClick={handleNavClick}
                role="menuitem"
              >
                {item.label}
              </ScrollLink>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
