import { motion } from "motion/react";
import { MessageCircle, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";
import heroBarber from "@/assets/hero-barber.jpg";
import galleryFade from "@/assets/gallery-fade.jpg";
import galleryClient from "@/assets/gallery-client.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-20 size-[520px] rounded-full bg-primary/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 size-[460px] rounded-full bg-accent/25 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
          >
            <Star className="size-3.5 fill-primary" /> 4,9 ★ · +150 avaliações no Google
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl font-700 leading-[1.05] tracking-tight md:text-7xl"
          >
            Sua melhor versão <span className="text-gradient">começa aqui.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            A Barbearia Cadmo's oferece cortes modernos, barba impecável e atendimento diferenciado
            em um ambiente pensado para homens que valorizam estilo, conforto e qualidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild variant="hero" size="xl">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" /> Agendar pelo WhatsApp
              </a>
            </Button>
            <Button asChild variant="outlineHero" size="xl">
              <a href="#unidades">
                <MapPin className="size-5" /> Conhecer unidades
              </a>
            </Button>
          </motion.div>
        </div>

        {/* gallery */}
        <div className="relative h-[440px] md:h-[560px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-0 top-6 w-[62%] overflow-hidden rounded-2xl border border-border shadow-card"
          >
            <img src={heroBarber} alt="Barbeiro realizando corte na Barbearia Cadmo's" width={1024} height={1280} className="h-[360px] w-full object-cover md:h-[460px]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute right-0 top-0 w-[42%] overflow-hidden rounded-2xl border border-border shadow-card"
            style={{ animation: "var(--animate-float)" }}
          >
            <img src={galleryFade} alt="Corte degradê masculino premium" width={800} height={800} loading="lazy" className="h-[200px] w-full object-cover md:h-[250px]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-0 right-2 w-[48%] overflow-hidden rounded-2xl border border-border shadow-card"
          >
            <img src={galleryClient} alt="Cliente satisfeito na Barbearia Cadmo's" width={800} height={800} loading="lazy" className="h-[210px] w-full object-cover md:h-[260px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}