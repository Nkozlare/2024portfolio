"use client";
import Image from "next/image";
import { useInView, motion } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import SkillButton from "./skillButton";

export default function Project({
  project,
  i,
  selectedProject,
  setSelectedProject,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className={`flex ${
        i % 2 === 0
          ? `lg:flex-row max-lg:flex-col-reverse `
          : `max-lg:flex-col-reverse lg:flex-row-reverse `
      } items-center justify-center gap-12`}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translatey(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
    >
      <div className="flex flex-col max-lg:text-center gap-2">
        <p className={`md:text-5xl max-md:text-4xl uppercase lg:max-w-[20rem]`}>
          {project.title}
        </p>
        <p>Role: {project.role}</p>
        <div onClick={() => setSelectedProject(project)}>
          <SkillButton
            text={"View More"}
            bg={"bg-secondary-light"}
            textColor={"text-secondary-light"}
            border={"border-secondary-light"}
          />
        </div>
      </div>
      <div
        onClick={() => setSelectedProject(project)}
        className="rounded-lg relative lg:min-w-[35rem] max-lg:min-w-[50vw] max-sm:min-w-[85vw] md:min-h-[20rem] max-md:min-h-[10rem] overflow-hidden transition-all ease-out duration-500"
      >
        <Image
          src={project.image}
          height="500"
          width="500"
          className="absolute inset-0 min-w-full min-h-full object-cover duration-500 ease-out transition-all hover:scale-110"
          alt={project.alt}
        />
      </div>
    </motion.div>
  );
}
