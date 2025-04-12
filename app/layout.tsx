import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const aPixel = localFont({
  src: "./fonts/apixel.woff",
  variable: "--font-apelix",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "aapelix.dev",
  description: "aapelix.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${aPixel.variable} antialiased`}>{children}</body>
    </html>
  );
}
