import React from "react";
import { InputNumber } from "primereact/inputnumber";

export const InputMoney = ({
  inputID,
  col = "col-md-3",
  money,
  getMoney,
  description,
  name,
}) => {
  const handleValueChange = (event) => {
    getMoney(name, event.value);
  };

  return (
    <div className={`mb-2 ${col}`}>
      <label
        htmlFor={inputID}
        className="form-label mb-1"
        style={{ fontSize: "0.85rem" }}
      >
        {description}
      </label>
      <InputNumber
        inputId={inputID}
        value={money}
        onChange={handleValueChange}
        mode="currency"
        currency="USD"
        minFractionDigits={2}
        maxFractionDigits={5}
        inputClassName="form-control"
        className="w-100"
      />
    </div>
  );
};
