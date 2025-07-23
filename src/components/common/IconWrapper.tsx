const IconWrapper = ({ className, imgClassName, src, alt }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} className={imgClassName} />
    </div>
  );
};

export default IconWrapper;
