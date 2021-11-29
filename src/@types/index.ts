export interface IProduct {
  id: string;
  category: string;
  name: string;
  providerName: string;
  price: number;
}

export type IInputListItem = {
  id: string;
  name: string;
};

export interface ICategory {
  id: string;
  name: string;
}
