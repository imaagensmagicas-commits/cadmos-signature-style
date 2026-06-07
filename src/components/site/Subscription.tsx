import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";
import { Crown, MessageCircle, PiggyBank, Zap, Repeat, Smile } from "lucide-react";

const BENEFITS = [
  { icon: PiggyBank, title: "Economia", desc: "Pague menos pelos serviços que você mais usa." },
  { icon: Zap, title: "Prioridade", desc: "Atendimento prioritário em todas as unidades." },
  { icon: Repeat, title: "Cortes frequentes", desc: "Mantenha o visual sempre em dia." },
  { icon: Smile, title: "Praticidade", desc: "Menos preocupação, mais estilo." },
];

export function Subscription() {
  return (
    <section id="assinatura" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-primary/10" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="glass-card relative overflow-hidden rounded-[2rem] border-primary/20 p-8 md:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/20 blur-[100px]" />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                <Crown className="size-4" /> Exclusivo em Guarapari
              </div>
              <h2 className="mt-5 text-4xl font-700 leading-tight md:text-5xl">
                A primeira barbearia por <span className="text-gradient">assinatura</span> de Guarapari.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Tenha seu visual sempre impecável pagando um valor fixo mensal. Mais economia,
                prioridade e praticidade no seu dia a dia.
              </p>
              <Button asChild variant="hero" size="xl" className="mt-8">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" /> Quero ser assinante
                </a>
              </Button>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.1}>
                  <div className="rounded-2xl border border-border bg-background/40 p-6 transition-transform duration-300 hover:-translate-y-1">
                    <b.icon className="size-7 text-primary" />
                    <h3 className="mt-4 text-lg font-600">{b.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}