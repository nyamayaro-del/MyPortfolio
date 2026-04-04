import type { Metadata } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const geist = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "AI/ML Engineer Portfolio",
  description:
    "A futuristic portfolio for an undergraduate AI/ML engineer showcasing projects, engineering skill, and a live AI demo.",
  metadataBase: new URL("https://example.vercel.app"),
  openGraph: {
    title: "AI/ML Engineer Portfolio",
    description:
      "Production-ready AI/ML portfolio built with Next.js, Tailwind CSS, and FastAPI.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
