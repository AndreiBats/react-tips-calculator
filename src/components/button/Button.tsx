import { StyledButton } from "./styles";

interface IProps {
  type: "button" | "submit" | "reset" | undefined;
  disabled: boolean;
}

export const Button = ({ disabled, type }: IProps) => {
  return (
    <StyledButton disabled={disabled} type={type}>
      Ohhhoooo 🍻
    </StyledButton>
  );
};
