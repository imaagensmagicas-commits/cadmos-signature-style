import { Reveal } from "./Reveal";

const STATS = [
  { value: "+150", label: "Avaliações positivas" },
  { value: "4,9★", label: "Nota no Google" },
  { value: "3", label: "Unidades em Guarapari" },
  { value: "1ª", label: "Barbearia por assinatura da cidade" },
  { value: "+10mil", label: "Atendimentos realizados" },
];

export function Authority() {
  return (
    <section className="border-y border-border bg-card/40 py-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass-card flex h-full flex-col items-center justify-center rounded-2xl p-6 text-center transition-transform duration-300 hover:-translate-y-1">
                <span className="font-display text-4xl font-700 text-gradient">{s.value}</span>
                <span className="mt-2 text-sm text-muted-foreground">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}