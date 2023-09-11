export const CustomInput = ({
  descripcion,
  inputID,
  type = "text",
  placeholder,
  col = "col-md-3",
}) => {
  return (
    <div className={`mb-2 ${col}`}>
      <label
        htmlFor={inputID}
        className="form-label mb-1"
        style={{ fontSize: "0.85rem" }}
      >
        {descripcion}
      </label>
      <input
        type={type}
        className="form-control"
        id={inputID}
        name={inputID}
        placeholder={placeholder}
      />
    </div>
  );
};
