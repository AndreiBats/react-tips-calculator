import styled from "styled-components";
import { Colors } from "../../types";

const StyledButton = styled.div``;

const ButtonTips = styled.button`
  text-align: center;
  background-color: ${Colors.Green};
  padding: 13px 140px;
  border: none;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: ${Colors.White};
  margin-top: 45px;
`;

export { StyledButton, ButtonTips };
