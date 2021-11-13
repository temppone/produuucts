import React from "react";
import {
  CardItemCategory,
  CardItemCode,
  CardItemContainer,
  CardItemContent,
  CardItemName,
  CardItemPrice,
  CardItemProviderName,
} from "./styles";

interface Props {
  id: number;
  category: string;
  name: string;
  providerName: string;
  price: number;
}

const CardItem = ({ id, category, name, providerName, price }: Props) => {
  return (
    <CardItemContainer>
      <CardItemContent>
        <CardItemCode>{id}</CardItemCode>
        <CardItemName>{name}</CardItemName>
        <CardItemCategory>{category}</CardItemCategory>
        <CardItemProviderName>{providerName}</CardItemProviderName>
        <CardItemPrice>{price}</CardItemPrice>
      </CardItemContent>
    </CardItemContainer>
  );
};

export default CardItem;
