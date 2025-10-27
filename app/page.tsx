import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";
import SplashCursor from "@/components/SplashCursor";
import SpotlightCard from "@/components/SpotlightCard";
import DarkVeil from "@/components/DarkVeil";

export default function Home() {
  return (
    <div className="relative w-full bg-[#060010]">
      <div
        className="h-screen w-full absolute"
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
        <div className="flex gap-5 select-none">
          <SplitText
            text="Hello!"
            className="text-4xl font-semibold text-center text-white"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <BlurText
            text="Selamat Datang?!"
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
            Start
          </button>
        </div>
      </div>

      <div className="container h-lvh">
        <div className="flex justify-center gap-5">
          <SpotlightCard
            className="custom-spotlight-card w-[200px] h-[200px] text-white"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="flex flex-col items-center justify-start">
              <p>Fronted Developer</p>
              <span className="">HTML</span>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card w-[200px] h-[200px] text-white flex items-center"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <p>Backend Developer</p>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card w-[200px] h-[200px] text-white flex items-center"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <p>Full Stack Developer</p>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card w-[200px] h-[200px] text-white flex items-center"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <p>Testing</p>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}
