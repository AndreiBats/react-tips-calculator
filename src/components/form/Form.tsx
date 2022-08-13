import { Button } from "../button/Button";
import { CustomSelect } from "../customselect/CustomSelect";
import { Input } from "../input/Input";
import { Description, StyledForm, Title, Total } from "./styles";

export const Form = () => {
  const title = "Welcome to App";
  const description = "Let’s go calculate your tips";

  return (
    <StyledForm>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Input />
      <CustomSelect />
      <Total>Total: ${}</Total>
      <Button />
    </StyledForm>
  );
};
