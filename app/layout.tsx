import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Ojeifo Sunday Clifford | Cliff-Tech Solutions",
    template: "%s | Cliff-Tech Solutions",
  },

  description:
    "Official portfolio of Ojeifo Sunday Clifford, CEO of Cliff-Tech Solutions Ltd. Explore web development, mobile applications, FinTech, SaaS, UI/UX and digital solutions.",

  keywords: [
    "Ojeifo Sunday Clifford",
    "Ojeifo Clifford",
    "Sunday Clifford",
    "Ojeifo Sunday",
    "Clifford",
    "Full Stack Web Developer",
    "Cliff-Tech",
    "Cliff-Tech Solutions",
    "Cliff-Tech Solutions Ltd",
    "Software Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "Mobile App Developer",
    "UI UX Designer",
    "FinTech Developer",
    "Nigeria",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <PageTransition />
        <Navbar />
       
        {children}
         <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}