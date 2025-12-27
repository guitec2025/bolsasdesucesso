
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: 'Preciso ter experiência com crochê?',
      answer:
        'Não! O curso foi desenhado para iniciantes e para quem já tem alguma experiência. Ensinamos desde o básico até as técnicas mais avançadas para criar as plantinhas.',
    },
    {
      question: 'Por quanto tempo terei acesso ao curso?',
      answer:
        'O acesso ao curso é vitalício. Você pode assistir às aulas quantas vezes quiser, no seu próprio ritmo, e terá acesso a todas as futuras atualizações sem custo adicional.',
    },
    {
      question: 'Quais materiais eu preciso para começar?',
      answer:
        'Você precisará de materiais básicos de crochê, como agulhas, fios de cores variadas e enchimento. Nós fornecemos uma lista detalhada de materiais e fornecedores recomendados dentro do curso.',
    },
    {
      question: 'O curso ensina a vender as peças?',
      answer:
        'Sim! Além de ensinar a criar as plantinhas, temos módulos bônus sobre precificação, como tirar fotos atrativas e dicas para vender online e em feiras de artesanato.',
    },
    {
        question: 'E se eu tiver dúvidas durante o curso?',
        answer:
            'Você terá acesso à nossa comunidade exclusiva de alunas no WhatsApp e Telegram, onde poderá tirar todas as suas dúvidas diretamente com a professora e interagir com outras artesãs.',
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
            <p className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                Tire suas dúvidas
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-4 text-[#4D4237]">
                Perguntas Frequentes
            </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-accent/50 rounded-lg mb-4 px-6 border-b-0">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
