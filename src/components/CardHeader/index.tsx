import React from "react";
import { HeaderCardContainer, HeaderCardTitle } from "./style";

interface ICardHeader {
  title: string;
}

const CardHeader = ({ title }: ICardHeader) => {
  return (
    <HeaderCardContainer>
      <HeaderCardTitle>{title}</HeaderCardTitle>
    </HeaderCardContainer>
  );
};

export default CardHeader;
