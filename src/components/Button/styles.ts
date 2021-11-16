import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const ButtonContainer = styled.div`
  color: ${defaultTheme.palette.gradientBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  width: 100%;

  :hover {
    color: ${defaultTheme.palette.secundaryBlue};
    svg {
      path {
        fill: ${defaultTheme.palette.secundaryBlue};
      }
    }
  }
`;
