"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function ProjectModal({ project }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handlePlay = () => {
    if (videoRef.current) {
      setPlaying(true);
      videoRef.current.play();
    }
  };
  return (
    <div className="flex lg:flex-row-reverse max-2xl:min-w-full 2xl:min-w-[1480px] 2xl:max-w-[1480px] max-lg:flex-col-reverse gap-12 lg:px-12 justify-center max-lg:px-6 items-center">
      <div className="flex flex-col max-lg:text-center gap-8">
        <p className={`md:text-5xl max-md:text-4xl uppercase lg:max-w-[20rem]`}>
          {project.title}
        </p>
        <div className="">
          <p className="max-lg:text-center">{project.desc}</p>
        </div>
        {project.url ? (
          <Link href={project.url} target="_blank">
            <p className="cursor-pointer text-secondary-light hover:text-text">
              {project.fun}
            </p>
          </Link>
        ) : (
          <p
            className="cursor-pointer text-secondary-light hover:text-text"
            onClick={handlePlay}
          >
            {project.fun}
          </p>
        )}
      </div>

      <div className="rounded-lg relative lg:min-w-[35rem] max-lg:min-w-[50vw] max-sm:min-w-[85vw] md:min-h-[20rem] max-md:min-h-[10rem] overflow-hidden transition-all ease-out duration-500">
        {project.video && (
          <video
            width="320"
            height="240"
            controls
            ref={videoRef}
            preload="none"
            className={`lg:min-w-[35rem] absolute rounded-lg overflow-hidden max-lg:min-w-[50vw] max-sm:min-w-[85vw] md:min-h-[20rem] max-md:min-h-[10rem] ${
              playing ? "z-20" : "z-0"
            }`}
          >
            <source src={project.video} type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srclang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        )}
        <Image
          src={project.image}
          height="500"
          width="500"
          className={`absolute inset-0 min-w-full min-h-full object-cover duration-500 ease-out transition-all hover:scale-110 ${
            playing ? "hidden" : "z-20"
          }`}
          alt="geometric wall pattern"
        />
        {project.video && !playing && (
          <div
            className="absolute bottom-[50%] z-30 right-[50%] translate-x-[50%] translate-y-[50%]"
            onClick={handlePlay}
          >
            <svg
              class="h-20 w-20 text-secondary-light hover:text-secondary-dark transition-all"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <circle cx="12" cy="12" r="10" />{" "}
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
