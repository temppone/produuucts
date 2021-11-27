import React from "react";
import { IInputListItem } from "../../@types";
import {
  InputContainer,
  InputField,
  InputLabel,
  InputList,
  InputListItem,
  InputWarning,
} from "./styles";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputError: string | undefined;
  inputList?: IInputListItem[];
}

const Input = ({
  label,
  inputError,
  inputList,
  ...props
}: IInput): JSX.Element => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputField {...props} inputError={inputError} />
      <InputWarning>{inputError}</InputWarning>
      <InputList>
        {inputList &&
          inputList.map((item, index) => (
            <InputListItem key={index}>{item.name}</InputListItem>
          ))}
      </InputList>
    </InputContainer>
  );
};

export default Input;
