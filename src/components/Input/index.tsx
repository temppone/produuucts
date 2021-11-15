import React from "react";
import { InputContainer, InputLabel, InputField, InputWarning } from "./styles";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputError: any;
}

const Input = ({ label, inputError, ...props }: IInput): JSX.Element => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputField {...props} inputError={inputError} />
      <InputWarning>{inputError}</InputWarning>
    </InputContainer>
  );
};

export default Input;