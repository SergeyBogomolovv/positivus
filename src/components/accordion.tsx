"use client";
import { useCallback, useState } from "react";

import { motion, Variants } from "framer-motion";
import { MdExpandMore } from "react-icons/md";

interface Props {
  question: string;
  answer: string;
  number: string;
}

const containerVariants: Variants = {
  opened: { backgroundColor: "#b9ff66" },
  closed: { backgroundColor: "#f3f3f3" },
  hidden: { opacity: 0, scale: 0.4, rotate: "20deg" },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: "0deg",
    transition: { duration: 0.4 },
  },
};

const contentVariants: Variants = {
  opened: { height: "auto", opacity: 1, marginTop: "2rem" },
  closed: { height: 0, opacity: 0, marginTop: 0 },
};

const buttonVariants: Variants = {
  opened: { rotate: 180 },
  closed: { rotate: 0 },
};

export default function Accordion({ question, answer, number }: Props) {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen(!open), [open]);

  return (
    <motion.div
      onClick={toggle}
      variants={containerVariants}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="visible"
      animate={open ? "opened" : "closed"}
      className="w-full rounded-[2rem] md:p-10 p-6 border-2 border-dark border-b-8 flex flex-col cursor-pointer"
    >
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <h1 className="md:text-6xl sm:text-4xl text-2xl font-semibold">
            {number}
          </h1>
          <h3 className="sm:text-xl md:text-3xl text-base">{question}</h3>
        </div>

        <motion.button
          variants={buttonVariants}
          animate={open ? "opened" : "closed"}
          initial="closed"
          className="rounded-full md:size-16 sm:size-12 size-10 bg-gray border-2 border-dark aspect-square flex items-center justify-center"
        >
          <MdExpandMore className="size-12" />
        </motion.button>
      </div>

      <motion.div
        className="overflow-hidden space-y-10"
        variants={contentVariants}
        initial={"closed"}
        animate={open ? "opened" : "closed"}
      >
        <hr />
        <p>{answer}</p>
      </motion.div>
    </motion.div>
  );
}
