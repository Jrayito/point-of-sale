import { Divider } from "primereact/divider";
import { useState, useEffect } from "react";
import { formatCurrency } from "../../controllers/funciones.js";
import { SubEncabezado } from "../subencabezado";

export const BasicInformationProduct = ({
  description,
  sku,
  unidadMedida,
  stock,
  precioCompra,
  precioVenta,
}) => {
  const [ganancia, setGanancia] = useState("");

  useEffect(() => {
    setGanancia(formatCurrency(stock * precioVenta - stock * precioCompra));
  }, [precioCompra, precioVenta, stock]);

  return (
    <table className="table table-borderless">
      <tbody>
        <tr>
          <td colSpan={2}>
            <b>Descripción:</b>
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
        <tr>
          <td colSpan={3}>
            <Divider />
          </td>
        </tr>
        <tr>
          <td colSpan={3}>
            <SubEncabezado
              nameIcon="attach_money"
              subtitle="Valor de inventario"
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>Valor de compra:</td>
          <td className="text-end">{formatCurrency(stock * precioCompra)}</td>
        </tr>
        <tr>
          <td colSpan={2}>Valor de Venta:</td>
          <td className="text-end">{formatCurrency(stock * precioVenta)}</td>
        </tr>
        <tr>
          <td className="text-end" colSpan={2}>
            <b>Ganancia total:</b>
          </td>
          <td className="text-end">
            <b>{ganancia}</b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
