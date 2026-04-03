import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
