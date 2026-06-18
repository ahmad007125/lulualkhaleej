import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Karla } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { MessageCircleMoreIcon } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lulu Al-Khaleej",
  description:
    "Heavy Equipment Rental & Transportation Services in Saudi Arabia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${karla.variable}`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          {/* Whatsapp Icon */}
          <Link
            href="https://wa.me/966505417597"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed sm:bottom-6 bottom-4 sm:right-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110"
          >
            <MessageCircleMoreIcon size={30} />
          </Link>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}