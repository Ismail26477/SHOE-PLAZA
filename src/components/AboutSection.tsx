import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Heart, Sparkles } from 'lucide-react';
import storeImage from '@/assets/store-interior.jpg';

const AboutSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      desc: 'Only the finest materials',
    },
    {
      icon: Heart,
      title: 'Customer Love',
      desc: 'Your satisfaction first',
    },
    {
      icon: Sparkles,
      title: 'Latest Trends',
      desc: 'Always in style',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="section-tight bg-secondary/30 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image with parallax */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="image-zoom rounded-2xl overflow-hidden shadow-lift"
            >
              <img
                src={storeImage}
                alt="Shoe Plaza"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </motion.div>
            
            {/* Floating Card with animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5, type: 'spring' }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lift hidden md:block"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="font-display text-4xl font-bold text-accent"
              >
                10+
              </motion.div>
              <div className="text-muted-foreground text-sm">Years of Excellence</div>
            </motion.div>

            {/* Additional floating element */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="absolute -top-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-lg hidden md:block"
            >
              ⭐ Trusted Brand
            </motion.div>
          </motion.div>

          {/* Content with parallax */}
          <motion.div
            style={{ y: contentY }}
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-accent font-medium text-sm tracking-wide uppercase"
            >
              About Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6"
            >
              Crafting Comfort, Defining Style
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground leading-relaxed mb-6"
            >
              At Shoe Plaza, we believe that the right pair of shoes can
              transform your entire look and boost your confidence. Founded with
              a passion for quality craftsmanship and modern design, we've been
              serving our community with the finest footwear collection.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              From casual everyday wear to elegant formal shoes, our carefully
              curated collection caters to every style and occasion. Experience
              the perfect blend of comfort, durability, and fashion.
            </motion.p>

            {/* Feature Pills with staggered animation */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="flex flex-wrap gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 bg-card px-4 py-3 rounded-full shadow-soft hover:shadow-lift transition-shadow"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center"
                  >
                    <feature.icon size={18} className="text-accent" />
                  </motion.div>
                  <div>
                    <div className="font-medium text-sm text-foreground">
                      {feature.title}
                    </div>
                    <div className="text-xs text-muted-foreground">{feature.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
