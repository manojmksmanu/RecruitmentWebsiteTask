import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  ChevronDown,
} from "lucide-react";
function Navbar({
  isDarkMode,
  toggleDarkMode,
  scrollToSection,
  isMenuOpen,
  activeSection,
  setIsMenuOpen
}) {
  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        isDarkMode ? "bg-gray-800/95" : "bg-white/95"
      } backdrop-blur-lg shadow-lg border-b ${
        isDarkMode ? "border-gray-700" : "border-gray-200"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>

        <div className="hidden md:flex items-center space-x-10">
          {["hero", "steps", "features", "jobs", "stats", "testimonials"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative text-sm font-light uppercase tracking-wide ${
                  activeSection === section
                    ? isDarkMode
                      ? "text-blue-400"
                      : "text-blue-600"
                    : isDarkMode
                    ? "text-gray-300"
                    : "text-gray-700"
                } hover:text-blue-500 transition-colors duration-300`}
              >
                {section === "hero"
                  ? "Home"
                  : section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500 rounded-full"
                    initial={false}
                    animate={{ scaleX: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.4,
                    }}
                  />
                )}
              </button>
            )
          )}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium text-sm uppercase tracking-wide border ${
                isDarkMode
                  ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              } transition-all duration-300`}
            >
              Log In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium text-sm uppercase tracking-wide ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              } text-white transition-all duration-300 shadow-md`}
            >
              Sign Up
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                isDarkMode ? "bg-gray-700" : "bg-gray-100"
              } transition-all duration-300`}
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </motion.button>
          </div>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              isDarkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            {isDarkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-600" />
            )}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
          >
            <ChevronDown
              size={24}
              className={`transform transition-transform duration-300 ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } border-t ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
              {[
                "hero",
                "steps",
                "features",
                "jobs",
                "testimonials",
                "stats",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-base font-medium uppercase tracking-wide ${
                    activeSection === section
                      ? isDarkMode
                        ? "text-blue-400"
                        : "text-blue-600"
                      : isDarkMode
                      ? "text-gray-300"
                      : "text-gray-700"
                  } hover:text-blue-500 transition-colors duration-300`}
                >
                  {section === "hero"
                    ? "Home"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium text-sm uppercase tracking-wide ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                } text-white transition-all duration-300`}
              >
                Sign Up
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar