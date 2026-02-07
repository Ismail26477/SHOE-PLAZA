import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, Gift, Clock, Percent, ArrowRight } from 'lucide-react';

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show floating banner after 2 seconds
    const bannerTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Show popup after 5 seconds
    const popupTimer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('promoPopupSeen');
      if (!hasSeenPopup) {
        setShowPopup(true);
      }
    }, 5000);

    return () => {
      clearTimeout(bannerTimer);
      clearTimeout(popupTimer);
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem('promoPopupSeen', 'true');
  };

  return (
    <>
      {/* Top Scrolling Banner */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-accent via-gold-accent to-accent overflow-hidden"
          >
            <div className="py-2 animate-marquee whitespace-nowrap flex items-center">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="inline-flex items-center gap-6 mx-8 text-accent-foreground text-sm font-medium">
                  <span className="flex items-center gap-2">
                    <Gift size={16} />
                    FLAT 20% OFF on First Purchase!
                  </span>
                  <span className="w-1 h-1 bg-accent-foreground/50 rounded-full" />
                  <span className="flex items-center gap-2">
                    <Percent size={16} />
                    Use Code: Flat20
                  </span>
                  <span className="w-1 h-1 bg-accent-foreground/50 rounded-full" />
                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    Limited Time Offer!
                  </span>
                  <span className="w-1 h-1 bg-accent-foreground/50 rounded-full" />
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gradient-to-br from-card via-card to-secondary rounded-3xl p-8 max-w-md w-full shadow-2xl overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gold-accent/20 rounded-full blur-3xl" />

              {/* Close button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 w-8 h-8 bg-muted hover:bg-muted-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X size={18} className="text-muted-foreground" />
              </button>

              <div className="relative z-10 text-center">
                {/* Gift Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, -10, 10, 0] }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-accent to-gold-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <Gift size={36} className="text-accent-foreground" />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-display text-3xl font-bold text-foreground mb-2"
                >
                  Special Offer!
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground mb-6"
                >
                  Get exclusive discounts on your first purchase
                </motion.p>

                {/* Discount Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="bg-gradient-to-r from-accent/10 to-gold-accent/10 border-2 border-dashed border-accent rounded-xl p-6 mb-6"
                >
                  <div className="font-display text-5xl font-bold text-gradient mb-2">
                    20% OFF
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">
                    Use code at checkout
                  </div>
                  <div className="inline-block bg-charcoal text-warm-cream px-4 py-2 rounded-lg font-mono font-bold tracking-wider">
                    Flat20
                  </div>
                </motion.div>

                <motion.a
                  href="#collection"
                  onClick={closePopup}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-accent w-full flex items-center justify-center gap-2"
                >
                  Shop Now
                  <ArrowRight size={18} />
                </motion.a>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-xs text-muted-foreground mt-4"
                >
                  *Valid on orders above ₹999. Limited time offer.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PromoBanner;
