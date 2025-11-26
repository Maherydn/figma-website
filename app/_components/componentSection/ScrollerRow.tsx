import Image from "../Image";

export interface RowItem  { src: string; alt: string };

interface ScrollerRowProps {
  items: RowItem[];
  reverse?: boolean;
}

const ScrollerRow: React.FC<ScrollerRowProps> = ({ items, reverse = false }) => {
  const scrollerClass = reverse ? "scroller-content-reverse" : "scroller-content";

  return (
    <div className={`flex gap-6 ${scrollerClass}`}>
      {items.concat(items).map((item, idx) => (
        <div key={idx} className="w-72 h-60 rounded-4xl overflow-hidden cursor-pointer">
          <Image src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  );
};

export default ScrollerRow;