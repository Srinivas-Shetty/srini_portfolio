import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import TechCloud from "./TechCloud";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies I've mastered and tools I use daily to build exceptional applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          <SkillCard 
            title="Frontend Development" 
            skills={[
              { name: "React", level: 95 },
              { name: "Next.js", level: 85 },
              { name: "Tailwind CSS", level: 90 },
              { name: "JavaScript", level: 95 }
            ]} 
          />
          
          <SkillCard 
            title="Backend Development" 
            skills={[
              { name: "Node.js", level: 90 },
              { name: "Express", level: 85 },
              { name: "MongoDB", level: 80 },
              { name: "REST APIs", level: 88 }
            ]} 
          />
        </motion.div>

        {/* Tech Cloud */}
        <TechCloud />
      </div>
    </section>
  );
};

export default Skills;