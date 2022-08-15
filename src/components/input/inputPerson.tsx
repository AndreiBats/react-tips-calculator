import { ChangeEvent, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { StyledInput, PersonInput } from "./styles";

export const InputPerson = () => {
  const person = useInput();

  return (
    <StyledInput>
      <PersonInput type="text" placeholder="Enter persons" {...person} />
    </StyledInput>
  );
};
