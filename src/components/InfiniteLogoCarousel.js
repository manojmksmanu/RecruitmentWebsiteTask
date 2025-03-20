"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

const InfiniteLogoCarousel = () => {
  const { isDarkMode } = useTheme();

  const companyLogos = [
    { name: "Google", logo: "/images/google.png" },
    { name: "Microsoft", logo: "/images/microsoft.png" },
    { name: "Apple", logo: "/images/apple-logo.png" },
    { name: "Meta", logo: "/images/meta.png" },
    { name: "Tesla", logo: "/images/tesla.png" },
    { name: "IBM", logo: "/images/ibm.png" },
    { name: "Oracle", logo: "/images/oracle.png" },
    { name: "Intel", logo: "/images/intel.png" },
    { name: "Cisco", logo: "/images/cisco.png" },
  ];

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
            className="flex items-center"
            animate={{ x: ["0%", "-50%"] }}
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
                className={`flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-auto mx-3 flex items-center justify-center rounded-lg ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-md transition-all duration-300 hover:shadow-lg p-4`}
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={100}
                  height={40}
                  className="max-w-full h-auto"
                  priority={index < companyLogos.length}
                  unoptimized
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second row of logos, moving left to right */}
        <div className="relative overflow-hidden w-full mt-6">
          <motion.div
            className="flex items-center"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((company, index) => (
              <div
                key={`row2-${index}`}
                className={`flex-shrink-0 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-auto mx-3 flex items-center justify-center rounded-lg ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-md transition-all duration-300 hover:shadow-lg p-4`}
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={100}
                  height={40}
                  className="max-w-full h-auto"
                  unoptimized
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
