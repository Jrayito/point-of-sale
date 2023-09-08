import { Icon } from "./Icon.js";

export const BottonGuardar = ({ handleGuardar, isSave = false }) => {
  return (
    <>
      <button className="btn btn-success">
        <span className="d-flex align-items-center justify-content-center">
          {isSave ? (
            <span
              class="spinner-border spinner-border-sm"
              aria-hidden="true"
            ></span>
          ) : (
            <Icon name="save" />
          )}
          <span className="ms-2">Guardar</span>
        </span>
      </button>
    </>
  );
};
