import styled from "styled-components";

export const CardItemContainer = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 1px 2px 0px;

  :hover {
    box-shadow: rgba(149, 157, 165, 0.4) 0px 1px 2px 0px;

  }
`;

export const CardItemContent = styled.div`
  padding: 1rem;
`;

export const CardItemName = styled.h3`
  font-size: 1rem;
  font-weight: bold;
`;

export const CardItemCode = styled.h3`
  font-size: 1rem;
  font-weight: bold;
`;

export const CardItemCategory = styled.h3`
  font-size: 1rem;
  font-weight: bold;
`;

export const CardItemProviderName = styled.h3`
  font-size: 1rem;
  font-weight: bold;
`;

export const CardItemPrice = styled.h3`
  font-size: 1rem;
  font-weight: bold;
`;
