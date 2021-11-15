import React from "react";
import Dropdown from "../Dropdown";
import {
  CardHeader,
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
  OptionsBalls,
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
          <CardHeader>
            <CardProductName>{name}</CardProductName>
            <Dropdown>
              <OptionsBalls />
              <OptionsBalls />
              <OptionsBalls />
            </Dropdown>
          </CardHeader>

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
