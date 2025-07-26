import "../../styles/loader.scss";
const Loader = () => {
  return (
    <div className="loader__container">
      <div>
        <span className="loader"></span>
        <div className="loader__text">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;
