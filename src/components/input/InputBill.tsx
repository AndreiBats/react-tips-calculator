import { ChangeEvent, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { StyledInput, BillInput } from "./styles";

export const InputBill = () => {
  const bill = useInput();

  return (
    <StyledInput>
      <BillInput type="text" placeholder="Enter bill" {...bill} />
    </StyledInput>
  );
};
