import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Collection', href: '#collection' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const categories = [
    "Men's Footwear",
    "Women's Footwear",
    'Kids Footwear',
    'Sports Shoes',
    'Formal Wear',
    'Sandals',
  ];

  const socials = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="bg-charcoal text-warm-cream">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <a href="#home" className="font-display text-2xl font-bold">
              Aavtan <span className="text-gold-accent">Footwear</span>
            </a>
            <p className="text-warm-cream/60 text-sm mt-4 leading-relaxed">
              Step into style with our premium footwear collection. Quality,
              comfort, and fashion - all in one place.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-warm-cream/10 hover:bg-gold-accent rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-warm-cream/60 hover:text-gold-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href="#collection"
                    className="text-warm-cream/60 hover:text-gold-accent transition-colors duration-300 text-sm"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-warm-cream/60">
              <p>
                <span className="text-warm-cream">Phone:</span> 095455 45417
              </p>
              <p>
                <span className="text-warm-cream">Owner:</span> Pratham Darunkar
              </p>
              <p>
                <span className="text-warm-cream">Hours:</span> 10 AM - 9 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-cream/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-warm-cream/40 text-sm">
            © 2024 Aavtan Footwear. All rights reserved.
          </p>
          <p className="text-warm-cream/40 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-accent fill-accent" /> by D-Code Studio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
