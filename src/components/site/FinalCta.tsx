import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "./icons";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/site";
import heroBarber from "@/assets/hero-barber.jpg";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28">
      <img src={heroBarber} alt="" aria-hidden="true" width={1024} height={1280} loading="lazy" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-background/85" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/90" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <h2 className="text-4xl font-700 leading-tight md:text-6xl">
            Agende agora seu <span className="text-gradient">horário.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Não espere para renovar seu visual. Fale com nossa equipe e garanta seu atendimento.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" /> Agendar no WhatsApp
              </a>
            </Button>
            <Button asChild variant="outlineHero" size="xl">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="size-5" /> Ver Instagram
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}