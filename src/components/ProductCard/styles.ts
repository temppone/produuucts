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
`;

export const CardProductContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 1rem;
`;

export const CardProductCodeContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${() => defaultTheme.palette.secundaryGrey};
`;

export const CardProductCode = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const CardProductCategory = styled.h3`
  font-size: 1rem;
  font-weight: bold;
`;

export const CardProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: ${() => defaultTheme.palette.secundaryGrey};
`;

export const CardProductName = styled.h3`
  font-size: 1.1rem;
`;

export const CardProductSubContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: normal;
  color: ${() => defaultTheme.palette.tertiaryGrey};
`;

export const CardProductProviderName = styled.h4`
  padding: 0.2rem 0.2rem 0.2rem 0;
  font-size: 1rem;
`;

export const CardProductPrice = styled.h4`
  font-size: 1rem;
  padding: 0%.2rem;
`;
