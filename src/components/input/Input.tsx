import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { StyledInput } from "./styles";

interface IProps {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  value: string;
}

export const Input = ({
  type,
  placeholder,
  onChange,
  title,
  value,
}: IProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      title={title}
      value={value}
    />
  );
};
