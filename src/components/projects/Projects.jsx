import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured online store with cart, checkout, and admin dashboard",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQkQ6ol2ONe_dGhI2H54uiC6760mzcnCCIA&s",
      github: "#",
      live: "#",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Real-time collaborative task board with drag-and-drop interface",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQkQ6ol2ONe_dGhI2H54uiC6760mzcnCCIA&s",
      github: "#",
      live: "#",
      category: "Frontend"
    },
       {
      id: 3,
      title: "E-Commerce Platform",
      description: "Full-featured online store with cart, checkout, and admin dashboard",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQkQ6ol2ONe_dGhI2H54uiC6760mzcnCCIA&s",
      github: "#",
      live: "#",
      category: "Full Stack"
    },
    // Add 3-5 more projects
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-900">
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
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my proudest creations. Each project was built to solve real problems.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {["All", "Full Stack", "Frontend", "Backend"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === item
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {item}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;