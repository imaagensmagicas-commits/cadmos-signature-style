import { MapPin, Clock } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import { WHATSAPP_URL, INSTAGRAM_URL, HOURS, PHONE_DISPLAY } from "@/lib/site";

const LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Assinatura", href: "#assinatura" },
  { label: "Galeria", href: "#galeria" },
  { label: "Unidades", href: "#unidades" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-700">
            CADMO'S<span className="text-primary">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            A experiência premium que transforma seu visual. Barbearia premium em Guarapari - ES.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex size-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
              <WhatsAppIcon className="size-5" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex size-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
              <InstagramIcon className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-600 uppercase tracking-widest text-primary">Links rápidos</h3>
          <ul className="mt-4 space-y-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-600 uppercase tracking-widest text-primary">Endereço</h3>
          <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            Praça da Paz · Marujá · São Gabriel — Guarapari - ES
          </p>
          <a href={`https://wa.me/${"5527999522190"}`} className="mt-3 block text-sm text-muted-foreground hover:text-primary">
            {PHONE_DISPLAY}
          </a>
        </div>

        <div>
          <h3 className="text-sm font-600 uppercase tracking-widest text-primary">Horário</h3>
          <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
            <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
            {HOURS}
          </p>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Barbearia Cadmo's · Guarapari - ES. Todos os direitos reservados.
      </div>
    </footer>
  );
}