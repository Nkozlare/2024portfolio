import { Inter } from "next/font/google";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const inter = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Nick Kozlarek",
  description: "2024 Portfolio for Nick Kozlarek Senior Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
