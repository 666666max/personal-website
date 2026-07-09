import { motion } from "framer-motion";
import { BookOpen, GraduationCap, FlaskConical, Globe, Award } from "lucide-react";

const experiences = [
  {
    year: "2024 - 2028",
    title: "软件工程专业",
    company: "中南大学",
    description: "主修软件工程，系统学习数据结构、算法、操作系统、计算机网络等核心课程。",
    icon: GraduationCap,
    color: "primary",
  },
  {
    year: "2025 - 2027",
    title: "时空大数据微专业",
    company: "中南大学",
    description: "系统学习时空数据建模、分布式大数据框架、空间数据库、时空轨迹分析、多维数据统计，具备结构化+时空混合数据持久层开发与数据分析能力。",
    icon: Globe,
    color: "accent",
  },
  {
    year: "2025 - 至今",
    title: "文献数据助理",
    company: "抗肿瘤药物课题组",
    description: "研读220+篇PubMed肿瘤外文文献，提取药物、细胞系、作用通路等信息，多数据库匹配标准编码，分类规整结构化数据集，标记异常文献，支撑科研建模。",
    icon: FlaskConical,
    color: "purple",
  },
];

const highlights = [
  { icon: BookOpen, title: "AI生图创作", desc: "精通多种AI绘画工具，创作数百幅高质量数字艺术作品" },
  { icon: Award, title: "写作特长", desc: "擅长写诗、创作，文字细腻有感染力" },
  { icon: Globe, title: "跨文化研究", desc: "热爱各种不同文化，有独特的文化视角" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.08)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-600 text-sm font-medium mb-4">
            关于我
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            我的故事
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            从软件工程到时空大数据，从AI创作出命理研究，探索不同领域的奇妙交汇
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-card border border-primary-100">
                <img
                  src="/images/profile.jpg"
                  alt="张佳佳"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-purple rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200/50 rounded-2xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl font-semibold text-gray-800">
              关于我
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                我是张佳佳，中南大学软件工程专业本科生，同时辅修时空大数据微专业。
                对我而言，技术不仅是工具，更是连接不同领域的桥梁。
              </p>
              <p>
                在学术上，我系统学习了时空数据建模、分布式大数据框架和空间数据库技术。
                同时，我作为抗肿瘤药物课题组的文献数据助理，研读了220+篇PubMed肿瘤外文文献，
                积累了扎实的科研数据分析能力。
              </p>
              <p>
                除了专业学习，我还是一名AI生图创作者和诗人。
                我相信技术与艺术可以完美融合，用代码创作美丽的视觉作品，
                用文字表达内心的感悟。
              </p>
              <p>
                我对易经、紫微斗数等传统文化有着浓厚的兴趣和深入的研究，
                这种跨学科的视角让我能够以独特的方式看待世界和解决问题。
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="text-center p-4 bg-white rounded-xl border border-primary-100"
                >
                  <item.icon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-800">{item.title}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-accent-100 text-accent-600 text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4 inline mr-1" />
              自赋
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              自铭
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-primary-50/50 via-bg-light to-accent-50/30 rounded-2xl p-8 md:p-12 border border-primary-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <span className="inline-block px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-primary-600 font-semibold border border-primary-200 shadow-sm">
                    庚金为骨 · 酉年铸魄 · 三申聚气
                  </span>
                </div>

                <div className="space-y-6 font-serif text-gray-700 leading-loose text-lg">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center italic"
                  >
                    庚金为骨，酉年铸魄，三申聚气，乃成孤峰之质。<br />
                    非玉非石，乃百炼之钢；不媚不俗，乃未淬之锋。
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center italic text-gray-600"
                  >
                    其形如月下寒刃，其性若秋霜肃杀。<br />
                    人见其光可鉴物，焉知其下藏渊渟。
                  </motion.p>

                  <div className="relative">
                    <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid md:grid-cols-2 gap-8"
                  >
                    <div>
                      <p className="mb-4">
                        <span className="text-primary-600 font-semibold">善谋者</span>，不争朝夕之利，而审全局之势；
                      </p>
                      <p className="mb-4">
                        <span className="text-primary-600 font-semibold">善断者</span>，不惑纷繁之象，而执枢机之要。
                      </p>
                      <p>
                        于静处听雷，于乱局取机。<br />
                        功成不必在我，事败不可苟全。
                      </p>
                    </div>
                    <div>
                      <p className="mb-4">
                        <span className="text-accent-600 font-semibold">重情者</span>，非泛交也，择善而深；
                      </p>
                      <p className="mb-4">
                        <span className="text-accent-600 font-semibold">守诺者</span>，非固执也，以信立身。
                      </p>
                      <p>
                        友可寡，不可伪；言可寡，不可欺。<br />
                        宁负一时之誉，不违方寸之真。
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="grid md:grid-cols-2 gap-8"
                  >
                    <div className="text-center">
                      <p className="text-lg">
                        修心若锻铁，去其杂质，存其锋芒；<br />
                        处世若对弈，落子无悔，步步生根。
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg">
                        厌浮华之辞，恶虚与之态。<br />
                        望岳而知己志，临渊而省己身。
                      </p>
                    </div>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center"
                  >
                    志在千里，亦不弃足下之土；<br />
                    心向高远，终不忘来时之路。
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center mt-8 pt-8 border-t border-primary-100"
                  >
                    <p className="text-xl font-semibold text-gray-800 mb-2">
                      此身如剑，宁折不弯；
                    </p>
                    <p className="text-xl font-semibold text-gray-800">
                      此心如鉴，不染纤尘。
                    </p>
                    <p className="text-gray-500 mt-4 text-sm">—— · 自铭</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl font-semibold text-gray-800 text-center mb-12">
            教育与科研经历
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-300 via-primary-200 to-transparent hidden lg:block" />

            <div className="space-y-8 lg:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:ml-auto lg:pl-16"
                  }`}
                >
                  <div className={`lg:absolute ${index % 2 === 0 ? "lg:-right-12" : "lg:-left-12"} top-4 w-24 h-24 hidden lg:flex items-center justify-center`}>
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-primary-200 flex items-center justify-center">
                      <exp.icon className="w-5 h-5 text-primary-500" />
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-primary-100 hover:border-primary-300 transition-all duration-300 group card-shadow hover:card-shadow-hover">
                    <div className="flex items-center gap-4 mb-3 lg:hidden">
                      <div className="w-10 h-10 rounded-full bg-white border border-primary-200 flex items-center justify-center shrink-0">
                        <exp.icon className="w-4 h-4 text-primary-500" />
                      </div>
                      <span className="text-primary-600 font-semibold">{exp.year}</span>
                    </div>

                    <span className={`text-sm font-medium mb-2 block lg:hidden ${exp.color === "primary" ? "text-primary-600" : exp.color === "accent" ? "text-accent-500" : "text-primary-600"}`}>
                      {exp.year}
                    </span>

                    <h4 className="font-display text-xl font-semibold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors">
                      {exp.title}
                    </h4>
                    <p className="text-gray-500 mb-3">{exp.company}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
