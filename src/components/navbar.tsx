"use client";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

import Button from "./button";

interface ILink {
  href: Url;
  label: string;
}

const MotionLink = motion.create(Link);

const Links: ILink[] = [
  { href: "#about", label: "About us" },
  { href: "#services", label: "Services" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
];

const linkVariants: Variants = {
  visible: (i) => ({
    scale: 1,
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
    },
  }),
  hidden: { scale: 0.5, x: -50, y: -25, opacity: 0 },
};
export default function Navbar() {
  return (
    <nav className="flex items-center gap-6">
      <AnimatePresence>
        {Links.map((link, i) => (
          <MotionLink
            initial="hidden"
            animate="visible"
            custom={i}
            variants={linkVariants}
            className="text-xl font-thin hover:underline"
            href={link.href}
            key={link.label}
            whileHover={{ scale: 0.95 }}
          >
            {link.label}
          </MotionLink>
        ))}
      </AnimatePresence>

      <MotionLink href="#contact">
        <Button variant="outline">Request a quote</Button>
      </MotionLink>
    </nav>
  );
}
