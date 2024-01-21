"use client";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import VertAnimation from "../components/vertAnimation";
import { Alex_Brush } from "next/font/google";

const brush = Alex_Brush({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  const image = useParallax({
    speed: -100,
  });
  const darken = useParallax({
    speed: -10,
  });
  const headerRef = useParallax({
    speed: -40,
  });
  return (
    <div
      id="about"
      className="text-white relative overflow-hidden min-w-full min-h-screen flex justify-center items-center lg:p-12 max-lg:p-6"
    >
      <Image
        ref={image.ref}
        src="/portfoliobg.jpg"
        height="2000"
        width="2000"
        className="absolute z-0 inset-0 min-w-full min-h-full object-cover"
        alt="geometric wall pattern"
      />
      <div
        ref={darken.ref}
        className="absolute z-10 inset-0 min-w-full min-h-full object-cover bg-black/25"
      />
      <div className="min-h-full z-20 min-w-full to-95% bottom-0 left-0 absolute bg-gradient-to-b from-transparent to-black" />
      <div
        className="mt-60 flex lg:flex-col max-lg:flex-col justify-between min-w-full items-center z-20 gap-100"
        ref={headerRef.ref}
      >
        <div className="flex lg:flex-col max-lg:flex-row justify-start items-start min-w-full">
          <VertAnimation>
            <div className="flex flex-col ">
              <p className={`text-4xl italic pl-2 text-secondary-light`}>
                Full Stack
              </p>
              <h1 className="md:text-[10rem] max-md:text-6xl uppercase tracking-tighter leading-[1]">
                DEVELOPER{" "}
                <span className={` text-4xl italic text-secondary-light`}>
                  &
                </span>
              </h1>
              <h1 className="md:text-[10rem] max-md:text-6xl uppercase tracking-tighter leading-[1]">
                DESIGNER
              </h1>
            </div>
          </VertAnimation>
        </div>
        <div className="md:text-2xl max-md:text-base uppercase min-w-full lg:text-right lg:max-w-[30rem] max-h-screen flex items-end justify-end">
          <VertAnimation delay={0.5}>
            <p className="lg:max-w-[30rem] leading-8">
              Here is a description of what I do and who I am briefly. Here is a
              description of what I do and who I am briefly. Here is a
              description of what I do and who I am briefly. Here is a
              description of what I do and who I am briefly
            </p>
          </VertAnimation>
        </div>
      </div>
    </div>
  );
}
