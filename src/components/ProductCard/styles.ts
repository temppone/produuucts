import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const CardProductContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  background-color: ${defaultTheme.palette.primaryLight};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 1024px;
    margin: 1rem auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      margin: 0 auto;
      border-bottom: 1px solid ${defaultTheme.palette.primaryGrey};
    }
  }
`;

export const CardProductContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardProductCode = styled.span`
  font-size: 1.4rem;
  font-weight: bold;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 4rem;
  }
`;

export const CardProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${defaultTheme.palette.secundaryGrey};
  padding: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const CardProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0.4rem;
  align-items: center;
  :nth-child(2n + 1) {
    background-color: ${defaultTheme.palette.secundaryLight};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
    justify-content: center;
    align-items: center;
    :nth-child(2n + 1) {
      background-color: ${defaultTheme.palette.primaryLight};
    }
  }
`;

export const CardProductLabel = styled.span`
  font-size: 1.2rem;
  color: ${defaultTheme.palette.tertiaryGrey};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
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

export const CardProductName = styled.span`
  font-size: 1rem;
  font-weight: bold;
  text-align: right;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
    width: 20rem;
  }
`;

export const CardProductCategory = styled.span`
  font-size: 1rem;
  font-weight: bold;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
    width: 6rem;
  }
`;

export const CardProductProviderName = styled.span`
  font-size: 1rem;
  font-weight: bold;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      text-align: left;
      width: 6rem;
  }
`;

export const CardProductPrice = styled.span`
  font-size: 1rem;
  font-weight: bold;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
    width: 6rem;
  }
`;

export const CardProductDropdown = styled.div`
  background-color: ${defaultTheme.palette.primaryLight};
`;

export const CardProductItemDesktop = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export const CardProductItemMobile = styled.div`
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
