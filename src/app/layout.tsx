import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phyoe Wai | Software Engineer & Linux Enthusiast",
  description: "Explore the interactive developer portfolio of Phyoe Wai, featuring system architecture logs, career timelines, and interactive CLI terminal commands.",
  keywords: ["Phyoe Wai", "Software Engineer", "Systems Architect", "Next.js Portfolio", "TypeScript", "Tailwind CSS v4", "Interactive Terminal Portfolio"],
  authors: [{ name: "Phyoe Wai" }],
  openGraph: {
    title: "Phyoe Wai | Software Engineer & Linux Enthusiast",
    description: "Explore the interactive developer portfolio of Phyoe Wai, featuring system architecture logs, career timelines, and interactive CLI terminal commands.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phyoe Wai | Software Engineer",
    description: "Interactive developer portfolio featuring system architecture logs and terminal commands.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0d0214] text-[#cfc5d8] selection:bg-purple-500/25 selection:text-white">
        {children}
      </body>
    </html>
  );
}
