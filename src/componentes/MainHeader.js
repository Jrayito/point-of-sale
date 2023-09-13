import { Icon } from "./Icon.js";
import { useSidebar } from "../context/sidebarContext.js";

export const MainHeader = ({ children }) => {
  const { collapsed, changeCollapse, changeToggle, toggle, broken } =
    useSidebar();

  return (
    <div className="d-flex align-items-center justify-content-between flex-grow-1">
      {!broken && (
        <button
          className="btn btn-light"
          onClick={() => changeCollapse(!collapsed)}
        >
          <span className="d-flex aling-items-center">
            <Icon name="menu" />
          </span>
        </button>
      )}
      {broken && (
        <button className="btn btn-light" onClick={() => changeToggle(!toggle)}>
          <span className="d-flex aling-items-center">
            <Icon name="menu" />
          </span>
        </button>
      )}

      <div>{children}</div>
    </div>
  );
};
