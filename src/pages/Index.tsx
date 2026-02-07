import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CollectionSection from '@/components/CollectionSection';
import GallerySection from '@/components/GallerySection';
import WhyChooseSection from '@/components/WhyChooseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PromoBanner from '@/components/PromoBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <div className="pt-8"> {/* Add padding for promo banner */}
        <Navbar />
        <HeroSection />
        <AboutSection />
        <CollectionSection />
        <GallerySection />
        <WhyChooseSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Index;
