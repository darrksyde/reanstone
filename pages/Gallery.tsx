import React, { useState } from 'react';
import { Section, Heading, RevealText, Badge } from '../components/UI';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const categories = ["All", "Operations", "Subsea", "Pipelines", "Logistics", "Team"];
  
  const items = [
    { id: 1, cat: "Operations", title: "Field Operations", img: "/assets/gallery_images/175.jpg" },
    { id: 2, cat: "Operations", title: "Site Inspection", img: "/assets/gallery_images/177.jpg" },
    { id: 3, cat: "Subsea", title: "Subsea Equipment", img: "/assets/gallery_images/179.jpg" },
    { id: 4, cat: "Pipelines", title: "Pipeline Works", img: "/assets/gallery_images/181.jpg" },
    { id: 5, cat: "Operations", title: "Technical Review", img: "/assets/gallery_images/183.jpg" },
    { id: 6, cat: "Logistics", title: "Equipment Staging", img: "/assets/gallery_images/185.jpg" },
    { id: 7, cat: "Subsea", title: "Marine Operations", img: "/assets/gallery_images/187.jpg" },
    { id: 8, cat: "Operations", title: "Project Execution", img: "/assets/gallery_images/197.jpg" },
    { id: 9, cat: "Pipelines", title: "Integrity Management", img: "/assets/gallery_images/199.jpg" },
    { id: 10, cat: "Logistics", title: "Supply Chain", img: "/assets/gallery_images/201.jpg" },
    { id: 11, cat: "Operations", title: "Field Survey", img: "/assets/gallery_images/203.jpg" },
    { id: 12, cat: "Subsea", title: "Underwater Works", img: "/assets/gallery_images/205.jpg" },
    { id: 13, cat: "Pipelines", title: "Pipeline Installation", img: "/assets/gallery_images/207.jpg" },
    { id: 14, cat: "Team", title: "Team Briefing", img: "/assets/gallery_images/209.jpg" },
    { id: 15, cat: "Operations", title: "Safety Meeting", img: "/assets/gallery_images/211.jpg" },
    { id: 16, cat: "Team", title: "Project Team", img: "/assets/gallery_images/213.jpg" },
    { id: 17, cat: "Team", title: "Site Team", img: "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.53.47_af2ecd01.jpg" },
    { id: 18, cat: "Operations", title: "Field Work", img: "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.53.48_bdf51a83.jpg" },
    { id: 19, cat: "Subsea", title: "Marine Vessel", img: "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.53.48_c47badee.jpg" },
    { id: 20, cat: "Logistics", title: "Equipment Transport", img: "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.53.48_f3cddca0.jpg" },
    { id: 21, cat: "Operations", title: "Offshore Operations", img: "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.53.49_0d2ded46.jpg" },
    { id: 22, cat: "Team", title: "Crew Members", img: "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.53.49_7b2619b1.jpg" },
    { id: 23, cat: "Pipelines", title: "Pipeline Maintenance", img: "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.53.50_21d2e398.jpg" },
    { id: 24, cat: "Subsea", title: "Subsea Inspection", img: "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.53.50_da5ee84f.jpg" },
    { id: 25, cat: "Operations", title: "Control Room", img: "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.54.58_714679ea.jpg" },
    { id: 26, cat: "Logistics", title: "Vessel Operations", img: "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.54.58_79ad98de.jpg" },
    { id: 27, cat: "Team", title: "Engineering Team", img: "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.54.59_b646caf2.jpg" },
    { id: 28, cat: "Operations", title: "Project Site", img: "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.54.59_f087a140.jpg" },
    { id: 29, cat: "Subsea", title: "Diving Operations", img: "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.55.00_1d7850e1.jpg" },
    { id: 30, cat: "Team", title: "Team Collaboration", img: "/assets/gallery_images/WhatsApp Image 2024-06-04 at 20.55.00_26a6e68b.jpg" },
  ];

  const filteredItems = filter === 'All' ? items : items.filter(i => i.cat === filter);

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
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredItems.length - 1 ? 0 : selectedImage + 1);
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
  }, [selectedImage, filteredItems.length]);

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
                src={filteredItems[selectedImage].img}
                alt={filteredItems[selectedImage].title}
                className="max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl"
              />
              
              {/* Image Info */}
              <div className="mt-4 text-center">
                <span className="text-brand-secondary text-xs font-bold uppercase tracking-widest">
                  {filteredItems[selectedImage].cat}
                </span>
                <h4 className="text-white text-xl font-bold mt-1">
                  {filteredItems[selectedImage].title}
                </h4>
                <p className="text-gray-400 text-sm mt-2">
                  {selectedImage + 1} / {filteredItems.length}
                </p>
              </div>
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
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                filter === cat 
                  ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20' 
                  : 'bg-white text-gray-500 border-gray-200 hover:border-brand-primary hover:text-brand-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative aspect-video overflow-hidden cursor-pointer rounded-sm shadow-md"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-brand-secondary text-xs font-bold uppercase tracking-widest">{item.cat}</span>
                      <h4 className="text-white text-2xl font-bold mt-2">{item.title}</h4>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </div>
  );
};

export default Gallery;