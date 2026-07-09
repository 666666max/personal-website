import { motion } from "framer-motion";
import { Code, Image, BookOpen, Database, Globe, Sparkles } from "lucide-react";

const projects = [
  {
    icon: Image,
    title: "AI生图作品集",
    description: "使用Midjourney和Stable Diffusion创作的数字艺术作品集，涵盖人物、风景、概念设计等多种风格。",
    tags: ["AI生图", "Midjourney", "Stable Diffusion"],
    color: "accent",
    stats: { projects: "500+", likes: "10K+" },
  },
  {
    icon: BookOpen,
    title: "肿瘤文献数据库",
    description: "参与构建的肿瘤文献数据平台，整合220+篇PubMed文献信息，支持药物、细胞系、通路等多维检索。",
    tags: ["文献分析", "数据规整", "PubMed"],
    color: "primary",
    stats: { projects: "220+", likes: "学术引用" },
  },
  {
    icon: Globe,
    title: "时空数据分析平台",
    description: "基于分布式大数据框架开发的时空数据分析平台，支持时空轨迹分析和多维数据可视化。",
    tags: ["时空大数据", "分布式框架", "GIS"],
    color: "purple",
    stats: { projects: "1", likes: "课程项目" },
  },
  {
    icon: Database,
    title: "空间数据库系统",
    description: "设计并实现的结构化+时空混合数据持久层，支持高效的空间数据存储和查询。",
    tags: ["空间数据库", "PostgreSQL", "数据持久化"],
    color: "primary",
    stats: { projects: "1", likes: "专业项目" },
  },
  {
    icon: Code,
    title: "个人作品集网站",
    description: "使用React和TypeScript开发的个人作品集网站，展示个人技能、项目和兴趣爱好。",
    tags: ["React", "TypeScript", "Tailwind"],
    color: "accent",
    stats: { projects: "1", likes: "持续更新" },
  },
  {
    icon: Sparkles,
    title: "AI诗歌创作",
    description: "探索AI在文学创作中的应用，使用GPT等模型创作诗歌和散文，发表多篇作品。",
    tags: ["AI创作", "诗歌", "GPT"],
    color: "purple",
    stats: { projects: "50+", likes: "作品发表" },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.06)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-600 text-sm font-medium mb-4">
            项目作品
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            我的项目
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            将技术与创意相结合，用代码和设计实现梦想
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl p-6 border border-primary-100 hover:border-primary-300 transition-all duration-500 card-shadow hover:card-shadow-hover"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${project.color === "primary" ? "bg-primary-100" : project.color === "accent" ? "bg-accent-100" : "bg-purple-100"} group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className={`w-7 h-7 ${project.color === "primary" ? "text-primary-500" : project.color === "accent" ? "text-accent-500" : "text-purple-500"}`} />
              </div>

              <h3 className="font-display text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-50 text-primary-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-xs text-gray-500">作品数</div>
                    <div className="text-sm font-semibold text-gray-800">{project.stats.projects}</div>
                  </div>
                  <div className="w-px h-8 bg-gray-200" />
                  <div>
                    <div className="text-xs text-gray-500">认可度</div>
                    <div className="text-sm font-semibold text-gray-800">{project.stats.likes}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 p-6 bg-white rounded-2xl border border-primary-100 card-shadow mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500">GitHub</div>
                <div className="text-sm font-semibold text-gray-800">@666666max</div>
              </div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500">Gitee</div>
                <div className="text-sm font-semibold text-gray-800">@zhang-jiajia666</div>
              </div>
            </div>
          </div>
          <a
            href="https://github.com/666666max"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-purple text-white rounded-xl font-medium hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 group"
          >
            <span>查看更多项目</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
