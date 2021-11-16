import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const HomeContainer = styled.div`
  background-color: ${defaultTheme.palette.primaryGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  border-radius: 1rem;
  text-align: center;
`;

export const EmptyProductsContainer = styled.div`
  background-color: ${defaultTheme.palette.primaryGrey};
  color: ${defaultTheme.palette.secundaryGrey};
  padding: 2rem;
  font-size: 1.4rem;
  height: 100vw;
`;
