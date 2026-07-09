import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Star, Moon } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="背景"
          className="w-full h-full object-cover opacity-50 blur-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/30 via-primary-500/10 to-bg-light" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-300/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-medium border border-primary-200">
            <Sparkles className="w-4 h-4" />
            软件工程 | AI创作 | 命理研究
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-6 leading-tight"
        >
          你好，我是
          <br />
          <span className="text-gradient">张佳佳</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          中南大学软件工程在读 | 时空大数据微专业
          <br className="hidden md:block" />
          AI生图创作者 | 紫微斗数研究者
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {["AI创作", "时空大数据", "命理研究", "舞蹈", "乐器"].map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-gray-600 text-sm border border-primary-100"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-primary-100"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm text-gray-600">紫微斗数 · 天相</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-primary-100"
              whileHover={{ scale: 1.05 }}
            >
              <Moon className="w-4 h-4 text-primary-500" />
              <span className="text-sm text-gray-600">属性庚金</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-primary-100"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-accent-500" />
              <span className="text-sm text-gray-600">MBTI INTJ</span>
            </motion.div>
          </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary-600 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-medium">向下滚动</span>
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
