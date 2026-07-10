import { motion } from "framer-motion";
import { Code, Database, Palette, Brain, Globe, FileText } from "lucide-react";

const skillCategories = [
  {
    name: "编程技术",
    icon: Code,
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Java", level: 70 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    name: "时空大数据",
    icon: Globe,
    skills: [
      { name: "时空数据建模", level: 85 },
      { name: "分布式大数据框架", level: 80 },
      { name: "空间数据库", level: 85 },
      { name: "时空轨迹分析", level: 75 },
      { name: "多维数据统计", level: 80 },
      { name: "GIS技术", level: 70 },
    ],
  },
  {
    name: "AI创作",
    icon: Brain,
    skills: [
      { name: "AI生图", level: 95 },
      { name: "Midjourney", level: 90 },
      { name: "Stable Diffusion", level: 85 },
      { name: "Prompt Engineering", level: 90 },
      { name: "AI写诗", level: 80 },
      { name: "AI辅助创作", level: 85 },
    ],
  },
  {
    name: "科研能力",
    icon: FileText,
    skills: [
      { name: "文献研读", level: 90 },
      { name: "数据提取", level: 85 },
      { name: "数据规整", level: 88 },
      { name: "PubMed检索", level: 85 },
      { name: "标准编码匹配", level: 80 },
      { name: "科研建模", level: 75 },
    ],
  },
  {
    name: "设计工具",
    icon: Palette,
    skills: [
      { name: "Figma", level: 80 },
      { name: "Photoshop", level: 75 },
      { name: "AI绘画工具", level: 95 },
      { name: "视频剪辑", level: 70 },
    ],
  },
  {
    name: "数据库",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 70 },
      { name: "空间数据库", level: 85 },
    ],
  },
];

const featuredSkills = [
  { name: "AI生图", count: "数千+" },
  { name: "文献研读", count: "220+" },
  { name: "时空数据", count: "专业级" },
  { name: "编程项目", count: "50+" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-bg relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-600 text-sm font-medium mb-4">
            技能专长
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            我的技能
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            从技术开发到AI创作，从数据分析到命理研究，多领域技能的融合与创新
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {featuredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 text-center border border-primary-100 hover:border-primary-300 transition-all duration-300 group card-shadow hover:card-shadow-hover"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform">
                {skill.count}
              </div>
              <div className="text-gray-700 font-medium">{skill.name}</div>
              <div className="text-gray-500 text-xs mt-1">经验积累</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white rounded-xl p-6 border border-primary-100 hover:border-primary-300 transition-all duration-300 card-shadow hover:card-shadow-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary-500" />
                </div>
                <h3 className="font-display text-lg font-semibold text-gray-800">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 text-sm">{skill.name}</span>
                      <span className="text-primary-600 text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-primary-50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05, ease: "easeOut" }}
                        className="h-full bg-gradient-purple rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
