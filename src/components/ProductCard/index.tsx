import React from "react";
import {
  CardProductCategory,
  CardProductCode,
  CardProductCodeContainer,
  CardProductContainer,
  CardProductContent,
  CardProductDescriptionContainer,
  CardProductName,
  CardProductPrice,
  CardProductProviderName,
  CardProductSubContainer,
} from "./styles";

interface Props {
  id: string;
  category: string;
  name: string;
  providerName: string;
  price: string;
}

const ProductCard = ({
  id,
  category,
  name,
  providerName,
  price,
}: Props): JSX.Element => {
  return (
    <CardProductContainer>
      <CardProductContent>
        <CardProductCodeContainer>
          <CardProductCode>{id}</CardProductCode>
          <CardProductCategory>{category}</CardProductCategory>
        </CardProductCodeContainer>
        <CardProductDescriptionContainer>
          <CardProductName>{name}</CardProductName>
          <CardProductSubContainer>
            <CardProductProviderName>{providerName}</CardProductProviderName>

            <CardProductPrice>- {price}</CardProductPrice>
          </CardProductSubContainer>
        </CardProductDescriptionContainer>
      </CardProductContent>
    </CardProductContainer>
  );
};

export default ProductCard;
