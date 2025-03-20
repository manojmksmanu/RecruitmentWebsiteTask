import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { ArrowRight } from "lucide-react";

function CTA({ staggerContainer, fadeInUp }) {
  const { isDarkMode } = useTheme();


  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.section
      className={`py-28 ${
        isDarkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
      } relative overflow-hidden`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
          transition: { duration: 15, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          className={`rounded-2xl p-12 text-white text-center shadow-2xl relative overflow-hidden ${
            isDarkMode ? "bg-gray-800/90" : "bg-opacity-10 bg-white"
          } border ${isDarkMode ? "border-gray-700" : "border-white/20"}`}
        >
          <motion.h2
            variants={fadeInUp}
            className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent`}
          >
            Launch Your Future Now
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className={`max-w-2xl mx-auto mb-10 text-lg md:text-xl opacity-90 relative z-10 font-light ${
              isDarkMode ? "text-slate-100" : "text-slate-700"
            }`}
          >
            Join ZipLine’s vibrant community and unlock your career’s limitless
            potential today.
          </motion.p>
          <motion.div
            variants={staggerContainer}
            className="flex flex-col sm:flex-row justify-center gap-6 relative z-10"
          >
            <motion.button
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`group relative px-10 py-4 rounded-full font-semibold text-lg uppercase tracking-wide overflow-hidden ${
                isDarkMode ? "bg-blue-600 text-white" : "bg-white text-blue-600"
              }  shadow-lg`}
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1"
                  size={20}
                />
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`group relative px-10 py-4 rounded-full font-semibold text-lg uppercase tracking-wide overflow-hidden ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-blue-700 text-white"
              }  shadow-lg`}
            >
              <span className="relative z-10 flex items-center">
                For Employers
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1"
                  size={20}
                />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default CTA;
