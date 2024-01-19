"use client";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import { useInView, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useEffect, useRef, useState } from "react";
import SkillButton from "../components/skillButton";

export default function Contact() {
  const skillsList = [
    "UI/UX",
    "Javascript",
    "React",
    "NextJs",
    "NodeJs",
    "Postgresql",
    "Prisma",
    "Auth0",
    "CSS",
    "Python",
    "Typescript",
    "Git",
    "Backend dev",
    "Deployment",
    "Vercel",
  ];
  const image = useParallax({
    speed: -100,
  });
  const skills = useParallax({
    speed: -80,
  });

  //   const ref = useRef(null);
  //   const isInView = useInView(ref, { once: true });
  return (
    <section className="min-w-full min-h-screen lg:p-12 max-lg:p-6 relative overflow-hidden flex flex-col justify-center items-center">
      <Image
        ref={image.ref}
        src="/portfoliobg.jpg"
        height="2000"
        width="2000"
        className="absolute z-0 inset-0 min-w-full min-h-full object-cover"
        alt="geometric wall pattern"
      />
      <div className="absolute z-10 inset-0 min-w-full min-h-full object-cover bg-black/25" />
      <div className="min-h-full z-20 min-w-full to-95% bottom-0 left-0 absolute bg-gradient-to-t from-transparent to-black" />
      <div
        ref={skills.ref}
        className="min-w-full flex flex-col z-20 items-center justify-center mt-24"
      >
        <div className="min-w-full flex justify-between items-center pt-12 ">
          <div className="flex flex-col">
            <h2 className="lg:text-6xl max-lg:text-2xl tracking-wider uppercase pb-8">
              I am good with...
            </h2>
            <div className="lg:text-8xl max-lg:text-4xl tracking-wider uppercase">
              <Typewriter
                options={{
                  strings: skillsList,
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>

          <div className="max-w-[100vw] flex flex-row gap-8 transition-all flex-wrap items-end justify-end lg:max-w-[50%]">
            {skillsList.map((skill, i) => {
              return (
                <div key={i} className="transition-all hover:scale-110">
                  <SkillButton text={skill} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
