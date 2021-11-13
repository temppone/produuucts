import React from "react";
import { CardContainer } from "../../components/Card/style.";
import CardHeader from "../../components/CardHeader";
import CardItem from "../../components/CardItem";

interface Props {}

const Home = (props: Props) => {
  const items = [
    {
      id: 1,
      category: "Eletrônico",
      name: "Notebook",
      providerName: "Lenovo",
      price: 2010,
    },

    {
      id: 2,
      category: "Eletrônico",
      name: "Celular",
      providerName: "Samsung",
      price: 1100,
    },

    {
      id: 3,
      category: "Eletrônico",
      name: "Tablet",
      providerName: "Samsung",
      price: 22300,
    },
  ];

  return (
    <CardContainer>
      <CardHeader title="Produtos" />
      {items.map((item) => (
        <CardItem
          key={item.id}
          id={item.id}
          category={item.category}
          name={item.name}
          providerName={item.providerName}
          price={item.price}
        />
      ))}
    </CardContainer>
  );
};

export default Home;
