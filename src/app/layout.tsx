import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import CustomCursor from "./components/cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "aapelix.dev",
  description: "Aapelix's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <CustomCursor />
        <Analytics />
      </body>
    </html>
  );
}
