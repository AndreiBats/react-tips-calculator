import styled from "styled-components";
import { Colors } from "../../types";

const StyledForm = styled.form`
  background-color: ${Colors.Gray};
  max-width: 1512px;
  text-align: center;
  padding: 203px 528px 138px;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 58px;
  color: ${Colors.Black};
  margin-bottom: 45px;
`;
const Description = styled.p`
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: rgba(117, 108, 108, 0.57);
  margin-bottom: 45px;
`;
const Total = styled.span`
  font-size: 24px;
  line-height: 35px;
  color: ${Colors.Black};
  margin-bottom: 45px;
`;

export { StyledForm, Title, Description, Total };
