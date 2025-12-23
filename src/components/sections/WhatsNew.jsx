// components/sections/WhatsNew.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Instagram } from 'lucide-react';

// ✅ Swiper styles (VERY IMPORTANT)
import 'swiper/css';
import 'swiper/css/navigation';

const WhatsNew = () => {
  const reviews = [
    "Super easy to use and smells incredible. - Gym Member, Atlanta",
    "Found exactly what I needed after hours. - Traveler, Miami",
    "Game changer for late night needs. - Hotel Guest, Austin",
    "Simple, fast, and premium quality. - Student, NYC",
    "Love the convenience at my gym! - Fitness Member, LA",
    "Perfect for travel essentials. - Business Traveler, Chicago",
  ];

  const instagramPosts = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2340&auto=format&fit=crop',
      caption: 'New Ocean Breeze scent dropping soon',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2340&auto=format&fit=crop',
      caption: 'Atlanta launch at Equinox Midtown',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1588680500419-e221b3c15dd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyYWdyYW5jZSUyMHBvZGRzfGVufDB8fDB8fHww',
      caption: 'Convenience Pod v2.0 launching soon',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2340&auto=format&fit=crop',
      caption: 'Miami Airport installation complete',
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1665124197613-ffbb755f4ac2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJhZ3JhbmNlJTIwcG9kZHMlMjBuaWdodGxpZmV8ZW58MHx8MHx8fDA%3D',
      caption: 'Limited edition Nightlife fragrance',
    },
  ];

  return (
    <motion.section
      id="whats-new"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-[#A6D4FA]"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-light text-center mb-12 text-[#14132C]"
        >
          Fresh from the Lab
        </motion.h2>

        {/* Carousel */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation
            loop
            className="!pb-12"
          >
            {instagramPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="relative rounded-2xl overflow-hidden aspect-[9/9] shadow-lg">
                  
                  {/* Image */}
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex items-end justify-center p-6">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-[#FF9178] mx-auto mb-3 flex items-center justify-center">
                        <span className="text-xl">✨</span>
                      </div>
                      <p className="text-base font-medium text-white">
                        {post.caption}
                      </p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Reviews Marquee */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="overflow-hidden mb-8"
        >
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...reviews, ...reviews].map((review, idx) => (
              <span
                key={idx}
                className="mx-8 text-[#14132C]/70 text-sm md:text-base"
              >
                "{review}"
              </span>
            ))}
          </div>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://instagram.com/TrangaPods"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#14132C] text-white hover:bg-[#14132C]/90 transition-all"
          >
            <Instagram size={20} />
            <span>Follow us @TrangaPods</span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhatsNew;
