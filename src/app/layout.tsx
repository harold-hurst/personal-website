import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harry Hurst",
  description:
    "Harry Hurst is a Front End Web Developer who builds accessible, inclusive products and digital experiences for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* <head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} leading-relaxed text-slate-100 antialiased selection:bg-cyan-400 selection:text-cyan-900`}
      >
        {children}
      </body>
    </html>
  );
}
