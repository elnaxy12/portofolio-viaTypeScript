"use client";
import React, { useState, useRef } from "react";
import { gsap } from "gsap";

export default function MenuButtonOnly() {
  const [open, setOpen] = useState(false);
  const iconRef = useRef<HTMLSpanElement | null>(null);
  const hRef = useRef<HTMLSpanElement | null>(null);
  const vRef = useRef<HTMLSpanElement | null>(null);

  const toggleMenu = () => {
    setOpen(!open);
    const icon = iconRef.current;
    const h = hRef.current;
    const v = vRef.current;
    if (!icon || !h || !v) return;

    if (!open) {
      gsap.to(h, { rotate: 45, duration: 0.4, ease: "power4.out" });
      gsap.to(v, { rotate: -45, duration: 0.4, ease: "power4.out" });
    } else {
      gsap.to(h, { rotate: 0, duration: 0.35, ease: "power3.inOut" });
      gsap.to(v, { rotate: 90, duration: 0.35, ease: "power3.inOut" });
    }
  };

  return (
    <button
      onClick={toggleMenu}
      className="flex items-center gap-2 text-white font-medium cursor-pointer bg-transparent border-0"
    >
      <span className="block overflow-hidden h-[1em]">
        <span className="block transition-transform duration-300 ease-out">
          {open ? "Close" : "Menu"}
        </span>
      </span>

      <span
        ref={iconRef}
        className="relative w-[14px] h-[14px] inline-flex items-center justify-center"
      >
        <span
          ref={hRef}
          className="absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded translate-x-[-50%] translate-y-[-50%]"
        />
        <span
          ref={vRef}
          className="absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded translate-x-[-50%] translate-y-[-50%] rotate-90"
        />
      </span>
    </button>
  );
}
