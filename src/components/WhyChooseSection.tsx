import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Shield, IndianRupee, Gem, LayoutGrid, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Latest Designs',
    description: 'Stay ahead with trendy styles updated every season',
  },
  {
    icon: Shield,
    title: 'Comfortable & Durable',
    description: 'Built to last with ergonomic comfort in mind',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description: 'Premium quality at prices that fit your budget',
  },
  {
    icon: Gem,
    title: 'Quality Materials',
    description: 'Genuine leather and premium fabrics only',
  },
  {
    icon: LayoutGrid,
    title: 'Wide Variety',
    description: "Something for everyone - men, women, and kids",
  },
  {
    icon: CheckCircle,
    title: 'Trusted Brand',
    description: 'Loved by 500+ satisfied customers',
  },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="section-tight relative overflow-hidden" ref={containerRef}>
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-block text-accent font-medium text-sm tracking-wide uppercase"
          >
            Why Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2"
          >
            Why Choose Aavtan Footwear
          </motion.h2>
        </motion.div>

        {/* Features Grid with staggered reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group bg-card p-6 rounded-2xl shadow-soft hover:shadow-lift border border-border/50 relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-gold-accent/0 group-hover:from-accent/5 group-hover:to-gold-accent/5 transition-all duration-500" />
              
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative w-14 h-14 bg-gradient-to-br from-accent/20 to-gold-accent/20 rounded-xl flex items-center justify-center mb-4"
              >
                <feature.icon size={26} className="text-accent" />
              </motion.div>
              <h3 className="relative font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="relative text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Corner accent */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-accent/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
