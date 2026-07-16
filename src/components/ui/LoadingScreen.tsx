"use client";

import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function LoadingScreen() {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />

        {/* Animated circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-green-200/40"
              style={{
                width: `${200 + i * 120}px`,
                height: `${200 + i * 120}px`,
                top: "50%",
                left: "50%",
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Logo / Monogram */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-6"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Monogram */}
          <div className="relative">
            <motion.div
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-green-400 flex items-center justify-center shadow-2xl"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-white text-3xl font-black font-cairo">س</span>
            </motion.div>
            {/* Glow ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500 to-green-400 opacity-30 blur-lg"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Name */}
          <div className="text-center">
            <motion.h1
              className="text-2xl font-bold text-gray-900 font-cairo"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {portfolioData.personalInfo.name}
            </motion.h1>
            <motion.p
              className="text-sm text-brand-600 font-medium mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {portfolioData.personalInfo.title}
            </motion.p>
          </div>

          {/* Progress bar */}
          <motion.div
            className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-brand-500 to-green-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
          </motion.div>

          {/* Loading text */}
          <motion.p
            className="text-xs text-gray-400 font-cairo"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          >
            جاري التحميل...
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
