import { Reveal } from "./Reveal";
import { Scissors, User, Eye, Sparkles, CalendarClock, Combine } from "lucide-react";

const SERVICES = [
  { icon: Scissors, title: "Corte Masculino", desc: "Cortes modernos e personalizados para o seu estilo." },
  { icon: User, title: "Barba Premium", desc: "Modelagem, toalha quente e acabamento impecável." },
  { icon: Eye, title: "Sobrancelha", desc: "Design masculino que valoriza o seu olhar." },
  { icon: Sparkles, title: "Acabamentos", desc: "Detalhes que fazem toda a diferença no visual." },
  { icon: CalendarClock, title: "Plano por Assinatura", desc: "Visual sempre em dia por um valor fixo mensal." },
  { icon: Combine, title: "Combo Corte + Barba", desc: "A experiência completa em um só atendimento." },
];

export function Services() {
  return (
    <section id="servicos" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Serviços</span>
          <h2 className="mt-3 text-4xl font-700 md:text-5xl">
            Tudo para o seu <span className="text-gradient">visual impecável</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.1}>
              <div className="group glass-card relative h-full overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50">
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex size-14 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                  <s.icon className="size-7" />
                </div>
                <h3 className="mt-5 text-xl font-600">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}