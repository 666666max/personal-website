import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image, FileText, ChevronLeft, ChevronRight, X, ArrowLeft, BookOpen, Sparkles, Feather } from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { Work } from "@/types";

export default function Portfolio() {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [showLiteraryDetail, setShowLiteraryDetail] = useState<Work | null>(null);
  const [showIllustratedDetail, setShowIllustratedDetail] = useState<Work | null>(null);
  const [literarySubfilter, setLiterarySubfilter] = useState<string>("all");

  useEffect(() => {
    fetchWorks();
  }, []);

  const fetchWorks = async () => {
    setLoading(true);
    if (!supabase) {
      setWorks([]);
      setLoading(false);
      return;
    }
    const { data, error } = await supabase
      .from("works")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      console.error("Error fetching works:", error);
    } else {
      setWorks(data || []);
    }
    setLoading(false);
  };

  const filteredWorks = activeFilter === "all" 
    ? works 
    : activeFilter === "literary-poetry"
      ? works.filter(w => w.type === "literary" && w.subtype === "poetry")
      : activeFilter === "literary-novel"
        ? works.filter(w => w.type === "literary" && w.subtype === "novel")
        : works.filter(w => w.type === activeFilter);

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "visual": return "视觉作品";
      case "illustrated": return "图文创作";
      case "literary": return "文学创作";
      case "literary-poetry": return "诗歌";
      case "literary-novel": return "微小说";
      default: return type;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "visual": return "bg-accent-100 text-accent-600";
      case "illustrated": return "bg-purple-100 text-purple-600";
      case "literary": return "bg-primary-100 text-primary-600";
      case "literary-poetry": return "bg-pink-100 text-pink-600";
      case "literary-novel": return "bg-blue-100 text-blue-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  const getBgStyle = (style?: string, bgImageUrl?: string) => {
    if (bgImageUrl) {
      return {
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
    }
    switch (style) {
      case "elegant": return "bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50";
      case "dreamy": return "bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50";
      case "minimal": return "bg-gradient-to-br from-gray-50 via-white to-gray-50";
      case "warm": return "bg-gradient-to-br from-red-50 via-orange-50 to-amber-50";
      case "night": return "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900";
      default: return "bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50";
    }
  };

  const getTextColor = (style?: string, bgImageUrl?: string) => {
    if (bgImageUrl) return "text-white";
    switch (style) {
      case "night": return "text-white";
      default: return "text-gray-800";
    }
  };

  const getBorderColor = (style?: string, bgImageUrl?: string) => {
    if (bgImageUrl) return "border-white/20";
    switch (style) {
      case "night": return "border-purple-700/30";
      default: return "border-primary-100";
    }
  };

  const truncateContent = (content: string, maxLength: number = 200) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  const isPoem = (content: string) => {
    return content.includes("\n\n") || content.split("\n").length > 5;
  };

  return (
    <div className="min-h-screen bg-bg">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-bg/80 backdrop-blur-lg border-b border-primary-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="/"
              className="flex items-center gap-2 text-xl font-display font-bold text-gray-800"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-purple flex items-center justify-center text-white text-sm">
                佳
              </div>
              <span>张佳佳</span>
            </motion.a>
            <a
              href="/admin"
              className="px-4 py-2 bg-gradient-purple text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all"
            >
              管理后台
            </a>
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <a href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span>返回主页</span>
          </a>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            个人作品集
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            探索我的创意世界，每一件作品都是灵魂的表达
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          <motion.button
            onClick={() => { setActiveFilter("all"); setLiterarySubfilter("all"); }}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium transition-all ${
              activeFilter === "all"
                ? "bg-gradient-purple text-white shadow-lg shadow-primary-500/30"
                : "bg-white text-gray-600 hover:bg-primary-50 border border-primary-100"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>全部作品</span>
          </motion.button>
          <motion.button
            onClick={() => { setActiveFilter("visual"); setLiterarySubfilter("all"); }}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium transition-all ${
              activeFilter === "visual"
                ? "bg-gradient-purple text-white shadow-lg shadow-primary-500/30"
                : "bg-white text-gray-600 hover:bg-primary-50 border border-primary-100"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image className="w-4 h-4" />
            <span>视觉作品</span>
          </motion.button>
          <motion.button
            onClick={() => { setActiveFilter("illustrated"); setLiterarySubfilter("all"); }}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium transition-all ${
              activeFilter === "illustrated"
                ? "bg-gradient-purple text-white shadow-lg shadow-primary-500/30"
                : "bg-white text-gray-600 hover:bg-primary-50 border border-primary-100"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <BookOpen className="w-4 h-4" />
            <span>图文创作</span>
          </motion.button>
          <motion.button
            onClick={() => { setActiveFilter("literary"); setLiterarySubfilter("all"); }}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium transition-all ${
              activeFilter === "literary" || activeFilter === "literary-poetry" || activeFilter === "literary-novel"
                ? "bg-gradient-purple text-white shadow-lg shadow-primary-500/30"
                : "bg-white text-gray-600 hover:bg-primary-50 border border-primary-100"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FileText className="w-4 h-4" />
            <span>文学创作</span>
          </motion.button>
        </motion.div>

        {(activeFilter === "literary" || activeFilter === "literary-poetry" || activeFilter === "literary-novel") && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center gap-3 mb-8"
          >
            <motion.button
              onClick={() => setActiveFilter("literary-poetry")}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all ${
                activeFilter === "literary-poetry"
                  ? "bg-pink-500 text-white"
                  : "bg-white text-gray-600 hover:bg-pink-50 border border-pink-200"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Feather className="w-4 h-4" />
              <span>诗歌</span>
            </motion.button>
            <motion.button
              onClick={() => setActiveFilter("literary-novel")}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all ${
                activeFilter === "literary-novel"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-600 hover:bg-blue-50 border border-blue-200"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <BookOpen className="w-4 h-4" />
              <span>微小说</span>
            </motion.button>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center py-20"
            >
              <div className="w-10 h-10 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin" />
            </motion.div>
          ) : filteredWorks.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
                <Image className="w-10 h-10 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">暂无作品</h3>
              <p className="text-gray-500">快来添加你的第一件作品吧！</p>
            </motion.div>
          ) : (
            <motion.div
              key="works"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`grid gap-6 ${
                activeFilter === "visual" ? "md:grid-cols-2 lg:grid-cols-4" :
                activeFilter === "illustrated" ? "md:grid-cols-2 lg:grid-cols-3" :
                activeFilter === "literary-poetry" || activeFilter === "literary-novel" ? "md:grid-cols-2" :
                "md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {filteredWorks.map((work, index) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`group bg-white rounded-xl overflow-hidden border ${getBorderColor(work.bg_style)} card-shadow hover:card-shadow-hover transition-all duration-300 ${
                    work.type === "literary" ? "" : ""
                  }`}
                  onClick={() => {
                    if (work.type === "visual" && work.image_url) {
                      setSelectedImage(work.image_url);
                      setSelectedWork(work);
                    } else if (work.type === "illustrated") {
                      setShowIllustratedDetail(work);
                    } else if (work.type === "literary") {
                      setShowLiteraryDetail(work);
                    }
                  }}
                >
                  {work.type === "visual" && work.image_url && (
                    <div className="relative aspect-square cursor-pointer">
                      <img
                        src={work.image_url}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          console.error("Image load error:", work.image_url);
                          (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23f3f4f6' width='200' height='200'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='14' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E图片加载失败%3C/text%3E%3C/svg%3E";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-semibold mb-1">{work.title}</h3>
                        <p className="text-white/70 text-sm line-clamp-2">{work.description}</p>
                      </div>
                    </div>
                  )}

                  {work.type === "illustrated" && work.image_url && (
                    <div className="relative aspect-[4/3]">
                      <img
                        src={work.image_url}
                        alt={work.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.error("Image load error:", work.image_url);
                          (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect fill='%23f3f4f6' width='200' height='150'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='14' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E图片加载失败%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                  )}

                  {(work.type === "illustrated" || work.type === "literary") && (
                    <div className="p-6">
                      <h3 className="font-display text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                        {work.title}
                      </h3>
                      {work.type === "illustrated" && work.content && (
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 font-serif mb-3">
                          {truncateContent(work.content, 150)}
                        </p>
                      )}
                      {work.type === "literary" && work.content && (
                        <p className={`text-sm leading-relaxed font-serif line-clamp-5 ${getTextColor(work.bg_style)}`}>
                          {isPoem(work.content) 
                            ? work.content.split("\n").slice(0, 8).join("\n") + (work.content.split("\n").length > 8 ? "\n..." : "")
                            : truncateContent(work.content, 200)
                          }
                        </p>
                      )}
                      {work.type === "illustrated" && work.content && work.content.length > 150 && (
                        <span className="text-primary-600 text-sm font-medium mt-2 inline-block">
                          点击查看完整内容 →
                        </span>
                      )}
                    </div>
                  )}

                  <div className="p-6 pt-0">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(work.type === "literary" && work.subtype ? `literary-${work.subtype}` : work.type)}`}>
                        {getTypeLabel(work.type === "literary" && work.subtype ? `literary-${work.subtype}` : work.type)}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {new Date(work.created_at).toLocaleDateString("zh-CN")}
                      </span>
                    </div>
                    {work.tags && work.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {work.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

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
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt={selectedWork?.title || "作品"}
                className="w-full h-auto rounded-xl"
              />
              {selectedWork && (
                <div className="text-center mt-4">
                  <h3 className="text-white text-xl font-semibold">{selectedWork.title}</h3>
                  <p className="text-white/70 mt-2">{selectedWork.description}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}

        {showIllustratedDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setShowIllustratedDetail(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              onClick={() => setShowIllustratedDetail(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden card-shadow my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {showIllustratedDetail.image_url && (
                <div className="relative cursor-pointer group" onClick={() => {
                  setSelectedImage(showIllustratedDetail.image_url);
                  setSelectedWork(showIllustratedDetail);
                }}>
                  <img
                    src={showIllustratedDetail.image_url}
                    alt={showIllustratedDetail.title}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                    <h2 className="text-white text-3xl font-display font-bold">{showIllustratedDetail.title}</h2>
                    <p className="text-white/60 text-sm mt-2">点击图片查看大图</p>
                  </div>
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor("illustrated")}`}>
                    图文创作
                  </span>
                  <span className="text-gray-400 text-sm">
                    {new Date(showIllustratedDetail.created_at).toLocaleDateString("zh-CN")}
                  </span>
                </div>
                <p className="text-gray-600 text-lg leading-loose font-serif whitespace-pre-line">
                  {showIllustratedDetail.content}
                </p>
                {showIllustratedDetail.tags && showIllustratedDetail.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {showIllustratedDetail.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}

        {showLiteraryDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setShowLiteraryDetail(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              onClick={() => setShowLiteraryDetail(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`max-w-3xl w-full rounded-2xl overflow-hidden card-shadow my-8 ${showLiteraryDetail.bg_image_url ? '' : getBgStyle(showLiteraryDetail.bg_style) as string}`}
              style={showLiteraryDetail.bg_image_url ? {
                backgroundImage: `url(${showLiteraryDetail.bg_image_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              } : undefined}
              onClick={(e) => e.stopPropagation()}
            >
              {showLiteraryDetail.bg_image_url && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
              )}
              <div className="p-8 md:p-12 relative">
                <div className="flex items-center gap-3 mb-8">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(showLiteraryDetail.subtype ? `literary-${showLiteraryDetail.subtype}` : "literary")}`}>
                    {getTypeLabel(showLiteraryDetail.subtype ? `literary-${showLiteraryDetail.subtype}` : "literary")}
                  </span>
                  <span className={`text-sm ${getTextColor(showLiteraryDetail.bg_style, showLiteraryDetail.bg_image_url)} opacity-60`}>
                    {new Date(showLiteraryDetail.created_at).toLocaleDateString("zh-CN")}
                  </span>
                </div>
                <h2 className={`text-3xl md:text-4xl font-display font-bold mb-8 text-center ${getTextColor(showLiteraryDetail.bg_style, showLiteraryDetail.bg_image_url)}`}>
                  {showLiteraryDetail.title}
                </h2>
                <div className={`text-lg md:text-xl leading-loose font-serif whitespace-pre-line ${getTextColor(showLiteraryDetail.bg_style, showLiteraryDetail.bg_image_url)} text-center`}>
                  {showLiteraryDetail.content}
                </div>
                {showLiteraryDetail.tags && showLiteraryDetail.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-8 justify-center">
                    {showLiteraryDetail.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-sm ${showLiteraryDetail.bg_image_url || showLiteraryDetail.bg_style === "night" ? "bg-white/10 text-white/80" : "bg-white/60 text-gray-600"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}