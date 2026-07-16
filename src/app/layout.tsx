import type { Metadata } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: portfolioData.meta.title,
  description: portfolioData.meta.description,
  keywords: portfolioData.meta.keywords,
  authors: [{ name: portfolioData.meta.author }],
  openGraph: {
    title: portfolioData.meta.title,
    description: portfolioData.meta.description,
    url: portfolioData.meta.url,
    siteName: portfolioData.personalInfo.name,
    locale: "ar_YE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-cairo antialiased" dir="rtl">
        {children}
      </body>
    </html>
  );
}
