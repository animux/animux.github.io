import { Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import { Providers } from "@/app/providers";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  metadataBase: new URL("https://animux.dev"),
  title: "Animux | Aminul Islam",
  description:
    "I'm Aminul Islam (aka Animux), a Full Stack Web Developer based in Bangladesh with 7+ years of experience creating fast, modern, and responsive websites and web applications. I specialize in technologies like React, Next.js, Node.js, and MongoDB — delivering scalable digital solutions for startups, agencies, and businesses worldwide. Whether you're in Dhaka or abroad, I combine clean code, sleek design, and clear communication to bring your web project to life. Let’s build something amazing together.",
  favicon: "/favicon.ico",
  openGraph: {
    title: "Animux | Aminul Islam",
    description:
      "I'm Aminul Islam (aka Animux), a Full Stack Web Developer based in Bangladesh with 7+ years of experience creating fast, modern, and responsive websites and web applications. I specialize in technologies like React, Next.js, Node.js, and MongoDB — delivering scalable digital solutions for startups, agencies, and businesses worldwide. Whether you're in Dhaka or abroad, I combine clean code, sleek design, and clear communication to bring your web project to life. Let’s build something amazing together.",
    url: "https://animux.dev",
    siteName: "Animux | Aminul Islam",
    images: [
      {
        url: "/og-image.png",
        width: 3024,
        height: 1540,
        alt: "Animux | Aminul Islam",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <GoogleAnalytics gaId="G-2GMPMX5KMJ" />
      </head>
      <body
        className={
          montserrat.className +
          " max-w-[100%] overflow-x-hidden" +
          " bg-background font-sans" +
          " antialiased"
        }
      >
        <Providers>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
