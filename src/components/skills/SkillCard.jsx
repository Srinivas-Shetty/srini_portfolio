import { motion } from "framer-motion";

const SkillCard = ({ title, skills }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-all"
    >
      <h3 className="text-xl font-semibold text-white mb-6">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, type: "spring" }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;