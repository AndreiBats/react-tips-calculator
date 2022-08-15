import { useState } from "react";
import { Button } from "../button/Button";
import { CustomSelect } from "../customselect/CustomSelect";
import { InputBill } from "../input/InputBill";
import { InputPerson } from "../input/inputPerson";

import { Description, StyledForm, Title, Total } from "./styles";

export const Form = () => {
  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <Description>Let’s go calculate your tips</Description>
      <InputBill />
      <InputPerson />
      <CustomSelect />
      <Total>Total: {}</Total>
      <Button />
    </StyledForm>
  );
};
