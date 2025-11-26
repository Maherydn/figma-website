import Image from "../Image";
import { FC } from "react";

const HeroLogo: FC = () => (
  <div className="lg:h-24 lg:w-24 h-14 w-14">
    <Image src="/heroSection/logo.png" alt="logo" />
  </div>
);

export default HeroLogo;
