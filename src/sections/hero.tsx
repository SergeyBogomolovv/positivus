"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

import Button from "@/components/button";

const MotionImage = motion.create(Image);

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, x: 250 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
};

const heroVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, x: -250 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
};

export default function HeroSection() {
  return (
    <section className="flex md:flex-row flex-col items-center md:justify-between justify-center w-full md:gap-20 gap-16">
      <motion.div
        className="flex flex-col gap-10 flex-1"
        variants={heroVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="xl:text-6xl lg:text-5xl text-4xl font-semibold text-center md:text-start">
          Navigating the digital landscape for success
        </h1>
        <MotionImage
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          className="flex-1 md:hidden block"
          src="/hero.svg"
          alt="hero image"
          width={500}
          height={500}
          viewport={{ once: true }}
        />
        <p className="lg:text-lg md:text-base text-center md:text-start">
          Our digital marketing agency helps businesses <br /> grow and succeed
          online through a range of <br /> services including SEO, PPC, social
          media marketing, <br /> and content creation.
        </p>
        <Button className="md:w-fit w-full">Book a consultation</Button>
      </motion.div>
      <MotionImage
        initial="hidden"
        whileInView="visible"
        variants={imageVariants}
        className="flex-1 md:block hidden"
        src="/hero.svg"
        alt="hero image"
        width={500}
        height={500}
        viewport={{ once: true }}
      />
    </section>
  );
}
