import { StyledButton, ButtonTips } from "./styles";
import { Pictures } from "../../types";
import { useState } from "react";

export const Button = () => {
  const [total, setTotal] = useState(0);

  const handleTotal = () => {};

  return (
    <StyledButton>
      <ButtonTips type="button" onClick={handleTotal}>
        Ohhhoooo {Pictures.Beer}
      </ButtonTips>
    </StyledButton>
  );
};
