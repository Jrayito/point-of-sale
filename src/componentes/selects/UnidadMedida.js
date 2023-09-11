export const SelectUnidadMedida = ({ selectID, col = "col-md-3" }) => {
  return (
    <div className={`mb-2 ${col}`}>
      <label
        htmlFor={selectID}
        className="form-label mb-1"
        style={{ fontSize: "0.85rem" }}
      >
        Unidad de Medida
      </label>
      <select name={selectID} id={selectID} className="form-select">
        <option value="0" defaultValue disabled>
          - Seleccionar --
        </option>
        <option value="pza">Pieza</option>
        <option value="mt">Metros</option>
        <option value="lt">Litros</option>
        <option value="kl">Kilos</option>
      </select>
    </div>
  );
};
