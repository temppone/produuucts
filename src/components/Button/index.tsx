import React from "react";
import { ReactElement } from "react";
import { ButtonContainer, ButtonContent } from "./style";

interface Props {
  name: string;
  svg?: ReactElement;
  background?: string;
  color?: string;
  borderRadius?: string;
  width?: string;
  padding?: string;
  fontSize?: string;
}

const Button = ({
  name,
  svg,
  background,
  color,
  borderRadius,
  width,
  padding,
  fontSize,
}: Props): JSX.Element => {
  return (
    <ButtonContainer>
      <ButtonContent
        type="submit"
        style={{ background, color, borderRadius, width, padding, fontSize }}
      >
        {svg}
        {name}
      </ButtonContent>
    </ButtonContainer>
  );
};

export default Button;
