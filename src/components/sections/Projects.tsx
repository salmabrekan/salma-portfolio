"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star, ArrowLeft } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Projects() {
  const { projects } = portfolioData;
  const [showAll, setShowAll] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const displayedProjects = showAll ? projects : projects.slice(0, 4);
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-white" dir="rtl">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-50/50 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="relative container-custom">
        <SectionTitle
          badge="معرض أعمالي"
          title="المشاريع"
          highlight="البرمجية"
          subtitle="مجموعة من المشاريع التي أجسّد فيها شغفي بالبرمجة وحل المشكلات الواقعية"
        />

        {/* Featured projects – large cards */}
        <div className="mt-16 grid lg:grid-cols-3 gap-6 mb-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative cursor-pointer"
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <motion.div
                className="h-full bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
                whileHover={{ y: -8, boxShadow: "0 40px 80px rgba(24,160,97,0.12)" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Colorful header */}
                <div className={`relative h-36 bg-gradient-to-br ${project.color} overflow-hidden`}>
                  <div className="absolute inset-0 bg-dots opacity-20" />
                  {/* Animated circles */}
                  <motion.div
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10"
                    animate={hoveredId === project.id ? { scale: 1.3 } : { scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white/10"
                    animate={hoveredId === project.id ? { scale: 1.2 } : { scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                  />

                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl shadow-xl"
                      animate={hoveredId === project.id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.icon}
                    </motion.div>
                  </div>

                  {/* Featured badge */}
                  <div className="absolute top-3 left-3">
                    <span className="flex items-center gap-1 px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                      <Star size={10} className="fill-white" />
                      مميز
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-black text-gray-900 leading-tight group-hover:text-brand-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-lg flex-shrink-0 mr-2">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-lg">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white text-xs font-bold rounded-xl transition-all duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={13} />
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold rounded-xl transition-all duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={13} />
                        معاينة
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Remaining projects – compact list */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 overflow-hidden"
            >
              {projects.filter((p) => !p.featured).map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-100/40 p-5 transition-all duration-400"
                  whileHover={{ y: -4 }}
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-lg mb-4 shadow-md`}>
                    {project.icon}
                  </div>

                  <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1 group-hover:text-brand-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs mb-3 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 2).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-brand-50 text-brand-700 text-xs font-medium rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-gray-400 hover:text-brand-600 font-medium transition-colors"
                  >
                    <Github size={11} />
                    عرض الكود
                  </a>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show more / GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-brand-300 text-gray-700 hover:text-brand-700 text-sm font-bold rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {showAll ? "عرض أقل" : `عرض جميع المشاريع (${projects.length})`}
            <motion.div animate={{ rotate: showAll ? 90 : 0 }} transition={{ duration: 0.3 }}>
              <ArrowLeft size={16} />
            </motion.div>
          </motion.button>

          <motion.a
            href={portfolioData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-700 text-white text-sm font-bold rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={16} />
            <span>جميع المشاريع على GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
