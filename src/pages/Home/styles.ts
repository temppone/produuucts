import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.primaryGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 1rem;
  text-align: center;
  width: 100%;
`;

export const HeaderList = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1024px;
    margin-top: 1rem;
    margin: 0 auto;
    padding: 1rem;
    background-color: ${({ theme }) => theme.palette.primaryLight};
    color: ${({ theme }) => theme.palette.tertiaryGrey};
    border-radius: 1rem 1rem 0 0;
    border-bottom: 1px solid ${({ theme }) => theme.palette.primaryGrey};
  }
`;

export const HeaderListItem = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const EmptyProductsContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.primaryGrey};
  color: ${({ theme }) => theme.palette.secundaryGrey};
  padding: 2rem;
  font-size: 1.4rem;
`;

export const HeaderListCode = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
    width: 4rem;
  }
`;

export const HeaderListName = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
    width: 20rem;
  }
`;

export const HeaderListCategory = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
    width: 6rem;
  }
`;

export const HeaderListProvider = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
    width: 6rem;
  }
`;

export const HeaderListPrice = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
    width: 5rem;
  }
`;

export const HeaderListActions = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
  }
`;
