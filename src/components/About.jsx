import { motion } from "framer-motion";
import { FaCode, FaServer, FaPalette } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const About = () => {
  const skills = [
    { icon: <FaCode className="text-2xl" />, title: "Frontend", items: ["React", "Next.js", "Tailwind"] },
    { icon: <FaServer className="text-2xl" />, title: "Backend", items: ["Node.js", "Express", "MongoDB"] },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let me introduce myself and what I bring to the table
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile Image (Animated) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
              <img 
                src="https://videos.openai.com/vg-assets/assets%2Ftask_01jzn11et2ehab4qkjvf9vrj4q%2F1751978716_img_1.webp?st=2025-07-08T10%3A58%3A13Z&se=2025-07-14T11%3A58%3A13Z&sks=b&skt=2025-07-08T10%3A58%3A13Z&ske=2025-07-14T11%3A58%3A13Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=s35nugdar1E2FdnLbYFOwFNNc1tY0vCucNwRyhn4LiQ%3D&az=oaivgprodscus" 
                alt="Profile" 
                className="relative z-10 w-64 h-64 object-cover rounded-2xl border-2 border-gray-700 group-hover:border-transparent transition-all"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Full Stack Developer</h3>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm a passionate developer with 3+ years of experience building web applications. 
              My journey began with frontend development and evolved into full stack expertise. 
              I believe in writing clean, efficient code while creating delightful user experiences.
            </p>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all"
                >
                  <div className="text-cyan-400 mb-3">{skill.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-3">{skill.title}</h4>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Download Resume Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://srinivas-assets.s3.us-east-1.amazonaws.com/Srinivas_Resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <FiDownload className="mr-2" />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;