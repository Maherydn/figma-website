import Image from "../Image";

const FeaturesSection = () => {
  return (
    <section className="h-fit w-full flex items-center justify-center py-12 px-4">
      <div className="w-full h-fit flex flex-col items-center gap-12 ">
        <h2 className="font-bold lg:text-5xl text-3xl text-black text-center">
          No-fluff.
          <br />
          <span className="text-slate-400">Here is what you get</span>
        </h2>

        {/* robust ui library */}
        <div className="flex flex-col items-center gap-2 w-full lg:w-5xl sm:w-[500px] ">
          <div className="lg:h-[580px] w-full h-[200px] md:h-[300px] ">
            <Image src="/featuresSection/image-1.png" alt="image-1" />
          </div>
          <div className="font-semibold lg:text-lg text-sm flex flex-col gap-px w-full ">
            <h3 className="text-black ">Robust UI library</h3>
            <p className="text-slate-500">
              3,100+ of easy to customize, pixel-perfect components crafted with
              the best practices, and tokens.
            </p>
          </div>
        </div>

        {/* smart tokens & styles and easy customization */}
        <div className="flex lg:flex-row flex-col lg:justify-between w-full lg:w-5xl sm:w-[500px] lg:gap-6 gap-12">
          <div className="lg:w-1/2 w-full min-w-0 flex flex-col gap-2 h-fit">
            <div className="xl:w-[500px] lg:h-[580px] w-full h-[260px] md:h-[360px] ">
              <Image src="/featuresSection/image-2.png" alt="image-2" />
            </div>
            <div className="font-semibold lg:text-lg text-sm flex flex-col gap-px">
              <h3 className="text-black ">Smart tokens & styles</h3>
              <p className="text-slate-500">
                Prime is tailored to use real design system tokens structure,
                with Figma variables.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full min-w-0 flex flex-col gap-2  h-fit">
            <div className="xl:w-[500px] lg:h-[580px] w-full h-[260px] md:h-[360px] ">
              <Image src="/featuresSection/image-3.png" alt="image-3" />
            </div>
            <div className="font-semibold lg:text-lg text-sm flex flex-col gap-px">
              <h3 className="text-black ">Easy customization</h3>
              <p className="text-slate-500">
                You customize only key colors, and see results propagated
                through entire design system.
              </p>
            </div>
          </div>
        </div>

        {/* The best Figma practices */}
        <div className="flex flex-col items-center gap-2 w-full lg:w-5xl sm:w-[500px] ">
          <div className="lg:h-[580px] w-full h-[200px] md:h-[300px]  ">
            <Image src="/featuresSection/image-4.png" alt="image-4" />
          </div>
          <div className="font-semibold lg:text-lg text-sm flex flex-col gap-px w-full ">
            <h3 className="text-black ">The best Figma practices</h3>
            <p className="text-slate-500">
              Knowledge, tips & tricks gained when mastering of every new Figma
              feature - all included in the kit.
            </p>
          </div>
        </div>

        {/* Supafast workflow and Best of design systems */}
        <div className="flex lg:flex-row flex-col lg:justify-between w-full lg:w-5xl sm:w-[500px] lg:gap-6 gap-12">
          <div className="lg:w-1/2 w-full min-w-0 flex flex-col gap-2 h-fit">
            <div className="xl:w-[500px] lg:h-[580px] md:h-[360px] w-full h-[260px] ">
              <Image src="/featuresSection/image-5.png" alt="image-5" />
            </div>
            <div className="font-semibold lg:text-lg text-sm flex flex-col gap-px">
              <h3 className="text-black ">Supafast workflow</h3>
              <p className="text-slate-500">
                Prime offers components that you exactly need, nothing more, for
                fast and efficient use.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full min-w-0 flex flex-col gap-2 h-fit">
            <div className="xl:w-[500px] lg:h-[580px] md:h-[360px] w-full h-[260px] ">
              <Image src="/featuresSection/image-6.png" alt="image-6" />
            </div>
            <div className="font-semibold lg:text-lg text-sm flex flex-col gap-px">
              <h3 className="text-black ">Best of design systems</h3>
              <p className="text-slate-500">
                Years working with real design systems means handy patterns, not
                considered in other kits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
