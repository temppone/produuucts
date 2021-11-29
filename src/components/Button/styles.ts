import styled from "styled-components";

export const ButtonContainer = styled.div`
  color: ${({ theme }) => theme.palette.gradientBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ButtonContent = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.primaryBlue};
  cursor: pointer;
  width: 100%;

  :hover {
    color: ${({ theme }) => theme.palette.secundaryBlue};
    svg {
      path {
        fill: ${({ theme }) => theme.palette.secundaryBlue};
      }
    }
  }
`;
