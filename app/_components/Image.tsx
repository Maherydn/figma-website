interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className=" w-full h-full object-cover"
    />
  );
};

export default Image;
