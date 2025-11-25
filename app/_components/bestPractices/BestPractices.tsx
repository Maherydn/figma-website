import {
  Icon_1,
  Icon_10,
  Icon_11,
  Icon_12,
  Icon_2,
  Icon_3,
  Icon_4,
  Icon_5,
  Icon_6,
  Icon_7,
  Icon_8,
  Icon_9,
} from "../../_assets/icon";
import Image from "../Image";
import BestPracticeCard from "./BestPracticeCard";

const BestPractices = () => {
  // Fake data
  const data = [
    {
      icon: <Icon_1 />,
      title: "Semantic tokens",
      description:
        "Meaningful styling is the foundation of design systems. Use techniques from world-class design systems, not random UI kits.",
    },
    {
      icon: <Icon_2 />,
      title: "Proper component exposure",
      description:
        "When you need to find component, swap an instance you see the preview of the main UI element. So fast and convenient!",
    },
    {
      icon: <Icon_3 />,
      title: "Component excellence",
      description:
        "Thanks to the right naming conventions, consistent structure, components keep overrides, helping you to iterate faster",
    },
    {
      icon: <Icon_4 />,
      title: "4pt soft-grid system",
      description:
        "Design with consistent layout spacing & radius system thanks to variables. With modes you may prepare themes for spacing.",
    },
    {
      icon: <Icon_5 />,
      title: "True accessibility in mind",
      description:
        "More than WCAG, colors are using APCA, and they are synced with each other, so you may easily swap tones from the palette.",
    },
    {
      icon: <Icon_6 />,
      title: "Universal typography ",
      description:
        "Well-crafted typography scale allows you to prepare design for all devices from web, desktop, mobile or even wearables.",
    },
    {
      icon: <Icon_7 />,
      title: "Variables & styles",
      description:
        "Professional set of variable collections to configure colors, spacing, radius. Prepared to be easily customized & expanded. ",
    },
    {
      icon: <Icon_8 />,
      title: "Top-notch effects",
      description:
        "Glassmorphic blurs, shadows and other effects combined together to work for you under one beautiful & consistent system.",
    },
    {
      icon: <Icon_9 />,
      title: "Auto Layout",
      description:
        "All new features including wrap content options are used to get most of the Figma to create easy to use components.",
    },
    {
      icon: <Icon_10 />,
      title: "Variants & properties",
      description:
        "Configure components conveniently with the set of intuitively prepared properties.",
    },
    {
      icon: <Icon_11 />,
      title: "Phosphor Icons",
      description:
        "Set of world class Icons used as a base iconography elements within the kit. Outline & fill styles included.",
    },
    {
      icon: <Icon_12 />,
      title: "Dark & light modes",
      description:
        "All components with proper variable tokens setup include the dark mode. Works automatically.",
    },
  ];

  return (
    <section className="h-fit w-full flex flex-col items-center lg:gap-20 gap-16 lg:pt-24 py-12 px-4 bg-black ">
      {/* Title */}
      <div className="flex flex-col justify-center items-center font-bold lg:text-5xl text-3xl text-white/90 text-center">
        <h2>Best practices</h2>
        <h2 className="text-gray-500 text-xl lg:text-2xl">
          World-class standards inside
        </h2>
      </div>

      {/* Cards */}
      <div className="w-full max-w-5xl flex flex-wrap justify-between gap-4">
        {data.map((item, index) => (
          <BestPracticeCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      {/*  */}
      <div className="w-full max-w-5xl h-fit py-4 px-10 rounded-4xl bg-[#171C1F] relative flex flex-col gap-8 items-start justify-center">
        <p className="font-bold lg:text-4xl text-2xl max-w-[600px] text-white/95">
          “I love the structure of the kit, access & edit all components very
          quickly.
          <span className="text-slate-400">
            Prime kit is an awesome way to speed up your workflow.”
          </span>
        </p>
        <div className="flex flex-col gap-2">
          <div className="h-14 w-14 bg-slate-400 rounded-full"></div>
          <h4 className="text-lg lg:text-xl font-semibold text-white/90">Jan Marz</h4>
          <p className="text-base lg:text-lg font-semibold text-slate-400">
            Co-Founder Atheros,
            <br />
            Design Influencer
          </p>
        </div>

        <div className="absolute -bottom-10 right-24 h-60 w-60 hidden lg:block hover:rotate-180 duration-300 ">
          <Image src="/bestPractice/logo.png" alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default BestPractices;
