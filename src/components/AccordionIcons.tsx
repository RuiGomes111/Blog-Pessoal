import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/motion-primitives/accordion";
import { ChevronUp } from "lucide-react";
import Link from "next/link";

export function AccordionIcons() {
  return (
    <Accordion
      className="flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700"
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {/* Sobre mim */}
      <AccordionItem value="about-me" className="py-2">
        <AccordionTrigger className="w-full text-left text-zinc-100 dark:text-zinc-50">
          <div className="flex items-center justify-between">
            <div className="text-[#D8C99B]">About Me</div>
            <ChevronUp className="h-4 w-4 text-zinc-100 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-zinc-100 dark:text-zinc-400">
            I hold a degree in Computer Engineering and am an early-career fullstack developer, passionate about technology and the impact it can have on people's lives.

          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Programa Desenvolve */}
      <AccordionItem value="desenvolve" className="py-2">
        <AccordionTrigger className="w-full text-left text-zinc-100 dark:text-zinc-50">
          <div className="flex items-center justify-between">
            <div className="text-[#D8C99B]">Programa Desenvolve</div>
            <ChevronUp className="h-4 w-4 text-zinc-100 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-zinc-100 dark:text-zinc-400">
            I participated in the{" "}
            <Link
              href="https://desenvolve.grupoboticario.com.br/"
              target="_blank"
              className="text-gray-400 hover:underline"
            >
              Programa Desenvolve
            </Link>{" "}
            of the{" "}
            <Link
              href="https://www.grupoboticario.com.br/"
              target="_blank"
              className="text-gray-400 hover:underline"
            >
              Grupo Boticário
            </Link>{" "}
            in partnership with{" "}
            <Link
              href="https://escolakoru.com.br/"
              target="_blank"
              className="text-gray-400 hover:underline"
            >
              Koru
            </Link>
            , deepening my knowledge in web development and industry best practices.

          </p>
        </AccordionContent>
      </AccordionItem>
      {/* Santander Open Academy */}
<AccordionItem value="santander-trilha" className="py-2">
  <AccordionTrigger className="w-full text-left text-zinc-100 dark:text-zinc-50">
    <div className="flex items-center justify-between">
      <div className="text-[#D8C99B]">Santander Imersão Digital</div>
      <ChevronUp className="h-4 w-4 text-zinc-100 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
    </div>
  </AccordionTrigger>
  <AccordionContent>
    <p className="text-zinc-100 dark:text-zinc-400">
      🚀Currently pursuing the DevOps track through the{" "}  
 <Link
        href="https://www.santander.com.br/open-academy"
        target="_blank"
        className="text-gray-400 hover:underline"
      >
        Santander Open Academy + Alura
      </Link>.
     Enhancing knowledge in continuous development, system integration, and modern digital industry practices.

    </p>
  </AccordionContent>
</AccordionItem>

      {/* Objetivo e evolução */}
      <AccordionItem value="career-growth" className="py-2">
        <AccordionTrigger className="w-full text-left text-zinc-100 dark:text-zinc-50">
          <div className="flex items-center justify-between">
            <div className="text-[#D8C99B]">Goal and Growth</div>
            <ChevronUp className="h-4 w-4 text-zinc-100 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-zinc-100 dark:text-zinc-400">
            My goal is to grow as a fullstack developer by applying my knowledge to real-world projects, expanding my technical skills, and contributing to innovative solutions.

          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
