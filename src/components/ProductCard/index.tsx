import React from "react";
import { IProduct } from "../../@types";
import { ReactComponent as PenSvg } from "../../assets/pen.svg";
import { ReactComponent as TrashSvg } from "../../assets/trash.svg";
import { defaultTheme } from "../../styles/theme";
import { maskReais } from "../../utils/maskMoney";
import Dropdown from "../Dropdown";
import {
  CardProductCategory,
  CardProductCode,
  CardProductCodeContainer,
  CardProductContainer,
  CardProductContent,
  CardProductDropdown,
  CardProductName,
  CardProductPrice,
  CardProductPriceCode,
  CardProductProviderName,
  CardProductRight as CardProductRight,
  OptionsBalls,
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
          <CardProductName>Nome: {name}</CardProductName>
          <CardProductCategory>Categoria: {category}</CardProductCategory>
          <CardProductProviderName>Fornecedor: {providerName}</CardProductProviderName>
        </CardProductCodeContainer>
        <CardProductRight>
          <CardProductPriceCode>
            <CardProductCode>#{id}</CardProductCode>
            <CardProductPrice> {maskReais(price.toString())}</CardProductPrice>
          </CardProductPriceCode>
          <CardProductDropdown>
            <Dropdown
              dropdownItems={[
                {
                  svg: <PenSvg width="15" height="15" />,
                  label: "Editar",
                  onClick: onEdit,
                },
                {
                  svg: <TrashSvg width="15" height="15" />,
                  labelColor: defaultTheme.palette.warning,
                  label: "Deletar",
                  onClick: onDelete,
                },
              ]}
            >
              <OptionsBalls />
              <OptionsBalls />
              <OptionsBalls />
            </Dropdown>
          </CardProductDropdown>
        </CardProductRight>
      </CardProductContent>
    </CardProductContainer>
  );
};

export default ProductCard;
