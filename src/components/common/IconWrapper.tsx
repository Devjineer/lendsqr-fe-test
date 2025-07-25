const IconWrapper = ({ className, iconClassName, icon, alt }: IconWrapperProps) => {
  return (
    <div className={className}>
      <img src={icon} alt={alt} className={iconClassName} />
    </div>
  );
};

export default IconWrapper;
