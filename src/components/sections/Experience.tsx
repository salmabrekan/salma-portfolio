"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase, CheckCircle2, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden"
      dir="rtl"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50" />
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-brand-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-brand-200 to-transparent" />

      <div className="relative container-custom">
        <SectionTitle
          badge="مسيرتي المهنية"
          title="الخبرة"
          highlight="العملية"
          subtitle="رحلتي في سوق العمل وما اكتسبته من مهارات ومعارف قيّمة"
        />

        <div className="mt-16 max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute right-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-400 via-brand-200 to-transparent" />

            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative pr-16 mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute right-0 top-6 flex items-center justify-center">
                  <motion.div
                    className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-green-400 flex items-center justify-center shadow-lg shadow-brand-200/50 text-xl z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {exp.logo}
                  </motion.div>
                  {/* Pulse ring for current job */}
                  {exp.current && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-brand-300"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Card */}
                <motion.div
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group"
                  whileHover={{ y: -4 }}
                >
                  {/* Top accent */}
                  <div className="h-1 bg-gradient-to-l from-brand-500 to-green-400" />

                  <div className="p-7">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4 gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-black text-gray-900">{exp.company}</h3>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-brand-50 border border-brand-100 text-brand-700 text-xs font-bold rounded-full">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-500" />
                              </span>
                              الوظيفة الحالية
                            </span>
                          )}
                        </div>
                        <p className="text-brand-600 font-bold text-base">{exp.role}</p>
                      </div>

                      <ArrowUpRight
                        size={20}
                        className="text-gray-300 group-hover:text-brand-500 transition-colors flex-shrink-0 mt-1"
                      />
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-3 mb-5">
                      <span className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
                        <Calendar size={12} className="text-brand-500" />
                        {exp.startDate} — {exp.endDate}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
                        <MapPin size={12} className="text-brand-500" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
                        <Briefcase size={12} className="text-brand-500" />
                        {exp.branch} · {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                        أبرز الإنجازات
                      </h4>
                      <div className="space-y-2">
                        {exp.achievements.map((ach, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + j * 0.08 }}
                            className="flex items-start gap-2.5"
                          >
                            <CheckCircle2
                              size={15}
                              className="text-brand-500 mt-0.5 flex-shrink-0"
                            />
                            <span className="text-sm text-gray-700 leading-snug">{ach}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* "More to come" end marker */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative pr-16"
            >
              <div className="absolute right-0 w-12 h-12 rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <span className="text-xl">✨</span>
              </div>
              <div className="bg-white rounded-3xl border border-dashed border-gray-200 p-6 text-center">
                <p className="text-gray-400 text-sm font-medium">
                  الرحلة مستمرة... أفضل ما هو آتٍ لا يزال أمامنا
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
