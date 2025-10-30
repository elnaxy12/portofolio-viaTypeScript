"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import BlurText from "@/components/BlurText";
import ShinyText from "@/components/ShinyText";
import DarkVeil from "@/components/DarkVeil";
import ScrambledText from "@/components/ScrambledText";
import AppLogoLoop from "@/components/AppLogoLoop";
import ClickSpark from "@/components/ClickSpark";
import ScrollFloat from "@/components/ScrollFloat";
import ScrollReveal from "@/components/ScrollReveal";
import FadeContent from "@/components/FadeContent";
import CardSwap, { Card } from "@/components/CardSwap";
import SplitText from "@/components/SplitText";
import Image from "next/image";

export default function Home(): JSX.Element {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gsap/ScrollSmoother").then(({ ScrollSmoother }) => {
        gsap.registerPlugin(ScrollSmoother);

        const smoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 2,
          effects: true,
          smoothTouch: 0.1,
          normalizeScroll: true,
        });

        (window as any).smoother = smoother;
      });
    }
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    const smoother = (window as any).smoother;

    if (el && smoother) {
      smoother.scrollTo(el, true);
    }
  };

  return (
    <div
      id="smooth-wrapper"
      className="relative min-h-screen w-full select-none bg-[#060010] overflow-x-clip overflow-y-clip scrollbar-hide scroll-smooth"
    >
      <div className="z-10 fixed top-0 left-0 w-screen mx-auto h-40 flex items-center justify-around font-sans text-white">
        <div
          className="shadow-lg shadow-purple-500/40 bg-[#060010]/5 flex backdrop-blur-xl items-center justify-between w-[70%]"
          style={{
            borderRadius: "15px",
            padding: "20px",
          }}
        >
          <p className="text-3xl font-semibold cursor-pointer select-none">
            Gilang Arya
          </p>
          <div className="flex items-center gap-10 select-none">
            <ShinyText
              text="Credit"
              speed={5}
              className="custom-class cursor-pointer"
              onClick={() => scrollToSection("credit")}
            />
            <ShinyText
              text="Project"
              speed={5}
              className="custom-class cursor-pointer"
              onClick={() => scrollToSection("project")}
            />
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

            <div className="h-full flex relative flex-col items-center">
              <p
                className="text-white font-sans h-screen justify-center flex items-center"
                style={{
                  color: "rgb(39, 30, 55)",
                  fontWeight: "900",
                  fontSize: "clamp(4rem, 6vw, 4rem)",
                }}
              >
                SCROLL DOWN
              </p>

              <div
                id="credit"
                className="container mx-auto h-screen relative flex items-center"
              >
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
                        "Powered by React Bits, TypeScript, Next JS, and
                        Tailwind CSS."
                      </ScrambledText>
                    </div>
                  </div>
                </ScrollFloat>
              </div>

              <div className="container w-full flex flex-col">
                <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                >
                  <div id="project" className="min-h-screen flex mb-10">
                    <div className="text-white flex flex-col items-center justify-center mt-[15pc] w-full">
                      <SplitText
                        text="Biggest Project"
                        className="text-4xl font-semibold text-center h-[50px]"
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
                      <p
                        className="mt-2 text-[11px] text-center"
                        style={{ color: "rgba(161, 148, 184, 0.7)" }}
                      >
                        Adidas-Etalase-Store, Dashboard-App, Villa-Brooklyn
                      </p>
                    </div>

                    <div className="w-full flex justify-center items-center">
                      <CardSwap
                        cardDistance={60}
                        verticalDistance={70}
                        delay={5000}
                        pauseOnHover={false}
                      >
                        <Card>
                          <div>
                            <h4
                              className="items-center bg-gradient-to-t from-black to-[#130030] text-lg rounded-tl-xl rounded-tr-xl text-white font-semibold flex gap-2 p-3"
                              style={{ borderBottom: "1px solid white" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-app-window-icon lucide-app-window"
                              >
                                <rect
                                  x="2"
                                  y="4"
                                  width="20"
                                  height="16"
                                  rx="2"
                                />
                                <path d="M10 4v4" />
                                <path d="M2 8h20" />
                                <path d="M6 4v4" />
                              </svg>

                              <p>Adidas Etalase</p>
                            </h4>
                          </div>
                          <div className="relative overflow-hidden flex-1 h-[345px] rounded-bl-xl rounded-br-xl">
                            <Image
                              src="/asset/image/adidas-etalase-page.png"
                              alt="Adidas Etalase"
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              quality={100}
                            />
                          </div>
                        </Card>
                        <Card>
                          <div>
                            <h4
                              className="items-center bg-gradient-to-t from-black to-[#130030] text-lg rounded-tl-xl rounded-tr-xl text-white font-semibold flex gap-2 p-3"
                              style={{ borderBottom: "1px solid white" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-app-window-icon lucide-app-window"
                              >
                                <rect
                                  x="2"
                                  y="4"
                                  width="20"
                                  height="16"
                                  rx="2"
                                />
                                <path d="M10 4v4" />
                                <path d="M2 8h20" />
                                <path d="M6 4v4" />
                              </svg>
                              <p>Dashboard App</p>
                            </h4>
                          </div>
                          <div className="relative overflow-hidden flex-1 h-[345px] rounded-bl-xl rounded-br-xl">
                            <Image
                              src="/asset/image/dashboard-app-page.png"
                              alt="Tampilan Website Adidas"
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              quality={100}
                            />
                          </div>
                        </Card>
                        <Card>
                          <div className="flex flex-col">
                            <h4
                              className="items-center bg-gradient-to-t from-black to-[#130030] text-lg rounded-tl-xl rounded-tr-xl text-white font-semibold flex gap-2 p-3"
                              style={{ borderBottom: "1px solid white" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-app-window-icon lucide-app-window"
                              >
                                <rect
                                  x="2"
                                  y="4"
                                  width="20"
                                  height="16"
                                  rx="2"
                                />
                                <path d="M10 4v4" />
                                <path d="M2 8h20" />
                                <path d="M6 4v4" />
                              </svg>
                              <p>Portofolio</p>
                            </h4>
                          </div>
                          <div className="relative overflow-hidden flex-1 h-[340px]">
                            <Image
                              src="/asset/image/portofolio.png"
                              alt="Tampilan Website Adidas"
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              quality={100}
                            />
                          </div>
                        </Card>
                      </CardSwap>
                    </div>
                  </div>
                </ScrollFloat>
              </div>
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

            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <footer
                className="container mx-auto pb-5 pt-3"
                style={{ borderTop: "1px solid rgba(39, 30, 55, 0.5)" }}
              >
                <div className="flex justify-between text-white">
                  <div>
                    <p className="text-xl">Gilang Arya Leksana</p>
                    <div>
                      <ScrambledText
                        className="scrambled-text-demo text-xs cursor-default"
                        radius={100}
                        duration={1.2}
                        speed={0.5}
                        scrambleChars=".:"
                      >
                        "Powered by React Bits, TypeScript, Next JS, and
                        Tailwind CSS."
                      </ScrambledText>
                    </div>
                    <p
                      style={{
                        color: "rgba(161, 148, 184, 0.7)",
                        fontSize: "11px",
                      }}
                    >
                      © 2025{" "}
                      <span className="font-semibold text-white">
                        Gilang Arya
                      </span>{" "}
                      — Built with ❤️ using Next.js, TypeScript, and Tailwind
                      CSS.
                    </p>
                  </div>
                  <div className="flex gap-5">
                    <p className="relative inline-block cursor-pointer h-[25px] text-white group">
                      GiHub
                      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300"></span>
                    </p>

                    <p className="relative inline-block cursor-pointer h-[25px] text-white group">
                      Email
                      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300"></span>
                    </p>
                  </div>
                </div>
              </footer>
            </FadeContent>
          </ClickSpark>
        </div>
      </div>
    </div>
  );
}
