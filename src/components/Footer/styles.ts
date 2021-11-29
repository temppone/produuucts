import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.palette.primaryGrey};
  padding: 2rem;
  color: ${({ theme }) => theme.palette.secundaryGrey};
`;

export const FooterCopyright = styled.p`
  font-size: 0.8rem;
  background: ${({ theme }) => theme.palette.primaryGrey};
`;
