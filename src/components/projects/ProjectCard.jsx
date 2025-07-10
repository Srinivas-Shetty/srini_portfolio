import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/30 transition-all h-full"
    >
      {/* Project Image */}
      <div className="h-48 bg-gray-700 relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <span className="text-sm text-gray-400">{project.date}</span>
        </div>
        <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-gray-900 text-sm text-purple-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {/* <div className="flex gap-4 mt-auto">
          <a 
            href={project.github}
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub /> Code
          </a>
          <a 
            href={project.live}
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <FiExternalLink /> View
          </a>
        </div> */}
      </div>
    </motion.div>
  );
};

export default ProjectCard;