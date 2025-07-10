import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "HR Project Management System",
      description: "Developed backend APIs using Node.js and Express.js to handle core HR functionalities. Integrated PostgreSQL for employee records and implemented JWT authentication with Socket.io for real-time notifications.",
      tags: ["Node.js", "Express.js", "Socket.io", "JWT", "PostgreSQL"],
      image: "https://img.freepik.com/premium-photo/human-resources-recruitment-people-networking-concept_31965-12986.jpg?w=1380",
      github: "#",
      live: "#",
      date: "August 2024"
    },
    {
      id: 2,
      title: "Automatic Reporting Tool",
      description: "Developed backend APIs for document entry and reporting features with JWT authentication. Built dynamic reporting modules and integrated PostgreSQL for large document datasets.",
      tags: ["Node.js", "Express.js", "JWT", "PostgreSQL"],
      image: "https://img.freepik.com/premium-vector/boy-is-looking-performance-chart_118167-6056.jpg?ga=GA1.1.1374752629.1747251941&semt=ais_hybrid&w=740",
      github: "#",
      live: "#",
      date: "January 2024"
    },
    {
      id: 3,
      title: "Better Blue Performance",
      description: "Developed responsive frontend components with React.js and Tailwind CSS. Built forms for complaint submission and integrated REST APIs for real-time status updates.",
      tags: ["React.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
      image: "https://img.freepik.com/premium-vector/policeman-cop-as-warranted-law-employee-talking-people-outdoor-vector-illustration_178650-44867.jpg?w=1380",
      github: "#",
      live: "#",
      date: "October 2023"
    },
    {
      id: 4,
      title: "Tuffy Kennels and Boarding",
      description: "Built a responsive website with React.js and Tailwind CSS. Integrated email functionality for user inquiries.",
      tags: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind"],
      image: "https://img.freepik.com/free-vector/vet-checking-up-many-dogs-hospital_1308-30035.jpg",
      github: "#",
      live: "#",
      date: "June 2023"
    }
  ];

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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my professional projects built to solve real-world problems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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