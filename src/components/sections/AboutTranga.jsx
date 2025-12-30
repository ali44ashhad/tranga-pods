// // components/sections/AboutTranga.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link as ScrollLink } from 'react-scroll';
// import { Package, Users, Target, Zap } from 'lucide-react';

// const AboutTranga = () => {
//  const features = [
//   {
//     icon: <Package className="w-8 h-8" />,
//     title: "How It Works",
//     description: "Visit a Tranga Pod machine, choose your fragrance, and enjoy convenience on the go. Our machines are designed to be fast, easy, and accessible.",
//     bg: "bg-[#FF9178]"
//   },
//   {
//     icon: <Users className="w-8 h-8" />,
//     title: "Community First",
//     description: "We place Tranga Pods in public and community-loved venues so customers can access them where they already spend time.",
//     bg: "bg-[#A6D4FA]"
//   },
//   {
//     icon: <Target className="w-8 h-8" />,
//     title: "Why Tranga Pods",
//     description: "Tranga Pods exist to make everyday moments easier while supporting local spaces and venues our customers care about.",
//     bg: "bg-[#FFFD3A]"
//   },
//   {
//     icon: <Zap className="w-8 h-8" />,
//     title: "Designed for Real Life",
//     description: "Simple, practical, and easy to use. Tranga Pods are built for real people and real routines.",
//     bg: "bg-[#DB2A2A]"
//   }
// ];



//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1
//     }
//   };

//   return (
//     <motion.section
//       id="about"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="py-20 bg-gradient-to-r from-[#E9F5FF] via-[#FFF2EE]  to-[#E9F5FF]"
//     >
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Section Header */}
//         <div className='py-10'>
//  <motion.h1
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.1 }}
//           className="text-5xl text-center sm:text-6xl font-bold tracking-tight"
//           style={{ color: '#14132C' }}
//         >
//         Learn About <span style={{ color: '#FF9178' }}>Tranga Pods.</span>
//         </motion.h1>
        
//         <motion.p
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="mt-6 text-center max-w-3xl mx-auto text-lg"
//           style={{ color: '#14132C' }}
//         >
//            Tranga Pods bring convenience and fragrance to the places you already love. Our machines are designed to be simple, accessible, and placed in community-loved partners. Here's how it works and how you can help us decide where we go next.
//              </motion.p>
//              </div>
//         {/* Feature Cards Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
//         >
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ y: -5, transition: { duration: 0.2 } }}
//               className="p-6 rounded-2xl bg-gradient-to-br from-white to-[#A6D4FA]/10 border border-[#A6D4FA]/20"
//             >
//               <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${feature.bg}`}>
//   <div className="text-white">
//     {feature.icon}
//   </div>
// </div>


//               <h3 className="text-xl font-medium mb-3 text-[#14132C]">{feature.title}</h3>
//               <p className="text-[#14132C]/70">{feature.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Location Request Form */}
     
//       </div>
//     </motion.section>
//   );
// };

// export default AboutTranga;

// components/sections/AboutTranga.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Package, Users, Target, Zap } from 'lucide-react';

const AboutTranga = () => {
  const features = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "How It Works",
      description:
        "Visit a Tranga Pod machine, choose your fragrance, and enjoy convenience on the go. Our machines are designed to be fast, easy, and accessible.",
      bg: "bg-[#FF9178]"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description:
        "We place Tranga Pods in public and community-loved venues so customers can access them where they already spend time.",
      bg: "bg-[#A6D4FA]"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Why Tranga Pods",
      description:
        "Tranga Pods exist to make everyday moments easier while supporting local spaces and venues our customers care about.",
      bg: "bg-[#FFFD3A]"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Designed for Real Life",
      description:
        "Simple, practical, and easy to use. Tranga Pods are built for real people and real routines.",
      bg: "bg-[#DB2A2A]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-r from-[#E9F5FF] via-[#FFF2EE] to-[#E9F5FF]"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="py-10">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl text-center sm:text-6xl font-bold tracking-tight"
            style={{ color: '#14132C' }}
          >
            Learn About <span style={{ color: '#FF9178' }}>Tranga Pods</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-center max-w-3xl mx-auto text-lg"
            style={{ color: '#14132C' }}
          >
            Tranga Pods bring convenience and fragrance to the places you already love.
            Our machines are designed to be simple, accessible, and built for real-life
            routines in community-loved spaces.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white to-[#A6D4FA]/10 border border-[#A6D4FA]/20"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${feature.bg}`}
              >
                <div className="text-white">{feature.icon}</div>
              </div>

              <h3 className="text-xl font-medium mb-3 text-[#14132C]">
                {feature.title}
              </h3>

              <p className="text-[#14132C]/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutTranga;
