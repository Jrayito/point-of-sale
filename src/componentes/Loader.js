import "../style/loader.css";

export const Loader = () => {
  return (
    <div className="container-loader">
      <div className="position-absolute top-50 start-50 translate-middle">
        <span className="loader "></span>
      </div>
    </div>
  );
};
