"use client";
import Image from "next/image";
import { useState } from "react";

function Item({ item, activeIndex, i, hover, setHover }) {
  return (
    <div
      className={`overflow-hidden rounded-lg relative flex flex-col transition-all items-end justify-end lg:min-h-[40vw] min-w-full max-lg:min-h-[20rem]`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`absolute z-20 min-w-full min-h-full transition-all bottom-0 right-0 duration-1000  ${
          activeIndex * -1 !== i ? "bg-black" : "bg-transparent"
        }`}
      />
      <div
        className={`${
          !hover ? "text-text" : "text-transparent"
        } transition-all absolute bottom-0 right-0  duration-500 z-20 text-right max-md:max-w-[80vw] md:max-w-[60vw]`}
      >
        <p className="z-20 text-4xl uppercase">{item.title}</p>
        <p className="z-20 text-xl">{item.desc}</p>
      </div>
      <Image
        src={item.image}
        height="1000"
        width="1000"
        className="absolute inset-0 min-w-full min-h-full object-cover"
        alt={item.alt}
      />
      <div
        className={`absolute inset-0 min-w-full transition-all duration-500 min-h-full object-cover ${
          !hover ? "bg-black/40" : "bg-transparent"
        }`}
      ></div>
      <div
        className={`min-w-[100vw] min-h-[500rem] absolute bg-black duration-500 z-10 origin-bottom-left transition-all ${
          !hover ? "lg:rotate-[75deg] max-lg:rotate-[45deg]" : "rotate-90"
        }`}
      ></div>
      <div
        className={`${
          !hover ? "text-white" : "text-transparent"
        } transition-all duration-500 absolute top-5 z-20 left-5`}
      >
        hover or tap to view full image
      </div>
    </div>
  );
}
export default function Carousel({ content }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hover, setHover] = useState(false);
  return (
    <div className="relative max-2xl:min-w-full 2xl:min-w-[1480px] 2xl:max-w-[1480px]">
      <div className="min-w-full flex flex-col overflow-hidden pb-24">
        <div
          className="flex flex-row min-w-full transition-all duration-300 ease-in"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        >
          {content.map((item, i) => {
            return (
              <div key={i} className="min-w-full">
                <Item
                  item={item}
                  activeIndex={activeIndex}
                  i={i}
                  hover={hover}
                  setHover={setHover}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`absolute transition-all p-2 lg:bottom-[50%] max-lg:bottom-0 left-5 ${
          activeIndex !== 0
            ? "text-text bg-dark/50 rounded-lg"
            : "text-transparent"
        }`}
        onClick={() => {
          if (activeIndex !== 0) {
            setActiveIndex(activeIndex + 1);
          }
        }}
      >
        <svg
          className="h-8 w-8 hover:scale-110 transition-all"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <polyline points="11 7 6 12 11 17" />{" "}
          <polyline points="17 7 12 12 17 17" />
        </svg>
      </div>
      <div
        className={`absolute transition-all lg:bottom-[50%] max-lg:bottom-0 p-2 right-5 ${
          activeIndex !== (content.length - 1) * -1
            ? "text-text bg-dark/70 rounded-lg "
            : "text-transparent"
        }`}
        onClick={() => {
          if (activeIndex !== (content.length - 1) * -1) {
            setActiveIndex(activeIndex - 1);
          }
        }}
      >
        <svg
          className="h-8 w-8 hover:scale-110 transition-all"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <polyline points="13 17 18 12 13 7" />{" "}
          <polyline points="6 17 11 12 6 7" />
        </svg>
      </div>
    </div>
  );
}
