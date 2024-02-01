import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
        <div className="w-full bg-zinc-950 dark:bg-dot-white/[0.3] bg-grid-small-black/[0.2]">
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <SpeedInsights />
            <Footer />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
