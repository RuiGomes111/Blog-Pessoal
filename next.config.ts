import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /*
  i18n: {
    locales: ["pt", "en"], // idiomas disponíveis
    defaultLocale: "en",   // idioma padrão
  },*/
   images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      pathname: '/**',
    },
  ],
},

};

export default nextConfig;
