import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";

const WhatsNew = () => {
  const instagramPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2340&auto=format&fit=crop",
      caption: "New Ocean Breeze scent entering pod trials",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2340&auto=format&fit=crop",
      caption: "Atlanta pods now live at Equinox Midtown",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1588680500419-e221b3c15dd6?w=600&auto=format&fit=crop&q=60",
      caption: "Convenience Pod v2.0 rolling out this quarter",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1665124197613-ffbb755f4ac2?w=600&auto=format&fit=crop&q=60",
      caption: "Miami Airport installation completed",
    },
  ];

  return (
    <motion.section
      id="whats-new"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="pt-28 md:pt-32 pb-20  bg-gradient-to-r from-[#E9F5FF] via-[#FFF2EE] to-[#E9F5FF]"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.h2
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center font-extrabold text-4xl sm:text-5xl"
          style={{ color: "#14132C" }}
        >
          What’s New at Tranga Pods
        </motion.h2>

        {/* Sub Header */}
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mt-4 text-lg sm:text-xl max-w-2xl mx-auto"
          style={{ color: "#14132C" }}
        >
          Updates from our pods, partners, and community.
        </motion.p>

        {/* Divider */}
        <div className="mt-10 mb-8 flex justify-center">
          <span
            className="h-1 w-16 rounded-full"
            style={{ backgroundColor: "#FF9178" }}
          />
        </div>

        {/* Instagram Carousel — Informational */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2}
          loop
          allowTouchMove={false} // calm, intentional
          speed={9000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1.6 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 2.8 },
          }}
          className="!pb-6"
        >
          {instagramPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg bg-white">

                <img
                  src={post.image}
                  alt={post.caption}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Soft overlay (informational, not flashy) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white text-sm sm:text-base font-medium leading-snug">
                    {post.caption}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </motion.section>
  );
};

export default WhatsNew;
