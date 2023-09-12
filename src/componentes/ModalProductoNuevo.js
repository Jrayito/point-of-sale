import { useState } from "react";
import { BottonGuardar } from "./buttons/ButtonGuardar";
import { CustomInput } from "./inputs/CustomInput";
import { SelectUnidadMedida } from "./selects/UnidadMedida";
import { InputMoney } from "./inputs/inputMoney.js";
import { CustonInputNumber } from "./inputs/CustonInputNumber.js";
import { addProduct } from "../controllers/productos.js";

export const ModalProductoNuevo = () => {
  const [product, setProduct] = useState({
    sku: "",
    description: "",
    unidadMedida: {},
    precioCompra: 0,
    precioVenta: 0,
    stock: 0,
    minStock: 0,
  });

  const handleAddInformacion = (name, value) => {
    setProduct({ ...product, [name]: value });
    console.log(product);
  };

  const handleAddProduct = async () => {
    try {
      await addProduct(product);
    } catch (error) {
      console.log("Ocurrio un error:" + error);
    }
  };

  return (
    <div
      className="modal fade"
      id="ModalProductoNuevo"
      aria-labelledby="ModalProductoNuevoLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="ModalProductoNuevoLabel">
              Registrar Producto
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h6 className="mb-2">Informacion general:</h6>
            <div className="row">
              <CustomInput
                descripcion="Código o SKU:"
                inputID="inputSKU"
                placeholder="00000000"
                getInformaction={handleAddInformacion}
                name="sku"
              />
              <CustomInput
                descripcion="Descripción:"
                inputID="inputDescripcion"
                placeholder="Descripción del producto"
                col="col-md-9"
                getInformaction={handleAddInformacion}
                name="description"
              />
              <SelectUnidadMedida
                selectID="selectUnidadMedida"
                getInformaction={handleAddInformacion}
                name="unidadMedida"
              />
              <InputMoney
                money={product.precioCompra}
                getMoney={handleAddInformacion}
                inputID={"002"}
                description="Precio de compra:"
                name="precioCompra"
              />
              <InputMoney
                money={product.precioVenta}
                getMoney={handleAddInformacion}
                inputID={"002"}
                description="Precio de venta:"
                name="precioVenta"
              />
              <CustonInputNumber
                number={product.stock}
                getNumber={handleAddInformacion}
                inputID={"003"}
                descripcion="Stock:"
                name="stock"
              />
            </div>

            <h6 className="mt-4">Informacion opcional:</h6>
            <div className="row">
              <CustonInputNumber
                number={product.minStock}
                getNumber={handleAddInformacion}
                inputID={"004"}
                descripcion="Stock mínimo:"
                name="minStock"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <BottonGuardar handleGuardar={handleAddProduct} />
          </div>
        </div>
      </div>
    </div>
  );
};
