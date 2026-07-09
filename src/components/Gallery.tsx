import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/images/photo1.jpg",
    title: "",
    category: "",
  },
  {
    id: 2,
    src: "/images/photo2.jpg",
    title: "",
    category: "",
  },
  {
    id: 3,
    src: "/images/photo3.jpg",
    title: "",
    category: "",
  },
  {
    id: 4,
    src: "/images/photo4.jpg",
    title: "",
    category: "",
  },
  {
    id: 5,
    src: "/images/photo5.jpg",
    title: "",
    category: "",
  },
  {
    id: 6,
    src: "/images/photo6.jpg",
    title: "",
    category: "",
  },
  {
    id: 7,
    src: "/images/photo7.jpg",
    title: "",
    category: "",
  },
  {
    id: 8,
    src: "/images/photo8.jpg",
    title: "",
    category: "",
  },
  {
    id: 9,
    src: "/images/photo9.jpg",
    title: "",
    category: "",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = galleryImages;

  const handlePrev = () => {
    if (selectedImage === null) return;
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage);
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setSelectedImage(galleryImages[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage);
    const nextIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(galleryImages[nextIndex].id);
  };

  return (
    <section id="gallery" className="py-24 bg-bg relative">
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
            精彩瞬间
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            个人相册
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            记录生活中的美好时刻，展现真实的自我
          </p>
        </motion.div>



        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-primary-100 card-shadow group-hover:card-shadow-hover transition-all duration-300">
                <img
                  src={image.src}
                  alt="个人照片"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

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

              {galleryImages.map((image) =>
                image.id === selectedImage ? (
                  <motion.div
                    key={image.id}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-4xl max-h-[80vh]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={image.src}
                      alt="个人照片"
                      className="w-full h-auto rounded-xl"
                    />
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
