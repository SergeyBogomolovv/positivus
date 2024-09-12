"use client";
import { motion, Variants } from "framer-motion";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  variant: "gray" | "primary" | "dark";
  imageSrc: string;
  href: Url;
  title2?: string;
  i: number;
}

const cardVariants: Variants = {
  initial(i: number) {
    const isEven = i % 2 === 0;
    return {
      scale: 0.2,
      x: isEven ? -200 : 200,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    };
  },
  animate() {
    return {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    };
  },
};

export default function Card({
  title,
  title2,
  variant,
  imageSrc,
  href,
  i,
}: CardProps) {
  const MotionLink = motion(Link);
  return (
    <motion.div
      viewport={{ once: true }}
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      custom={i}
      className={`relative rounded-3xl md:p-12 p-6 border-2 border-dark border-b-8 flex items-center justify-between gap-10 bg-${variant}`}
    >
      <div className="flex flex-col justify-between md:gap-20 gap-24">
        <p className="text-2xl font-semibold">
          <span
            className={`${variant === "gray" ? "bg-primary" : "bg-gray"} rounded-lg px-1 inline-block`}
          >
            {title}
          </span>
          <br />
          <span
            className={`bg-${variant === "gray" ? "primary" : "gray"} rounded-lg px-1 inline-block`}
          >
            {title2}
          </span>
        </p>
        <MotionLink
          whileHover={{ gap: "8px" }}
          href={href}
          className={`flex items-center gap-4 text-xl font-thin ${variant === "dark" && "text-gray"}`}
        >
          <Image
            src={`/${variant === "dark" ? "light" : "dark"}-arrow.svg`}
            alt="arrow"
            width={40}
            height={40}
          />
          <p className="md:block hidden">Learn more</p>
        </MotionLink>
      </div>
      <Image
        className="absolute md:right-10 md:bottom-auto bottom-8 right-8 md:w-[150px] lg:w-[170px] xl:w-[200px] w-[130px]"
        src={imageSrc}
        alt={title}
        width={200}
        height={200}
      />
    </motion.div>
  );
}
