import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MapPin } from 'lucide-react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="section-tight" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rich-brown via-primary to-charcoal p-8 md:p-14"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
            >
              Visit Shoe Plaza Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-primary-foreground/80 text-lg mb-8"
            >
              Experience our premium collection in person. Our team is ready to
              help you find the perfect pair!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="tel:09545545417"
                className="inline-flex items-center gap-2 bg-warm-cream text-charcoal px-8 py-4 rounded-full font-semibold shadow-lift hover:-translate-y-1 transition-all duration-300 animate-pulse-glow"
              >
                <Phone size={20} />
                Call Now: 095455 45417
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-warm-cream/50 text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-warm-cream/10 transition-all duration-300"
              >
                <MapPin size={20} />
                Get Directions
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
