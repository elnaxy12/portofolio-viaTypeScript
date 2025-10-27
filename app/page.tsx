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

export default function Home() {
  return (
    <div className="relative min-h-screen w-full select-none bg-[#060010] overflow-x-auto scrollbar-hide scroll-smooth">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <DarkVeil />
      </div>
      <div>
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
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
                text="Hello newcomer!, welcome to the code side."
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
                <ShinyText
                  text="✨ Welcome!"
                  speed={5}
                  className="custom-class"
                />
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

          <div>
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
              <div className="container mx-auto">
                <div className="flex justify-center gap-10 cursor-default select-none">
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
                      <p className="w-full text-base">Full Stack Developer</p>
                      <span className="text-gray-600 text-xs">
                        React, Node.js, MySQL
                      </span>
                    </div>
                  </SpotlightCard>
                </div>
              </div>

              <div className="container mx-auto text-center mt-28">
                <SplitText
                  text="Follow My Social Media"
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
                  className="custom-class max-w-96 text-white"
                />
              </div>
            </AnimatedContent>
          </div>
        </ClickSpark>
      </div>
    </div>
  );
}
