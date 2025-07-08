import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-[999] p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all"
      aria-label="Back to top"
    >
      <FiArrowUp className="text-white text-xl" />
    </motion.button>
  );
};

export default BackToTop;