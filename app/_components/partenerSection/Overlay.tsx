interface OverlayProps {
  isLeft?: boolean;
} 

const Overlay: React.FC<OverlayProps> = ({ isLeft })  => {
    return (
        <div className={`absolute top-0 ${isLeft ? 'left-0 bg-linear-to-r' : 'right-0 bg-linear-to-l'} h-full lg:w-24 w-12 pointer-events-none  from-white to-transparent`}></div>

    );
}

export default Overlay;