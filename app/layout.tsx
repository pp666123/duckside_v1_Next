import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "duckside投資理財",
  description: "以鴨子為主題串接投資記帳、模擬投資小遊戲和裝扮遊戲的專題",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
