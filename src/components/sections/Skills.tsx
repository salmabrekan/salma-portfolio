"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const allSkills = skills.categories.flatMap((c) => c.items);

  return (
    <section id="skills" className="section-padding relative overflow-hidden" dir="rtl">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50" />
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-brand-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-brand-200 to-transparent" />

      {/* Orbs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-brand-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container-custom">
        <SectionTitle
          badge="ترسانة التقنيات"
          title="مهاراتي"
          highlight="التقنية"
          subtitle="أتقنت طيفًا واسعًا من التقنيات الحديثة في تطوير الواجهات والخلفيات والتصميم"
        />

        {/* Category selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
              activeCategory === null
                ? "bg-gradient-to-br from-brand-500 to-green-500 text-white shadow-lg shadow-brand-200/50"
                : "bg-white border border-gray-200 text-gray-600 hover:border-brand-200 hover:text-brand-600"
            }`}
          >
            الكل
          </button>
          {skills.categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(activeCategory === i ? null : i)}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeCategory === i
                  ? "bg-gradient-to-br from-brand-500 to-green-500 text-white shadow-lg shadow-brand-200/50"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-brand-200 hover:text-brand-600"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {skills.categories.map((category, catIdx) => {
            const isVisible = activeCategory === null || activeCategory === catIdx;
            return (
              <AnimatePresence key={category.name}>
                {isVisible && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group"
                  >
                    {/* Card header */}
                    <div className={`p-6 pb-5 bg-gradient-to-br ${category.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-dots opacity-20" />
                      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10 blur-xl -translate-y-1/2 translate-x-1/2" />
                      <div className="relative flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl">
                          {category.icon}
                        </div>
                        <h3 className="text-white font-black text-base">{category.name}</h3>
                        <span className="mr-auto text-white/60 text-sm font-medium">
                          {category.items.length} مهارة
                        </span>
                      </div>
                    </div>

                    {/* Skills list */}
                    <div className="p-6 space-y-5">
                      {category.items.map((skill, skillIdx) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIdx * 0.1, duration: 0.5 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-gray-800">{skill.name}</span>
                              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                                {skill.years} سنوات
                              </span>
                            </div>
                            <span className="text-sm font-black text-brand-600">{skill.level}%</span>
                          </div>

                          {/* Progress bar */}
                          <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              className="absolute top-0 right-0 h-full rounded-full bg-gradient-to-l from-brand-500 to-green-400"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1.2,
                                delay: 0.2 + skillIdx * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                            />
                            {/* Shine effect */}
                            <motion.div
                              className="absolute top-0 h-full w-8 bg-gradient-to-l from-transparent via-white/40 to-transparent rounded-full"
                              initial={{ right: "100%" }}
                              whileInView={{ right: "-10%" }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.6,
                                delay: 1.2 + skillIdx * 0.1,
                                ease: "easeOut",
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </div>

        {/* All tech logos / pill cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-white rounded-3xl border border-gray-100 shadow-sm p-8"
        >
          <h4 className="text-center font-black text-gray-800 mb-6 text-sm uppercase tracking-widest">
            التقنيات التي أستخدمها
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {allSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="group px-4 py-2.5 bg-gray-50 hover:bg-gradient-to-br hover:from-brand-500 hover:to-green-500 border border-gray-200 hover:border-transparent rounded-xl cursor-default transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-brand-200/40"
              >
                <span className="text-sm font-bold text-gray-700 group-hover:text-white transition-colors whitespace-nowrap">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
