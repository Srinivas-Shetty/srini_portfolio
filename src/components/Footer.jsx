import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 border-t border-gray-800 py-12"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links with Animated Icons */}
          <div className="flex gap-6">
            <motion.a
              href="https://github.com/Srinivas-Shetty"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-800 rounded-full border border-gray-700 hover:border-purple-500/50 transition-all"
              aria-label="GitHub"
            >
              <FiGithub className="text-2xl text-gray-300 hover:text-purple-400 transition-colors" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/srinivasa-yr-7a53b021a/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-800 rounded-full border border-gray-700 hover:border-blue-500/50 transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-2xl text-gray-300 hover:text-blue-400 transition-colors" />
            </motion.a>

            <motion.a
              href="mailto:srinivasyr2000@gmail.com"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-800 rounded-full border border-gray-700 hover:border-cyan-500/50 transition-all"
              aria-label="Email"
            >
              <FiMail className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors" />
            </motion.a>
          </div>

          {/* Copyright Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm text-center"
          >
            © {new Date().getFullYear()} Srinivasa YR. All rights reserved.
          </motion.p>

        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;