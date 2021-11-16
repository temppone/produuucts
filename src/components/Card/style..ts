import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const CardContainer = styled.div`
  background-color: ${defaultTheme.palette.primaryGrey};
  border-radius: 1rem 1rem 0rem 0rem;
  width: 100%;
  padding: 0.9rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
  height: auto;
  z-index: 99999999;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 599px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 800px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 1024px;
    margin: 5rem auto;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 1280px;
    margin: 5rem auto;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 1380px;
    margin: 5rem auto;
  }
`;
