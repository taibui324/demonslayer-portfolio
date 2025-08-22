import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-jp",
});

export const metadata: Metadata = {
  title: "Tai Bui Dev | Software & AI Solutions Expert",
  description: "Fullstack Software Architect specializing in web development and AI solutions. Building pixel-perfect digital experiences with the power of breathing techniques.",
  keywords: ["Software Developer", "AI Solutions", "Full Stack", "React", "Next.js", "TypeScript", "Web Development"],
  authors: [{ name: "Demon Slayer Dev" }],
  openGraph: {
    title: "Demon Slayer Dev | Software & AI Solutions Expert",
    description: "Fullstack Software Architect specializing in web development and AI solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Demon Slayer Dev | Software & AI Solutions Expert",
    description: "Fullstack Software Architect specializing in web development and AI solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${notoSansJP.variable} antialiased bg-background text-foreground selection:bg-primary selection:text-white`}
      >
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {children}
        </div>
      </body>
    </html>
  );
}
