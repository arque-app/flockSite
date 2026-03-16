import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Flock | Catching at VBS, Nurturing at Sunday School",
  description:
    "Flock helps churches reach children through engaging VBS programs and nurture them through structured Sunday School discipleship. Build the next generation in faith.",
  keywords: [
    "children's ministry",
    "VBS",
    "Sunday School",
    "church",
    "Christian education",
    "faith",
  ],
};

export const viewport: Viewport = {
  themeColor: "#5B7C6B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
