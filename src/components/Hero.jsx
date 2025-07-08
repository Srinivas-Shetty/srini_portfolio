import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const floatingVariants = {
        initial: { y: 0 },
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div id="home" className="relative bg-gray-900 overflow-hidden min-h-screen flex items-center">
            {/* Animated background elements */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full opacity-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 2 }}
            >
                <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-70 mix-blend-multiply"></div>
                <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-70 mix-blend-multiply"></div>
            </motion.div>

            {/* Main content */}
            <div className="relative z-10 container mx-auto px-6 py-24">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Text content */}
                    <div
                        ref={ref}
                        className="lg:w-1/2 mb-16 lg:mb-0"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Srinivasa Y R</span>
                            </h1>

                            <div className="text-2xl md:text-3xl font-medium text-gray-300 mb-8 h-12">
                                <TypeAnimation
                                    sequence={[
                                        'Full Stack Developer',
                                        1000,
                                        'MERN Specialist',
                                        1000,
                                        'Problem Solver',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </div>

                            <p className="text-lg text-gray-400 mb-10 max-w-lg">
                                I build exceptional digital experiences with modern web technologies.
                                Currently crafting the future one line of code at a time.
                            </p>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a
                                    href="#contact"
                                    className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                                >
                                    <span className="relative z-10">Get In Touch</span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    <span className="absolute -inset-2 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Animated illustration */}
                    <motion.div
                        className="lg:w-1/2 flex justify-center"
                        variants={floatingVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.div
                            className="relative w-64 h-64 md:w-80 md:h-80"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Gradient glow background */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 blur-xl opacity-30 animate-pulse" />

                            {/* Image container */}
                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                <motion.div
                                    className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-gray-700 overflow-hidden relative group"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {/* Image with fallback */}
                                    <img
                                        src="https://videos.openai.com/vg-assets/assets%2Ftask_01jzn11et2ehab4qkjvf9vrj4q%2F1751978716_img_1.webp?st=2025-07-08T10%3A58%3A13Z&se=2025-07-14T11%3A58%3A13Z&sks=b&skt=2025-07-08T10%3A58%3A13Z&ske=2025-07-14T11%3A58%3A13Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=s35nugdar1E2FdnLbYFOwFNNc1tY0vCucNwRyhn4LiQ%3D&az=oaivgprodscus"
                                        alt="Professional Developer"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            const fallback = e.target.parentElement.querySelector('.fallback');
                                            fallback.style.display = 'flex';
                                        }}
                                    />

                                    {/* Fallback content (hidden by default) */}
                                    <div className="fallback hidden absolute inset-0 bg-gray-800 items-center justify-center">
                                        <span className="text-4xl text-gray-400">👨‍💻</span>
                                    </div>

                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                                        boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)'
                                    }} />
                                </motion.div>
                            </div>

                            {/* Floating tech badges */}
                            <div className="absolute inset-0 pointer-events-none">
                                {['React', 'Node',].map((tech, i) => (
                                    <motion.span
                                        key={tech}
                                        className="absolute text-xs font-mono font-bold text-white bg-gray-800/80 px-2 py-1 rounded-full"
                                        initial={{
                                            x: 0,
                                            y: 0,
                                            opacity: 0
                                        }}
                                        animate={{
                                            x: Math.cos(i * (2 * Math.PI / 3)) * 120,
                                            y: Math.sin(i * (2 * Math.PI / 3)) * 120,
                                            opacity: 1
                                        }}
                                        transition={{
                                            delay: 0.3 + i * 0.1,
                                            type: "spring",
                                            stiffness: 50
                                        }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
                    <motion.div
                        className="w-1 h-2 bg-gray-400 rounded-full mt-2"
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;