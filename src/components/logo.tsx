"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const logo = "Positivus";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 500, damping: 20 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};
const MotionImage = motion.create(Image);

export default function Logo() {
  return (
    <div className="flex items-center">
      <MotionImage
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        src="/logo.svg"
        alt="Positivus logo"
        className="w-8 h-8 mr-2"
        width={40}
        height={40}
      />
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-3xl font-semibold"
      >
        {logo.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
