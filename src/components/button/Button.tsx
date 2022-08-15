import { StyledButton, ButtonTips } from "./styles";
import { Pictures } from "../../types";

export const Button = () => {
  return (
    <StyledButton>
      <ButtonTips type="submit">Ohhhoooo {Pictures.Beer}</ButtonTips>
    </StyledButton>
  );
};
