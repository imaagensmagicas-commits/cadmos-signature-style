import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock } from "lucide-react";
import { UNITS, MAPS_URL, HOURS } from "@/lib/site";

export function Locations() {
  return (
    <section id="unidades" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Unidades</span>
          <h2 className="mt-3 text-4xl font-700 md:text-5xl">
            3 unidades em <span className="text-gradient">Guarapari</span>
          </h2>
          <p className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
            <Clock className="size-4 text-primary" /> {HOURS}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {UNITS.map((u, i) => (
            <Reveal key={u.name} delay={i * 0.1}>
              <div className="group glass-card flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <MapPin className="size-6" />
                </span>
                <h3 className="mt-5 text-2xl font-700">{u.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{u.area}</p>
                <p className="mt-3 flex-1 text-muted-foreground">{u.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 glass-card flex flex-col items-center justify-between gap-5 rounded-2xl p-7 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-widest text-primary">Unidade destaque</p>
              <p className="mt-1 text-xl font-600">Rua Linhares, 14 · São Gabriel · Guarapari - ES</p>
            </div>
            <Button asChild variant="hero" size="lg">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                <Navigation className="size-5" /> Traçar rota
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}