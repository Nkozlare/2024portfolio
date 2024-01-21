"use client";
import SideAnimation from "./sideAnimation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const scroll = (id) => {
    if (typeof document !== undefined) {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const [top, setTop] = useState(true);
  useEffect(() => {
    if (document !== undefined) {
      const handleScroll = () => {
        if (window.scrollY === 0) {
          setTop(true);
        } else {
          setTop(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <div
      className={`min-w-full fixed  flex flex-row justify-between z-30 lg:p-6 max-lg:p-4 duration-500 ease-in border-b-text border-b-[1px] transition-all ${
        top ? "backdrop-blur-none" : "backdrop-blur-md"
      }`}
    >
      <SideAnimation delay={0}>
        <div>Nick Kozlarek</div>
      </SideAnimation>
      <SideAnimation delay={1}>
        <div className="flex flex-row gap-4">
          <p
            className="hover:text-secondary-light hover:scale-110 transition-all"
            onClick={() => scroll("about")}
          >
            about
          </p>
          <p
            className="hover:text-secondary-light hover:scale-110 transition-all"
            onClick={() => scroll("projects")}
          >
            projects
          </p>
          <p
            className="hover:text-secondary-light hover:scale-110 transition-all"
            onClick={() => scroll("skills")}
          >
            skills
          </p>
          <p
            className="hover:text-secondary-light hover:scale-110 transition-all"
            onClick={() => scroll("contact")}
          >
            contact
          </p>
        </div>
      </SideAnimation>
    </div>
  );
}
