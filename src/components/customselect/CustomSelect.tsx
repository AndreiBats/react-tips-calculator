import { useState } from "react";
import Select, { ActionMeta, SingleValue } from "react-select";
import { IOption } from "../../types";
import { StyledCustomSelect } from "./styles";

const options: IOption[] = [
  { value: "10%", label: "10%" },
  { value: "15%", label: "15%" },
  { value: "20%", label: "20%" },
];

export const CustomSelect = () => {
  const [currentValue, setCurrentValue] = useState("10%");

  const getValue = () => {
    return currentValue
      ? options.find((option) => option.value === currentValue)
      : "";
  };

  const handleChange = (event: any): void => {
    //TODO: fix type
    setCurrentValue(event.value);
  };

  return (
    <StyledCustomSelect>
      <Select options={options} onChange={handleChange} value={getValue()} />
    </StyledCustomSelect>
  );
};
