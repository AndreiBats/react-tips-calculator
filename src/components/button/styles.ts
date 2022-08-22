import styled from "styled-components";
import { Color, Media } from "../../ui/index";

const StyledButton = styled.button`
  width: 100%;
  text-align: center;
  background-color: ${Color.Green};
  padding: 13px 140px;
  border: none;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: ${Color.White};
  margin-top: 20px;

  ${Media.Medium} {
    padding: 13px 50px;
  }

  &:disabled {
    background: ${Color.Green};
    opacity: 0.5;
  }

  transition: all 0.5s;
`;

export { StyledButton };
