"use client";
import { useEffect, useRef } from "react";

import { motion, useInView } from "framer-motion";

import Accordion from "@/components/accordion";

const accordions = [
  {
    question: "Consultation",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, corporis rerum, totam natus aut neque repellendus consequuntur dolor officia, perferendis voluptas q uidem sequi eum ex reiciendis. Ad sint tempore maxime!",
  },
  {
    question: "Research and Strategy Development",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, corporis rerum, totam natus aut neque repellendus consequuntur dolor officia, perferendis voluptas quidem sequi eum ex reiciendis. Ad sint tempore maxime!",
  },
  {
    question: "Implementation",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, corporis rerum, totam natus aut neque repellendus consequuntur dolor officia, perferendis voluptas quidem sequi eum ex reiciendis. Ad sint tempore maxime!",
  },
  {
    question: "Reporting and Communication",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, corporis rerum, totam natus aut neque repellendus consequuntur dolor officia, perferendis voluptas quidem sequi eum ex reiciendis. Ad sint tempore maxime!",
  },
];
export default function FaqSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    console.log("faq visited");
  }, [isInView]);

  return (
    <motion.div layout className="flex flex-col md:gap-10 gap-6" ref={ref}>
      {accordions.map(({ answer, question }, i) => (
        <Accordion
          answer={answer}
          question={question}
          number={`0${i + 1}`}
          key={question}
        />
      ))}
    </motion.div>
  );
}
