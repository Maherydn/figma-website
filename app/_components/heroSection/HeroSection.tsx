import Image from "../Image";

const HeroSection = () => {
  return (
    <section className="lg:h-screen h-fit w-full relative flex  justify-center items-center py-4 lg:py-0 ">
      <div className="absolute inset-0 w-full h-full -z-10">    
        <Image src="/heroSection/background.png" alt="background" />
      </div>

      <div className="w-2xl lg:px-4 px-2 flex justify-center items-center flex-col lg:gap-12 gap-4 text-center">
        <div className="lg:h-24 lg:w-24 h-12 w-12">
          <Image src="/heroSection/logo.png" alt="logo" />
        </div>
        <p className="text-black capitalize font-bold lg:text-2xl text-lg">
          prime 5
        </p>
        <h1 className="text-black font-bold lg:text-6xl text-3xl w-80 lg:w-fit ">
          figma design system at it s time finest.
        </h1>
        <p className="text-slate-500 font-semibold lg:text-lg text-xs ">
          Supercharge your design workflow with top Figma & Design System
          techniques. Powerful components with tokens to complete every project
          10* faster. It s far more than just a UI Kit.
        </p>
        <div className="flex lg:flex-row flex-col lg:gap-4 w-full gap-2 items-center justify-center">
          <button className="bg-blue-500 lg:w-40 w-full h-12 text-white rounded-xl cursor-pointer ">
            Get it now
          </button>
          <button className="bg-slate-300 lg:w-40 w-full h-12 text-black rounded-xl cursor-pointer">
            Live preview
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
