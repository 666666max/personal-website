import { motion } from "framer-motion";
import { Star, Moon, Sun, Sparkles, Compass, Eye } from "lucide-react";

const zodiacSigns = [
  { name: "紫微星", element: "君", meaning: "帝王之星，尊贵权威" },
  { name: "贪狼星", element: "木", meaning: "智慧之星，多才多艺" },
  { name: "巨门星", element: "水", meaning: "口才之星，善于表达" },
  { name: "廉贞星", element: "火", meaning: "事业之星，追求卓越" },
  { name: "武曲星", element: "金", meaning: "财富之星，理财能手" },
  { name: "破军星", element: "水", meaning: "变革之星，勇于突破" },
  { name: "七杀星", element: "金", meaning: "勇气之星，果敢决断" },
  { name: "天相星", element: "水", meaning: "辅佐之星，贵人相助" },
  { name: "天府星", element: "土", meaning: "包容之星，心胸宽广" },
  { name: "天梁星", element: "土", meaning: "福寿之星，学识渊博" },
];

const iChingHexagrams = [
  { name: "乾", meaning: "天行健，君子以自强不息", image: "☰" },
  { name: "坤", meaning: "地势坤，君子以厚德载物", image: "☷" },
  { name: "屯", meaning: "云雷屯，君子以经纶", image: "☶" },
  { name: "蒙", meaning: "山下出泉，君子以果行育德", image: "☵" },
];

const astroElements = [
  { icon: Sun, title: "太阳", description: "光明、活力、领导力" },
  { icon: Moon, title: "月亮", description: "情感、直觉、内心世界" },
  { icon: Star, title: "星辰", description: "命运、指引、机遇" },
  { icon: Compass, title: "罗盘", description: "方向、定位、决策" },
];

export default function Astrology() {
  return (
    <section id="astrology" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-4 border border-primary-500/30">
            命理研究
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            星辰与命运
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            探索古老智慧与现代生活的连接，以命理之眼洞察人生轨迹
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {astroElements.map((element, index) => (
            <motion.div
              key={element.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500/30 to-accent-500/30 flex items-center justify-center">
                <element.icon className="w-7 h-7 text-primary-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">{element.title}</h3>
              <p className="text-gray-400 text-sm">{element.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-primary-400" />
              <h3 className="font-display text-2xl font-bold text-white">紫微斗数</h3>
            </div>
            <p className="text-gray-400 mb-6">
              深入研究紫微斗数多年，以星盘为镜，探索人生奥秘。
              紫微斗数作为中国传统命理绝学，通过星辰排列揭示个人命运轨迹。
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {zodiacSigns.map((sign, index) => (
                <motion.div
                  key={sign.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="text-center p-3 bg-white/5 rounded-lg hover:bg-primary-500/20 transition-colors cursor-pointer group"
                >
                  <div className="text-lg font-bold text-primary-300 mb-1 group-hover:text-white transition-colors">
                    {sign.name}
                  </div>
                  <div className="text-xs text-gray-500 mb-1">{sign.element}</div>
                  <div className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {sign.meaning}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-6 h-6 text-accent-400" />
              <h3 className="font-display text-2xl font-bold text-white">易经智慧</h3>
            </div>
            <p className="text-gray-400 mb-6">
              研读多部易经注释，探索古老智慧与现代生活的联系。
              易经不仅是卜筮之书，更是一部关于宇宙规律和人生哲理的百科全书。
            </p>
            <div className="grid grid-cols-2 gap-4">
              {iChingHexagrams.map((hex, index) => (
                <motion.div
                  key={hex.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white/5 rounded-xl p-6 text-center hover:bg-accent-500/20 transition-colors"
                >
                  <div className="text-5xl mb-4 text-accent-300">{hex.image}</div>
                  <div className="text-xl font-bold text-white mb-2">{hex.name}</div>
                  <div className="text-sm text-gray-400">{hex.meaning}</div>
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
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm rounded-2xl border border-primary-500/30">
            <div className="text-2xl md:text-3xl font-display text-white mb-4">
              "观乎天文，以察时变；观乎人文，以化成天下"
            </div>
            <div className="text-gray-400">——《周易·贲卦》</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
