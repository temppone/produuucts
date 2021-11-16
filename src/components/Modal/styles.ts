import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  color: ${defaultTheme.palette.secundaryGrey};
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  float: right;
`;

export const ModalContent = styled.div`
  width: 70%;
  background-color: ${defaultTheme.palette.primaryLight};
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  color: ${defaultTheme.palette.secundaryGrey};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 20%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 25%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 27%;
  }
`;

export const ModalHeader = styled.div`
  font-size: 1.2rem;
  padding: 1rem 1rem 0 1rem;
  color: ${defaultTheme.palette.secundaryGrey};
`;

export const ModalBody = styled.div`
  padding: 1rem;
  color: ${defaultTheme.palette.tertiaryGrey};
`;
