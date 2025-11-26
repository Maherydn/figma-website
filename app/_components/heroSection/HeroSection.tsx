import Image from "../Image";
import HeroLogo from "./HeroLogo";
import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroButtons from "./HeroButtons";
import { FC } from "react";

const HeroSection: FC = () => {
  return (
    <section className="relative flex justify-center items-center lg:h-screen h-fit max-h-[1080px] w-full p-4 lg:p-0 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image src="/heroSection/background.png" alt="background" />
      </div>

      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-4 lg:gap-10 px-2">
        <HeroLogo />
        <HeroTitle />
        <HeroSubtitle />
        <HeroButtons />
      </div>
    </section>
  );
};

export default HeroSection;
