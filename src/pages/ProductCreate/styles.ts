import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const RegistrationContainer = styled.div`
  background-color: ${defaultTheme.palette.secundaryLight};
  border-radius: 0.9rem;
`;

export const ValueCodeContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

export const FormContainer = styled.form`
  background-color: transparent;
`;
