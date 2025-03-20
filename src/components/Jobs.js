import React from 'react'
import {motion } from "framer-motion"
import { useTheme } from '@/context/ThemeContext';
import { ArrowRight } from 'lucide-react';
const jobsContent = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120K - $150K",
    },
    {
      title: "Product Manager",
      company: "InnovateTech",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110K - $140K",
    },
    {
      title: "UX/UI Designer",
      company: "DesignHub",
      location: "Remote",
      type: "Contract",
      salary: "$90K - $110K",
    },
    {
      title: "Data Scientist",
      company: "AIWorks",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$130K - $160K",
    },
  ];
function Jobs({ staggerContainer ,fadeInUp}) {
    const {isDarkMode} =useTheme()
  return (
    <motion.section
      id="jobs"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Your Next Role Awaits
          </h2>
          <p
            className={`max-w-3xl mx-auto text-xl ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Browse exclusive opportunities from top companies worldwide.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {jobsContent.map((job, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
              }}
              className={`rounded-2xl p-6 ${
                isDarkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-blue-50"
              } shadow-xl border ${
                isDarkMode ? "border-gray-700" : "border-gray-100"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{job.title}</h3>
                <div
                  className={`px-1 py-1 rounded-full text-xs font-medium ${
                    isDarkMode
                      ? "bg-blue-600 text-white"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {job.type}
                </div>
              </div>
              <p
                className={`font-medium mb-2 ${
                  isDarkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {job.company}
              </p>
              <p
                className={`text-sm mb-4 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {job.location}
              </p>
              <div className="flex justify-between items-center">
                <span
                  className={`text-sm font-medium ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {job.salary}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide ${
                    isDarkMode
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-blue-500 hover:bg-blue-600"
                  } text-white `}
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-10 py-4 rounded-full font-semibold text-lg uppercase tracking-wide ${
              isDarkMode
                ? "bg-gray-800 hover:bg-gray-700 border border-gray-700"
                : "bg-gray-100 hover:bg-gray-200 border border-gray-200"
            } transition-all duration-300 shadow-lg flex items-center justify-center mx-auto`}
          >
            <span>Explore More Jobs</span>
            <ArrowRight className="ml-3" size={20} />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Jobs