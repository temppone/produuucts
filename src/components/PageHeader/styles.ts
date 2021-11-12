import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const PageHeaderContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => defaultTheme.palette.gradientBlue};
  padding: 2rem 1rem 3rem 1rem;
  z-index: -100;
  position: absolute;
`;

export const PageHeaderTitle = styled.h1`
  padding: 1rem1rem;
  font-size: 1rem;
  color: ${({ theme }) => defaultTheme.palette.primaryLight};
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
