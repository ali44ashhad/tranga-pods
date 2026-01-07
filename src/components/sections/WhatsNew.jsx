import React, { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

const WhatsNew = () => {
  const posts = [
    {
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2340&auto=format&fit=crop",
      caption: "New Ocean Breeze scent entering pod trials",
    },
    {
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2340&auto=format&fit=crop",
      caption: "Atlanta pods now live at Equinox Midtown",
    },
    {
      image:
        "https://images.unsplash.com/photo-1588680500419-e221b3c15dd6?w=600&auto=format&fit=crop&q=60",
      caption: "Convenience Pod v2.0 rolling out this quarter",
    },
    {
      image:
        "https://images.unsplash.com/photo-1665124197613-ffbb755f4ac2?w=600&auto=format&fit=crop&q=60",
      caption: "Miami Airport installation completed",
    },
  ];

  // Duplicate exactly once (important)
  const scrollingPosts = [...posts, ...posts];

  const trackRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (trackRef.current) {
      const totalWidth = trackRef.current.scrollWidth / 2;
      setWidth(totalWidth);
    }
  }, []);

  return (
    <section className="pt-28 md:pt-32 pb-20 overflow-hidden bg-gradient-to-r from-[#E9F5FF] via-[#FFF2EE] to-[#E9F5FF]">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-center font-extrabold text-4xl sm:text-5xl text-[#14132C]">
          What’s New at Tranga Pods
        </h2>

        <p className="text-center mt-4 text-lg sm:text-xl max-w-2xl mx-auto text-[#14132C]">
          Updates from our pods, partners, and community.
        </p>

        <div className="mt-10 mb-8 flex justify-center">
          <span className="h-1 w-16 rounded-full bg-[#FF9178]" />
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            ref={trackRef}
            className="flex gap-6"
            animate={{ x: [0, -width] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: width / 60, // speed control (px/sec)
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          >
            {scrollingPosts.map((post, index) => (
              <div
                key={index}
                className="min-w-[260px] sm:min-w-[300px] aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg bg-white"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white text-sm sm:text-base font-medium leading-snug">
                    {post.caption}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WhatsNew;
