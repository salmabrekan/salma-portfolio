"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  Clock,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { contact, socialLinks, personalInfo } = portfolioData;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1800));
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: socialLinks.email,
      href: `mailto:${socialLinks.email}`,
      color: "from-brand-500 to-green-400",
    },
    {
      icon: Phone,
      label: "رقم الهاتف",
      value: socialLinks.phone,
      href: `tel:${socialLinks.phone}`,
      color: "from-green-500 to-brand-600",
    },
    {
      icon: MapPin,
      label: "الموقع الجغرافي",
      value: personalInfo.location,
      href: null,
      color: "from-brand-400 to-green-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "salma-design1",
      href: socialLinks.github,
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "salma-brekan-designer",
      href: socialLinks.linkedin,
      color: "from-blue-500 to-blue-700",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-white" dir="rtl">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-50/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-50/60 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative container-custom">
        <SectionTitle
          badge="تواصل معي"
          title={contact.title}
          highlight=""
          subtitle={contact.subtitle}
        />

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-green-600 p-8 text-center shadow-2xl shadow-brand-200/40 mb-14"
        >
          <div className="absolute inset-0 bg-dots opacity-20" />
          <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <p className="text-white text-2xl font-black mb-2">{contact.cta}</p>
            <div className="flex items-center justify-center gap-2 text-brand-200 text-sm">
              <Clock size={14} />
              <span>{contact.responseTime}</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-xl font-black text-gray-900 mb-6">
              قنوات التواصل
            </h3>

            {contactInfo.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-100/40 hover:border-brand-200 transition-all duration-400"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200 flex-shrink-0`}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-gray-400 mb-0.5">{label}</p>
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-brand-700 transition-colors truncate">
                        {value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md flex-shrink-0`}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-gray-400 mb-0.5">{label}</p>
                      <p className="text-sm font-semibold text-gray-800 truncate">{value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-brand-500 to-green-400 rounded-t-3xl" />

              <h3 className="text-xl font-black text-gray-900 mb-6">{contact.formTitle}</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-50 border-2 border-brand-200 flex items-center justify-center">
                    <CheckCircle size={32} className="text-brand-500" />
                  </div>
                  <h4 className="text-xl font-black text-gray-900">تم إرسال رسالتك!</h4>
                  <p className="text-gray-500 text-sm text-center max-w-xs">
                    شكرًا على تواصلك معي. سأرد عليك في أقرب وقت ممكن خلال 24 ساعة.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        الاسم الكريم
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="أدخل اسمك"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100 transition-all duration-200"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@example.com"
                        dir="ltr"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      موضوع الرسالة
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="ما الموضوع الذي تودّ التحدث عنه؟"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100 transition-all duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      نص الرسالة
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="اكتب رسالتك هنا... يسعدني قراءتها والرد عليك."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100 transition-all duration-200 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-br from-brand-500 to-green-500 text-white font-bold rounded-2xl shadow-lg shadow-brand-200/50 hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={!submitting ? { scale: 1.02 } : {}}
                    whileTap={!submitting ? { scale: 0.98 } : {}}
                  >
                    {submitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        />
                        <span>جاري الإرسال...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} className="group-hover:translate-x-[-3px] transition-transform" />
                        <span>إرسال الرسالة</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
