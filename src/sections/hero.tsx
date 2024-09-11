import Image from "next/image";

import Button from "@/components/button";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-between w-full gap-20">
      <div className="flex flex-col gap-10 flex-1">
        <h1 className="text-6xl font-semibold">
          Navigating the <br /> digital landscape <br /> for success
        </h1>
        <p className="text-lg">
          Our digital marketing agency helps businesses <br /> grow and succeed
          online through a range of <br /> services including SEO, PPC, social
          media marketing, <br /> and content creation.
        </p>
        <Button className="w-fit">Book a consultation</Button>
      </div>
      <Image
        className="flex-1"
        src="/hero.svg"
        alt="hero image"
        width={500}
        height={500}
      />
    </section>
  );
}
