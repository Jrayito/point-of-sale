export const BasicInformationProduct = ({
  description,
  sku,
  unidadMedida,
  stock,
}) => {
  return (
    <table className="table table-borderless">
      <tbody>
        <tr>
          <td colSpan={2}>
            {" "}
            <b>Descripción:</b>{" "}
          </td>
          <td>
            <b>SKU</b>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>{description}</td>
          <td>{sku}</td>
        </tr>
        <tr>
          <td colSpan={2}>
            <b>Unidad de medida:</b>
          </td>
          <td>
            <b>Stock</b>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>{unidadMedida ?? ""}</td>
          <td>{stock}</td>
        </tr>
      </tbody>
    </table>
  );
};
