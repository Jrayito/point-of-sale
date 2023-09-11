import { InputNumber } from "primereact/inputnumber";

export const InputMoney = ({
  inputID,
  col = "col-md-3",
  money,
  setMoney,
  description,
}) => {
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
        onValueChange={(e) => setMoney(e.value)}
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
