import Image from "../Image";

const Parteners = () => {
  return (
    <div className="flex justify-center items-center w-6xl gap-18  ">
      <div className="h-full w-24">
        <Image src="/partenerSection/samsung.png" alt="asset-3" />
      </div>
      <div className="h-full w-12">
        <Image src="/partenerSection/intel.png" alt="asset-3" />
      </div>
      <div className="h-full w-16">
        <Image src="/partenerSection/cisco.png" alt="asset-3" />
      </div>
      <div className="h-full w-24">
        <Image src="/partenerSection/google.png" alt="asset-3" />
      </div>
      <div className="h-full w-24">
        <Image src="/partenerSection/visa.png" alt="asset-3" />
      </div>
      <div className="h-full w-14">
        <Image src="/partenerSection/frog.png" alt="asset-3" />
      </div>
      <div className="h-full w-8">
        <Image src="/partenerSection/leica.png" alt="asset-3" />
      </div>
      <div className="h-4 w-32">
        <Image src="/partenerSection/autodesk.png" alt="asset-3" />
      </div>
    </div>
  );
};

export default Parteners;
