// components/InfiniteLogoCarousel.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const InfiniteLogoCarousel = () => {
  const { isDarkMode } = useTheme();

  // Company logos array - replace with actual company logos
  const companyLogos = [
    { name: "Google", logo: "/images/google.png" },
    { name: "Microsoft", logo: "/images/microsoft.png" },
    { name: "Apple", logo: "/images/appl-log.png" },
    { name: "Meta", logo: "/images/meta.png" },
    { name: "Tesla", logo: "/images/tesla.png" },
    { name: "IBM", logo: "/images/ibm.png" },
    { name: "Oracle", logo: "/images/oracle.png" },
    { name: "Intel", logo: "/images/intel.png" },
    { name: "Cisco", logo: "/images/cisco.png" },
  ];

  // Duplicate logos to create seamless effect
  const duplicatedLogos = [...companyLogos, ...companyLogos];

  return (
    <div className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-6 mb-10">
        <h2
          className={`text-4xl font-extrabold text-center mb-6 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Top Companies That Hire Through Us
        </h2>
        <p
          className={`text-xl text-center max-w-3xl mx-auto ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Join thousands of professionals who found their dream jobs at these
          industry-leading companies.
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* First row of logos, moving right to left */}
        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((company, index) => (
              <div
                key={`row1-${index}`}
                className={`flex-shrink-0 w-48 h-24 mx-6 flex items-center justify-center rounded-lg ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-md transition-all duration-300 hover:shadow-lg`}
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-w-full max-h-16 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second row of logos, moving left to right (opposite direction) */}
        <div className="relative overflow-hidden w-full mt-6">
          <motion.div
            className="flex"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25, // Slightly different duration for visual interest
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((company, index) => (
              <div
                key={`row2-${index}`}
                className={`flex-shrink-0 w-48 h-24 mx-6 flex items-center justify-center rounded-lg ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-md transition-all duration-300 hover:shadow-lg`}
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-w-full max-h-16 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoCarousel;
