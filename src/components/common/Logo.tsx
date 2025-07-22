import { images } from "../../constants";

const Logo = ({ className, imgClassName }) => {
  return (
    <div className={className}>
      <img src={images.logo} alt="logo" className={imgClassName} />
    </div>
  );
};

export default Logo;
