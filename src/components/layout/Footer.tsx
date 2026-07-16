"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowUpRight, ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
  { label: "عني", href: "#about" },
  { label: "الخبرة", href: "#experience" },
  { label: "المهارات", href: "#skills" },
  { label: "المشاريع", href: "#projects" },
  { label: "التعليم", href: "#education" },
  { label: "تواصل", href: "#contact" },
];

const contactLinks = [
  { icon: Github, label: "GitHub", href: portfolioData.socialLinks.github, external: true },
  { icon: Linkedin, label: "LinkedIn", href: portfolioData.socialLinks.linkedin, external: true },
  { icon: Mail, label: portfolioData.socialLinks.email, href: `mailto:${portfolioData.socialLinks.email}` },
  { icon: Phone, label: portfolioData.socialLinks.phone, href: `tel:${portfolioData.socialLinks.phone}`, ltr: true },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer dir="rtl" className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* ─── المحتوى الرئيسي ─── */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* البراند — 5 أعمدة */}
          <div className="md:col-span-5 space-y-5">
            {/* الشعار */}
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 shrink-0">
                <div className="absolute inset-0 rounded-lg bg-brand-500/10 border border-brand-500/25" />
                <span className="absolute inset-0 flex items-center justify-center text-brand-500 font-black text-base font-cairo">
                  س
                </span>
              </div>
              <div className="leading-none">
                <p className="text-gray-900 font-semibold text-sm">
                  {portfolioData.personalInfo.name}
                </p>
                <p className="text-gray-400 text-xs mt-0.5">
                  {portfolioData.personalInfo.title}
                </p>
              </div>
            </div>

            {/* الوصف */}
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              مطوّرة برمجيات شغوفة ببناء تجارب رقمية متميزة.
              من حضرموت، اليمن إلى العالم.
            </p>

            {/* أيقونات سوشيال */}
            <div className="flex items-center gap-2 pt-1">
              {[
                { icon: Github, href: portfolioData.socialLinks.github },
                { icon: Linkedin, href: portfolioData.socialLinks.linkedin },
                { icon: Mail, href: `mailto:${portfolioData.socialLinks.email}` },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-gray-200 hover:border-brand-300 bg-gray-50 hover:bg-brand-50 flex items-center justify-center text-gray-400 hover:text-brand-500 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* فاصل عمودي */}
          <div className="hidden md:block md:col-span-1">
            <div className="h-full w-px bg-gray-100 mx-auto" />
          </div>

          {/* روابط التنقل — 3 أعمدة */}
          <div className="md:col-span-3">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-5 font-medium">
              التنقل
            </p>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="group flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-sm transition-colors duration-150"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150 shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* معلومات التواصل — 3 أعمدة */}
          <div className="md:col-span-3">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-5 font-medium">
              تواصل
            </p>
            <ul className="space-y-3">
              {contactLinks.map(({ icon: Icon, label, href, ltr, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 text-gray-500 hover:text-gray-900 text-sm transition-colors duration-150"
                  >
                    <Icon size={13} className="shrink-0 text-gray-400 group-hover:text-brand-500 transition-colors duration-150" />
                    <span dir={ltr ? "ltr" : undefined} className="truncate">{label}</span>
                    {external && (
                      <ArrowUpRight size={11} className="shrink-0 opacity-0 group-hover:opacity-40 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ─── الشريط السفلي ─── */}
        <div className="border-t border-gray-100 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} سلمى عبدالله بريكان
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.15 }}
            className="group flex items-center gap-2 text-gray-400 hover:text-gray-900 text-xs transition-colors duration-200"
          >
            العودة للأعلى
            <span className="w-5 h-5 rounded-md border border-gray-200 group-hover:border-brand-300 flex items-center justify-center transition-colors duration-200">
              <ArrowUp size={10} />
            </span>
          </motion.button>
        </div>

      </div>
    </footer>
  );
}
