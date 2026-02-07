import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '919890511700';
  const message = 'Hello! I am interested in your footwear collection.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lift hover:shadow-glow transition-shadow duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white fill-white" />
      
      {/* Ping Animation */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30" />
    </motion.a>
  );
};

export default WhatsAppButton;
