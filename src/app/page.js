"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";
import Hero from "./landing/hero";
import About from "./landing/about";
import NavBar from "./components/navbar";
import AnimatedCursor from "react-animated-cursor";
import { motion, useScroll, useSpring } from "framer-motion";
import Projects from "./landing/projects";
import Contact from "./landing/contact";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <ParallaxProvider>
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <motion.div className="progress-bar" style={{ scaleX }} />
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Contact />
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
