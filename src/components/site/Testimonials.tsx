import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const REVIEWS = [
  { name: "Cliente Google", text: "Muito bom. Pode ir lá, são ótimos profissionais." },
  { name: "Cliente Google", text: "Ótimo atendimento, bons profissionais, local limpinho e café fresco." },
  { name: "Cliente Google", text: "Muito bom, os caras são fodas, super recomendo." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setI((v) => (v + 1) % REVIEWS.length);

  return (
    <section className="border-y border-border bg-card/40 py-24">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Depoimentos</span>
          <h2 className="mt-3 text-4xl font-700 md:text-5xl">
            O que dizem nossos <span className="text-gradient">clientes</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="size-5 fill-primary" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">4,9 · +150 avaliações</span>
          </div>
        </Reveal>

        <div className="relative mt-10 min-h-[200px]">
          <Quote className="mx-auto size-10 text-primary/40" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="mt-4 text-2xl font-medium leading-relaxed text-foreground"
            >
              "{REVIEWS[i].text}"
              <footer className="mt-5 text-base font-normal text-muted-foreground">
                — {REVIEWS[i].name}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={prev} aria-label="Anterior" className="flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary">
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex gap-2">
            {REVIEWS.map((_, k) => (
              <button key={k} onClick={() => setI(k)} aria-label={`Depoimento ${k + 1}`} className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-primary" : "w-2 bg-border"}`} />
            ))}
          </div>
          <button onClick={next} aria-label="Próximo" className="flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary">
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}