"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "عني",       href: "#about" },
  { label: "الخبرة",   href: "#experience" },
  { label: "التعليم",  href: "#education" },
  { label: "المهارات", href: "#skills" },
  { label: "المشاريع", href: "#projects" },
  { label: "السيرة الذاتية", href: "#resume" },
  { label: "التواصل",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeLink,  setActiveLink]  = useState("#hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const reversed = [...navLinks].reverse();
      for (const l of reversed) {
        const el = document.getElementById(l.href.replace("#", ""));
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveLink(l.href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "py-2.5 bg-white/80 backdrop-blur-2xl border-b border-gray-200/60 shadow-sm shadow-gray-100"
            : "py-5 bg-transparent"
        )}
        dir="rtl"
      >
        <div className="container-custom flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); go("#hero"); }}
            className="flex items-center gap-2.5 group flex-shrink-0"
          >
            <motion.div
              className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 to-green-400 flex items-center justify-center shadow-md"
              whileHover={{ scale: 1.08, rotate: -4 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-white font-black text-sm font-cairo">س</span>
            </motion.div>
            <div className="hidden sm:block leading-tight">
              <p className="font-black text-gray-900 text-sm tracking-tight">
                {portfolioData.personalInfo.name.split(" ").slice(0,2).join(" ")}
              </p>
              <p className="text-[10px] text-brand-600 font-semibold">مطورة برمجيات</p>
            </div>
          </a>

          {/* ── Desktop links ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); go(link.href); }}
                className={cn(
                  "relative px-3 py-1.5 text-[13px] font-semibold rounded-lg transition-all duration-200 whitespace-nowrap",
                  activeLink === link.href
                    ? "text-brand-600 bg-brand-50"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/70"
                )}
              >
                {link.label}
                {activeLink === link.href && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute bottom-1 right-1/2 translate-x-1/2 w-1 h-1 rounded-full bg-brand-500"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* ── CTA + hamburger ── */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <motion.a
              href="/cv.pdf"
              download
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 hover:border-brand-300 text-gray-700 hover:text-brand-700 text-xs font-bold rounded-xl shadow-sm transition-all duration-200"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={13} />
              السيرة الذاتية
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); go("#contact"); }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all duration-200"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              تواصل معي
            </motion.a>

            <button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: mobileOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-14 inset-x-3 z-40 bg-white/95 backdrop-blur-2xl border border-gray-200/70 rounded-2xl shadow-2xl shadow-gray-200/60 overflow-hidden"
            dir="rtl"
          >
            <div className="p-3 flex flex-col gap-0.5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); go(link.href); }}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.035 }}
                  className={cn(
                    "px-4 py-2.5 rounded-xl text-sm font-semibold transition-all",
                    activeLink === link.href
                      ? "bg-brand-50 text-brand-700"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-2 pt-2 border-t border-gray-100 grid grid-cols-2 gap-2">
                <a href="/cv.pdf" download className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-xl">
                  <Download size={12} /> السيرة
                </a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); go("#contact"); }} className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gray-900 text-white text-xs font-bold rounded-xl">
                  تواصل
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
