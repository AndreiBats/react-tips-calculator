import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { StyledInput } from "./styles";

interface IProps {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  min: string;
  step: string;
}

export const Input = ({
  type,
  placeholder,
  onChange,
  title,
  min,
  step,
}: IProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      title={title}
      min={min}
      step={step}
    />
  );
};
