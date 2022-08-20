import Select, { SingleValue } from "react-select";
import { IOption } from "../../types";
import { CustomStyles } from "./styles";

export const options: IOption[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

interface IProps {
  tips: number;
  setTips: (value: number) => void;
}

export const CustomSelect = ({ tips, setTips }: IProps) => {
  const getValue = () => {
    return tips ? options.find((option) => option.value === tips) : options[0];
  };

  const handleTips = (option: SingleValue<IOption>): void => {
    if (option) setTips(option.value);
  };

  return (
    <Select
      options={options}
      onChange={handleTips}
      value={getValue()}
      styles={CustomStyles}
    />
  );
};
