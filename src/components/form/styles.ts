import styled from "styled-components";
import { Color, Media } from "../../types";

const StyledForm = styled.form`
  text-align: center;
  max-width: 456px;
  margin: 0 auto;
  padding: 100px 0;

  ${Media.Medium} {
    max-width: 320px;
  }

  ${Media.Small} {
    padding: 200px 0 100px;
  }
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 58px;
  color: ${Color.Black};
  margin-bottom: 45px;

  ${Media.Medium} {
    font-size: 40px;
    line-height: 58px;
  }
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: rgba(117, 108, 108, 0.57);
  margin-bottom: 45px;

  ${Media.Medium} {
    font-size: 24px;
    line-height: 28px;
  }
`;

const Total = styled.span`
  font-size: 24px;
  line-height: 35px;
  color: ${Color.Black};
  margin-bottom: 45px;
`;

export { StyledForm, Title, Description, Total };
