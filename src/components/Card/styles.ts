import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const CardWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${defaultTheme.palette.gradientBlue};
  z-index: 999;
`;

export const CardContainer = styled.div`
  background-color: ${defaultTheme.palette.primaryGrey};
  border-radius: 2rem 2rem 0rem 0rem;
  width: 100%;
  padding: 0.9rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
  height: auto;
`;
