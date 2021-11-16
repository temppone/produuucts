import React, { ReactNode } from "react";
import { HeaderCardContainer, HeaderCardTitle } from "./styles";

interface IHeaderCard {
  title: string;
  children?: ReactNode;
}

const HeaderCard = ({ title, children }: IHeaderCard): JSX.Element => {
  return (
    <HeaderCardContainer>
      <HeaderCardTitle>{title}</HeaderCardTitle>
      {children}
    </HeaderCardContainer>
  );
};

export default HeaderCard;
