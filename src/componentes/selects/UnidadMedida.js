import React, { useState } from "react";
import Select from "react-select";

export const unidadesMedidas = [
  { value: "pza", label: "Pieza" },
  { value: "mt", label: "Metros" },
  { value: "lt", label: "Litros" },
  { value: "k", label: "Kilos" },
];

export const SelectUnidadMedida = ({ selectID, col = "col-md-3" }) => {
  const [selectedOption, setSelectedOption] = useState(unidadesMedidas[0]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className={`mb-2 ${col}`}>
      <label
        htmlFor={selectID}
        className="form-label mb-1"
        style={{ fontSize: "0.85rem" }}
      >
        Unidad de Medida
      </label>
      <Select
        options={unidadesMedidas}
        defaultValue={selectedOption}
        onChange={handleChange}
        isSearchable={false}
      />
    </div>
  );
};
