import React from 'react';
import { motion } from 'framer-motion';
import alice from '../../public/alice.png';
import fedx from '../../public/fedx.png';
import gen from '../../public/gen.png';
const PartnersSection = () => {
  const partners = [
    {
      name: 'FedEx',
      url: 'https://www.fedex.com/en-us/home.html',
      logo: fedx,
      alt: 'FedEx Logo'
    },
    {
      name: 'Hello Alice',
      url: 'https://helloalice.com',
      logo: alice,
      alt: 'Hello Alice Logo'
    },
    {
      name: 'Global Entrepreneurship Network',
      url: 'https://www.genglobal.org',
      logo: gen,
      alt: 'Global Entrepreneurship Network Logo'
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- Header --- */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold" style={{ color: '#14132C' }}>
            Partners & <span style={{ color: '#FF9178' }}>Supporters</span>
          </h2>
        </motion.div>

        {/* --- Body Text --- */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed" style={{ color: '#14132C' }}>
            Collaborating with organizations that believe in bold ideas and community impact drives us forward. Together, we're bringing Tranga Pods to life in ways that matter.
          </p>
        </motion.div>

        {/* --- Brand Logos Row --- */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {partners.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="h-32 sm:h-40 flex items-center justify-center rounded-xl transition-all duration-300 hover:shadow-lg p-6"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                border: '2px solid rgba(255, 145, 120, 0.2)'
              }}
              whileHover={{
                backgroundColor: 'rgba(255, 145, 120, 0.1)',
                borderColor: '#FF9178',
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(255, 145, 120, 0.15)'
              }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="max-h-24 max-w-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<span style="color: #14132C; font-weight: bold; text-center">${partner.name}</span>`;
                }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* --- Optional CTA --- */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p style={{ color: '#14132C' }} className="text-sm sm:text-base">
            Interested in partnering with us? <span style={{ color: '#FF9178' }} className="font-semibold"><a href="/customers"> Let's connect.</a></span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
