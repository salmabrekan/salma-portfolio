"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";

const traits = [
  { label: "تطوير الويب الاحترافي", icon: "💻" },
  { label: "تصميم UI/UX المتقدم", icon: "🎨" },
  { label: "قواعد البيانات والـ API", icon: "⚙️" },
  { label: "التعلم المستمر والتطوير الذاتي", icon: "📚" },
  { label: "العمل ضمن فرق متعددة التخصصات", icon: "🤝" },
  { label: "إدارة المشاريع التقنية", icon: "🚀" },
];

export default function About() {
  const { about, personalInfo } = portfolioData;

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-white" dir="rtl">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      <div className="relative container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Right – Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Main card */}
            <div className="relative">
              {/* Decorative background blob */}
              <div className="absolute -inset-6 bg-gradient-to-br from-brand-50 to-green-50 rounded-3xl blur-2xl opacity-60" />

              <div className="relative rounded-3xl bg-white border border-gray-100 shadow-2xl overflow-hidden p-8">
                {/* Top decoration */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-brand-500 to-green-400" />

                {/* Profile section */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-green-400 flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-white text-3xl font-black font-cairo">س</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{personalInfo.name}</h3>
                    <p className="text-brand-600 text-sm font-semibold">{personalInfo.title}</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                      </span>
                      <span className="text-xs text-gray-500">{personalInfo.availability}</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {about.stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="bg-gradient-to-br from-gray-50 to-brand-50/50 rounded-2xl p-4 border border-gray-100 text-center"
                    >
                      <div className="text-2xl font-black text-gradient mb-1">{stat.number}</div>
                      <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Current role */}
                <div className="bg-brand-50 rounded-2xl p-4 border border-brand-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-lg bg-brand-500 flex items-center justify-center text-white text-xs">🏦</div>
                    <span className="font-bold text-brand-800 text-sm">{personalInfo.currentEmployer}</span>
                  </div>
                  <p className="text-brand-700 text-xs font-medium">
                    {personalInfo.currentJob} — {personalInfo.currentBranch}
                  </p>
                  <p className="text-brand-500 text-xs mt-1">{personalInfo.location}</p>
                </div>
              </div>

              {/* Floating sparkle */}
              <motion.div
                className="absolute -top-4 -left-4 w-10 h-10 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center shadow-lg"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={18} className="text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Left – Text content */}
          <div className="order-1 lg:order-2 space-y-8">
            <SectionTitle
              badge="من أنا"
              title={about.headline.split(" ").slice(0, 3).join(" ")}
              highlight={about.headline.split(" ").slice(3).join(" ")}
              centered={false}
            />

            <div className="space-y-5">
              {about.paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="text-gray-600 leading-relaxed text-base"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Traits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider">
                ما أتقنه
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {traits.map((trait, i) => (
                  <motion.div
                    key={trait.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 hover:bg-brand-50 hover:border-brand-100 border border-transparent transition-all duration-200 group"
                  >
                    <span className="text-lg">{trait.icon}</span>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-700 transition-colors">
                      {trait.label}
                    </span>
                    <CheckCircle2 size={14} className="mr-auto text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
