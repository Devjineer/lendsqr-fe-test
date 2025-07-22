const PlainBtn = ({
  title,
  icon,
  className,
  type = "plain",
  onBtnClick,
}: BtnProps) => {
  return (
    <button className={`${className} ${type}`} onClick={onBtnClick}>
      {icon && icon}
      {title && title}
    </button>
  );
};

const PrimaryBtn = (props: BtnProps) => <PlainBtn {...props} />;

export { PlainBtn, PrimaryBtn };
