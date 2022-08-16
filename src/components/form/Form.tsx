import { useEffect, useState } from "react";
import { SingleValue } from "react-select";
import { useInput } from "../../hooks/useInput";
import { IOption } from "../../types";
import { Button } from "../button/Button";
import { CustomSelect, options } from "../customselect/CustomSelect";
import { Input } from "../input/Input";
import { Description, StyledForm, Title, Total } from "./styles";

export const Form = () => {
  const userBill = useInput("");
  const userPersons = useInput("");

  const [tips, setTips] = useState<string>(options[0].value);

  const getValue = () => {
    return tips ? options.find((option) => option.value === tips) : "";
  };

  const handleTips = (event: SingleValue<string | IOption>): void => {
    setTips((event as IOption).value);
  };
  const [total, setTotal] = useState<string>("0.00");

  const handleChangeTotal = (
    event: React.SyntheticEvent<HTMLFormElement>
  ): void => {
    const totalValue = (
      (+userBill.value / +userPersons.value / 100) *
      (+tips + 100)
    ).toFixed(2);

    setTotal(totalValue);
    event.preventDefault();
  };

  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    userBill.value && userPersons.value
      ? setIsActive(false)
      : setIsActive(true);
  }, [userBill.value, userPersons.value]);

  return (
    <StyledForm onSubmit={handleChangeTotal}>
      <Title>Welcome to App</Title>
      <Description>Let’s go calculate your tips</Description>
      <Input
        type="text"
        placeholder="Enter bill"
        {...userBill}
        title="Используйте числовой формат"
      />
      <Input
        type="text"
        placeholder="Enter persons"
        {...userPersons}
        title="Используйте числовой формат"
      />
      <CustomSelect onChange={handleTips} value={getValue()} />
      <Total>Total: {total} $</Total>
      <Button type="submit" disabled={isActive}></Button>
    </StyledForm>
  );
};
