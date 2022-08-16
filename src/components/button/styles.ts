import styled from "styled-components";
import { Colors } from "../../types";

const StyledButton = styled.button`
  width: 100%;
  text-align: center;
  background-color: ${Colors.Green};
  padding: 13px 140px;
  border: none;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: ${Colors.White};
  margin-top: 45px;

  &:disabled {
    background: ${Colors.Green};
    opacity: 0.5;
  }

  transition: all 0.5s;
`;

export { StyledButton };
