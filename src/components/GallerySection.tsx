import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

import mensShoes from '@/assets/mens-shoes.jpg';
import womensShoes from '@/assets/womens-shoes.jpg';
import kidsShoes from '@/assets/kids-shoes.jpg';
import casualShoes from '@/assets/casual-shoes.jpg';
import formalShoes from '@/assets/formal-shoes.jpg';
import sportsShoes from '@/assets/sports-shoes.jpg';
import sandals from '@/assets/sandals.jpg';
import heroImage from '@/assets/hero-footwear.jpg';

const galleryImages = [
  { src: heroImage, alt: 'Premium Collection', size: 'large' },
  { src: mensShoes, alt: "Men's Leather Shoes", size: 'small' },
  { src: womensShoes, alt: "Women's Heels", size: 'small' },
  { src: formalShoes, alt: 'Formal Shoes', size: 'medium' },
  { src: casualShoes, alt: 'Casual Sneakers', size: 'small' },
  { src: kidsShoes, alt: 'Kids Collection', size: 'small' },
  { src: sportsShoes, alt: 'Sports Shoes', size: 'medium' },
  { src: sandals, alt: 'Sandals Collection', size: 'small' },
];

const GallerySection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="gallery" className="section-tight bg-secondary/30 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={isInView ? { opacity: 1, letterSpacing: '0.1em' } : {}}
            transition={{ duration: 0.8 }}
            className="inline-block text-accent font-medium text-sm tracking-wide uppercase"
          >
            Gallery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2"
          >
            Featured Products
          </motion.h2>
        </motion.div>

        {/* Masonry Grid with parallax columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Column 1 */}
          <motion.div style={{ y: y1 }} className="space-y-4">
            {galleryImages.slice(0, 2).map((image, index) => (
              <GalleryItem
                key={index}
                image={image}
                index={index}
                isInView={isInView}
                onClick={() => setSelectedImage(image.src)}
              />
            ))}
          </motion.div>
          
          {/* Column 2 */}
          <motion.div style={{ y: y2 }} className="space-y-4 pt-8">
            {galleryImages.slice(2, 4).map((image, index) => (
              <GalleryItem
                key={index + 2}
                image={image}
                index={index + 2}
                isInView={isInView}
                onClick={() => setSelectedImage(image.src)}
              />
            ))}
          </motion.div>
          
          {/* Column 3 */}
          <motion.div style={{ y: y1 }} className="space-y-4 hidden md:block">
            {galleryImages.slice(4, 6).map((image, index) => (
              <GalleryItem
                key={index + 4}
                image={image}
                index={index + 4}
                isInView={isInView}
                onClick={() => setSelectedImage(image.src)}
              />
            ))}
          </motion.div>
          
          {/* Column 4 */}
          <motion.div style={{ y: y2 }} className="space-y-4 hidden md:block pt-12">
            {galleryImages.slice(6, 8).map((image, index) => (
              <GalleryItem
                key={index + 6}
                image={image}
                index={index + 6}
                isInView={isInView}
                onClick={() => setSelectedImage(image.src)}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-charcoal/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-warm-cream/10 hover:bg-warm-cream/20 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} className="text-warm-cream" />
          </button>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={selectedImage}
            alt="Gallery Preview"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </motion.div>
      )}
    </section>
  );
};

interface GalleryItemProps {
  image: { src: string; alt: string; size: string };
  index: number;
  isInView: boolean;
  onClick: () => void;
}

const GalleryItem = ({ image, index, isInView, onClick }: GalleryItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="group relative cursor-pointer overflow-hidden rounded-xl shadow-soft"
      onClick={onClick}
    >
      <img
        src={image.src}
        alt={image.alt}
        className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
          image.size === 'large'
            ? 'h-72'
            : image.size === 'medium'
            ? 'h-56'
            : 'h-44'
        }`}
      />
      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          className="w-12 h-12 bg-warm-cream/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <ZoomIn size={20} className="text-charcoal" />
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-warm-cream text-sm font-medium">{image.alt}</p>
      </div>
    </motion.div>
  );
};

export default GallerySection;
