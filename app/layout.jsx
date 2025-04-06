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
  title: "Animux | Aminul Islam",
  description:
    "I'm Aminul Islam (aka Animux), a Full Stack Web Developer with 7+ years of experience crafting sleek, high-performing websites and apps. From front-end design to back-end development, I blend tech expertise with creative flair to deliver results. Clear communication, modern tech, and user-focused solutions — that’s how I help businesses shine online.",
  favicon: "/favicon.ico",
  openGraph: {
    title: "Animux | Aminul Islam",
    description:
      "I'm Aminul Islam (aka Animux), a Full Stack Web Developer with 7+ years of experience crafting sleek, high-performing websites and apps. From front-end design to back-end development, I blend tech expertise with creative flair to deliver results. Clear communication, modern tech, and user-focused solutions — that’s how I help businesses shine online.",
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
