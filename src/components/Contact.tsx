import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "邮箱", value: "2643363467@qq.com", link: "mailto:2643363467@qq.com" },
  { icon: Phone, label: "电话", value: "19313004006", link: "tel:19313004006" },
  { icon: MapPin, label: "微信", value: "Salun18647111227", link: null },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-200/10 rounded-full blur-3xl" />
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
            联系我
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            保持联系
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            无论是技术交流、项目合作还是命理咨询，我都很乐意与你交流
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-primary-100 hover:border-primary-300 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{info.label}</div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-800 font-medium hover:text-primary-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-gray-800 font-medium">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="w-12 h-12 rounded-full bg-white border border-primary-100 flex items-center justify-center text-gray-600 hover:text-primary-600 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 border border-primary-100 card-shadow"
          >
            <h3 className="font-display text-2xl font-bold text-gray-800 mb-6">发送消息</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                    placeholder="你的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">主题</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                  placeholder="消息主题"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">内容</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none"
                  placeholder="请输入你的消息..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-purple text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                <span>发送消息</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
