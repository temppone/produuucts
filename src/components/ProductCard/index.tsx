import React from "react";
import { IProduct } from "../../@types";
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
  OptionsBalls
} from "./styles";

type IProductCardProps = {
  onEdit: () => void;
  onDelete: () => void;
};

const ProductCard = ({
  id,
  category,
  name,
  providerName,
  price,
  onEdit,
  onDelete,
}: IProduct & IProductCardProps): JSX.Element => {

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
            <Dropdown
              dropdownItems={[
                {
                  label: "Edit",
                  onClick: onEdit,
                },
                {
                  label: "Deletar",
                  onClick: onDelete,
                },
              ]}
            >
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
