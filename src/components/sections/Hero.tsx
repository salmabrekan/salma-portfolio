"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowLeft,
  MapPin,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

/* ── counter ── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let v = 0;
    const step = Math.ceil(to / 40);
    const t = setInterval(() => {
      v += step;
      if (v >= to) { setCount(to); clearInterval(t); }
      else setCount(v);
    }, 35);
    return () => clearInterval(t);
  }, [to]);
  return <>{count}{suffix}</>;
}

const skills = ["Laravel", "Flutter", "Figma", "Python", "ASP.NET", "SQL", "Java", "HTML / CSS"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  /* cursor glow */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18 });
  const sy = useSpring(my, { stiffness: 55, damping: 18 });
  useEffect(() => {
    const h = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, [mx, my]);

  return (
    <section
      id="hero"
      ref={ref}
      dir="rtl"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#f9fafb]"
    >
      {/* ── cursor glow ── */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-20 hidden md:block"
        style={{
          background: useTransform(
            [sx, sy],
            ([x, y]: number[]) =>
              `radial-gradient(500px circle at ${x}px ${y}px, rgba(24,160,97,0.045), transparent 70%)`
          ),
        }}
      />

      {/* ── subtle dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* radial fade over grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 20%, #f9fafb 100%)",
        }}
      />

      {/* ── content ── */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20 w-full"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ════ RIGHT: TEXT ════ */}
          <div className="space-y-8 order-1">

            {/* availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-200 bg-brand-50 text-brand-700 text-xs font-semibold"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-500" />
              </span>
              {portfolioData.personalInfo.availability}
              <Sparkles size={11} className="text-brand-400" />
            </motion.div>

            {/* ── NAME — refined, not giant ── */}
            <div className="space-y-1.5">
              <motion.p
                className="text-sm font-semibold text-brand-600 tracking-wider uppercase"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                مرحباً، أنا
              </motion.p>

              <div className="overflow-hidden">
                <motion.h1
                  className="text-[clamp(2.4rem,5vw,3.6rem)] font-bold leading-[1.12] tracking-tight text-gray-900"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  {portfolioData.personalInfo.name}
                </motion.h1>
              </div>

              {/* role line */}
              <motion.div
                className="flex items-center gap-3 pt-1"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-7 h-[2px] rounded-full bg-brand-400" />
                <span className="text-base md:text-lg font-medium text-gray-500">
                  {portfolioData.personalInfo.title}
                </span>
              </motion.div>
            </div>

            {/* tagline */}
            <motion.p
              className="text-gray-500 text-base leading-relaxed max-w-sm"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
            >
              {portfolioData.personalInfo.tagline}
            </motion.p>

            {/* meta chips */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.46 }}
            >
              {[
                { icon: MapPin, text: portfolioData.personalInfo.location },
                { icon: Briefcase, text: portfolioData.personalInfo.currentEmployer },
              ].map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-500 bg-white border border-gray-200 rounded-full shadow-sm"
                >
                  <Icon size={11} className="text-brand-500" />
                  {text}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.54 }}
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white text-sm font-semibold overflow-hidden shadow-lg shadow-gray-900/15"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent -translate-x-full"
                  whileHover={{ translateX: "100%" }}
                  transition={{ duration: 0.45 }}
                />
                <span className="relative">استعرض أعمالي</span>
                <ArrowLeft size={14} className="relative group-hover:-translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 hover:border-brand-300 text-gray-700 hover:text-brand-700 text-sm font-semibold transition-all duration-250 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={14} />
                السيرة الذاتية
              </motion.a>
            </motion.div>

            {/* socials */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-xs text-gray-400">تابعني</span>
              <div className="w-px h-3.5 bg-gray-200" />
              {[
                { icon: Github, href: portfolioData.socialLinks.github },
                { icon: Linkedin, href: portfolioData.socialLinks.linkedin },
                { icon: Mail, href: `mailto:${portfolioData.socialLinks.email}` },
              ].map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-gray-200 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 text-gray-400 flex items-center justify-center transition-all duration-200 shadow-sm"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ════ LEFT: VISUAL ════ */}
          <motion.div
            className="hidden lg:flex flex-col items-center gap-6 order-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* profile card */}
            <div className="relative w-full max-w-[320px]">
              {/* glow */}
              <div className="absolute -inset-6 rounded-[40px] bg-brand-400/8 blur-2xl" />

              <div className="relative bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 p-7 flex flex-col items-center gap-5">
                {/* top bar */}
                <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-3xl bg-gradient-to-r from-transparent via-brand-400 to-transparent" />

                {/* avatar */}
                <motion.div
                  className="w-[88px] h-[88px] rounded-2xl bg-gradient-to-br from-brand-500 to-green-400 flex items-center justify-center shadow-lg shadow-brand-300/25"
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-white text-4xl font-black font-cairo">س</span>
                </motion.div>

                {/* name & role */}
                <div className="text-center">
                  <p className="text-gray-900 font-bold text-base leading-tight">
                    {portfolioData.personalInfo.name}
                  </p>
                  <p className="text-brand-600 text-xs font-medium mt-1">
                    {portfolioData.personalInfo.title}
                  </p>
                </div>

                {/* status */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-100 rounded-full">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                  </span>
                  <span className="text-xs font-semibold text-green-700">متاحة للعمل</span>
                </div>

                {/* stats */}
                <div className="w-full grid grid-cols-3 gap-2">
                  {[
                    { v: 7, s: "+", label: "مشروع" },
                    { v: 13, s: "+", label: "تقنية" },
                    { v: 4, s: " سنوات", label: "خبرة أكاديمية" },
                  ].map(({ v, s, label }) => (
                    <div key={label} className="bg-gray-50 border border-gray-100 rounded-xl p-2.5 text-center">
                      <p className="text-sm font-black text-gray-900 leading-none">
                        <Counter to={v} suffix={s} />
                      </p>
                      <p className="text-[9px] text-gray-400 font-medium mt-1 leading-tight">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* skills strip */}
            <div className="w-full max-w-[320px] space-y-2.5">
              <p className="text-xs text-gray-400 font-medium text-center">التقنيات</p>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.06, duration: 0.3 }}
                    className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-all duration-200 cursor-default shadow-sm"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── stats bar ── */}
        <motion.div
          className="mt-20 pt-8 border-t border-gray-200/60 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          {[
            { val: 7, suf: "+", label: "مشروع مكتمل", emoji: "🚀" },
            { val: 13, suf: "+", label: "تقنية متقنة", emoji: "⚡" },
            { val: 4, suf: " سنوات", label: "دراسة أكاديمية", emoji: "🎓" },
            { val: 98, suf: ".15%", label: "معدل الثانوية", emoji: "⭐" },
          ].map(({ val, suf, label, emoji }, i) => (
            <motion.div
              key={label}
              className="group flex items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95 + i * 0.07 }}
            >
              <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 group-hover:border-brand-200 group-hover:bg-brand-50 flex items-center justify-center text-base shadow-sm transition-all duration-200 shrink-0">
                {emoji}
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 leading-none">
                  {val}<span className="text-brand-500 text-xs font-semibold">{suf}</span>
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-gray-300 flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-1 rounded-full bg-brand-500"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <p className="text-[9px] text-gray-400 tracking-widest uppercase font-medium">scroll</p>
      </motion.div>
    </section>
  );
}
