import { IconFooter, Instagram, Twinter } from "../_assets/icon";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center ">
      <div className="flex w-full max-w-5xl justify-between px-4 lg:px-0 h-24 items-center border-t-slate-200 border-t">
        <p className="text-black lg:text-lg text-xs">
          Copyright © 2023 Thalion
          <span className="font-semibold"> www.thalion.pro.</span>
        </p>
        <div className="flex justify-center items-center gap-2">
          <Twinter />
          <Instagram />
          <IconFooter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
