import { serverTimestamp } from "firebase/firestore";
import { useState, useRef } from "react";
import { BottonGuardar } from "./buttons/ButtonGuardar";
import { CustomInput } from "./inputs/CustomInput";
import { SelectUnidadMedida } from "./selects/UnidadMedida";
import { InputMoney } from "./inputs/inputMoney.js";
import { CustonInputNumber } from "./inputs/CustonInputNumber.js";
import { addProduct } from "../controllers/productos.js";
import { Toast } from "primereact/toast";

export const ModalProductoNuevo = () => {
  const toastRef = useRef(null);
  const [save, setSave] = useState(false);
  const [product, setProduct] = useState({
    sku: "",
    description: "",
    unidadMedida: {},
    precioCompra: 0,
    precioVenta: 0,
    stock: 0,
    minStock: 0,
    fecha: serverTimestamp(),
  });

  const showToast = (title, message, ref, severity) => {
    ref.current.show({
      severity: severity,
      sumary: title,
      detail: message,
      life: 3000,
    });
  };

  const resetProduct = () => {
    const btnCloseModalProducto = document.querySelector(
      "#btnCloseModalProducto"
    );
    btnCloseModalProducto.click();
    setProduct({
      sku: "",
      description: "",
      unidadMedida: {},
      precioCompra: 0,
      precioVenta: 0,
      stock: 0,
      minStock: 0,
      fecha: serverTimestamp(),
    });
  };

  const handleAddInformacion = (name, value) => {
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddProduct = async () => {
    setSave(true);
    try {
      await addProduct(product);
      resetProduct();
      showToast(
        "Nuevo producto.",
        "Producto agregado correctamente",
        toastRef,
        "success"
      );
    } catch (error) {
      showToast(
        "Nuevo producto",
        "Ocurrio un error al guardar el producto",
        toastRef,
        "error"
      );
    }
    setSave(false);
  };

  return (
    <>
      <Toast ref={toastRef} position="top-right" />
      <div
        className="modal fade"
        id="ModalProductoNuevo"
        aria-labelledby="ModalProductoNuevoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header bg-success">
              <h1
                className="modal-title fs-5 text-white"
                id="ModalProductoNuevoLabel"
              >
                Registrar Producto
              </h1>
              <button
                type="button"
                className="btn-close text-white"
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
                  value={product.sku}
                />
                <CustomInput
                  descripcion="Descripción:"
                  inputID="inputDescripcion"
                  placeholder="Descripción del producto"
                  col="col-md-9"
                  getInformaction={handleAddInformacion}
                  name="description"
                  value={product.description}
                />
                <SelectUnidadMedida
                  selectID="selectUnidadMedida"
                  getInformation={handleAddInformacion}
                  name="unidadMedida"
                />
                <InputMoney
                  money={product.precioCompra}
                  getMoney={handleAddInformacion}
                  inputID={"textPrecioCompra"}
                  description="Precio de compra:"
                  name="precioCompra"
                />
                <InputMoney
                  money={product.precioVenta}
                  getMoney={handleAddInformacion}
                  inputID={"textPrecioVenta"}
                  description="Precio de venta:"
                  name="precioVenta"
                />
                <CustonInputNumber
                  number={product.stock}
                  getNumber={handleAddInformacion}
                  inputID={"textStock"}
                  descripcion="Stock:"
                  name="stock"
                />
              </div>

              <h6 className="mt-4">Informacion opcional:</h6>
              <div className="row">
                <CustonInputNumber
                  number={product.minStock}
                  getNumber={handleAddInformacion}
                  inputID={"textMinStock"}
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
                id="btnCloseModalProducto"
              >
                Cancelar
              </button>
              <BottonGuardar handleGuardar={handleAddProduct} isSave={save} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
