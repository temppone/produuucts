import styled from "styled-components";

export const CardProductContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.palette.primaryLight};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 1024px;
    margin: 1rem auto;

    :hover {
      background-color: ${({ theme }) => theme.palette.secundaryLight};
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0 auto;
    border-bottom: 1px solid ${({ theme }) => theme.palette.primaryGrey};
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
  color: ${({ theme }) => theme.palette.secundaryGrey};
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
    background-color: ${({ theme }) => theme.palette.secundaryLight};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
    justify-content: center;
    align-items: center;
    :nth-child(2n + 1) {
      background-color: transparent;
    }
  }
`;

export const CardProductLabel = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.palette.tertiaryGrey};

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
  background-color: ${({ theme }) => theme.palette.tertiaryGrey};
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
  background-color: transparent;
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
