import { motion } from "framer-motion";
import { Music, Sparkles, BookOpen, Star, Moon, Heart } from "lucide-react";

const hobbies = [
  {
    icon: Music,
    title: "舞蹈",
    description: "热爱舞蹈多年，享受舞蹈带来的激情与优雅，曾参加多次校园舞蹈比赛并获奖。",
    image: "/images/hobby-dance.jpg",
    color: "accent",
  },
  {
    icon: Sparkles,
    title: "乐器",
    description: "从小学习钢琴等乐器，擅长古典和流行曲目，用音乐表达内心的情感。",
    image: "/images/hobby-piano.jpg",
    color: "primary",
  },
  {
    icon: Star,
    title: "紫微斗数",
    description: "深入研究紫微斗数多年，对命理分析有独特见解，曾为多位朋友提供命理咨询。",
    image: "/images/hobby-astrology.jpg",
    color: "purple",
  },
  {
    icon: Moon,
    title: "易经研究",
    description: "对易经有着浓厚兴趣，研读多部易经注释，探索古老智慧与现代生活的联系。",
    image: "/images/hobby-yi.jpg",
    color: "purple",
  },
  {
    icon: BookOpen,
    title: "跨文化研究",
    description: "热爱各种不同文化，喜欢旅行和阅读，从不同文化中汲取灵感和智慧。",
    image: "/images/hobby-culture.jpg",
    color: "accent",
  },
  {
    icon: Heart,
    title: "AI创作",
    description: "热衷于使用AI工具进行创作，包括AI绘画、AI写诗，探索技术与艺术的边界。",
    image: "/images/hobby-ai.jpg",
    color: "primary",
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-24 bg-bg relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.06)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-600 text-sm font-medium mb-4">
            兴趣爱好
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            生活的色彩
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            除了技术，我还有丰富多彩的兴趣爱好，它们构成了我完整的人生
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden border border-primary-100 hover:border-primary-300 transition-all duration-500 card-shadow hover:card-shadow-hover"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-lg flex items-center justify-center ${hobby.color === "primary" ? "bg-primary-500/80" : hobby.color === "accent" ? "bg-accent-500/80" : "bg-purple-600/80"} backdrop-blur-sm`}>
                  <hobby.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {hobby.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {hobby.description}
                </p>
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
          <div className="inline-flex flex-wrap items-center justify-center gap-4 p-6 bg-white rounded-2xl border border-primary-100 card-shadow">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="text-gray-600">命理学研究</span>
            </div>
            <div className="w-px h-6 bg-gray-200" />
            <div className="flex items-center gap-2">
              <Music className="w-5 h-5 text-accent-500" />
              <span className="text-gray-600">艺术修养</span>
            </div>
            <div className="w-px h-6 bg-gray-200" />
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-500" />
              <span className="text-gray-600">文化探索</span>
            </div>
            <div className="w-px h-6 bg-gray-200" />
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary-500" />
              <span className="text-gray-600">创意表达</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
