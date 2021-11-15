import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const ButtonContainer = styled.div`
  color: ${defaultTheme.palette.gradientBlue};
`;

export const ButtonContent = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: transparent;
  color: ${defaultTheme.palette.primaryBlue};
  cursor: pointer;

  :hover {
    color: ${defaultTheme.palette.secundaryBlue};
  }
`;
