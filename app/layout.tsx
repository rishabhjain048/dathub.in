import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Dathub – Expert Web, App, SaaS & Data Solutions",
  description: "At Dathub.in, we craft high-performance websites, mobile apps, and SaaS products while delivering expert data handling solutions. From startups to enterprises, we turn your ideas into scalable digital solutions with cutting-edge technology and seamless design. Let’s build your next big project! 🚀",
  openGraph: {
    title: 'Dathub.in – Expert Web, App, SaaS & Data Solutions',
    description: "At Dathub.in, we craft high-performance websites, mobile apps, and SaaS products while delivering expert data handling solutions. From startups to enterprises, we turn your ideas into scalable digital solutions with cutting-edge technology and seamless design. Let’s build your next big project! 🚀",
    images: [
      {
        url: 'https://res.cloudinary.com/dtezihsb8/image/upload/v1738547045/DAV_HUB_lq9vco.png',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
