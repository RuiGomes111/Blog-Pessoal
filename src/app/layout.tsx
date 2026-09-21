import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rui Gomes | Fullstack Developer & IT Professional",
  description:
    "Profissional de tecnologia com formação em Engenharia Informática. Especialista em desenvolvimento web (React, Next.js, Node.js), redes de computadores e suporte técnico. Disponível para projetos remotos e presenciais.",
  keywords: [
    "Rui Gomes",
    "Desenvolvedor Fullstack",
    "Engenharia Informática",
    "Desenvolvimento Web",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Redes de Computadores",
    "Desenvolvedor Angolano",
    "Angola","Luanda", "Huambo",
    "Software Developer",
  ],
  authors: [{ name: "Rui Gomes" }],
  creator: "Rui Gomes",
  publisher: "Rui Gomes",
  icons: {
    icon: "/alien.svg",
  },
  openGraph: {
    title: "Rui Gomes | Fullstack Developer & IT Professional",
    description:
      "Profissional de tecnologia com formação em Engenharia Informática. Veja os meus projetos e entre em contacto!",
    url: "https://blog-rui-gomes.vercel.app/",
    siteName: "Rui Gomes Dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rui Gomes | Fullstack Developer",
      },
    ],
    locale: "pt_AO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO" suppressHydrationWarning>
      <head>
        {/* Locomotive Scroll CSS via CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/locomotive-scroll@5.0.0-beta.10/dist/locomotive-scroll.css"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${poppins.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}