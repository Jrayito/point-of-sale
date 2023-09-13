import { Icon } from "../Icon.js";

export const ButtonAdd = ({ targetModal, description }) => {
  return (
    <button
      className="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target={targetModal}
    >
      <span className="d-flex aling-items-center justify-content-center">
        <Icon name="add" />
        <span className="ms-2">{description}</span>
      </span>
    </button>
  );
};
