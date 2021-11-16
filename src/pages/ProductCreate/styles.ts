import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${defaultTheme.palette.primaryGrey};
  border-radius: 0.9rem;
  padding: 4rem 0;
  width: 100%;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  button{
    width: 50%;
  }
`;
