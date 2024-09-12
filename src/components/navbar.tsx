"use client";
import { useState } from "react";

import { motion, Variants } from "framer-motion";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

import Button from "./button";

interface ILink {
  href: Url;
  label: string;
}

const Links: ILink[] = [
  { href: "#about", label: "About us" },
  { href: "#services", label: "Services" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
];

const linksVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    x: -100,
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
};

export default function Navbar() {
  const MotionLink = motion(Link);
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <nav className="flex items-center justify-between gap-10">
      <ul className="md:flex hidden items-center gap-6">
        {Links.map((link, i) => (
          <motion.li
            custom={i}
            variants={linksVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            key={link.label}
          >
            <MotionLink
              className="text-xl font-thin hover:underline transition-all duration-500 ease-out"
              href={link.href}
            >
              {link.label}
            </MotionLink>
          </motion.li>
        ))}
      </ul>

      <MotionLink
        className="md:block hidden"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        href="#contact"
      >
        <Button variant="outline">Request a quote</Button>
      </MotionLink>
      <motion.button
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate="visible"
        whileTap={{ scale: 0.9 }}
        onClick={toggle}
        className="bg-white flex items-center justify-center p-2 rounded-2xl border-2 border-dark md:hidden"
      >
        <FiMenu className="w-6 h-6" />
      </motion.button>
    </nav>
  );
}
