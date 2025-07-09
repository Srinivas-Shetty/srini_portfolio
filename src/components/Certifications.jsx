import { motion } from "framer-motion";
import { FaAws, FaCode } from "react-icons/fa";
import cn_logo from '../assets/cn_logo.jpg';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: <FaAws className="text-3xl text-orange-500" />,
      description: "Validated skills in developing and maintaining AWS-based applications",
      badgeUrl: "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
      certUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/SQ6SHG527JBQQE98"
    },
    {
      id: 2,
      title: "Backend Development - Node js",
      issuer: "Coding Ninjas",
      date: "2022",
      icon: <FaCode className="text-3xl text-purple-500" />,
      description: "Mastered backend development with Node.js and related technologies",
      badgeUrl: cn_logo,
      certUrl: 'https://certificate.codingninjas.com/view/edaa442ae833c0b3'
    },
    {
      id: 3,
      title: "Frontend Development",
      issuer: "Coding Ninjas",
      date: "2022",
      icon: <FaCode className="text-3xl text-purple-500" />,
      description: "Mastered frontend development with React and modern JavaScript",
      badgeUrl: cn_logo,
      certUrl: 'https://certificate.codingninjas.com/view/d25c40d329ba8165'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900">
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Validated knowledge and technical skills through industry-recognized programs
          </p>
        </motion.div>

        {/* Certifications Grid - Now 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-all h-full"
            >
              <div className="flex flex-col h-full">
                {/* Badge Image */}
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-600/10 blur-md"></div>
                    <img 
                      src={cert.badgeUrl} 
                      alt={`${cert.title} badge`} 
                      className="relative z-10 w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2 justify-center">
                    {cert.icon}
                    <h3 className="text-lg font-bold text-white text-center">{cert.title}</h3>
                  </div>
                  <div className="flex justify-center gap-2 text-sm mb-3">
                    <span className="text-gray-400">{cert.issuer}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">{cert.date}</span>
                  </div>
                  <p className="text-gray-400 text-sm text-center mb-4">{cert.description}</p>
                </div>

                {/* View Button */}
                <div className="flex justify-center mt-auto">
                  <motion.a
                    href={cert.certUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-300 transition-colors"
                  >
                    View Credential
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;