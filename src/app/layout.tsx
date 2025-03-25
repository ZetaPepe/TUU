import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/header";
import AnnouncementBar from "@/components/announcement-bar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ARC - AI Rig Complex",
  description: "A comprehensive overview of Arc's ecosystem partners and agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <ClientBody>
        <div className="flex flex-col min-h-screen">
          <AnnouncementBar />
          <Header />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
        </div>
      </ClientBody>
    </html>
  );
}
