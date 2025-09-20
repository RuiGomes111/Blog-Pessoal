import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/_components/motion-primitives/accordion';
import { ChevronUp } from 'lucide-react';
import Link from 'next/link';

export function AccordionIcons() {
  return (
    <Accordion
      className="flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700"
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {/* Sobre mim */}
      <AccordionItem value="about-me" className="py-2">
        <AccordionTrigger className="w-full text-left text-zinc-100 dark:text-zinc-50">
          <div className="flex items-center justify-between">
            <div className='text-[#3178C6]'>Sobre mim</div>
            <ChevronUp className="h-4 w-4 text-zinc-100 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-zinc-100 dark:text-zinc-400">
            Sou graduado em Engenharia Informática, desenvolvedor fullstack em início de carreira, apaixonado por tecnologia e pelo impacto que ela pode gerar na vida das pessoas. 
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Programa Desenvolve */}
      <AccordionItem value="desenvolve" className="py-2">
        <AccordionTrigger className="w-full text-left text-zinc-100 dark:text-zinc-50">
          <div className="flex items-center justify-between">
            <div className='text-[#3178C6]'>Programa Desenvolve</div>
            <ChevronUp className="h-4 w-4 text-zinc-100 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-zinc-100 dark:text-zinc-400">
            Participo do{' '}
            <Link
              href="https://desenvolve.grupoboticario.com.br/"
              target="_blank"
              className="text-gray-400 hover:underline"
            >
              Programa Desenvolve
            </Link>{' '}
            do <Link
              href="https://www.grupoboticario.com.br/"
              target="_blank"
              className="text-gray-400 hover:underline"
            >
              Grupo Boticário
            </Link>{' '}
            em parceria com a <Link
              href="https://escolakoru.com.br/"
              target="_blank"
              className="text-gray-400 hover:underline"
            >
              Koru
            </Link>, aprofundando meus conhecimentos em desenvolvimento web e boas práticas do mercado.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Objetivo e evolução */}
      <AccordionItem value="career-growth" className="py-2">
        <AccordionTrigger className="w-full text-left text-zinc-100 dark:text-zinc-50">
          <div className="flex items-center justify-between">
            <div className='text-[#3178C6]'>Objetivo e Evolução</div>
            <ChevronUp className="h-4 w-4 text-zinc-100 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-zinc-100 dark:text-zinc-400">
            Meu objetivo é crescer como desenvolvedor fullstack, aplicando meus conhecimentos em projetos reais, ampliando habilidades técnicas e contribuindo para soluções inovadoras.
          </p>
        </AccordionContent>
      </AccordionItem>

      

    </Accordion>
  );
}
