import React from "react";
import Select from "react-select";

export const unidadesMedidas = [
  { value: "pza", label: "Pieza" },
  { value: "mt", label: "Metros" },
  { value: "lt", label: "Litros" },
  { value: "k", label: "Kilos" },
];

export const SelectUnidadMedida = ({
  selectID,
  col = "col-md-3",
  getInformation,
  name,
}) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: "0.13rem 0.1rem",
    }),
  };

  const handleChange = (selectedOption) => {
    console.log(selectedOption);
    getInformation(name, selectedOption);
  };

  return (
    <div className={`mb-2 ${col}`}>
      <label
        htmlFor={selectID}
        className="form-label mb-1"
        style={{ fontSize: "0.85rem" }}
      >
        Unidad de Medida:
      </label>
      <Select
        options={unidadesMedidas}
        onChange={handleChange}
        isSearchable={false}
        styles={customStyles}
      />
    </div>
  );
};
