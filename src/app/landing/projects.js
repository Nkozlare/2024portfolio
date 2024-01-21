"use client";
import { useInView, motion } from "framer-motion";
import { useState, useRef } from "react";
import Project from "../components/project";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
export default function Projects({ selectedProject, setSelectedProject }) {
  const projects = [
    {
      title: "INSTRUCTOR",
      desc: "Instructor offers personalized, hands-on training delivered one-on-one, at lightning speed. It is a modern learning management software designed to teach new employees to tackle real-world projects, and master skills in record time. It is currently hiding behind an authenticaition wall, watch the demo to get an idea of what it is.",
      image: "/teach.jpg",
      alt: "Teacher instructing a student on a computer",
      video: "/demo.mp4",
      role: "Built the entire app front to back",
      url: "",
      fun: "Watch Demo",
    },
    {
      title: "AVATAR",
      desc: "Taming hiring chaos for multi-org teams: AVATAR orchestrates applications, manages jobs, and empowers talent acquisition across hundreds of organizations. A centralized platform for streamlined recruitment.",
      image: "/truck.jpg",
      alt: "Image of a truck driving on a dark road",
      video: "",
      role: "UI/UX development",
      url: "https://villagetours.a-suite.app/",
      fun: "View subdomain for Village Travel",
    },
    {
      title: "ACCELERATED AUTOMATION",
      desc: "Accelerated Automation specializes in helping businesses, particularly insurance agencies, automate their workflows and processes to improve efficiency and productivity",
      image: "/automate.jpg",
      alt: "A computer",
      video: "",
      role: "Everything front to back",
      url: "https://accelerated-automation.vercel.app/",
      fun: "View Site",
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      id="projects"
      className="relative overflow-hidden min-w-full min-h-screen lg:py-24 max-lg:py-32 flex flex-col items-center justify-center"
    >
      <div className="lg:pb-24 max-lg:pb-10 z-10">
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
          <p
            className={`text-lg min-w-full italic text-right pb-8 text-secondary-light`}
          >
            Some of what I built recently
          </p>
        </motion.div>
      </div>
      <div className="flex flex-col gap-24">
        {projects.map((project, i) => {
          return (
            <div key={i}>
              <Project
                project={project}
                i={i}
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
