"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-padding relative overflow-hidden bg-white" dir="rtl">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-50/60 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative container-custom">
        <SectionTitle
          badge="تكويني الأكاديمي"
          title="مسيرتي"
          highlight="التعليمية"
          subtitle="رحلة علمية متواصلة تُغذّي الطموح وتُسرّع النمو"
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-green-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-brand-100/50 transition-all duration-500 overflow-hidden p-7">
                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-brand-500 to-green-400 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                />

                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-green-400 flex items-center justify-center text-2xl shadow-lg shadow-brand-200/50 mb-5"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {edu.icon}
                </motion.div>

                {/* Degree */}
                <h3 className="text-lg font-black text-gray-900 leading-tight mb-2">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <div className="flex items-center gap-1.5 mb-1">
                  <GraduationCap size={14} className="text-brand-500 flex-shrink-0" />
                  <p className="text-brand-700 font-bold text-sm">{edu.institution}</p>
                </div>

                {edu.faculty && (
                  <p className="text-gray-500 text-xs mb-3">{edu.faculty}</p>
                )}

                {/* Date */}
                <div className="flex items-center gap-1.5 mb-4">
                  <Calendar size={12} className="text-gray-400" />
                  <span className="text-xs text-gray-400 font-medium" dir="ltr">
                    {edu.startYear} – {edu.endYear}
                  </span>
                </div>

                {/* GPA badge */}
                {edu.gpa && (
                  <motion.div
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-br from-brand-50 to-green-50 border border-brand-100 rounded-xl mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Award size={14} className="text-brand-600" />
                    <span className="text-sm font-black text-brand-700">{edu.gpa}</span>
                  </motion.div>
                )}

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* Courses */}
                {edu.courses.length > 0 && (
                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <BookOpen size={12} className="text-gray-400" />
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                        أبرز المقررات
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 bg-gray-100 group-hover:bg-brand-100/70 text-gray-600 group-hover:text-brand-700 text-xs font-semibold rounded-lg transition-all duration-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-green-600 p-8 text-center shadow-2xl shadow-brand-200/40"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-dots opacity-20" />
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/10 blur-2xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/10 blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <span className="text-4xl text-white/30 font-black leading-none block mb-2">"</span>
            <p className="text-white text-xl font-bold leading-relaxed max-w-2xl mx-auto">
              التعليم هو السلاح الأقوى الذي يمكنك استخدامه لتغيير العالم
            </p>
            <p className="text-brand-200 text-sm mt-3 font-medium">— نيلسون مانديلا</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
