import { Icon } from "./Icon.js";
import { useSidebar } from "../context/sidebarContext.js";

export const MainHeader = ({ targetModal }) => {
  const { collapsed, changeCollapse } = useSidebar();

  return (
    <div className="d-flex align-items-center justify-content-between flex-grow-1">
      <button
        className="btn btn-light"
        onClick={() => changeCollapse(!collapsed)}
      >
        <span className="d-flex aling-items-center">
          <Icon name="menu" />
        </span>
      </button>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#ModalProductoNuevo"
      >
        <span className="d-flex aling-items-center justify-content-center">
          <Icon name="add" />
          <span className="ms-2">Producto Nuevo</span>
        </span>
      </button>
    </div>
  );
};
