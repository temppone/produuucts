import styled from "styled-components";

export const CardWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.gradientBlue};
  z-index: 999;
`;

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.primaryGrey};
  border-radius: 2rem 2rem 0rem 0rem;
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 5rem;
  height: auto;
`;
