import { WhatsAppIcon } from "./icons";
import { WHATSAPP_URL } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-110"
    >
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/40" />
      <WhatsAppIcon className="relative size-7" />
    </a>
  );
}