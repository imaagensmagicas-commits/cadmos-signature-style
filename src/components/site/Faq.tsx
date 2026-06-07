import { Reveal } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Precisa agendar?",
    a: "Recomendamos o agendamento pelo WhatsApp para garantir seu horário e evitar espera, mas também atendemos por ordem de chegada.",
  },
  {
    q: "Aceita cartão?",
    a: "Sim! Aceitamos cartões de crédito, débito, Pix e dinheiro.",
  },
  {
    q: "Como funciona a assinatura?",
    a: "Você paga um valor fixo mensal e tem direito a cortes frequentes, prioridade no atendimento e mais economia. Fale com a gente no WhatsApp para conhecer os planos.",
  },
  {
    q: "Qual o horário de atendimento?",
    a: "Atendemos de segunda a sábado, das 09:00 às 19:30.",
  },
  {
    q: "Atendem crianças?",
    a: "Sim, atendemos crianças com todo o cuidado e profissionalismo.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</span>
          <h2 className="mt-3 text-4xl font-700 md:text-5xl">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-10">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="glass-card mb-3 rounded-xl border px-5">
                <AccordionTrigger className="text-left text-lg font-500 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}