import { motion } from "framer-motion";
import { useState } from "react";

const TechCloud = () => {
  const technologies = [
    "React", "Node.js", "MongoDB", "Express", "Next.js", 
    "Tailwind CSS", "TypeScript", "GraphQL", "Docker", "AWS",
    "Git", "Jest", "Redux", "Framer Motion", "PostgreSQL"
  ];

  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <div className="text-center">
      <h3 className="text-2xl font-medium text-white mb-8">Technologies I Work With</h3>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {technologies.map((tech) => (
          <motion.button
            key={tech}
            whileHover={{ scale: 1.1, backgroundColor: "#3B82F6" }}
            whileTap={{ scale: 0.95 }}
            animate={{
              backgroundColor: selectedTech === tech ? "#3B82F6" : "#1F2937",
              color: selectedTech === tech ? "#FFFFFF" : "#D1D5DB"
            }}
            onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
            className="px-4 py-2 rounded-full border border-gray-700 font-medium transition-colors"
          >
            {tech}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default TechCloud;