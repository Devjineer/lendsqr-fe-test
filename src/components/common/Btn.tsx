const PlainBtn = ({
  title,
  icon,
  className,
  type = "plain",
  onBtnClick,
  iconRight
}: BtnProps) => {
  return (
    <button className={`${className} ${type}`} onClick={onBtnClick}>
      {icon && icon}
      {title && title}
      {iconRight && iconRight}
    </button>
  );
};

const PrimaryBtn = (props: BtnProps) => <PlainBtn {...props} />;

export { PlainBtn, PrimaryBtn };
