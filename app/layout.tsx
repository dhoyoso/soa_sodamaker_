// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/header";
import { CartSheet } from "@/components/cart-sheet";
import { cn } from "@/lib/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SOA Soda Maker - If you have water, you have soda.",
  description: "Transform plain water into delicious soda in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased",
          geistSans.variable, 
          geistMono.variable
        )}
      >
        <Providers>
          <Header />
          {children}
          <CartSheet />
        </Providers>
      </body>
    </html>
  );
}
