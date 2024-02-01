import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { GridSmallBackground } from "@/components/ui/grid-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prayag Dave",
  description: "I am a full stack engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} text-gray-50 text-opacity-90`}>
        <div className="w-full bg-black dark:bg-dot-white/[0.15] bg-grid-small-black/[0.2]">
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Analytics />
            <Footer />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
