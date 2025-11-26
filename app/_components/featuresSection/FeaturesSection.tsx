"use client";

import FeatureBlock, { FeatureItem } from "./FeatureBlock";


const features: { layout?: "single" | "double"; items: FeatureItem[] }[] = [
  {
    layout: "single",
    items: [
      {
        src: "/featuresSection/image-1.png",
        alt: "image-1",
        title: "Robust UI library",
        description:
          "3,100+ customizable, pixel-perfect components crafted with best practices.",
      },
    ],
  },
  {
    layout: "double",
    items: [
      {
        src: "/featuresSection/image-2.png",
        alt: "image-2",
        title: "Smart tokens & styles",
        description:
          "Prime uses real design system token structures with Figma variables.",
      },
      {
        src: "/featuresSection/image-3.png",
        alt: "image-3",
        title: "Easy customization",
        description:
          "Customize key colors and see the change propagate everywhere.",
      },
    ],
  },
  {
    layout: "single",
    items: [
      {
        src: "/featuresSection/image-4.png",
        alt: "image-4",
        title: "The best Figma practices",
        description:
          "Knowledge, tips & tricks gained from mastering each new Figma feature.",
      },
    ],
  },
  {
    layout: "double",
    items: [
      {
        src: "/featuresSection/image-5.png",
        alt: "image-5",
        title: "Supafast workflow",
        description:
          "Prime offers exactly the components you need — nothing more.",
      },
      {
        src: "/featuresSection/image-6.png",
        alt: "image-6",
        title: "Best of design systems",
        description:
          "Patterns learned after years working with real design systems.",
      },
    ],
  },
];

const FeaturesSection = () => {
  return (
    <section className="h-fit w-full flex items-center justify-center py-12 px-4">
      <div className="w-full flex flex-col items-center gap-12">

        <h2 className="font-bold lg:text-5xl text-3xl text-center text-black">
          No-fluff.
          <br />
          <span className="text-slate-400">Here is what you get</span>
        </h2>

        {features.map((item, index) => (
          <FeatureBlock
            key={index}
            layout={item.layout}
            items={item.items}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
