import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const inter = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dimo Hristov",
  description:
    "Web developer with a solid educational foundation and a diverse portfolio of projects, I am poised to tackle any challenge and contribute positively to innovative projects that shape the future of the digital landscape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
