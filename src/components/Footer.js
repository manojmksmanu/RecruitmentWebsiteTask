import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

function Footer({ staggerContainer, fadeInUp }) {
  const { isDarkMode } = useTheme();

  // List of investor names
  const investors = [
    "Red Angels",
    "LC Ventures",
    "República Portuguesa",
    "PRR",
    "Financiado pela NextGenerationEU",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <motion.footer
      className={`py-12 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      } border-t ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div variants={fadeInUp} className="col-span-1">
            <span
              className={`text-3xl font-extrabold tracking-tight ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Zip
              <span
                className={isDarkMode ? "text-purple-400" : "text-purple-600"}
              >
                Line
              </span>
            </span>
            <p
              className={`mt-3 text-sm leading-relaxed ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } max-w-xs`}
            >
              Created with love in Brazil and Portugal. Connecting talent with
              opportunity since 2025.
            </p>
          </motion.div>

          {/* Companies Links */}
          <motion.div variants={fadeInUp} className="col-span-1">
            <h4
              className={`text-lg font-semibold mb-4 ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Companies
            </h4>
            <ul className="space-y-3">
              {["Publish a job", "Schedule a call", "Hire"].map((link) => (
                <motion.li key={link} variants={linkVariants}>
                  <a
                    href="#"
                    className={`text-sm ${
                      isDarkMode
                        ? "text-gray-400 hover:text-gray-300"
                        : "text-gray-600 hover:text-gray-800"
                    } transition-colors duration-300`}
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* UX Designers Links */}
          <motion.div variants={fadeInUp} className="col-span-1">
            <h4
              className={`text-lg font-semibold mb-4 ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              UX Designers
            </h4>
            <ul className="space-y-3">
              {["Candidate login", "Job positions", "Deeply for designers"].map(
                (link) => (
                  <motion.li key={link} variants={linkVariants}>
                    <a
                      href="#"
                      className={`text-sm ${
                        isDarkMode
                          ? "text-gray-400 hover:text-gray-300"
                          : "text-gray-600 hover:text-gray-800"
                      } transition-colors duration-300`}
                    >
                      {link}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Institutional Links */}
          <motion.div variants={fadeInUp} className="col-span-1">
            <h4
              className={`text-lg font-semibold mb-4 ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Institutional
            </h4>
            <ul className="space-y-3">
              {["About us", "LinkedIn", "Instagram"].map((link) => (
                <motion.li key={link} variants={linkVariants}>
                  <a
                    href="#"
                    className={`text-sm ${
                      isDarkMode
                        ? "text-gray-400 hover:text-gray-300"
                        : "text-gray-600 hover:text-gray-800"
                    } transition-colors duration-300`}
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Investors */}
          <motion.div variants={fadeInUp} className="col-span-1">
            <h4
              className={`text-lg font-semibold mb-4 ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Investors
            </h4>
            <ul className="space-y-3">
              {investors.map((investor) => (
                <motion.li key={investor} variants={linkVariants}>
                  <a
                    href="#"
                    className={`text-sm ${
                      isDarkMode
                        ? "text-gray-400 hover:text-gray-300"
                        : "text-gray-600 hover:text-gray-800"
                    } transition-colors duration-300`}
                  >
                    {investor}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-wrap justify-center gap-6 mb-4 sm:mb-0">
            {["Terms of use", "Privacy policy"].map((link) => (
              <motion.a
                key={link}
                href="#"
                variants={linkVariants}
                whileHover={{ y: -2 }}
                className={`text-sm ${
                  isDarkMode
                    ? "text-gray-400 hover:text-gray-300"
                    : "text-gray-600 hover:text-gray-800"
                } transition-colors duration-300`}
              >
                {link}
              </motion.a>
            ))}
          </div>
          <motion.div
            variants={fadeInUp}
            className={`text-sm ${
              isDarkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            © 2025 ZipLine. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
