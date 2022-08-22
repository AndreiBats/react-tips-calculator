import { StyledButton } from "./styles";

interface IProps {
  type: "button" | "submit" | "reset";
  isDisabled: boolean;
}

export const Button = ({ isDisabled: isActive, type }: IProps) => {
  return (
    <StyledButton disabled={isActive} type={type}>
      Ohhhoooo 🍻
    </StyledButton>
  );
};
