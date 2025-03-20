import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import {
  UserPlus,
  Search,
  FileText,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

function Steps({ staggerContainer, fadeInUp }) {
  const { isDarkMode } = useTheme() || { isDarkMode: false }; // Fallback if context fails

  const stepVariants = {
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
      id="steps"
      className={`py-28 ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-800"
          : "bg-gradient-to-b from-blue-50 to-indigo-50"
      } relative overflow-hidden`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Your Path to Success in 4 Steps
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg md:text-xl font-light ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Follow our streamlined process to effortlessly secure your dream
            role and launch your career.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="relative grid grid-cols-1 md:grid-cols-4 gap-10"
        >
          {[
            {
              icon: <UserPlus size={32} />,
              title: "Sign Up",
              desc: "Create your profile in moments to access exclusive opportunities.",
              color: "text-orange-500",
              bgColor: "bg-orange-500",
            },
            {
              icon: <Search size={32} />,
              title: "Explore Jobs",
              desc: "Find perfect matches with our smart search technology.",
              color: "text-purple-500",
              bgColor: "bg-purple-500",
            },
            {
              icon: <FileText size={32} />,
              title: "Submit Resume",
              desc: "Highlight your skills with a polished CV upload.",
              color: "text-blue-500",
              bgColor: "bg-blue-500",
            },
            {
              icon: <CheckCircle size={32} />,
              title: "Secure Your Role",
              desc: "Land your dream job and start your career ascent.",
              color: "text-green-500",
              bgColor: "bg-green-500",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className={`relative z-10 rounded-xl p-6 ${
                isDarkMode
                  ? "bg-gray-800/90 border-gray-700"
                  : "bg-white/95 border-gray-100"
              } border shadow-lg`}
            >
              <div
                className={`w-16 h-16 rounded-full ${step.bgColor} bg-opacity-10 flex items-center justify-center mb-6 mx-auto`}
              >
                {step.icon}
             
              </div>
              <h3
                className={`text-xl font-semibold mb-3 text-center ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-center text-sm md:text-base ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Steps;
