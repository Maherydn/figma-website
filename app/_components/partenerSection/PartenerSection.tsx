import Image from "../Image";
import Overlay from "./Overlay";
import Parteners from "./Parteners";

const PartenerSection = () => {
  return (
    <section className="lg:h-screen h-fit max-h-[1080px] w-full flex flex-col justify-center items-center gap-12 py-6 lg:py-0">
      <div className="lg:w-4xl lg:h-[500px] w-80 h-56 rounded-3xl relative flex justify-center items-center animate-updown">
        <div className="absolute inset-0 lg:w-full lg:h-full ">
          <Image src="/partenerSection/bg.png" alt="background" />
        </div>

        <div className="lg:w-3xl lg:h-[400px] w-72 h-40 z-10 relative">
          <div className="absolute inset-0 w-full h-full">
            <Image src="/partenerSection/asset-bg.png" alt="asset-bg" />
          </div>

          <div className="absolute lg:top-8 lg:left-24 top-4 left-6 lg:w-24 lg:h-44 w-10 h-16">
            <Image src="/partenerSection/asset-1.png" alt="asset1" />
          </div>

          <div className="absolute lg:-bottom-6 lg:right-32  -bottom-4 right-16 lg:w-24 lg:h-44 w-10 h-20">
            <Image src="/partenerSection/asset-2.png" alt="asset-2" />
          </div>
        </div>

        <div className="absolute lg:top-40 lg:-right-12 top-16 -right-4 lg:w-24 lg:h-44 w-10 h-20">
          <Image src="/partenerSection/asset-3.png" alt="asset-3" />
        </div>
      </div>

      <div className="relative overflow-hidden text-nowrap xl:w-6xl w-full px-2">
        <div className="h-8 flex scroller-content cursor-pointer">
          <Parteners />

          {/* pour effet scroll */}
          <Parteners />
        </div>

        <Overlay isLeft />
        <Overlay />
      </div>
    </section>
  );
};

export default PartenerSection;
