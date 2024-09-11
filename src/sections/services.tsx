import { Url } from "next/dist/shared/lib/router/router";

import Card from "@/components/card";

interface CardProps {
  title: string;
  variant: "gray" | "primary" | "dark";
  imageSrc: string;
  href: Url;
  title2?: string;
}

const cards: CardProps[] = [
  {
    variant: "gray",
    title: "Search engine",
    title2: "Optimization",
    imageSrc: "/cards/search.png",
    href: "/",
  },
  {
    variant: "primary",
    title: "Pay-per-click",
    title2: "Advertising",
    imageSrc: "/cards/pay.png",
    href: "/",
  },
  {
    variant: "dark",
    title: "Social media",
    title2: "Marketing",
    imageSrc: "/cards/social.png",
    href: "/",
  },
  {
    variant: "gray",
    title: "Email",
    title2: "Marketing",
    imageSrc: "/cards/email.png",
    href: "/",
  },
  {
    variant: "primary",
    title: "Content",
    title2: "Creation",
    imageSrc: "/cards/content.png",
    href: "/",
  },
  {
    variant: "dark",
    title: "Analytics and",
    title2: "Tracking",
    imageSrc: "/cards/analytics.png",
    href: "/",
  },
];

export default function ServicesSection() {
  return (
    <section className="flex flex-col gap-16">
      <div className="flex items-center md:gap-8 gap-4 md:flex-row flex-col">
        <h2 className="text-3xl bg-primary p-1 rounded-md">Services</h2>
        <p className="text-sm">
          At our digital marketing agency, we offer a range of services to
          <br /> help businesses grow and succeed online. These services
          include:
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {cards.map((card) => (
          <Card
            key={card.title}
            variant={card.variant}
            href={card.href}
            imageSrc={card.imageSrc}
            title={card.title}
            title2={card.title2}
          />
        ))}
      </div>
    </section>
  );
}
