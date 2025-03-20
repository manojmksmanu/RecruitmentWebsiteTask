import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { Award, Briefcase, Users } from "lucide-react";

function Stats({ staggerContainer, fadeInUp }) {
  const { isDarkMode } = useTheme();


  const statVariants = {
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

  const countUpVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="stats"
      className={`py-28 ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-800 to-gray-900"
          : "bg-gradient-to-b from-blue-50 to-indigo-50"
      } relative overflow-hidden`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Background Effect */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: isDarkMode
            ? "radial-gradient(circle at 50% 30%, #1e3a8a33, transparent 70%)"
            : "radial-gradient(circle at 50% 30%, #3b82f633, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            ZipLine in Numbers
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg md:text-xl font-light ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Witness the transformative impact of connecting talent with
            opportunity.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {[
            {
              value: "50K+",
              label: "Job Seekers",
              icon: <Users size={36} />,
              color: "text-blue-500",
              bgColor: "bg-blue-500",
            },
            {
              value: "1K+",
              label: "Employers",
              icon: <Briefcase size={36} />,
              color: "text-purple-500",
              bgColor: "bg-purple-500",
            },
            {
              value: "95%",
              label: "Success Rate",
              icon: <Award size={36} />,
              color: "text-green-500",
              bgColor: "bg-green-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 },
              }}
              className={`text-center p-8 rounded-xl ${
                isDarkMode
                  ? "bg-gray-800/90 border-gray-700"
                  : "bg-white/95 border-gray-100"
              } border shadow-lg  relative overflow-hidden`}
            >
              {/* Subtle Gradient Overlay */}
              <motion.div
                className={`absolute inset-0 ${stat.bgColor} opacity-0`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.4 }}
              />

              <motion.div
                className={`w-16 h-16 mx-auto mb-6 rounded-full ${stat.bgColor} bg-opacity-10 flex items-center justify-center relative`}
                animate={{
                  scale: [1, 1.05, 1],
                  transition: { duration: 2, repeat: Infinity },
                }}
              >
                  {stat.icon}
           
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  style={{ background: stat.bgColor.replace("bg-", "") }}
                />
              </motion.div>
              <motion.h3
                variants={countUpVariants}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                {stat.value}
              </motion.h3>
              <p
                className={`text-sm md:text-base font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Stats;
