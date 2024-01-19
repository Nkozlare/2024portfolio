"use client";
import SideAnimation from "./sideAnimation";
import { useEffect, useState } from "react";

export default function NavBar() {
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
      className={`min-w-full fixed  flex flex-row justify-between z-30 lg:p-10 max-lg:p-6 duration-500 ease-in border-b-text border-b-[1px] transition-all ${
        top ? "backdrop-blur-none" : "backdrop-blur-sm"
      }`}
    >
      <SideAnimation delay={0}>
        <div>Logo</div>
      </SideAnimation>
      <SideAnimation delay={0.5}>
        <div>Something in the middle</div>
      </SideAnimation>
      <SideAnimation delay={1}>
        <div>end things</div>
      </SideAnimation>
    </div>
  );
}
