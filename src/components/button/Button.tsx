import { StyledButton, ButtonTips } from "./styles";
import { Pictures } from "../../types";
import { useState } from "react";

export const Button = () => {
  return (
    <StyledButton>
      <ButtonTips type="submit">Ohhhoooo {Pictures.Beer}</ButtonTips>
    </StyledButton>
  );
};
