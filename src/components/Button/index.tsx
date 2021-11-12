import React from "react";
import { ButtonContainer, ButtonContent } from "./style";

interface Props {
  ButtonName: string;
}

const Button = ({ ButtonName }: Props) => {
  return (
    <ButtonContainer>
      <ButtonContent>{ButtonName}</ButtonContent>
    </ButtonContainer>
  );
};

export default Button;
