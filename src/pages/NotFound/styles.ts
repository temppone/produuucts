import styled from "styled-components";

export const NotFoundContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.primaryGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
`;
