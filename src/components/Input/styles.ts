import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  height: 7rem;
  width: 100%;
  @media (min-width: ${defaultTheme.breakpoints.xs}) {
    max-width: 100%;
  }
  @media (min-width: ${defaultTheme.breakpoints.md}) {
    max-width: 50%;
    margin: 0 auto;
  }
`;

export const InputLabel = styled.label`
  font-weight: bold;
  padding: 0.4rem 0.2rem;
  font-size: 1.2rem;
  color: ${defaultTheme.palette.secundaryGrey};
`;

export const InputField = styled.input<{ inputError: string | undefined }>`
  width: 100%;
  padding: 1rem;
  border-radius: 0.4rem;
  transition: 0.5s;
  background: ${defaultTheme.palette.primaryLight};
  color: ${defaultTheme.palette.secundaryGrey};
  box-sizing: border-box;

  border: 0.1rem solid
    ${({ inputError }) =>
      inputError
        ? defaultTheme.palette.warning
        : defaultTheme.palette.secundaryLight};

  :hover,
  :focus {
    border-color: ${({ inputError }) =>
      inputError
        ? defaultTheme.palette.warning
        : defaultTheme.palette.tertiaryLight};
    background: ${defaultTheme.palette.primaryLight};
  }
`;

export const InputWarning = styled.div`
  padding: 0.2rem 0.4rem;
  color: ${defaultTheme.palette.warning};
  font-size: 1rem;
`;
