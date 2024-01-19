"use client";
import Carousel from "../components/carousel";
import SquareElement from "../components/game";
import { Alex_Brush } from "next/font/google";
import SideAnimation from "../components/sideAnimation";
import { useInView, motion } from "framer-motion";
import { useState, useRef } from "react";

const brush = Alex_Brush({ subsets: ["latin"], weight: ["400"] });

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  let content = [
    {
      title: "This is a title 1",
      desc: "This is a longddddtion of the thing in the title",
      image: "/portfoliobg.jpg",
    },
    {
      title: "This is a title 2",
      desc: "This is a longer heycription of the thing in the title",
      image: "/portfoliobg.jpg",
    },
    {
      title: "This is a title 3",
      desc: "This is a longer dchangingtion of the thing in the title",
      image: "/portfoliobg.jpg",
    },
    {
      title: "This is a title 4",
      desc: "This is a longer dhmmme thing in the title",
      image: "/portfoliobg.jpg",
    },
    {
      title: "This is a title 5",
      desc: "This is a longerME1 of the thing in the title",
      image: "/portfoliobg.jpg",
    },
  ];
  return (
    <div className="relative  overflow-hidden min-w-full min-h-screen lg:p-12 max-lg:p-6 flex flex-col justify-center items-center">
      <div className="pt-24">
        <motion.div
          style={{
            transform: isInView ? "none" : "translatex(-50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          className="flex flex-col justify-center items-center relative"
        >
          <h2 className={`text-6xl pb-2`} ref={ref}>
            HELLO. I AM NICK
          </h2>
        </motion.div>
        <motion.div
          style={{
            transform: isInView ? "none" : "translatex(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          className="flex flex-col justify-center items-center relative"
        >
          <p className={`text-lg min-w-full italic text-right pb-8`}>
            Nick Kozlarek to be specific
          </p>
        </motion.div>
      </div>
      <Carousel content={content} />
    </div>
  );
}
