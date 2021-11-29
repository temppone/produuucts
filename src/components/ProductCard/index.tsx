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
  CardProductContainer,
  CardProductContent,
  CardProductDescriptionContainer,
  CardProductDropdown,
  CardProductItem,
  CardProductItemDesktop,
  CardProductItemMobile,
  CardProductLabel,
  CardProductName,
  CardProductPrice,
  CardProductProviderName,
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
        <CardProductDescriptionContainer>
          <CardProductItem>
            <CardProductCode>#{id.toLocaleUpperCase()}</CardProductCode>
            <CardProductItemMobile>
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
            </CardProductItemMobile>
          </CardProductItem>
          <CardProductItem>
            <CardProductLabel>Nome</CardProductLabel>
            <CardProductName>{name}</CardProductName>
          </CardProductItem>
          <CardProductItem>
            <CardProductLabel>Categoria</CardProductLabel>
            <CardProductCategory>{category}</CardProductCategory>
          </CardProductItem>
          <CardProductItem>
            <CardProductLabel>Fornecedor</CardProductLabel>
            <CardProductProviderName>{providerName}</CardProductProviderName>
          </CardProductItem>
          <CardProductItem>
            <CardProductLabel>Valor</CardProductLabel>
            <CardProductPrice> {maskReais(price.toString())}</CardProductPrice>
          </CardProductItem>

          <CardProductItemDesktop>
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
          </CardProductItemDesktop>
        </CardProductDescriptionContainer>
      </CardProductContent>
    </CardProductContainer>
  );
};

export default ProductCard;
