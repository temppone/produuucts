import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const HeaderCardContainer = styled.div`
  color: ${(theme) => defaultTheme.palette.primaryDark};
  background-color: transparent;
  padding: 1rem 0;
`;

export const HeaderCardTitle = styled.h3`
  font-size: 1.2rem;
  color: ${(theme) => defaultTheme.palette.primaryDark};
`;
