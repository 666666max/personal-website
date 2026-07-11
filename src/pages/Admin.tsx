import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image, FileText, Plus, Trash2, Edit, LogOut, Save, X, Brush, Upload, Eye, Sparkles, BookOpen, Feather } from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { Work } from "@/types";

export default function Admin() {
  const [user, setUser] = useState<any>(null);
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingWork, setEditingWork] = useState<Work | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "visual" as "visual" | "illustrated" | "literary",
    subtype: "" as "" | "poetry" | "novel",
    content: "",
    tags: "",
    bg_style: "" as "" | "elegant" | "dreamy" | "minimal" | "warm" | "night",
    bg_image_url: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [bgImageFile, setBgImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      if (!supabase) {
        setLoading(false);
        return;
      }
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        setShowLogin(false);
        fetchWorks();
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const fetchWorks = async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("works")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      console.error("Error fetching works:", error);
    } else {
      setWorks(data || []);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!supabase) {
      setError("请先配置Supabase");
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      setUser(await supabase.auth.getUser().then(res => res.data.user));
      setShowLogin(false);
      fetchWorks();
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setShowLogin(true);
  };

  const handleAddWork = async () => {
    if (!supabase) {
      setError("请先配置Supabase");
      return;
    }
    setUploading(true);
    let imageUrl: string | undefined;
    let bgImageUrl: string | undefined;

    if (imageFile && (formData.type === "visual" || formData.type === "illustrated")) {
      try {
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from("works")
          .upload(`images/${fileName}`, imageFile, {
            cacheControl: "3600",
            upsert: false,
          });

        if (uploadError) {
          throw uploadError;
        }

        const { data: { publicUrl } } = supabase.storage
          .from("works")
          .getPublicUrl(`images/${fileName}`);
        imageUrl = publicUrl;
      } catch (uploadError) {
        const reader = new FileReader();
        imageUrl = await new Promise((resolve) => {
          reader.onload = (e) => resolve(e.target?.result as string);
          reader.readAsDataURL(imageFile);
        });
      }
    }

    if (bgImageFile && formData.type === "literary") {
      try {
        const fileExt = bgImageFile.name.split(".").pop();
        const fileName = `bg-${Date.now()}.${fileExt}`;
        const { error: bgUploadError } = await supabase.storage
          .from("works")
          .upload(`images/${fileName}`, bgImageFile, {
            cacheControl: "3600",
            upsert: false,
          });

        if (bgUploadError) {
          throw bgUploadError;
        }

        const { data: { publicUrl } } = supabase.storage
          .from("works")
          .getPublicUrl(`images/${fileName}`);
        bgImageUrl = publicUrl;
      } catch (bgUploadError) {
        const reader = new FileReader();
        bgImageUrl = await new Promise((resolve) => {
          reader.onload = (e) => resolve(e.target?.result as string);
          reader.readAsDataURL(bgImageFile);
        });
      }
    }

    const { error: insertError } = await supabase
      .from("works")
      .insert({
        title: formData.title,
        description: formData.description,
        type: formData.type,
        subtype: formData.subtype || null,
        content: (formData.type === "literary" || formData.type === "illustrated") ? formData.content : undefined,
        image_url: imageUrl,
        tags: formData.tags.split(",").map(t => t.trim()).filter(t => t),
        bg_style: formData.bg_style || null,
        bg_image_url: bgImageUrl || formData.bg_image_url || null,
      });

    if (insertError) {
      setError(`添加作品失败: ${insertError.message}`);
    } else {
      setShowAddForm(false);
      resetForm();
      fetchWorks();
    }
    setUploading(false);
  };

  const handleUpdateWork = async () => {
    if (!editingWork || !supabase) return;
    setUploading(true);
    let imageUrl = editingWork.image_url;
    let bgImageUrl = editingWork.bg_image_url;

    if (imageFile && (editingWork.type === "visual" || editingWork.type === "illustrated")) {
      try {
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from("works")
          .upload(`images/${fileName}`, imageFile, {
            cacheControl: "3600",
            upsert: false,
          });

        if (uploadError) {
          throw uploadError;
        }

        const { data: { publicUrl } } = supabase.storage
          .from("works")
          .getPublicUrl(`images/${fileName}`);
        imageUrl = publicUrl;
      } catch (uploadError) {
        const reader = new FileReader();
        imageUrl = await new Promise((resolve) => {
          reader.onload = (e) => resolve(e.target?.result as string);
          reader.readAsDataURL(imageFile);
        });
      }
    }

    if (bgImageFile && editingWork.type === "literary") {
      try {
        const fileExt = bgImageFile.name.split(".").pop();
        const fileName = `bg-${Date.now()}.${fileExt}`;
        const { error: bgUploadError } = await supabase.storage
          .from("works")
          .upload(`images/${fileName}`, bgImageFile, {
            cacheControl: "3600",
            upsert: false,
          });

        if (bgUploadError) {
          throw bgUploadError;
        }

        const { data: { publicUrl } } = supabase.storage
          .from("works")
          .getPublicUrl(`images/${fileName}`);
        bgImageUrl = publicUrl;
      } catch (bgUploadError) {
        const reader = new FileReader();
        bgImageUrl = await new Promise((resolve) => {
          reader.onload = (e) => resolve(e.target?.result as string);
          reader.readAsDataURL(bgImageFile);
        });
      }
    }

    const { error: updateError } = await supabase
      .from("works")
      .update({
        title: formData.title,
        description: formData.description,
        type: formData.type,
        subtype: formData.subtype || null,
        content: (formData.type === "literary" || formData.type === "illustrated") ? formData.content : undefined,
        image_url: imageUrl,
        tags: formData.tags.split(",").map(t => t.trim()).filter(t => t),
        bg_style: formData.bg_style || null,
        bg_image_url: bgImageUrl || formData.bg_image_url || null,
      })
      .eq("id", editingWork.id);

    if (updateError) {
      setError(`更新作品失败: ${updateError.message}`);
    } else {
      setEditingWork(null);
      resetForm();
      fetchWorks();
    }
    setUploading(false);
  };

  const handleDeleteWork = async (id: string) => {
    if (!supabase || !confirm("确定要删除这件作品吗？")) return;
    const { error } = await supabase.from("works").delete().eq("id", id);
    if (!error) {
      fetchWorks();
    }
  };

  const handleEditWork = (work: Work) => {
    setEditingWork(work);
    setFormData({
      title: work.title,
      description: work.description,
      type: work.type,
      subtype: work.subtype || "",
      content: work.content || "",
      tags: work.tags?.join(", ") || "",
      bg_style: work.bg_style || "",
      bg_image_url: work.bg_image_url || "",
    });
    setImageFile(null);
    setBgImageFile(null);
    setShowAddForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      type: "visual",
      subtype: "",
      content: "",
      tags: "",
      bg_style: "",
      bg_image_url: "",
    });
    setImageFile(null);
    setBgImageFile(null);
    setError("");
  };

  const getTypeLabel = (type: string, subtype?: string) => {
    if (type === "literary" && subtype) {
      return subtype === "poetry" ? "诗歌" : "微小说";
    }
    switch (type) {
      case "visual": return "视觉作品";
      case "illustrated": return "图文创作";
      case "literary": return "文学创作";
      default: return type;
    }
  };

  const getTypeColor = (type: string, subtype?: string) => {
    if (type === "literary" && subtype) {
      return subtype === "poetry" ? "bg-pink-100 text-pink-600" : "bg-blue-100 text-blue-600";
    }
    switch (type) {
      case "visual": return "bg-accent-100 text-accent-600";
      case "illustrated": return "bg-purple-100 text-purple-600";
      case "literary": return "bg-primary-100 text-primary-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  const getBgStyleLabel = (style?: string) => {
    switch (style) {
      case "elegant": return "典雅";
      case "dreamy": return "梦幻";
      case "minimal": return "极简";
      case "warm": return "温暖";
      case "night": return "暗夜";
      default: return "默认";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      <AnimatePresence mode="wait">
        {showLogin ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="min-h-screen flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="w-full max-w-md bg-white rounded-2xl p-8 card-shadow"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-purple flex items-center justify-center">
                  <Edit className="w-8 h-8 text-white" />
                </div>
                <h1 className="font-display text-2xl font-bold text-gray-800">管理后台</h1>
                <p className="text-gray-500 mt-2">登录以管理你的作品集</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">密码</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="********"
                    required
                  />
                </div>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm"
                  >
                    {error}
                  </motion.p>
                )}
                <motion.button
                  type="submit"
                  className="w-full py-3 bg-gradient-purple text-white rounded-xl font-medium hover:shadow-lg hover:shadow-primary-500/30 transition-all"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  登录
                </motion.button>
              </form>

              <div className="mt-6 text-center">
                <a href="/" className="text-gray-500 hover:text-gray-700 text-sm">
                  返回个人主页
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-primary-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-purple flex items-center justify-center text-white text-sm">
                      佳
                    </div>
                    <span className="font-display font-bold text-gray-800">管理后台</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600 text-sm">{user?.email}</span>
                    <motion.button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <LogOut className="w-4 h-4" />
                      <span>退出登录</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="font-display text-2xl font-bold text-gray-800">作品管理</h1>
                  <p className="text-gray-500 mt-1">管理你的所有创意作品</p>
                </div>
                <motion.button
                  onClick={() => {
                    setEditingWork(null);
                    resetForm();
                    setShowAddForm(true);
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-purple text-white rounded-xl font-medium hover:shadow-lg hover:shadow-primary-500/30 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Plus className="w-5 h-5" />
                  <span>添加作品</span>
                </motion.button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {works.map((work) => (
                  <motion.div
                    key={work.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-xl overflow-hidden border border-primary-100 card-shadow"
                  >
                    {work.image_url && (
                      <div className="relative aspect-[4/3]">
                        <img
                          src={work.image_url}
                          alt={work.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <motion.button
                            onClick={() => handleEditWork(work)}
                            className="flex items-center gap-2 px-4 py-2 bg-white/90 text-gray-800 rounded-lg mr-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Edit className="w-4 h-4" />
                            <span className="text-sm">编辑</span>
                          </motion.button>
                          <motion.button
                            onClick={() => handleDeleteWork(work.id)}
                            className="flex items-center gap-2 px-4 py-2 bg-red-500/90 text-white rounded-lg"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Trash2 className="w-4 h-4" />
                            <span className="text-sm">删除</span>
                          </motion.button>
                        </div>
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-display text-lg font-semibold text-gray-800 mb-2">
                        {work.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {work.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(work.type, work.subtype)}`}>
                          {getTypeLabel(work.type, work.subtype)}
                        </span>
                        <span className="text-gray-400 text-xs">
                          {new Date(work.created_at).toLocaleDateString("zh-CN")}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {works.length === 0 && (
                <div className="text-center py-20">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <Image className="w-10 h-10 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">暂无作品</h3>
                  <p className="text-gray-500 mb-6">点击上方按钮添加你的第一件作品</p>
                </div>
              )}
            </main>

            <AnimatePresence>
              {showAddForm && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingWork(null);
                    resetForm();
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    className="w-full max-w-lg bg-white rounded-2xl p-6 card-shadow max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="font-display text-xl font-bold text-gray-800">
                        {editingWork ? "编辑作品" : "添加作品"}
                      </h2>
                      <motion.button
                        onClick={() => {
                          setShowAddForm(false);
                          setEditingWork(null);
                          resetForm();
                        }}
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <X className="w-5 h-5 text-gray-600" />
                      </motion.button>
                    </div>

                    <form onSubmit={(e) => {
                      e.preventDefault();
                      if (editingWork) {
                        handleUpdateWork();
                      } else {
                        handleAddWork();
                      }
                    }} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">作品标题</label>
                        <input
                          type="text"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                          placeholder="输入作品标题"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">作品分类</label>
                        <div className="flex gap-2 flex-wrap">
                          {(["visual", "illustrated", "literary"] as const).map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setFormData({ ...formData, type, subtype: type === "literary" ? formData.subtype : "", bg_style: type === "literary" ? formData.bg_style : "" })}
                              className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                                formData.type === type
                                  ? "bg-gradient-purple text-white border-primary-500"
                                  : "bg-white text-gray-600 border-primary-200 hover:border-primary-300"
                              }`}
                            >
                              {type === "visual" && <Image className="w-4 h-4" />}
                              {type === "illustrated" && <BookOpen className="w-4 h-4" />}
                              {type === "literary" && <FileText className="w-4 h-4" />}
                              <span className="text-sm">{getTypeLabel(type)}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {formData.type === "literary" && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">作品子类型</label>
                          <div className="flex gap-2">
                            {(["poetry", "novel"] as const).map((subtype) => (
                              <button
                                key={subtype}
                                type="button"
                                onClick={() => setFormData({ ...formData, subtype })}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                                  formData.subtype === subtype
                                    ? subtype === "poetry" 
                                      ? "bg-pink-500 text-white border-pink-500"
                                      : "bg-blue-500 text-white border-blue-500"
                                    : "bg-white text-gray-600 border-primary-200 hover:border-primary-300"
                                }`}
                              >
                                {subtype === "poetry" && <Feather className="w-4 h-4" />}
                                {subtype === "novel" && <BookOpen className="w-4 h-4" />}
                                <span className="text-sm">{subtype === "poetry" ? "诗歌" : "微小说"}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {(formData.type === "visual" || formData.type === "illustrated") && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            作品图片
                            {editingWork?.image_url && (
                              <a
                                href={editingWork.image_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-primary-600 hover:underline flex items-center gap-1 inline-flex"
                              >
                                <Eye className="w-4 h-4" />
                                <span className="text-sm">查看现有图片</span>
                              </a>
                            )}
                          </label>
                          <div
                            onClick={() => document.getElementById("image-upload")?.click()}
                            className="border-2 border-dashed border-primary-200 rounded-xl p-8 text-center cursor-pointer hover:border-primary-400 hover:bg-primary-50 transition-all"
                          >
                            {imageFile ? (
                              <div>
                                <Upload className="w-10 h-10 mx-auto mb-2 text-primary-500" />
                                <p className="text-gray-600">{imageFile.name}</p>
                              </div>
                            ) : (
                              <div>
                                <Upload className="w-10 h-10 mx-auto mb-2 text-primary-500" />
                                <p className="text-gray-600">点击上传图片</p>
                                <p className="text-gray-400 text-sm mt-1">支持 JPG, PNG, GIF</p>
                              </div>
                            )}
                            <input
                              id="image-upload"
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                            />
                          </div>
                        </div>
                      )}

                      {(formData.type === "literary" || formData.type === "illustrated") && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">作品内容</label>
                          <textarea
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none h-64"
                            placeholder={formData.type === "literary" ? "输入文学作品内容，支持换行，上限1万字" : "输入图文描述内容，支持换行"}
                            maxLength={10000}
                            required
                          />
                          <p className="text-gray-400 text-xs mt-1 text-right">
                            {formData.content.length}/10000
                          </p>
                        </div>
                      )}

                      {formData.type === "literary" && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">背景风格</label>
                          <div className="flex gap-2 flex-wrap">
                            {(["elegant", "dreamy", "minimal", "warm", "night"] as const).map((style) => (
                              <button
                                key={style}
                                type="button"
                                onClick={() => setFormData({ ...formData, bg_style: style, bg_image_url: "" })}
                                className={`px-3 py-2 rounded-lg border text-sm transition-all ${
                                  formData.bg_style === style && !formData.bg_image_url
                                    ? "bg-primary-500 text-white border-primary-500"
                                    : "bg-white text-gray-600 border-primary-200 hover:border-primary-300"
                                }`}
                              >
                                {getBgStyleLabel(style)}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {formData.type === "literary" && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            自定义背景图片
                            {formData.bg_image_url && (
                              <div className="flex items-center gap-2 ml-2">
                                <a
                                  href={formData.bg_image_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary-600 hover:underline flex items-center gap-1 inline-flex"
                                >
                                  <Eye className="w-4 h-4" />
                                  <span className="text-sm">查看</span>
                                </a>
                                <button
                                  type="button"
                                  onClick={() => setFormData({ ...formData, bg_image_url: "", bg_style: "" })}
                                  className="text-red-500 hover:text-red-700 text-sm"
                                >
                                  移除
                                </button>
                              </div>
                            )}
                          </label>
                          <div
                            onClick={() => document.getElementById("bg-image-upload")?.click()}
                            className="border-2 border-dashed border-primary-200 rounded-xl p-8 text-center cursor-pointer hover:border-primary-400 hover:bg-primary-50 transition-all"
                          >
                            {bgImageFile ? (
                              <div>
                                <Upload className="w-10 h-10 mx-auto mb-2 text-primary-500" />
                                <p className="text-gray-600">{bgImageFile.name}</p>
                              </div>
                            ) : formData.bg_image_url ? (
                              <div>
                                <img
                                  src={formData.bg_image_url}
                                  alt="当前背景"
                                  className="w-24 h-24 mx-auto mb-3 rounded-lg object-cover"
                                />
                                <p className="text-gray-600">点击更换背景图片</p>
                              </div>
                            ) : (
                              <div>
                                <Upload className="w-10 h-10 mx-auto mb-2 text-primary-500" />
                                <p className="text-gray-600">点击上传自定义背景图片</p>
                                <p className="text-gray-400 text-sm mt-1">支持 JPG, PNG, GIF</p>
                              </div>
                            )}
                            <input
                              id="bg-image-upload"
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                setBgImageFile(e.target.files?.[0] || null);
                                setFormData({ ...formData, bg_style: "" });
                              }}
                            />
                          </div>
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">作品描述</label>
                        <textarea
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none h-24"
                          placeholder="输入作品描述"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">标签</label>
                        <input
                          type="text"
                          value={formData.tags}
                          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                          className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                          placeholder="多个标签用逗号分隔"
                        />
                      </div>

                      {error && (
                        <p className="text-red-500 text-sm">{error}</p>
                      )}

                      <div className="flex gap-3 pt-4">
                        <button
                          type="button"
                          onClick={() => {
                            setShowAddForm(false);
                            setEditingWork(null);
                            resetForm();
                          }}
                          className="flex-1 py-3 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                        >
                          取消
                        </button>
                        <motion.button
                          type="submit"
                          disabled={uploading}
                          className="flex-1 py-3 bg-gradient-purple text-white rounded-xl font-medium hover:shadow-lg hover:shadow-primary-500/30 transition-all disabled:opacity-50"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          {uploading ? (
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>上传中...</span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              <Save className="w-5 h-5" />
                              <span>{editingWork ? "保存修改" : "添加作品"}</span>
                            </div>
                          )}
                        </motion.button>
                      </div>
                    </form>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}