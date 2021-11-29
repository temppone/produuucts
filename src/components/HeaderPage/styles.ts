import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const HeaderPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: ${defaultTheme.palette.gradientBlue};
  position: absolute;
  padding: 1rem 1rem 3em 1rem;
  top: 0;
  width: 100%;
`;

export const HeaderPageContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 1024px;
    margin: 0 auto;
  }
`;

export const HeaderTitleContainer = styled.div``;

export const HeaderButtonContainer = styled.div``;

export const HeaderPageTitle = styled.h1`
  padding: 1rem;
  font-size: 1.2rem;
  color: ${defaultTheme.palette.primaryLight};
  font-weight: bold;
`;
