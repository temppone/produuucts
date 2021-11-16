import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const HomeContainer = styled.div`
  background-color: ${defaultTheme.palette.primaryGrey};
  border-radius: 0.9rem;
`;

export const EmptyProductsContainer = styled.div`
  background-color: ${defaultTheme.palette.primaryGrey};

  padding: 2rem;
  font-size: 1.4rem;
  height: 100vw;
`;
