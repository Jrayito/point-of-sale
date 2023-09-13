import { Icon } from "../Icon";
import { Tooltip } from "primereact/tooltip";
import { useSidebar } from "../../context/sidebarContext";

export const ButtonAccion = ({ description, onHandleDescargar, icon }) => {
  const { broken } = useSidebar();
  return (
    <>
      {broken && <Tooltip target=".btn-tooltip" />}
      <button
        className="btn btn-light text-primary btn-tooltip"
        data-pr-tooltip={description}
        data-pr-position="top"
      >
        <span className="d-flex align-items-center">
          <Icon name={icon} />
          {!broken && <span className="ms-2">{description}</span>}
        </span>
      </button>
    </>
  );
};
