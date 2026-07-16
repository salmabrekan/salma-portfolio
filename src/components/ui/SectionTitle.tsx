"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(centered ? "text-center" : "text-right", className)}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn("mb-4", centered ? "flex justify-center" : "flex justify-end")}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-5xl font-black text-gray-900 leading-tight"
      >
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-gradient">{highlight}</span>
          </>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            "mt-4 text-lg text-gray-500 leading-relaxed",
            centered ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mt-6 h-1 w-16 bg-gradient-to-l from-brand-500 to-green-400 rounded-full",
          centered ? "mx-auto" : "mr-0"
        )}
        style={{ transformOrigin: centered ? "center" : "right" }}
      />
    </div>
  );
}
