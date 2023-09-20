export const Icon = ({ name, marginClass, size = "md-24" }) => {
  return (
    <i className={`material-icons ${size} ${marginClass ? marginClass : ""}`}>
      {name}
    </i>
  );
};
