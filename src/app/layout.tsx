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
  title: "Rui Gomes | Fullstack Developer & Digital Solutions Creator",
  description:
    "Rui Gomes é um desenvolvedor fullstack apaixonado por criar soluções digitais eficientes e inovadoras. Experiência em desenvolvimento web, redes e suporte técnico. Disponível para projetos remotos e presenciais.",
  keywords: [
    "Rui Gomes",
    "Desenvolvedor Fullstack",
    "Fullstack Developer",
    "Desenvolvimento Web",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Desenvolvedor Angolano",
    "Digital Solutions",
    "Software Developer",
    "Web Developer",
  ],
  authors: [{ name: "Rui Gomes" }],
  creator: "Rui Gomes",
  publisher: "Rui Gomes",
  icons: {
    icon: "/alien.svg",
  },
  openGraph: {
    title: "Rui Gomes | Fullstack Developer & Digital Solutions Creator",
    description:
      "Desenvolvedor Fullstack com foco em tecnologia, impacto real e aprendizado contínuo. Veja meus projetos e entre em contacto!",
    url: "http://blog-rui-gomes.vercel.app/", 
    siteName: "Rui Gomes Dev",
    images: [
      {
        url: "/og-image.png", // opcional, podes criar uma imagem personalizada
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
    <html lang="en" suppressHydrationWarning>
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
        <Footer/>
      </body>
    </html>
  );
}
