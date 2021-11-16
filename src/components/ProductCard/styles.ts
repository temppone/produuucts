import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const CardProductContainer = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 1px 2px 0px;
  background-color: ${defaultTheme.palette.primaryLight};

  :hover {
    box-shadow: rgba(149, 157, 165, 0.4) 0px 1px 2px 0px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 960px;
    margin: 0 auto;
  }
`;

export const CardProductContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 1rem;
`;

export const CardProductCodeContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  color: ${defaultTheme.palette.secundaryGrey};
  text-align: left;
`;

export const CardProductCode = styled.span`
  font-size: 1.2rem;
`;

export const CardProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 0rem 1rem 1rem;
  color: ${defaultTheme.palette.secundaryGrey};
`;

export const CardProductRight = styled.div`
  display: flex;
  text-align: right;
`;

export const OptionsBalls = styled.div`
  content: "";
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  background-color: ${defaultTheme.palette.tertiaryGrey};
  margin-right: 0.2rem;
`;

export const CardProductName = styled.h3`
  font-size: 1.2rem;
`;

export const CardProductCategory = styled.h3`
  font-size: 1rem;
  color: ${defaultTheme.palette.tertiaryGrey};
`;

export const CardProductProviderName = styled.h4`
  padding: 0.2rem 0.2rem 0.2rem 0;
  font-size: 1rem;
  color: ${defaultTheme.palette.tertiaryGrey};
`;

export const CardProductPrice = styled.span`
  font-size: 1rem;
  padding: 0%.2rem;
`;

export const CardProductDropdown = styled.div`
  background-color: ${defaultTheme.palette.primaryLight};
`;

export const CardProductPriceCode = styled.h4`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  margin-right: 1.2rem;
  color: ${defaultTheme.palette.tertiaryGrey};
`;
