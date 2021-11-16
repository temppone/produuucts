import React from "react";
import { ReactElement } from "react";
import { ButtonContainer, ButtonContent } from "./styles";

interface Props {
  name?: string;
  svg?: ReactElement;
  background?: string;
  color?: string;
  borderRadius?: string;
  width?: string;
  padding?: string;
  fontSize?: string;
  onClick?: () => void;
  disabled?: boolean;
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
  onClick,
  disabled,
}: Props): JSX.Element => {
  return (
    <ButtonContainer>
      <ButtonContent
        style={{ background, color, borderRadius, width, padding, fontSize }}
        onClick={onClick}
        disabled={disabled}
      >
        {svg}
        <span>{name}</span>
      </ButtonContent>
    </ButtonContainer>
  );
};

export default Button;
