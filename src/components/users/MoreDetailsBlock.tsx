const MoreDetailsBlock = <T,>({
  title,
  details,
  displayItems,
}: MoreDetailsBlockProps<T>) => {
  return (
    <div className="detail__box">
      <h3 className="detail__box-title">{title}</h3>

      <div className="details__wrapper">{displayItems(details) ?? ""}</div>
    </div>
  );
};

export default MoreDetailsBlock;
