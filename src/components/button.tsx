"use client";
import { ButtonHTMLAttributes } from "react";

import { motion, MotionProps } from "framer-motion";

type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | "onAnimationStart"
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onDragOver"
  | "onDragEnter"
  | "onDragLeave"
  | "onDrop"
> &
  MotionProps;

interface Props extends ButtonProps {
  variant?: "outline" | "filled";
}

export default function Button({ variant = "filled", ...props }: Props) {
  return (
    <motion.button
      {...props}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className={`text-xl py-4 px-8 rounded-xl ${
        variant === "outline"
          ? "border-2 border-stone-500"
          : "bg-dark text-white"
      } ${props.className}`}
    >
      {props.children}
    </motion.button>
  );
}
