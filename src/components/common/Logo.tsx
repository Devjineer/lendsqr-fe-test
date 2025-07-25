import { images } from "../../constants";
import IconWrapper from "./IconWrapper";

const Logo = ({ className, imgClassName }: LogoProps) => {
  return (
    <IconWrapper
      src={images.logo}
      alt="logo"
      className={className}
      imgClassName={imgClassName}
    />
  );
};

export default Logo;
