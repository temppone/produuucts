import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${defaultTheme.palette.primaryGrey};
  padding: 2rem;
  color: ${defaultTheme.palette.secundaryGrey};
`;

export const FooterCopyright = styled.p`
  font-size: 0.8rem;
  background: ${defaultTheme.palette.primaryGrey};
`;
