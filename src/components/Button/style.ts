import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const ButtonContainer = styled.div`
  width: 100%;
  color: ${(theme) => defaultTheme.palette.gradientBlue};
`;

export const ButtonContent = styled.button`
  padding: 1rem;

  :hover {
    background-color: ${(theme) => defaultTheme.palette.gradientSecundaryBlue};
  }
`;
