import { Reveal } from "./Reveal";
import { motion } from "motion/react";
import { InstagramIcon } from "./icons";
import { INSTAGRAM_URL } from "@/lib/site";
import fade from "@/assets/gallery-fade.jpg";
import beard from "@/assets/gallery-beard.jpg";
import client from "@/assets/gallery-client.jpg";
import pro from "@/assets/gallery-pro.jpg";
import interior from "@/assets/gallery-interior.jpg";
import hero from "@/assets/hero-barber.jpg";

const IMAGES = [
  { src: fade, alt: "Corte degradê", span: "" },
  { src: beard, alt: "Barba desenhada", span: "row-span-2" },
  { src: client, alt: "Cliente Cadmo's", span: "" },
  { src: pro, alt: "Equipe profissional", span: "" },
  { src: interior, alt: "Ambiente da barbearia", span: "col-span-2" },
  { src: hero, alt: "Atendimento premium", span: "" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Galeria</span>
          <h2 className="mt-3 text-4xl font-700 md:text-5xl">
            Resultados que falam por <span className="text-gradient">nós</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-border ${img.span}`}
            >
              <img src={img.src} alt={img.alt} width={800} height={800} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary transition-colors hover:text-gold"
          >
            <InstagramIcon className="size-5" /> Veja mais em @barbeariacadmos
          </a>
        </Reveal>
      </div>
    </section>
  );
}