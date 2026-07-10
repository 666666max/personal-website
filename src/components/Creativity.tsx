import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image, FileText, ChevronLeft, ChevronRight, X, Sparkles, Brush } from "lucide-react";

const aiArtworks = [
  {
    id: 1,
    src: "/images/ai-art1.jpg",
    title: "作品标题",
    description: "作品描述",
    tags: ["动漫"],
  },
  {
    id: 2,
    src: "/images/ai-art2.jpg",
    title: "作品标题",
    description: "作品描述",
    tags: ["动漫"],
  },
  {
    id: 3,
    src: "/images/ai-art3.jpg",
    title: "作品标题",
    description: "作品描述",
    tags: ["动漫"],
  },
  {
    id: 4,
    src: "/images/ai-art4.jpg",
    title: "作品标题",
    description: "作品描述",
    tags: ["动漫"],
  },
  {
    id: 5,
    src: "/images/ai-art5.jpg",
    title: "作品标题",
    description: "作品描述",
    tags: ["动漫"],
  },
  {
    id: 6,
    src: "/images/ai-art6.jpg",
    title: "作品标题",
    description: "作品描述",
    tags: ["动漫"],
  },
];

const handDrawings = [
  {
    id: 1,
    src: "/images/hand-draw1.jpg",
    title: "手绘作品1",
    description: "手绘作品描述",
    tags: ["手绘"],
  },
  {
    id: 2,
    src: "/images/hand-draw2.jpg",
    title: "手绘作品2",
    description: "手绘作品描述",
    tags: ["手绘"],
  },
  {
    id: 3,
    src: "/images/hand-draw3.jpg",
    title: "手绘作品3",
    description: "手绘作品描述",
    tags: ["手绘"],
  },
  {
    id: 4,
    src: "/images/hand-draw4.jpg",
    title: "手绘作品4",
    description: "手绘作品描述",
    tags: ["手绘"],
  },
];

const literaryWorks = [
  {
    id: 1,
    title: "北疆小狼王",
    content: "或许百年后断碑残简相遇\n会拼出我以断箭刻就：\n“莫在羊皮卷上译汉诗的第七行”\n长生天啊，你定是错了——\n我怎会是困在名利场中沉浮的俗子？\n我该纵马踏碎八百个部落的边界线\n在烽燧残垣收集前朝失传的边塞诗\n我该伫立在星坠之崖\n任夜风将我的额带\n吹拂成他案前那页未写完的信笺\n我该循着晨雾造访所有带露水的草场\n在日出前采撷七种颜色的格桑\n捧着缀满初阳的花束对他说\n“你看，草原的清晨应当用花冠加冕”\n我该看他读书时舒展的眉目\n像看一场草原初雪落进诗行\n我该记住他翻页时微颤的睫毛\n如何将墨字映成飞鸟的剪影\n当他念出汉文诗里的“关山”\n我腕间的银镯便与刀鞘共振\n仿佛那些陌生的字句\n正在重新命名我的草原\n风翻动纸页如翻动经幡\n我听见露珠滚落的声音说：\n“诗该被念出，不该被收藏”\n原谅我，只是个被晨光浸透魂魄的\n北疆的小狼王",
    type: "诗歌",
    date: "2025",
  },
];

export default function Creativity() {
  const [activeTab, setActiveTab] = useState("ai");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageType, setImageType] = useState<"ai" | "hand">("ai");

  const handlePrev = () => {
    if (selectedImage === null) return;
    const currentImages = imageType === "ai" ? aiArtworks : handDrawings;
    const currentIndex = currentImages.findIndex((img) => img.id === selectedImage);
    const prevIndex = currentIndex === 0 ? currentImages.length - 1 : currentIndex - 1;
    setSelectedImage(currentImages[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentImages = imageType === "ai" ? aiArtworks : handDrawings;
    const currentIndex = currentImages.findIndex((img) => img.id === selectedImage);
    const nextIndex = currentIndex === currentImages.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(currentImages[nextIndex].id);
  };

  return (
    <section id="creativity" className="py-24 bg-bg relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.06)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-600 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 inline mr-1" />
            创作天地
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            AI创作与文学
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            用技术创造艺术，用文字表达灵魂，探索创意的无限可能
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          <motion.button
            onClick={() => setActiveTab("ai")}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === "ai"
                ? "bg-gradient-purple text-white shadow-lg shadow-primary-500/30"
                : "bg-white text-gray-600 hover:bg-primary-50 border border-primary-100"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image className="w-5 h-5" />
            <span>AI生图作品</span>
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("hand")}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === "hand"
                ? "bg-gradient-purple text-white shadow-lg shadow-primary-500/30"
                : "bg-white text-gray-600 hover:bg-primary-50 border border-primary-100"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Brush className="w-5 h-5" />
            <span>手绘作品</span>
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("literary")}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === "literary"
                ? "bg-gradient-purple text-white shadow-lg shadow-primary-500/30"
                : "bg-white text-gray-600 hover:bg-primary-50 border border-primary-100"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FileText className="w-5 h-5" />
            <span>文学创作</span>
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "ai" && (
            <motion.div
              key="ai"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiArtworks.map((artwork, index) => (
                  <motion.div
                    key={artwork.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => {
                      setImageType("ai");
                      setSelectedImage(artwork.id);
                    }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-primary-100 card-shadow group-hover:card-shadow-hover transition-all duration-300">
                      <img
                        src={artwork.src}
                        alt={artwork.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-semibold mb-2">{artwork.title}</h3>
                        <p className="text-white/70 text-sm mb-3">{artwork.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {artwork.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "hand" && (
            <motion.div
              key="hand"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {handDrawings.map((artwork, index) => (
                  <motion.div
                    key={artwork.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => {
                      setImageType("hand");
                      setSelectedImage(artwork.id);
                    }}
                  >
                    <div className="relative aspect-square overflow-hidden rounded-xl border border-primary-100 card-shadow group-hover:card-shadow-hover transition-all duration-300">
                      <img
                        src={artwork.src}
                        alt={artwork.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-semibold mb-2">{artwork.title}</h3>
                        <p className="text-white/70 text-sm mb-3">{artwork.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {artwork.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "literary" && (
            <motion.div
              key="literary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="space-y-6 max-w-4xl mx-auto">
                {literaryWorks.map((work, index) => (
                  <motion.div
                    key={work.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-8 border border-primary-100 card-shadow hover:border-primary-300 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-display text-2xl font-semibold text-gray-800">
                        {work.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                          {work.type}
                        </span>
                        <span className="text-gray-400 text-sm">{work.date}</span>
                      </div>
                    </div>
                    <div className="text-gray-600 text-lg leading-loose font-serif whitespace-pre-line">
                      {work.content}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>

              {(imageType === "ai" ? aiArtworks : handDrawings).map((artwork) =>
                artwork.id === selectedImage ? (
                  <motion.div
                    key={artwork.id}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-4xl max-h-[80vh]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={artwork.src}
                      alt={artwork.title}
                      className="w-full h-auto rounded-xl"
                    />
                    <div className="text-center mt-4">
                      <h3 className="text-white text-xl font-semibold">{artwork.title}</h3>
                      <p className="text-white/70 mt-2">{artwork.description}</p>
                    </div>
                  </motion.div>
                ) : null
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
