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
  title: "Tai Bui | Senior Software Engineer & AI Solutions Architect",
  description: "Senior Software Engineer at ANZ leading 15 engineers across AI chatbot systems. Expert in GPT-4, Claude, LangChain, AWS, and full-stack development. $100K+ cost savings, 28% adoption increase.",
  keywords: [
    "Senior Software Engineer", "AI Solutions Architect", "GPT-4", "Claude", "LangChain", 
    "AWS", "React", "Next.js", "TypeScript", "Python", "Node.js", "ANZ", "Chatbot", 
    "Machine Learning", "Cloud Architecture", "Full Stack Developer", "DevOps", 
    "Microservices", "IoT", "Fintech", "Healthcare Technology"
  ],
  authors: [{ name: "Tai Bui", url: "https://github.com/taibui324" }],
  creator: "Tai Bui",
  publisher: "Tai Bui",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Tai Bui | Senior Software Engineer & AI Solutions Architect",
    description: "Senior Software Engineer at ANZ leading 15 engineers across AI chatbot systems. Expert in GPT-4, Claude, LangChain, AWS, and full-stack development.",
    type: "website",
    locale: "en_US",
    url: "https://taibui-portfolio.vercel.app",
    siteName: "Tai Bui Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tai Bui - Senior Software Engineer & AI Solutions Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tai Bui | Senior Software Engineer & AI Solutions Architect",
    description: "Senior Software Engineer at ANZ leading 15 engineers across AI chatbot systems. Expert in GPT-4, Claude, LangChain, AWS.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://taibui-portfolio.vercel.app",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tai Bui",
    "jobTitle": "Senior Software Engineer & AI Solutions Architect",
    "worksFor": {
      "@type": "Organization",
      "name": "ANZ Bank"
    },
    "url": "https://taibui-portfolio.vercel.app",
    "sameAs": [
      "https://github.com/taibui324",
      "https://www.linkedin.com/in/tai-bui-7098a2209/"
    ],
    "email": "taibui324@gmail.com",
    "knowsAbout": [
      "Software Engineering", "AI Solutions", "Machine Learning", "GPT-4", "Claude", 
      "LangChain", "AWS", "React", "Next.js", "TypeScript", "Python", "Node.js",
      "Cloud Architecture", "DevOps", "Microservices", "IoT", "Fintech"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "George Mason University"
    },
    "hasCredential": [
      "AWS Certified Solutions Architect Professional",
      "Google Professional Cloud Architect", 
      "Microsoft Azure AI Engineer",
      "Project Management Professional (PMP)"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
