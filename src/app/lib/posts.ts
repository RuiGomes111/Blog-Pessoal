export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "objetivo-profissional",
    title: "Meu Objetivo Profissional",
    date: "2025-09-15",
    excerpt: "Busco aplicar meus conhecimentos em programação e redes para gerar impacto positivo.",
    content: `
Sou estudante de Engenharia Informática, apaixonado por tecnologia e inovação.
Meu objetivo é aplicar meus conhecimentos em desenvolvimento web, administração de sistemas e infraestrutura de TI para contribuir com soluções que tragam eficiência e transformação digital.
    `,
  },
  {
    slug: "formacao-academica",
    title: "Minha Formação Acadêmica e Profissional",
    date: "2025-09-10",
    excerpt: "De Engenharia Informática a programas internacionais de tecnologia.",
    content: `
Atualmente curso Engenharia Informática no ISUPEKUIKUI II (Huambo, Angola).
Participei de programas de renome como o Jornada Tech - Programa Desenvolve (Grupo Boticário & Koru), cursos da Cisco Networking Academy, Huawei Talent e Instituto Federal do RS.
Essas formações ampliaram minha base em redes, banco de dados, programação e transformação digital.
    `,
  },

  {
    slug: "habilidades-tecnicas",
    title: "Minhas Habilidades Técnicas",
    date: "2025-09-01",
    excerpt: "Do front-end ao back-end, passando por redes e banco de dados.",
    content: `
Tenho experiência com desenvolvimento web (HTML, CSS, JavaScript, Node.js, Express.js, MySQL).
Na área de redes, já configurei e mantive redes de computadores, além de prestar suporte a usuários.
Falo português (nativo), inglês intermediário e francês básico.
    `,
  },
];
