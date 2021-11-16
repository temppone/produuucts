import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const HeaderPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  background: ${defaultTheme.palette.gradientBlue};
  position: absolute;
  padding: 1rem 1rem 3em 1rem;
  top: 0;
`;

export const HeaderPageTitle = styled.h1`
  padding: 1rem;
  font-size: 1.2rem;
  color: ${defaultTheme.palette.primaryLight};
  font-weight: bold;
`;
