import { FC } from "react";

const HeroButtons: FC = () => (
  <div className="flex lg:flex-row flex-col lg:gap-4 gap-2 w-full items-center justify-center">
    <button className="bg-blue-500 lg:w-40 w-full h-12 text-white rounded-xl cursor-pointer">
      Get it now
    </button>

    <button className="bg-slate-300 lg:w-40 w-full h-12 text-black rounded-xl cursor-pointer">
      Live preview
    </button>
  </div>
);

export default HeroButtons;
