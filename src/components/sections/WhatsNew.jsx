// components/sections/WhatsNew.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Instagram } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const WhatsNew = () => {
  const reviews = [
    {
      text: "Super easy to use and smells incredible.",
      location: "Gym Member, Atlanta",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      text: "Found exactly what I needed after hours.",
      location: "Traveler, Miami",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "Game changer for late night needs.",
      location: "Hotel Guest, Austin",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      text: "Simple, fast, and premium quality.",
      location: "Student, NYC",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      text: "Love the convenience at my gym!",
      location: "Fitness Member, LA",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    },
  ];

  const instagramPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2340&auto=format&fit=crop",
      caption: "New Ocean Breeze scent dropping soon",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2340&auto=format&fit=crop",
      caption: "Atlanta launch at Equinox Midtown",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1588680500419-e221b3c15dd6?w=600&auto=format&fit=crop&q=60",
      caption: "Convenience Pod v2.0 launching soon",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2340&auto=format&fit=crop",
      caption: "Miami Airport installation complete",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1665124197613-ffbb755f4ac2?w=600&auto=format&fit=crop&q=60",
      caption: "Limited edition Nightlife fragrance",
    },
  ];

  return (
    <motion.section
      id="whats-new"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="pt-32 md:pt-36 pb-20 bg-[#A6D4FA]"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl text-gray-900 text-center sm:text-[2.7rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4.2rem] hero-heading font-extrabold"
              style={{ color: '#14132C' }}
        >
          Fresh from the Lab
        </motion.h2>

        {/* Sub Heading */}
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
         className="text-[1.3rem] text-center sm:text-[1.7rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[3.2rem]"
                style={{ color: '#FF9178' }}
        >
          Latest launches, real stories, and what’s trending inside Tranga Pods.
        </motion.p>

     <Swiper
  modules={[Autoplay]}
  spaceBetween={24}
  slidesPerView={1.2}
  loop
  freeMode={true}
  freeModeMomentum={false}
  allowTouchMove={false} // 🔥 marquee feel
  speed={10000}          // 🔥 higher = smoother
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  breakpoints={{
    640: { slidesPerView: 1.5 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 2.5 },
  }}
  className="instagram-marquee !pb-12"
>
  {instagramPosts.map((post) => (
    <SwiperSlide key={post.id}>
      <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
        <img
          src={post.image}
          alt={post.caption}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

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

 
       
      </div>
        <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      viewport={{ once: true }}
      className="overflow-hidden mb-12"
    >
      <div className="flex animate-marquee gap-6 whitespace-nowrap py-6">
        {[...reviews, ...reviews].map((review, idx) => (
          <div
            key={idx}
            className="
              inline-flex items-center gap-4
              px-6 py-3 rounded-full
              bg-gradient-to-r from-[#EAF6FF] via-[#F3E8FF] to-[#FDE7F3]
              shadow-md border border-white/40
              w-max
              shrink-0
            "
          >
            <img
              src={review.avatar}
              alt={review.location}
              className="w-10 h-10 rounded-full object-cover border border-white shrink-0"
            />

            <p className="text-sm md:text-base text-[#14132C]/80 leading-snug whitespace-nowrap">
              {review.text} —{" "}
              <span className="opacity-70">{review.location}</span>
            </p>
          </div>
        ))}
      </div>
    </motion.div>
        <motion.div
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    type: "spring",
    stiffness: 120,
    damping: 18,
    mass: 0.6,
  }}
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


    </motion.section>
  );
};

export default WhatsNew;
