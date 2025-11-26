"use client";

import AvatarItem from "./AvatarItem";


const avatarConfig = [
  {
    src: "/aboutSection/avatar-1.png",
    alt: "avatar-1",
    size: "h-24 w-24",
    position: "top-4 left-24",
    animation: "animate-avatar",
  },
  {
    src: "/aboutSection/avatar-2.png",
    alt: "avatar-2",
    size: "h-20 w-20",
    position: "top-36 left-8",
    animation: "animate-avatar",
  },
  {
    src: "/aboutSection/avatar-3.png",
    alt: "avatar-3",
    size: "h-24 w-24",
    position: "top-64 left-32",
    animation: "animate-avatar",
  },
  {
    src: "/aboutSection/avatar-4.png",
    alt: "avatar-4",
    size: "h-20 w-20",
    position: "top-44 left-60",
    animation: "animate-avatar",
  },
  {
    src: "/aboutSection/avatar-5.png",
    alt: "avatar-5",
    size: "h-16 w-16",
    position: "top-14 left-60",
    animation: "animate-avatar-y",
  },
  {
    src: "/aboutSection/avatar-6.png",
    alt: "avatar-6",
    size: "h-28 w-28",
    position: "top-32 left-32",
    animation: "animate-avatar-y",
  },
];

const AboutSection = () => {
  return (
    <section className="lg:h-screen h-fit max-h-[1080px] w-full flex items-center justify-center pt-12 px-4 xl:px-0">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-8 w-full max-w-5xl">

        {/* Texte */}
        <div className="flex-1 min-w-0 flex flex-col gap-8">
          <h2 className="font-bold lg:text-5xl text-2xl text-black">
            <span className="text-blue-500 capitalize">for pros,</span> and the ones who want to become experts.
          </h2>

          <p className="text-black/40 font-semibold md:text-lg text-sm">
            Whether you’re a solo designer or part of a team, a junior or senior at an agency or a large organization, Prime has you covered.
          </p>

          <p className="text-black/40 font-semibold md:text-lg text-sm">
            It’s not about number of components. With{" "}
            <span className="text-black">
              top Figma tricks & techniques, battle-tested design system approach,
            </span>{" "}
            Prime supercharges your skills, and empowers you to work at warp speed.
          </p>
        </div>

        {/* Avatars */}
        <div className="relative w-96 h-96 min-w-0">
          {avatarConfig.map((avatar, i) => (
            <AvatarItem key={i} {...avatar} />
          ))} 
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
