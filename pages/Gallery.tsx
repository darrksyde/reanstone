import React, { useState } from 'react';
import { Section, Heading, RevealText, Badge } from '../components/UI';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const items = [
    "/assets/gallery_images/175.jpg",
    "/assets/gallery_images/177.jpg",
    "/assets/gallery_images/179.jpg",
    "/assets/gallery_images/181.jpg",
    "/assets/gallery_images/183.jpg",
    "/assets/gallery_images/185.jpg",
    "/assets/gallery_images/187.jpg",
    "/assets/gallery_images/197.jpg",
    "/assets/gallery_images/199.jpg",
    "/assets/gallery_images/201.jpg",
    "/assets/gallery_images/203.jpg",
    "/assets/gallery_images/205.jpg",
    "/assets/gallery_images/207.jpg",
    "/assets/gallery_images/209.jpg",
    "/assets/gallery_images/211.jpg",
    "/assets/gallery_images/213.jpg",
    "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.53.47_af2ecd01.jpg",
    "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.53.48_bdf51a83.jpg",
    "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.53.48_c47badee.jpg",
    "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.53.48_f3cddca0.jpg",
    "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.53.49_0d2ded46.jpg",
    "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.53.49_7b2619b1.jpg",
    "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.53.50_21d2e398.jpg",
    "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.53.50_da5ee84f.jpg",
    "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.54.58_714679ea.jpg",
    "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.54.58_79ad98de.jpg",
    "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.54.59_b646caf2.jpg",
    "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.54.59_f087a140.jpg",
    "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.55.00_1d7850e1.jpg",
    "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.55.00_26a6e68b.jpg",
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? items.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === items.length - 1 ? 0 : selectedImage + 1);
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, items.length]);

  return (
    <div className="w-full pt-20">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 md:left-8 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 md:right-8 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Image Container */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={items[selectedImage]}
                alt={`Gallery image ${selectedImage + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl"
              />
              
              {/* Image Counter */}
              <p className="text-gray-400 text-sm mt-4">
                {selectedImage + 1} / {items.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Section className="bg-brand-light text-center border-b border-gray-200">
        <RevealText>
           <Badge>Project Portfolio</Badge>
          <Heading size="lg" className="mt-4">Visual Showcase</Heading>
          <p className="text-gray-600 mt-4 text-xl">Experience our work, operations, and achievements across the globe.</p>
        </RevealText>
      </Section>

      <Section className="bg-white">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.02 }}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden cursor-pointer rounded-sm shadow-md"
            >
              <img 
                src={img} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Gallery;