"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import BlurText from "@/components/BlurText";
import ShinyText from "@/components/ShinyText";
import SpotlightCard from "@/components/SpotlightCard";
import DarkVeil from "@/components/DarkVeil";
import AnimatedContent from "@/components/AnimatedContent";
import ScrambledText from "@/components/ScrambledText";
import AppLogoLoop from "@/components/AppLogoLoop";
import ClickSpark from "@/components/ClickSpark";
import GlassIcons from "@/components/GlassIcons";
import SplitText from "@/components/SplitText";
import ScrollFloat from "@/components/ScrollFloat";
import ScrollReveal from "@/components/ScrollReveal";
import {
  FaGithub,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const items = [
  {
    icon: <FaGithub />,
    color: "#333",
    label: "GitHub",
    href: "https://github.com/namamu",
  },
  {
    icon: <FaDiscord />,
    color: "#5865F2",
    label: "Discord",
    href: "https://discord.gg/namaserver",
  },
  {
    icon: <FaFacebook />,
    color: "#1877F2",
    label: "Facebook",
    href: "https://facebook.com/namamu",
  },
  {
    icon: <FaInstagram />,
    color: "#E4405F",
    label: "Instagram",
    href: "https://instagram.com/namamu",
  },
  {
    icon: <FaEnvelope />,
    color: "#EA4335",
    label: "Email",
    href: "mailto:namamu@email.com",
  },
  {
    icon: <FaWhatsapp />,
    color: "#25D366",
    label: "WhatsApp",
    href: "https://wa.me/6281234567890",
  },
];

export default function Home(): JSX.Element {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gsap/ScrollSmoother").then(({ ScrollSmoother }) => {
        gsap.registerPlugin(ScrollSmoother);

        ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 2,
          effects: true,
          smoothTouch: 0.1,
          normalizeScroll: true,
        });
      });
    }
  }, []);
  return (
    <div
      id="smooth-wrapper"
      className="relative min-h-screen w-full select-none bg-[#060010] overflow-x-clip overflow-y-clip scrollbar-hide scroll-smooth"
    >
      <div className="z-10 fixed top-0 left-0 w-screen mx-auto h-40 flex items-center justify-around font-sans text-white">
        <div
          className="bg-[#060010]/5 flex backdrop-blur-md items-center justify-between w-[90%]"
          style={{
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
            border: "1px solid rgba(39, 30, 55, 0.5)",
          }}
        >
          <p className="text-3xl font-semibold cursor-pointer select-none">
            Gilang Arya
          </p>
          <div className="flex items-center gap-10 select-none">
            <ShinyText text="Home" speed={5} className="custom-class" />
            <ShinyText text="About" speed={5} className="custom-class" />
          </div>
        </div>
      </div>
      <div id="smooth-content">
        <div className="absolute top-0 left-0 w-full h-screen z-0">
          <DarkVeil />
        </div>
        <div className="w-full mx-auto">
          <ClickSpark
            sparkColor="#fff"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <div className="container mx-auto flex flex-col justify-center items-center h-screen gap-20">
              <div className="select-none">
                <BlurText
                  text="Hello newcomer!, welcome to the code side."
                  delay={150}
                  animateBy="words"
                  direction="bottom"
                  className="text-4xl text-white"
                />
              </div>
              <div className="z-10">
                <button
                  className="border border-white backdrop-blur-lg  text-white"
                  style={{
                    padding: "10px 30px",
                    borderRadius: "25px",
                    fontFamily: "Arial",
                  }}
                >
                  <ShinyText
                    text="✨ Contact Me!"
                    speed={5}
                    className="custom-class"
                  />
                </button>
              </div>
            </div>
            <p
              className="text-white font-sans justify-center h-screen flex items-center"
              style={{
                color: "rgb(39, 30, 55)",
                fontWeight: "900",
                fontSize: "clamp(4rem, 6vw, 4rem)",
              }}
            >
              SCROLL DOWN
            </p>

            <div className="container mx-auto h-screen relative flex items-center">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
              >
                <div className="container flex w-full flex-col items-center">
                  <div className="container mx-auto">
                    <AppLogoLoop />
                  </div>
                  <div className="container mx-auto flex  justify-center text-justify">
                    <ScrambledText
                      className="scrambled-text-demo text-xs cursor-default"
                      radius={100}
                      duration={1.2}
                      speed={0.5}
                      scrambleChars=".:"
                    >
                      "Powered by React Bits, TypeScript, Next JS, and Tailwind
                      CSS."
                    </ScrambledText>
                  </div>
                </div>
              </ScrollFloat>
            </div>

            <div className="w-full mx-auto text-white">
              <ScrollReveal
                baseOpacity={0.1}
                enableBlur={true}
                baseRotation={10}
                blurStrength={4}
              >
                Hi! I’m a Software Engineering student at Universitas Bina
                Sarana Informatika (UBSI) Kaliabang, specializing in software
                development with strong theoretical and practical skills. I am
                skilled as a software engineer capable of designing, developing,
                and implementing business, technical, and scientific software by
                analyzing requirements and providing practical solutions. I also
                specialize in mobile app development, creating unique
                applications for mobile and wireless devices, and cloud
                computing, developing solutions for information
                interoperability, document management, and enterprise
                information delivery. My expertise includes web development
                (HTML, CSS, JavaScript, PHP, Laravel), mobile apps (Flutter,
                Java/Kotlin), cloud integration (Firebase, basic AWS), problem
                solving & debugging, and Agile development with Git version
                control. I’m eager to help build and optimize software
                solutions, whether for websites, mobile apps, or cloud-based
                services—let’s collaborate to bring your project to life!
              </ScrollReveal>
            </div>

            <div className="container mx-auto mt-[10pc]">
              <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
              >
                <div className="container w-full mx-auto">
                  <div className="flex justify-center flex-col items-center h-screen gap-10 cursor-default select-none">
                    <div>
                      <SplitText
                        text="✨ My Profession"
                        className="text-2xl font-semibold text-center text-white"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="lines"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                      />
                    </div>
                    <div className="flex justify-center items-center gap-10">
                      <SpotlightCard
                        className="custom-spotlight-card w-[200px] flex items-center h-[200px] text-white"
                        spotlightColor="rgba(6, 0, 16, 0.5)"
                      >
                        <div className="flex flex-col w-full justify-center items-center text-center">
                          <p className="w-full text-base">UI/UX Designer</p>
                          <span className="text-gray-600 text-xs">
                            Figma, Canva
                          </span>
                        </div>
                      </SpotlightCard>
                      <SpotlightCard
                        className="custom-spotlight-card w-[200px] flex items-center h-[200px] text-white"
                        spotlightColor="rgba(6, 0, 16, 0.5)"
                      >
                        <div className="flex flex-col w-full justify-center items-center text-center">
                          <p className="w-full text-base">Web Developer</p>
                          <span className="text-gray-600 text-xs">
                            HTML, CSS, JavaScript
                          </span>
                        </div>
                      </SpotlightCard>
                      <SpotlightCard
                        className="custom-spotlight-card w-[200px] flex items-center h-[200px] text-white"
                        spotlightColor="rgba(6, 0, 16, 0.5)"
                      >
                        <div className="flex flex-col w-full justify-center items-center text-center">
                          <p className="w-full text-base">Fronted Developer</p>
                          <span className="text-gray-600 text-xs">
                            React, Tailwind
                          </span>
                        </div>
                      </SpotlightCard>{" "}
                      <SpotlightCard
                        className="custom-spotlight-card w-[200px] flex items-center h-[200px] text-white"
                        spotlightColor="rgba(6, 0, 16, 0.5)"
                      >
                        <div className="flex flex-col w-full justify-center items-center text-center">
                          <p className="w-full text-base">
                            Full Stack Developer
                          </p>
                          <span className="text-gray-600 text-xs">
                            React, Laravel, Node.js, MySQL
                          </span>
                        </div>
                      </SpotlightCard>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center h-screen">
                  <div className="container mx-auto text-center mt-28">
                    <SplitText
                      text="Contact Me"
                      className="text-2xl font-semibold text-center text-white"
                      delay={100}
                      duration={0.6}
                      ease="power3.out"
                      splitType="lines"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="center"
                    />
                  </div>
                  <div
                    className="container mx-auto w-full mt-12"
                    style={{ position: "relative" }}
                  >
                    <GlassIcons
                      items={items}
                      className="custom-class text-white"
                    />
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </ClickSpark>
        </div>
      </div>
    </div>
  );
}
