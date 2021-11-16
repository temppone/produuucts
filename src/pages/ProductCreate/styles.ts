import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${defaultTheme.palette.primaryGrey};
  border-radius: 0.9rem;
  padding: 2rem 0;
`;

export const FormContainer = styled.form`
  background-color: transparent;
`;
