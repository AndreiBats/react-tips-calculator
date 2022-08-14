import { ChangeEvent, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { StyledInput, BillInput, PersonInput } from "./styles";

export const Input = () => {
  const bill = useInput();
  const person = useInput();

  // const [bill, setBill] = useState<string>("");
  // const [person, setPerson] = useState<string>("");

  // const handleInputBill = (event: ChangeEvent<HTMLInputElement>) => {
  //   setBill(event.target.value);
  //   console.log(event.target.value);
  // };
  // const handleInputPerson = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPerson(event.target.value);
  //   console.log(event.target.value);
  // };

  return (
    <StyledInput>
      <BillInput type="text" placeholder="Enter bill" {...bill} />
      <PersonInput type="text" placeholder="Enter persons" {...person} />
    </StyledInput>
  );
};
