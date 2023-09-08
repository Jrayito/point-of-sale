import { BottonGuardar } from "./ButtonGuardar";

export const ModalProductoNuevo = () => {
  return (
    <div
      className="modal fade"
      id="ModalProductoNuevo"
      aria-labelledby="ModalProductoNuevoLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
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
            <h6>Informacion general:</h6>
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
