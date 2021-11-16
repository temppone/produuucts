import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const NotFoundContainer = styled.div`
  background-color: ${defaultTheme.palette.primaryGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
`;
