import { Icon } from "./Icon.js";

export const SubEncabezado = ({ nameIcon, subtitle }) => {
  return (
    <h5>
      <span className="d-flex align-items-center">
        <span className="text-primary">
          <Icon name={nameIcon} marginClass="me-2" size="md-30" />
        </span>
        <span>{subtitle}</span>
      </span>
    </h5>
  );
};
