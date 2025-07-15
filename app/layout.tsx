import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aviraj Khare - Full Stack Developer & Software Engineer",
  description: "Passionate full-stack developer with expertise in React, Next.js, TypeScript, and Node.js. Explore my projects, blog posts, and get in touch for collaboration opportunities.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Software Engineer", "Web Development"],
  authors: [{ name: "Aviraj Khare" }],
  creator: "Aviraj Khare",
  metadataBase: new URL("https://aviraj.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aviraj.dev",
    title: "Aviraj Khare - Full Stack Developer & Software Engineer",
    description: "Passionate full-stack developer with expertise in React, Next.js, TypeScript, and Node.js. Explore my projects, blog posts, and get in touch for collaboration opportunities.",
    siteName: "Aviraj Khare Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aviraj Khare - Full Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviraj Khare - Full Stack Developer & Software Engineer",
    description: "Passionate full-stack developer with expertise in React, Next.js, TypeScript, and Node.js.",
    images: ["/og-image.jpg"],
    creator: "@avirajkhare"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
