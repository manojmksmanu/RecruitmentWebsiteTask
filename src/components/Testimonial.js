import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Software Developer",
    company: "TechCorp Inc.",
    text: "ZipLine transformed my job hunt into a breeze—dream job secured in weeks!",
  },
  {
    name: "James Rodriguez",
    position: "Product Manager",
    company: "InnovateTech",
    text: "The personalized approach was a game-changer. I’m thriving now!",
  },
  {
    name: "Emily Chen",
    position: "UX Designer",
    company: "DesignHub",
    text: "ZipLine’s AI matching is next-level. Found my perfect role effortlessly.",
  },
];

function Testimonial({ staggerContainer, fadeInUp }) {
  const { isDarkMode } = useTheme();


  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.section
      id="testimonials"
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg md:text-xl font-light ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Real experiences from professionals who’ve soared with ZipLine.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {testimonials.map((testimonial, index) => (
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
              } border shadow-lg overflow-hidden`}
            >
              {/* Subtle Quote Icon */}
              <motion.div
                className="absolute top-2 right-2 opacity-20"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <Quote
                  size={40}
                  className={isDarkMode ? "text-gray-500" : "text-gray-300"}
                />
              </motion.div>

              {/* Rating Stars */}
              <div className="flex justify-start mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <div className="flex items-center mb-6">
                <motion.div
                  className={`w-14 h-14 rounded-full ${
                    isDarkMode ? "bg-gray-600" : "bg-gray-200"
                  } flex items-center justify-center`}
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                >
                  <span
                    className={`text-xl font-bold ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {testimonial.name.charAt(0)}
                  </span>
                </motion.div>
                <div className="ml-4">
                  <h3
                    className={`font-semibold text-lg ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {testimonial.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p
                className={`italic text-base md:text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Testimonial;
