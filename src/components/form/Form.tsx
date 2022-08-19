import { FormEvent, useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { IOption } from "../../types";
import { Button } from "../button/Button";
import { CustomSelect, options } from "../customselect/CustomSelect";
import { Input } from "../input/Input";
import { Description, StyledForm, Title, Total } from "./styles";

export const Form = () => {
  const userBill = useInput("");
  const userPersons = useInput("");

  const [tips, setTips] = useState<number>(options[0].value);
  const [total, setTotal] = useState<string>("0.00");
  const [isActive, setIsActive] = useState<boolean>(true);

  const getValue = (): IOption | string | undefined => {
    return tips ? options.find((option) => option.value === tips) : "";
  };

  const handleTips = (tips: any): void => {
    setTips(tips.value);
  };
  console.log(tips);

  const handleTotal = (event: FormEvent<HTMLFormElement>): void => {
    setTotal(
      ((+userBill.value / +userPersons.value / 100) * (tips + 100)).toFixed(2)
    );

    event.preventDefault();
  };

  useEffect(() => {
    userBill.value && userPersons.value
      ? setIsActive(false)
      : setIsActive(true);
  }, [userBill.value, userPersons.value]);

  return (
    <StyledForm onSubmit={handleTotal}>
      <Title>Welcome to App</Title>
      <Description>Let’s go calculate your tips</Description>
      <Input
        type="number"
        placeholder="Enter bill"
        {...userBill}
        title="Используйте числовой формат"
      />
      <Input
        type="number"
        placeholder="Enter persons"
        {...userPersons}
        title="Используйте числовой формат"
      />
      <CustomSelect onChange={handleTips} value={getValue()} />;
      <Total>Total: {total} $</Total>
      <Button type="submit" disabled={isActive}></Button>
    </StyledForm>
  );
};
