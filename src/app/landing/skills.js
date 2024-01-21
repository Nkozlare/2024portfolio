"use client";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import { useInView, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useEffect, useRef, useState } from "react";
import SkillButton from "../components/skillButton";

export default function Skills({ openModal, setOpenModal }) {
  const skillsList = [
    "UI/UX",
    "Javascript",
    "React",
    "NextJs",
    "NodeJs",
    "PostgreSQL",
    "CSS",
    "Typescript",
    "Backend dev",
    "Deployment",
  ];
  const image = useParallax({
    speed: -100,
  });
  const skills = useParallax({
    speed: 20,
    opacity: [0, 2],
  });

  //   const ref = useRef(null);
  //   const isInView = useInView(ref, { once: true });
  return (
    <section
      id="skills"
      className="relative min-w-full min-h-[75vh] lg:p-12 max-lg:p-6 overflow-hidden flex flex-col justify-center items-center"
    >
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
        className="min-w-full flex flex-col z-20 items-center justify-center"
      >
        <div className="min-w-full flex xl:flex-row max-xl:flex-col justify-between items-center pt-12 max-xl:gap-12">
          <div className="flex flex-col max-xl:items-center max-xl: justify-center">
            <h2 className="lg:text-6xl max-lg:text-2xl tracking-wider uppercase pb-8 text-secondary-light">
              My wheelhouse...
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

          <div className="flex flex-row lg:gap-8 max-lg:gap-4 transition-all flex-wrap xl:items-end xl:justify-end max-xl:items-center max-xl:justify-center xl:max-w-[50%] max-xl:max-w-[90vw]">
            {skillsList.map((skill, i) => {
              return (
                <div key={i} className="transition-all hover:scale-110">
                  <SkillButton text={skill} />
                </div>
              );
            })}
            <div
              className="transition-all hover:scale-110"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <SkillButton
                text={"View more"}
                bg={"bg-secondary-light"}
                textColor={"text-secondary-light"}
                border={"border-secondary-light"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
