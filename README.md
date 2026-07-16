# سلمى بريكان | Portfolio Website

موقع بورتفوليو احترافي لسلمى عبدالله بريكان — مطورة برمجيات وتقنية معلومات.

---

## 🚀 التشغيل المحلي

### المتطلبات الأساسية
- Node.js 18+
- npm أو yarn أو pnpm

### خطوات التثبيت

```bash
# 1. انتقل إلى مجلد المشروع
cd portfolio-website

# 2. ثبّت الاعتمادات
npm install

# 3. شغّل بيئة التطوير
npm run dev
```

الموقع سيعمل على: **http://localhost:3000**

---

## 📦 البناء للإنتاج

```bash
npm run build
npm run start
```

---

## 🛠️ التقنيات المستخدمة

| التقنية | الإصدار | الاستخدام |
|---------|---------|-----------|
| Next.js | 15.x | إطار العمل الرئيسي |
| React | 19.x | مكتبة واجهة المستخدم |
| TypeScript | 5.x | الأمان النوعي |
| Tailwind CSS | 3.x | التنسيق والتصميم |
| Framer Motion | 11.x | الأنيميشن والتحريك |
| Lucide React | Latest | الأيقونات |

---

## 📁 هيكل المشروع

```
portfolio-website/
├── public/
│   └── cv.pdf              # ← ضع ملف سيرتك الذاتية هنا
├── src/
│   ├── app/
│   │   ├── globals.css     # الأنماط العامة + Cairo Font
│   │   ├── layout.tsx      # التخطيط الجذري + Metadata
│   │   └── page.tsx        # الصفحة الرئيسية
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx  # شريط التنقل
│   │   │   └── Footer.tsx  # التذييل
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # القسم الرئيسي
│   │   │   ├── About.tsx       # من أنا
│   │   │   ├── Experience.tsx  # الخبرة العملية
│   │   │   ├── Education.tsx   # التعليم
│   │   │   ├── Skills.tsx      # المهارات
│   │   │   ├── Projects.tsx    # المشاريع
│   │   │   ├── Resume.tsx      # السيرة الذاتية
│   │   │   └── Contact.tsx     # التواصل
│   │   └── ui/
│   │       ├── LoadingScreen.tsx  # شاشة التحميل
│   │       └── SectionTitle.tsx   # عنوان الأقسام
│   ├── data/
│   │   └── portfolio.ts    # ← جميع المحتوى هنا
│   └── lib/
│       └── utils.ts        # أدوات مساعدة
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

---

## ✏️ تخصيص المحتوى

**جميع المحتوى محفوظ في ملف واحد:**

```
src/data/portfolio.ts
```

### تعديل المعلومات الشخصية:
```typescript
personalInfo: {
  name: "سلمى عبدالله بريكان",
  email: "your-email@example.com",
  phone: "+967 XXX XXX XXX",
  // ...
}
```

### إضافة مشروع جديد:
```typescript
projects: [
  {
    id: 8,
    title: "اسم المشروع",
    description: "وصف المشروع",
    tech: ["React", "Node.js"],
    github: "https://github.com/...",
    icon: "🎯",
    featured: false,
    color: "from-brand-500 to-green-600",
    // ...
  }
]
```

---

## 📄 إضافة ملف السيرة الذاتية

1. احفظ ملف PDF للسيرة الذاتية باسم `cv.pdf`
2. ضعه في مجلد `public/`
3. زر التحميل سيعمل تلقائيًا

---

## 🎨 الألوان والتصميم

### الألوان الرئيسية:
- **الأخضر الأساسي:** `#18a061` (brand-600)
- **الأخضر الفاتح:** `#22c55e` (green-500)
- **الخلفية:** أبيض نقي

### تعديل الألوان في `tailwind.config.ts`:
```typescript
colors: {
  brand: {
    500: "#18a061",  // ← غيّر هذا اللون
    // ...
  }
}
```

---

## 📱 دعم الأجهزة

- ✅ الجوال (Mobile First)
- ✅ الأجهزة اللوحية (Tablet)
- ✅ سطح المكتب (Desktop)
- ✅ الشاشات الكبيرة (Large Screens)

---

## 🌐 النشر (Deployment)

### Vercel (الأسهل):
```bash
npm install -g vercel
vercel --prod
```

### Netlify:
```bash
npm run build
# ارفع مجلد `out/` إلى Netlify
```

---

## 📞 التواصل

- **GitHub:** [github.com/salma-design1](https://github.com/salma-design1)
- **LinkedIn:** [linkedin.com/in/salma-brekan-designer](https://www.linkedin.com/in/salma-brekan-designer)

---

صُنع بـ ❤️ بواسطة **سلمى عبدالله بريكان**
