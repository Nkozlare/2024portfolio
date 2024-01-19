"use client";
import Image from "next/image";
import { useInView, motion } from "framer-motion";
import { useState, useRef } from "react";

export default function Project({ project, i }) {
  const generateIntL = () => {
    let randomDecimal = Math.random();
    // Multiply by the range (20 - 1 + 1 = 20) and add the minimum value (1)
    let randomInteger = Math.floor(randomDecimal * 20) + 1;
    console.log("ml-[" + randomInteger.toString() + "rem]");
    return "ml-[" + randomInteger.toString() + "rem]";
  };
  const generateIntR = () => {
    let randomDecimal = Math.random();
    // Multiply by the range (20 - 1 + 1 = 20) and add the minimum value (1)
    let randomInteger = Math.floor(randomDecimal * 20) + 1;
    return "mr-[" + randomInteger.toString() + "rem]";
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className={`flex ${
        i % 2 === 0
          ? `flex-row ${generateIntL()}`
          : `flex-row-reverse ${generateIntR()}`
      } items-center gap-12`}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translatey(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
    >
      <div className="flex flex-col">
        <p className="text-8xl uppercase">{project.title}</p>
        <p>{project.desc}</p>
        <p className="cursor-pointer">go to website</p>
      </div>
      <div className="relative lg:min-w-[35rem] lg:min-h-[20rem] overflow-hidden transition-all ease-out duration-500 hover:scale-95">
        <Image
          src="/portfoliobg.jpg"
          height="500"
          width="500"
          className="absolute inset-0 min-w-full min-h-full object-cover duration-500 ease-out transition-all hover:scale-110"
          alt="geometric wall pattern"
        />
      </div>
    </motion.div>
  );
}
