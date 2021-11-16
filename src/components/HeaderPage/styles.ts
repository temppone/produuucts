import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const HeaderPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;
  background: ${defaultTheme.palette.gradientBlue};
  position: absolute;
  padding: 1rem;
  top: 0;
`;

export const HeaderPageTitle = styled.h1`
  padding: 1rem;
  font-size: 1.2rem;
  color: ${defaultTheme.palette.primaryLight};
  font-weight: bold;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 599px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 800px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 1024px;
    margin: 0 auto;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 1280px;
    margin: 0 auto;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 1380px;
    margin: 0 auto;
  }
`;
