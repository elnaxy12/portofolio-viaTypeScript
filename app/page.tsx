import BlurText from "@/components/BlurText";
import SplashCursor from "@/components/SplashCursor";
import ShinyText from "@/components/ShinyText";
import SpotlightCard from "@/components/SpotlightCard";
import DarkVeil from "@/components/DarkVeil";
import AnimatedContent from "@/components/AnimatedContent";
import ScrambledText from "@/components/ScrambledText";
import AppLogoLoop from "@/components/AppLogoLoop";

export default function Home() {
  return (
    <div className="relative w-full bg-[#060010] scroll-smooth overflow-x-scroll scrollbar-hide">
      <SplashCursor />
      <div
        className="h-full w-full absolute"
        style={{
          zIndex: "0",
          top: "0px",
        }}
      >
        <DarkVeil />
      </div>
      <div className="relative z-10 container mx-auto h-40 flex items-center justify-around font-sans text-white">
        <p className="text-3xl font-semibold cursor-pointer select-none">
          Gilang Arya
        </p>
        <div className="flex items-center gap-10 select-none">
          <a className="text-xl cursor-pointer" href="">
            Beranda
          </a>
          <a className="text-xl cursor-pointer" href="">
            Contact
          </a>
        </div>
      </div>

      <div className="container mx-auto flex flex-col justify-center items-center h-[500px] gap-20">
        <div className="select-none">
          <BlurText
            text="Hello!  Selamat Datang."
            delay={150}
            animateBy="words"
            direction="bottom"
            className="text-4xl text-white"
          />
        </div>
        <div className="z-10">
          <button
            className="border border-white text-white hover:bg-transparent"
            style={{
              padding: "10px 30px",
              borderRadius: "25px",
              fontFamily: "Arial",
            }}
          >
            <ShinyText text="✨ Welcome!" speed={5} className="custom-class" />
          </button>
        </div>
      </div>

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
          "Powered by React Bits, TypeScript, Next JS, and Tailwind CSS."
        </ScrambledText>
      </div>

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
        <div className="container mx-auto h-lvh">
          <div className="flex justify-center gap-10 cursor-default select-none">
            <SpotlightCard
              className="custom-spotlight-card w-[200px] flex items-center h-[200px] text-white"
              spotlightColor="rgba(6, 0, 16, 0.5)"
            >
              <div className="flex flex-col w-full justify-center items-center text-center">
                <p className="w-full text-base">UI/UX Designer</p>
                <span className="text-gray-600 text-xs">Figma, Canva</span>
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
                <span className="text-gray-600 text-xs">React, Tailwind</span>
              </div>
            </SpotlightCard>{" "}
            <SpotlightCard
              className="custom-spotlight-card w-[200px] flex items-center h-[200px] text-white"
              spotlightColor="rgba(6, 0, 16, 0.5)"
            >
              <div className="flex flex-col w-full justify-center items-center text-center">
                <p className="w-full text-base">Full Stack Developer</p>
                <span className="text-gray-600 text-xs">
                  React, Node.js, MySQL
                </span>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
}
