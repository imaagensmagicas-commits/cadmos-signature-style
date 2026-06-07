import { Reveal } from "./Reveal";
import galleryInterior from "@/assets/gallery-interior.jpg";
import { Check } from "lucide-react";

const POINTS = [
  "Profissionais qualificados",
  "Ambiente moderno e premium",
  "Atendimento personalizado",
  "Referência em Guarapari",
];

export function About() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-card">
            <img src={galleryInterior} alt="Ambiente interno premium da Barbearia Cadmo's" width={1024} height={800} loading="lazy" className="h-[420px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Sobre nós</span>
            <h2 className="mt-3 text-4xl font-700 md:text-5xl">
              Muito mais que uma <span className="text-gradient">barbearia.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A Barbearia Cadmo's nasceu para oferecer uma experiência diferenciada para homens que
              valorizam aparência, autoestima e atendimento de qualidade.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Com profissionais qualificados, ambiente moderno e atendimento personalizado, tornou-se
              referência em Guarapari, conquistando centenas de clientes satisfeitos.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 text-foreground">
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-4" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}