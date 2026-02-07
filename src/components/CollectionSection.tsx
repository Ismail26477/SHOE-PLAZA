import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

import mensShoes from '@/assets/mens-shoes.jpg';
import womensShoes from '@/assets/womens-shoes.jpg';
import kidsShoes from '@/assets/kids-shoes.jpg';
import casualShoes from '@/assets/casual-shoes.jpg';
import formalShoes from '@/assets/formal-shoes.jpg';
import sportsShoes from '@/assets/sports-shoes.jpg';
import sandals from '@/assets/sandals.jpg';

const collections = [
  { id: 1, title: "Men's Footwear", image: mensShoes, items: '50+', priceRange: '₹799 - ₹2,999', isNew: true },
  { id: 2, title: "Women's Footwear", image: womensShoes, items: '45+', priceRange: '₹699 - ₹2,499', isNew: true },
  { id: 3, title: 'Kids Footwear', image: kidsShoes, items: '30+', priceRange: '₹399 - ₹1,299', isNew: false },
  { id: 4, title: 'Casual Wear', image: casualShoes, items: '40+', priceRange: '₹599 - ₹1,999', isNew: false },
  { id: 5, title: 'Formal Wear', image: formalShoes, items: '35+', priceRange: '₹999 - ₹3,499', isNew: true },
  { id: 6, title: 'Sports Shoes', image: sportsShoes, items: '25+', priceRange: '₹899 - ₹2,799', isNew: false },
  { id: 7, title: 'Sandals & Slippers', image: sandals, items: '55+', priceRange: '₹299 - ₹999', isNew: false },
];

const CollectionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="collection" className="section-tight" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Header with parallax effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-accent font-medium text-sm tracking-wide uppercase"
          >
            Our Collection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2"
          >
            Explore Our Categories
          </motion.h2>
        </motion.div>

        {/* Collection Grid with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {collections.map((collection) => (
            <motion.div
              key={collection.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft cursor-pointer"
            >
              {/* New Arrival Badge */}
              {collection.isNew && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-gradient-to-r from-accent to-gold-accent text-accent-foreground px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg"
                >
                  <Sparkles size={12} />
                  New Arrival
                </motion.div>
              )}

              {/* Image with zoom effect */}
              <div className="image-zoom aspect-square">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-warm-cream/70 text-xs">{collection.items} Products</span>
                  <h3 className="font-display text-xl font-semibold text-warm-cream mt-1">
                    {collection.title}
                  </h3>
                  {/* Price Range */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: 'auto' }}
                    className="mt-2 flex items-center justify-between"
                  >
                    <span className="text-gold-accent font-semibold text-sm">
                      {collection.priceRange}
                    </span>
                    <span className="text-warm-cream/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Starting from
                    </span>
                  </motion.div>
                </div>

                {/* Arrow Icon */}
                <motion.div
                  className="absolute top-4 right-4 w-10 h-10 bg-warm-cream/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:bg-accent"
                  whileHover={{ scale: 1.1, rotate: 45 }}
                >
                  <ArrowUpRight size={18} className="text-warm-cream" />
                </motion.div>
              </div>

              {/* Hover shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-warm-cream/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionSection;
