import { FormEvent, useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { Button } from "../Button/Button";
import { CustomSelect, options } from "../Customselect/CustomSelect";
import { Input } from "../Input/Input";
import { Description, StyledForm, Title, Total } from "./styles";

export const Form = () => {
  const userBill = useInput("");
  const userPersons = useInput("");

  const [tips, setTips] = useState<number>(options[0].value);
  const [total, setTotal] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(true);

  const handleTotal = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setTotal((+userBill.value / +userPersons.value / 100) * (tips + 100));
  };

  useEffect(() => {
    userBill.value && userPersons.value
      ? setIsActive(false)
      : setIsActive(true);
  }, [userBill.value, userPersons.value]);

  return (
    <StyledForm onSubmit={handleTotal}>
      <Title>Welcome to App</Title>
      <Description>Let’s go calculate your bill</Description>
      <Input
        type="number"
        placeholder="Enter bill"
        {...userBill}
        title="Use only number"
      />
      <Input
        type="number"
        placeholder="Enter persons"
        {...userPersons}
        title="Use only number"
      />
      <CustomSelect tips={tips} setTips={setTips} />
      <Total>Total: {total.toFixed(2)} $</Total>
      <Button type="submit" isDisabled={isActive}></Button>
    </StyledForm>
  );
};
