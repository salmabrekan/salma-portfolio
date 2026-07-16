"use client";

import { motion } from "framer-motion";
import { Download, FileText, Eye, Calendar, User, Briefcase, GraduationCap, Code } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";

const cvHighlights = [
  { icon: User, label: "المعلومات الشخصية", desc: "الاسم والموقع ومعلومات التواصل" },
  { icon: Briefcase, label: "الخبرة العملية", desc: "بنك أمجاد — فرع دفيقة" },
  { icon: GraduationCap, label: "المؤهلات العلمية", desc: "بكالوريوس تقنية المعلومات — جامعة حضرموت" },
  { icon: Code, label: "المهارات التقنية", desc: "13+ تقنية وأداة برمجية" },
];

export default function Resume() {
  const { resume, personalInfo } = portfolioData;

  return (
    <section id="resume" className="section-padding relative overflow-hidden" dir="rtl">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50" />
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-brand-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-brand-200 to-transparent" />

      {/* Large decorative orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-green-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative container-custom">
        <SectionTitle
          badge="وثيقة مهنية"
          title="السيرة"
          highlight="الذاتية"
          subtitle={resume.previewText}
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
          {/* CV Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Paper shadow effect */}
            <div className="absolute -bottom-3 -left-3 right-3 top-3 bg-gray-200 rounded-3xl" />
            <div className="absolute -bottom-1.5 -left-1.5 right-1.5 top-1.5 bg-gray-100 rounded-3xl" />

            {/* Main CV card */}
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              {/* CV Header */}
              <div className="relative bg-gradient-to-br from-brand-600 to-green-600 p-8 pb-10">
                <div className="absolute inset-0 bg-dots opacity-20" />
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 blur-2xl" />

                <div className="relative flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl font-black text-white font-cairo shadow-xl">
                    س
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl font-black">{personalInfo.name}</h3>
                    <p className="text-brand-200 text-sm font-medium mt-0.5">{personalInfo.title}</p>
                    <p className="text-brand-300 text-xs mt-1">{personalInfo.location}</p>
                  </div>
                </div>

                {/* Decorative lines */}
                <div className="relative mt-6 space-y-1.5 opacity-30">
                  {[100, 80, 60].map((w, i) => (
                    <div key={i} className="h-2 bg-white/50 rounded-full" style={{ width: `${w}%` }} />
                  ))}
                </div>
              </div>

              {/* CV Body preview */}
              <div className="p-7 space-y-5">
                {cvHighlights.map(({ icon: Icon, label, desc }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-brand-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-800">{label}</p>
                      <p className="text-xs text-gray-500 truncate">{desc}</p>
                    </div>
                    <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden flex-shrink-0">
                      <motion.div
                        className="h-full bg-gradient-to-l from-brand-500 to-green-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                      />
                    </div>
                  </motion.div>
                ))}

                {/* Decorative blurred content */}
                <div className="space-y-2 mt-2 opacity-40 select-none pointer-events-none">
                  {[90, 70, 50, 80, 60].map((w, i) => (
                    <div key={i} className="h-2 bg-gray-200 rounded-full" style={{ width: `${w}%` }} />
                  ))}
                </div>
              </div>

              {/* Watermark */}
              <div className="px-7 pb-5">
                <div className="border-t border-dashed border-gray-200 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar size={12} />
                    <span>آخر تحديث: {resume.lastUpdated}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-brand-600 font-bold">
                    <FileText size={12} />
                    <span>PDF</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">
                جاهزة للفرص{" "}
                <span className="text-gradient">المهنية</span>
              </h3>
              <p className="text-gray-500 leading-relaxed text-base">
                سيرتي الذاتية تعكس مسيرتي الأكاديمية والمهنية بالكامل — من التعليم الأكاديمي إلى الخبرة العملية في القطاع المصرفي ومشاريع البرمجة التي أنجزتها.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "2025", label: "سنة التخرج" },
                { number: "7+", label: "مشروع مكتمل" },
                { number: "13+", label: "تقنية متقنة" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="text-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
                >
                  <div className="text-2xl font-black text-gradient mb-1">{stat.number}</div>
                  <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <motion.a
                href={resume.downloadUrl}
                download
                className="group flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-br from-brand-500 to-green-500 text-white font-bold rounded-2xl shadow-xl shadow-brand-200/50 hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={20} className="group-hover:animate-bounce" />
                <span className="text-base">{resume.subtitle}</span>
              </motion.a>

              <motion.button
                className="group flex items-center justify-center gap-3 w-full px-8 py-4 bg-white border border-gray-200 hover:border-brand-300 text-gray-700 hover:text-brand-700 font-bold rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Eye size={18} className="group-hover:text-brand-600 transition-colors" />
                <span>معاينة السيرة الذاتية</span>
              </motion.button>
            </div>

            <p className="text-xs text-gray-400 text-center">
              ملف PDF • آخر تحديث {resume.lastUpdated}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
