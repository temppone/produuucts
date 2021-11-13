import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import Button from "../../components/Button";
import { CardContainer } from "../../components/Card/style.";
import HeaderCard from "../../components/HeaderCard";
import ProductCard from "../../components/ProductCard";
import { toMoney } from "../../core/toMoney";
import { HomeContainer } from "./styles";

const Home = (): JSX.Element => {
  const items = [
    {
      id: "A12J2",
      category: "Eletrônico",
      name: "Notebook G40",
      providerName: "Lenovo",
      price: 2010,
    },

    {
      id: "2DK20",
      category: "Eletrônico",
      name: "Celular AJ5",
      providerName: "Samsung",
      price: 1100,
    },

    {
      id: "1229J",
      category: "Eletrônico",
      name: "Tablet JJ22",
      providerName: "Samsung",
      price: 22300,
    },
    {
      id: "12J92",
      category: "Eletrônico",
      name: "iPad Plus 100",
      providerName: "Samsung",
      price: 22300,
    },
    {
      id: "12J92",
      category: "Eletrônico",
      name: "Fita isolante",
      providerName: "Samsung",
      price: 22300,
    },
  ];

  return (
    <HomeContainer>
      <CardContainer>
        <HeaderCard title="Produtos">
          <Link to={"registration"}>
            <Button
              svg={<Plus style={{ marginRight: "0.4rem", width: "0.9rem" }} />}
              name="Adicionar produto"
            />
          </Link>
        </HeaderCard>

        {items.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            category={item.category}
            name={item.name}
            providerName={item.providerName}
            price={toMoney(item.price, "BRL", "pt-BR")}
          />
        ))}
      </CardContainer>
    </HomeContainer>
  );
};

export default Home;
