import type { Metadata } from "next";
import { Inter, Ephesis } from "next/font/google";
import "./globals.css";
import Providers from "./providers/providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ephesis = Ephesis({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ephesis",
});

export const metadata: Metadata = {
  title: "Diet Generator",
  description: "Diet Generator created by Wojciech Kubiak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ephesis.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
