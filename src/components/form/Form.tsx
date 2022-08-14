import { useState } from "react";
import { Button } from "../button/Button";
import { CustomSelect } from "../customselect/CustomSelect";
import { Input } from "../input/Input";
import { Description, StyledForm, Title, Total } from "./styles";

export const Form = () => {
  const [total, setTotal] = useState(0);

  const handleChange = () => {
    setTotal(total + 1);
  };
  return (
    <StyledForm onSubmit={handleChange}>
      <Title>Welcome to App</Title>
      <Description>Let’s go calculate your tips</Description>
      <Input />
      <CustomSelect />
      <Total>Total: {total}</Total>
      <Button />
    </StyledForm>
  );
};
