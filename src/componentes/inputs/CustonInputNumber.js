import React from "react";
import { InputNumber } from "primereact/inputnumber";

export const CustonInputNumber = ({
  inputID,
  number,
  getNumber,
  col = "col-md-3",
  descripcion,
  name,
}) => {
  return (
    <div className={`mb-2 ${col}`}>
      <label
        htmlFor={inputID}
        className="form-label mb-1"
        style={{ fontSize: "0.85rem" }}
      >
        {descripcion}
      </label>
      <InputNumber
        inputId={inputID}
        value={number}
        onValueChange={(e) => getNumber(name, e.value)}
        useGrouping={false}
        inputClassName="form-control"
        className="w-100"
      />
    </div>
  );
};
