import { useState } from "react";
import Select from "react-select";
import { IOption } from "../../types";

export const options: IOption[] = [
  { value: "10", label: "10%" },
  { value: "15", label: "15%" },
  { value: "20", label: "20%" },
];

interface IProps {
  onChange: (event: any) => void;
  value: IOption | undefined | string;
}

export const CustomSelect = ({ onChange, value }: IProps) => {
  return <Select options={options} onChange={onChange} value={value} />;
};
