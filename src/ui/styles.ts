import styled from "styled-components";
import { Color, Media } from "./index";
import circles from "../assets/circles.svg";

export const Wrapper = styled.div`
  background: url(${circles}) no-repeat, ${Color.Gray};
  max-width: 968px;
  margin: 70px auto 0;

  ${Media.Medium} {
    max-width: 744px;
  }

  ${Media.Small} {
    max-width: 410px;
  }
`;
