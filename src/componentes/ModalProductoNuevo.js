import { BottonGuardar } from "./ButtonGuardar";
import { CustomInput } from "./CustomInput";
import { SelectUnidadMedida } from "./selects/UnidadMedida";

export const ModalProductoNuevo = () => {
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
                descripcion="SKU"
                inputID="inputSKU"
                placeholder="00000000"
              />
              <CustomInput
                descripcion="Descripción"
                inputID="inputDescripcion"
                placeholder="Descripción del producto"
                col="col-md-9"
              />
              <SelectUnidadMedida selectID="selectUnidadMedida" />
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
            <BottonGuardar />
          </div>
        </div>
      </div>
    </div>
  );
};
