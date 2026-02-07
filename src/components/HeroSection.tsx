import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroImage from '@/assets/hero-footwear.jpg';
import mensShoes from '@/assets/mens-shoes.jpg';
import womensShoes from '@/assets/womens-shoes.jpg';
import formalShoes from '@/assets/formal-shoes.jpg';

const heroSlides = [
  {
    image: heroImage,
    title: 'Step Into Style with',
    highlight: 'Aavtan Footwear',
    subtitle: 'Trendy, Comfortable & Affordable Footwear Collection',
  },
  {
    image: mensShoes,
    title: 'Premium Quality',
    highlight: "Men's Collection",
    subtitle: 'Handcrafted leather shoes for the modern gentleman',
  },
  {
    image: womensShoes,
    title: 'Elegance Meets',
    highlight: 'Comfort',
    subtitle: "Stunning women's footwear for every occasion",
  },
  {
    image: formalShoes,
    title: 'Make Every Step',
    highlight: 'Count',
    subtitle: 'Professional formal wear that speaks confidence',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
        </motion.div>
      </AnimatePresence>

      {/* Slider Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lift hover:bg-card transition-all hover:scale-110"
      >
        <ChevronLeft size={24} className="text-foreground" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lift hover:bg-card transition-all hover:scale-110"
      >
        <ChevronRight size={24} className="text-foreground" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? 'bg-accent w-10'
                : 'bg-foreground/30 w-2 hover:bg-foreground/50'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium tracking-wide">
              Premium Footwear Collection
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
                {heroSlides[currentSlide].title}{' '}
                <span className="text-gradient">{heroSlides[currentSlide].highlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                {heroSlides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#collection" className="btn-primary flex items-center gap-2 group">
              View Collection
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a href="#contact" className="btn-outline flex items-center gap-2">
              <Phone size={18} />
              Contact Us
            </a>
          </motion.div>

          {/* Stats with staggered animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex gap-8 md:gap-12"
          >
            {[
              { value: '500+', label: 'Happy Customers' },
              { value: '7+', label: 'Categories' },
              { value: '100%', label: 'Quality Assured' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.15 }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
