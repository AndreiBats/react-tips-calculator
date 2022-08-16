import React from "react";
import { StyledInput } from "./styles";

interface IProps {
  type: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  title: string;
}

export const Input = ({ placeholder, onChange, title, type }: IProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      title={title}
    />
  );
};
