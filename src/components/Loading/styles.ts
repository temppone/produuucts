import styled from "styled-components";
export const LoadingContainer = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingWrapper = styled.div`
  position: relative;
  width: 256px;
  height: 4px;
  background: ${({ theme }) => theme.palette.tertiaryLight};
  border-radius: 1rem;
`;

export const LoadingContent = styled.div`
  position: absolute;
  width: 0px;
  height: 4px;
  left: 0px;
  background: ${({ theme }) => theme.palette.primaryBlue};
  animation: 2s infinite linear loadingAnimation;

  @keyframes loadingAnimation {
    0% {
      left: 0px;
      width: 0px;
    }

    25% {
      left: 0px;
      width: 100px;
    }

    70% {
      left: 200px;
      width: 56px;
    }

    90% {
      left: 256px;
      width: 0px;
    }
  }
`;
