import React from "react";
import { CardItemContainer, CardItemContent, CardItemTitle } from "./styles";

interface Props {
  title: string;
}

const CardItem = ({ title }: Props) => {
  return (
    <CardItemContainer>
      <CardItemContent>
        <CardItemTitle>{title}</CardItemTitle>
      </CardItemContent>
    </CardItemContainer>
  );
};

export default CardItem;
