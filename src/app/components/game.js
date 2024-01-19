"use client";
import { useState, useEffect } from "react";

export default function SquareElement() {
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);

  const handleKeyDown = (event) => {
    if (event.key === "w") {
      setY(y - 10);
    } else if (event.key === "a") {
      setX(x - 10);
    } else if (event.key === "s") {
      setY(y + 10);
    } else if (event.key === "d") {
      setX(x + 10);
    }
  };
  useEffect(() => {
    if (window) {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, []);
  useEffect(() => {
    console.log("y", y, "x", x);
  }, [y, x]);

  return (
    <div className="square-container transition-all">
      <div
        className="square transition-all"
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
      />
    </div>
  );
}
