import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const HeaderCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${defaultTheme.palette.secundaryGrey};
  background-color: transparent;
  padding: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 1024px;
    margin: 0 auto;
  }
`;

export const HeaderCardTitle = styled.h3`
  font-size: 1.2rem;
  color: ${defaultTheme.palette.secundaryGrey};
`;
