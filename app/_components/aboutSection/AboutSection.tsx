import Image from "../Image";

const AboutSection = () => {
  return (
    <section className="lg:h-screen h-fit max-h-[1080px] w-full flex items-center justify-center pt-12 px-4 xl:px-0">
      <div className="flex lg:flex-row flex-col justify-between items-center  gap-8 w-full max-w-5xl">
        <div className="flex-1 min-w-0 flex flex-col gap-8">
          <h2 className="font-bold lg:text-5xl text-2xl text-black">
            <span className="text-blue-500 capitalize">for pros,</span> and the
            ones who want to become experts.
          </h2>
          <p className="text-black/40 font-semibold md:text-lg text-sm">
            Whether your re a solo designer or part of a team, a junior or
            seniorm at an agency or a large organizationm Prime has you covered.
          </p>
          <p className="text-black/40 font-semibold md:text-lg text-sm">
            It s not about number of components. With&nbsp; 
            <span className="text-black">
               top Figma tricks & techniques, battle-tested design system
              approach,&nbsp; 
            </span>
            Prime supercharges your skills, and empowers you to work at warp
            speed.
          </p>
        </div>

        <div className="w-96 h-96 min-w-0 relative ">
          <div className="h-24 w-24 absolute top-4 left-24 animate-avatar">
            <Image src="/aboutSection/avatar-1.png" alt="avatar-1" />
          </div>
          <div className="h-20 w-2h-20 absolute top-36 left-8 animate-avatar">
            <Image src="/aboutSection/avatar-2.png" alt="avatar-2" />
          </div>
          <div className="h-24 w-24 absolute top-64 left-30 animate-avatar">
            <Image src="/aboutSection/avatar-3.png" alt="avatar-3" />
          </div>
          <div className="h-20 w-20 absolute top-44 left-68 animate-avatar">
            <Image src="/aboutSection/avatar-4.png" alt="avatar-4" />
          </div>
          <div className="h-16 w-1h-16 absolute top-14 left-60 animate-avatar-y">
            <Image src="/aboutSection/avatar-5.png" alt="avatar-5" />
          </div>
          <div className="h-28 w-28 absolute top-32 left-32 animate-avatar-y">
            <Image src="/aboutSection/avatar-6.png" alt="avatar-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
