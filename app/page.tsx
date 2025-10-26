import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";
import SplashCursor from "@/components/SplashCursor";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-[#060010]">
      <SplashCursor
      />
      <div className="relative z-10 container mx-auto h-40 flex items-center justify-around font-sans text-white">
        <p className="text-3xl font-semibold cursor-pointer">Gilang Arya</p>
        <div className="flex items-center gap-10">
          <a className="text-xl cursor-pointer" href="">
            Beranda
          </a>
          <a className="text-xl cursor-pointer" href="">
            Contact
          </a>
        </div>
      </div>

      <div className="container mx-auto flex justify-center items-center h-60 gap-5">
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
    </div>
  );
}
