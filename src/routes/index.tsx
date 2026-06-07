import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Authority } from "@/components/site/Authority";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Subscription } from "@/components/site/Subscription";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Locations } from "@/components/site/Locations";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barbearia Cadmo's | Barbearia Premium em Guarapari - ES" },
      {
        name: "description",
        content:
          "Barbearia premium em Guarapari - ES. Cortes modernos, barba impecável e a 1ª barbearia por assinatura da cidade. 4,9★ no Google. Agende pelo WhatsApp.",
      },
      { property: "og:title", content: "Barbearia Cadmo's | Barbearia Premium em Guarapari" },
      {
        property: "og:description",
        content:
          "A experiência premium que transforma seu visual. Corte masculino, barba e assinatura em Guarapari.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Barbearia Cadmo's",
          description:
            "Barbearia premium em Guarapari - ES. A primeira barbearia por assinatura da cidade.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Linhares, 14 - São Gabriel",
            addressLocality: "Guarapari",
            addressRegion: "ES",
            addressCountry: "BR",
          },
          telephone: "+5527999522190",
          openingHours: "Mo-Sa 09:00-19:30",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "150",
          },
          sameAs: ["https://instagram.com/barbeariacadmos"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Authority />
        <About />
        <Services />
        <Subscription />
        <Gallery />
        <Testimonials />
        <Locations />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
