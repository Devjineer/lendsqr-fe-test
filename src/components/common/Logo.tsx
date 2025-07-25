import { images } from "../../constants";
import IconWrapper from "./IconWrapper";

const Logo = ({ className, imgClassName }: LogoProps) => {
  return (
    <IconWrapper
      icon={images.logo}
      alt="logo"
      className={className}
      iconClassName={imgClassName}
    />
  );
};

export default Logo;
