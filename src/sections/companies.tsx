"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/companies/amazon.svg",
  "/companies/dribble.svg",
  "/companies/hubspot.svg",
  "/companies/netflix.svg",
  "/companies/notion.svg",
  "/companies/zoom.svg",
];

const MotionImage = motion.create(Image);

const imageVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  inView: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
export default function Companies() {
  return (
    <div className="flex items-center justify-between gap-10 my-10 cursor-pointer flex-wrap">
      {images.map((src) => (
        <MotionImage
          key={src}
          src={src}
          variants={imageVariants}
          initial="hidden"
          whileInView="inView"
          alt="company logo"
          width={100}
          height={100}
          viewport={{ once: true }}
        />
      ))}
    </div>
  );
}
