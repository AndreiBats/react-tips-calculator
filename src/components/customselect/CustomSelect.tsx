import { useState } from "react";
import Select from "react-select";
import { StyledCustomSelect } from "./styles";

const options = [
  { value: "10%", label: "10%" },
  { value: "15%", label: "15%" },
  { value: "20%", label: "20%" },
];

export const CustomSelect = () => {
  const [curentValue, setCurentValue] = useState("10%");

  return (
    <StyledCustomSelect>
      <Select options={options} />
    </StyledCustomSelect>
  );
};
