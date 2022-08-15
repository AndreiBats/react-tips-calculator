import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import { Button } from "../button/Button";
import { CustomSelect, options } from "../customselect/CustomSelect";
import { Input } from "../input/Input";
import { Description, StyledForm, Title, Total } from "./styles";

export const Form = () => {
  const userBill = useInput("");
  const userPersons = useInput("");

  const [currentValue, setCurrentValue] = useState("10");
  const [value, setValue] = useState(0);

  const handleChangeValue = (event: any): void => {
    // TODO: fix type
    const percent = +currentValue + 100;
    const total = (+userBill.value / +userPersons.value / 100) * percent;

    setValue(total);

    event.preventDefault();
  };

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
    <StyledForm onSubmit={handleChangeValue}>
      <Title>Welcome to App</Title>
      <Description>Let’s go calculate your tips</Description>
      <Input
        type={""}
        placeholder="Enter bill"
        {...userBill}
        title="Используйте числовой формат"
      />
      <Input
        type={""}
        placeholder="Enter persons"
        {...userPersons}
        title="Используйте числовой формат"
      />
      <CustomSelect onChange={handleChange} value={getValue()} />
      <Total>Total: {value} $</Total>
      <Button />
    </StyledForm>
  );
};
