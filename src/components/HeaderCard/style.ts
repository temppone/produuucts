import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const HeaderCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${() => defaultTheme.palette.secundaryGrey};
  background-color: transparent;
  padding: 1rem 0;
`;

export const HeaderCardTitle = styled.h3`
  font-size: 1.2rem;
  color: ${() => defaultTheme.palette.secundaryGrey};
`;
