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
      title: "Me",
      desc: "A 6'3 nerd that drinks coffee, plays WoW, climbs fake indoor rocks and plays volleyball.",
      image: "/me.jpeg",
    },
    {
      title: "My wife and myself",
      desc: "A not-as-tall triathlete nerd that is better at climbing fake rocks than I am. We like to travel. (She placed second in this triathlon).",
      image: "/us.jpeg",
    },
    {
      title: "My dog",
      desc: "A border collie mutt that understands a shocking amount of english. We got him while we were staying in Southern Africa.",
      image: "/dog.jpeg",
    },
    {
      title: "Music",
      desc: "I am a mediocre musician. I use to be in bands you have never heard of. 'What I lack in skill I make up for in intensity' -Jack Black",
      image: "/guitar.jpeg",
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
          <p
            className={`text-lg min-w-full italic text-right pb-8 text-secondary-light`}
          >
            Nick Kozlarek to be specific
          </p>
        </motion.div>
      </div>
      <Carousel content={content} />
    </div>
  );
}
