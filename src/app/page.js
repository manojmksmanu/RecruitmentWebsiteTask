"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Briefcase, Award, Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useTheme } from "@/context/ThemeContext";
import InfiniteLogoCarousel from "@/components/InfiniteLogoCarousel";
import Steps from "@/components/Steps";
import Feature from "@/components/Feature";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Spline from "@splinetool/react-spline";
import Jobs from "@/components/Jobs";

export default function RecruitmentLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { isDarkMode, toggleDarkMode } = useTheme();

  // Smooth scroll handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Intersection Observer to track active section
  useEffect(() => {
    const sections = [
      "hero",
      "steps",
      "features",
      "jobs",
      "testimonials",
      "stats",
    ];
    const observerOptions = {
      root: null, // Use viewport as root
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is roughly centered
      threshold: 0, // Trigger as soon as any part is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  return (
    <motion.div
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } font-sans`}
    >
      {/* Navigation */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Hero Section */}
      <motion.section
        id="hero"
        className={`relative ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800"
            : "bg-gradient-to-br from-blue-50 via-white to-blue-50"
        } overflow-hidden flex flex-col lg:flex-row items-center justify-between py-12 lg:py-0`} // Removed min-h-screen, added padding
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Main Content Container */}
        <div className="relative z-20 flex flex-col justify-center md:pt-0 pt-20 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 w-full lg:w-1/2 max-w-2xl text-left">
          <motion.div variants={fadeInUp} className="w-full">
            <motion.h1
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-tight"
            >
              Elevate Your{" "}
              <span
                className={`relative inline-block ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                Career Journey
                <motion.span
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
              </span>
              <span
                className={`relative inline-block lg:text-2xl text-xl md:mt-0 mt-4 ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                Focus on Your Vision! 👁️
                
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed font-light ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Discover a transformative platform that connects you with elite
              employers through advanced AI technology.
            </motion.p>

            {/* Taglines */}
            <motion.div
              variants={fadeInUp}
              className="mb-6 sm:mb-8 space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base font-medium"
            >
              <p
                className={`flex items-center gap-2 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full"></span>
                </span>
                Job Seekers: Find Your Dream Role with Ease
              </p>
              <p
                className={`flex items-center gap-2 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full"></span>
                </span>
                Employers: Hire Top Talent Seamlessly
              </p>
            </motion.div>

            {/* Buttons Container */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`group relative px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-widest overflow-hidden ${
                  isDarkMode
                    ? "bg-blue-600 text-white"
                    : "bg-blue-500 text-white"
                }`}
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight
                    className="ml-1 sm:ml-2 md:ml-3 group-hover:translate-x-2 transition-transform duration-300"
                    size={16}
                  />
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-widest border-2 ${
                  isDarkMode
                    ? "border-blue-400 text-blue-400 hover:bg-blue-400/20"
                    : "border-blue-500 text-blue-500 hover:bg-blue-100/50"
                }`}
              >
                Hire Talent
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Spline Component - Right Side */}
        <motion.div
          variants={fadeInUp}
          className="relative z-30 w-full lg:w-1/2 flex items-center justify-center "
          style={{ pointerEvents: "auto" }}
        >
          <Spline
            scene="https://prod.spline.design/O4pJTkSWgWsOdQDY/scene.splinecode"
            className="w-full  h-auto aspect-square"
          />
        </motion.div>
      </motion.section>

      {/* who hires  */}
      <InfiniteLogoCarousel />

      {/* Steps Section */}
      <Steps staggerContainer={staggerContainer} fadeInUp={fadeInUp} />

      {/* Features Section */}
      <Feature staggerContainer={staggerContainer} fadeInUp={fadeInUp} />

      {/* Jobs Section */}
      <Jobs staggerContainer={staggerContainer} fadeInUp={fadeInUp} />

      {/* Stats Section */}
      <Stats staggerContainer={staggerContainer} fadeInUp={fadeInUp} />

      {/* Testimonials Section */}
      <Testimonial staggerContainer={staggerContainer} fadeInUp={fadeInUp} />

      {/* CTA Section */}
      <CTA staggerContainer={staggerContainer} fadeInUp={fadeInUp} />

      {/* Footer */}
      <Footer staggerContainer={staggerContainer} fadeInUp={fadeInUp} />
    </motion.div>
  );
}
