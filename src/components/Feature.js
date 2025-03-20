import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { Award, Briefcase, Users, ChevronRight } from "lucide-react";

function Feature({ staggerContainer, fadeInUp }) {
  const { isDarkMode } = useTheme();



  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.section
      id="features"
      className={`py-28 ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-800"
          : "bg-gradient-to-b from-white to-blue-50"
      } relative overflow-hidden`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Subtle Background Effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: isDarkMode
            ? "radial-gradient(circle at 50% 50%, #1e3a8a33, transparent 70%)"
            : "radial-gradient(circle at 50% 50%, #3b82f633, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Supercharge Your Career
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg md:text-xl font-light ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Experience a cutting-edge approach to job hunting with ZipLine’s
            powerful features.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {[
            {
              icon: <Users size={36} />,
              title: "Precision Matching",
              desc: "Our AI instantly connects your skills to perfect job opportunities.",
              bg: "bg-blue-500",
              text: "text-blue-500",
              gradient: "from-blue-500 to-indigo-500",
            },
            {
              icon: <Briefcase size={36} />,
              title: "Elite Employers",
              desc: "Tap into exclusive positions from top-tier companies.",
              bg: "bg-purple-500",
              text: "text-purple-500",
              gradient: "from-purple-500 to-violet-500",
            },
            {
              icon: <Award size={36} />,
              title: "Growth Tools",
              desc: "Access premium resources to accelerate your career path.",
              bg: "bg-green-500",
              text: "text-green-500",
              gradient: "from-green-500 to-emerald-500",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 },
              }}
              className={`relative rounded-xl p-8 ${
                isDarkMode
                  ? "bg-gray-800/90 border-gray-700"
                  : "bg-white/95 border-gray-100"
              } border shadow-lg overflow-hidden `}
            >
              {/* Card Gradient Border */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.4 }}
              />

              <div
                className={`w-16 h-16 rounded-lg ${feature.bg} bg-opacity-10 flex items-center justify-center mb-6 mx-auto relative`}
              >
                  {feature.icon}
              
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  style={{
                    background: feature.bg.replace("bg-", ""),
                    opacity: 0.2,
                  }}
                />
              </div>
              <h3
                className={`text-xl md:text-2xl font-semibold mb-4 text-center ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-center text-sm md:text-base ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {feature.desc}
              </p>
              <motion.div
                className="flex justify-center mt-4"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight
                  className={feature.text}
                  size={20}
                  strokeWidth={2.5}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Feature;
