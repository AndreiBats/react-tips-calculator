import { StyledButton, ButtonTips } from "./styles";

export const Button = () => {
  const buttonText = "Ohhhoooo";

  return (
    <StyledButton>
      <ButtonTips>{buttonText}</ButtonTips>
    </StyledButton>
  );
};
