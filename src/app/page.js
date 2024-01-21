"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";
import Hero from "./landing/hero";
import About from "./landing/about";
import NavBar from "./components/navbar";
import AnimatedCursor from "react-animated-cursor";
import { motion, useScroll, useSpring } from "framer-motion";
import Projects from "./landing/projects";
import Skills from "./landing/skills";
import Modal from "./components/modal";
import { useState } from "react";
import AllSkills from "./components/allSkills";
import Contact from "./landing/contact";
import ProjectModal from "./components/projectModal";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(false);

  return (
    <ParallaxProvider>
      <main
        className={`flex min-h-screen flex-col items-center justify-between`}
      >
        <motion.div className="progress-bar" style={{ scaleX }} />
        <NavBar />
        <Hero />
        <About />
        <Projects
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        <Skills openModal={openModal} setOpenModal={setOpenModal} />
        <Contact />
        <Modal closeModal={() => setOpenModal(false)} open={openModal}>
          <AllSkills />
        </Modal>
        <Modal
          closeModal={() => setSelectedProject(null)}
          open={selectedProject}
        >
          <ProjectModal project={selectedProject} />
        </Modal>
        <AnimatedCursor
          innerSize={10}
          outerSize={20}
          color="218, 215, 215"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            "h1",
            "p",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      </main>
    </ParallaxProvider>
  );
}
