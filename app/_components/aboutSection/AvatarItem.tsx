
import Image from "../Image";

interface AvatarItemProps {
  src: string;
  alt: string;
  size: string;
  position: string;
  animation: string;
  
}

const AvatarItem: React.FC<AvatarItemProps> = ({ src, alt, size, position, animation }) => {
  return (
    <div
      className={`absolute ${size} ${position} ${animation}`}
    >
      <Image src={src} alt={alt} />
    </div>
  );
};

export default AvatarItem;