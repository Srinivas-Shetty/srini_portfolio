import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`fixed w-full z-50 ${isScrolled ? "bg-gray-900/90 backdrop-blur-md" : "bg-transparent"
                } border-b border-gray-800/50 transition-all duration-300`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent"
                >
                    Srinivasa YR
                </motion.div>

                <nav className="hidden md:flex space-x-8">
                    {['Home', 'Skills', 'Projects','Certifications', 'About', 'Contact'].map((item) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            whileHover={{
                                scale: 1.1,
                                background: "linear-gradient(to right, #9f7aea, #3b82f6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}
                            className="text-gray-300 hover:text-white transition-colors font-medium"
                        >
                            {item}
                        </motion.a>
                    ))}
                </nav>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                    href="https://srinivas-assets.s3.us-east-1.amazonaws.com/Srinivas_Resume.pdf"
                >
                    Resume
                </motion.a>
            </div>
        </motion.header>
    );
};

export default Header;