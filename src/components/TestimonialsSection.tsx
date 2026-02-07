import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Business Professional',
    content:
      'The formal shoes I bought from Aavtan are incredibly comfortable. I wear them daily to office and they still look brand new after 6 months!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'College Student',
    content:
      'Love the trendy collection! Found the perfect sneakers at an affordable price. Will definitely recommend to all my friends.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Kumar',
    role: 'Sports Enthusiast',
    content:
      'Best sports shoes I have ever owned. Great grip, lightweight, and very durable. Aavtan never disappoints!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    role: 'Fashion Blogger',
    content:
      "As someone who loves fashion, I'm impressed by their women's collection. Stylish heels that are actually comfortable to walk in!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-tight bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-accent font-medium text-sm tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            What Our Customers Say
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft text-center">
                    <Quote size={40} className="text-accent/30 mx-auto mb-4" />
                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-gold-accent text-gold-accent"
                        />
                      ))}
                    </div>
                    <div className="font-display text-lg font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              className="w-10 h-10 bg-card rounded-full flex items-center justify-center shadow-soft hover:shadow-lift transition-all hover:-translate-y-0.5"
            >
              <ChevronLeft size={20} className="text-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-accent w-8'
                      : 'bg-muted hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="w-10 h-10 bg-card rounded-full flex items-center justify-center shadow-soft hover:shadow-lift transition-all hover:-translate-y-0.5"
            >
              <ChevronRight size={20} className="text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
