import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/Background";
import { Navbar } from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Classroom",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark" >
        <Navbar />
        <BackgroundBeams/>
        {children}
      </body>
    </html>
  );
}
