import Image from "../Image";

export interface FeatureItem {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface FeatureBlockProps {
  layout?: "single" | "double";
  items: FeatureItem[];
}

const FeatureBlock = ({ layout = "single", items }: FeatureBlockProps) => {
  const isSingle = layout === "single";

  const containerClass = isSingle
    ? "flex flex-col items-center gap-2 w-full lg:w-5xl sm:w-[500px]"
    : "flex lg:flex-row flex-col lg:justify-between w-full lg:w-5xl sm:w-[500px] lg:gap-6 gap-12";

  const childClass = isSingle
    ? "flex flex-col items-center gap-2 w-full"
    : "lg:w-1/2 w-full min-w-0 flex flex-col gap-2 h-fit";

  const imageClass = isSingle
    ? "lg:h-[580px] w-full h-[200px] md:h-[300px]"
    : "xl:w-[500px] lg:h-[580px] md:h-[360px] w-full h-[260px]";

  return (
    <div className={containerClass}>
      {items.map((item, index) => (
        <div key={index} className={childClass}>
          <div className={imageClass}>
            <Image src={item.src} alt={item.alt} />
          </div>

          <div className="font-semibold lg:text-lg text-sm flex flex-col gap-px">
            <h3 className="text-black">{item.title}</h3>
            <p className="text-slate-500">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureBlock;
