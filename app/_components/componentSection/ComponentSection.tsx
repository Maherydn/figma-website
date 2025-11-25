"use client";
import ScrollerRow, { RowItem } from "./ScrollerRow";

const ComponentSection: React.FC = () => {
  const rows: RowItem[][] = [
    [
      { src: "/componentSection/image-11.png", alt: "image-11" },
      { src: "/componentSection/image-12.png", alt: "image-12" },
      { src: "/componentSection/image-13.png", alt: "image-13" },
      { src: "/componentSection/image-14.png", alt: "image-14" },
    ],
    [
      { src: "/componentSection/image-21.png", alt: "image-21" },
      { src: "/componentSection/image-22.png", alt: "image-22" },
      { src: "/componentSection/image-23.png", alt: "image-23" },
      { src: "/componentSection/image-24.png", alt: "image-24" },
    ],
    [
      { src: "/componentSection/image-31.png", alt: "image-31" },
      { src: "/componentSection/image-32.png", alt: "image-32" },
      { src: "/componentSection/image-33.png", alt: "image-33" },
      { src: "/componentSection/image-34.png", alt: "image-34" },
    ],
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center overflow-hidden gap-24 py-24">
      {/* HEADER */}
      <div className="max-w-5xl w-full px-4 lg:px-0">
        <h2 className="lg:text-5xl text-3xl font-bold text-black max-w-xl lg:ml-24 ml-0">
          Pixel-perfect & super smart{" "}
          <span className="text-blue-600">Components</span>
        </h2>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-12 items-start max-w-5xl overflow-hidden">
        {rows.map((rowItems, idx) => (
          <ScrollerRow key={idx} items={rowItems} reverse={idx === 1} />
        ))}
      </div>
    </section>
  );
};

export default ComponentSection;
