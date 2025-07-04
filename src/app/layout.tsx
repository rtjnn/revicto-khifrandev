import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import PrelineScriptWrapper from "./components/PrelineScriptWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400"], // Tambah weight lain kalau perlu
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Khifrandev",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <PrelineScriptWrapper />
        {children}
      </body>
    </html>
  );
}
