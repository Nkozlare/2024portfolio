"use client";
import { useInView, motion } from "framer-motion";
import { useState, useRef } from "react";
import Project from "../components/project";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
export default function Projects() {
  const projects = [
    {
      title: "AVATAR",
      desc: "Description of avatar project",
      image: "",
      video: "",
    },
    {
      title: "AVATAR",
      desc: "Description of avatar project",
      image: "",
      video: "",
    },
    {
      title: "AVATAR",
      desc: "Description of avatar project",
      image: "",
      video: "",
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="relative overflow-hidden min-w-full min-h-screen py-24 flex flex-col items-center justify-center">
      <div className="pb-24 z-10">
        <motion.div
          style={{
            transform: isInView ? "none" : "translatex(-50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          className="flex flex-col justify-center items-center relative"
        >
          <h2 className={`text-6xl pb-2`} ref={ref}>
            PROJECTS
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
            Some of what I built recently
          </p>
        </motion.div>
      </div>
      <div className="flex flex-col gap-24">
        {projects.map((project, i) => {
          return (
            <div key={i}>
              <Project project={project} i={i} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
