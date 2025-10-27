"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

export default function TechStack() {
  return (
    <div className="flex gap-4 text-4xl text-blue-400">
      <SiReact title="React" />
      <SiNextdotjs title="Next.js" />
      <SiTypescript title="TypeScript" />
      <SiTailwindcss title="Tailwind CSS" />
    </div>
  );
}
    