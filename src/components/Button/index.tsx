import React from "react";
import { ReactElement } from "react";
import { ButtonContainer, ButtonContent } from "./style";

interface Props {
  name: string;
  svg?: ReactElement;
}

const Button = ({ name, svg }: Props): JSX.Element => {
  return (
    <ButtonContainer>
      <ButtonContent>
        {svg}
        {name}
      </ButtonContent>
    </ButtonContainer>
  );
};

export default Button;
