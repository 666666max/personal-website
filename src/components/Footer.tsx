import { motion } from "framer-motion";
import { Heart, Star, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-display text-2xl font-bold text-gradient mb-4">
              张佳佳
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              中南大学软件工程在读 | 时空大数据微专业
              <br />
              AI生图创作者 | 紫微斗数研究者
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  关于我
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  技能
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  项目
                </a>
              </li>
              <li>
                <a href="#hobbies" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  兴趣
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  联系
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">兴趣领域</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs">
                AI生图
              </span>
              <span className="px-3 py-1 bg-accent-500/20 text-accent-300 rounded-full text-xs">
                舞蹈
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                紫微斗数
              </span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                时空大数据
              </span>
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs">
                乐器
              </span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs">
                易经
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2024 张佳佳</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full" />
              <span>保留所有权利</span>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>用</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-accent-500 fill-accent-500" />
              </motion.div>
              <span>、</span>
              <motion.div
                animate={{ rotate: [0, 180, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Star className="w-4 h-4 text-yellow-500" />
              </motion.div>
              <span>和</span>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-primary-500" />
              </motion.div>
              <span>打造</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
