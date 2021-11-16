import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IProduct } from "../../@types";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import Button from "../../components/Button";
import { CardContainer } from "../../components/Card/style.";
import HeaderCard from "../../components/HeaderCard";
import HeaderPage from "../../components/HeaderPage";
import ProductCard from "../../components/ProductCard";
import { toMoney } from "../../core/toMoney";
import { deleteProduct, getProducts } from "../../services/productService";
import { EmptyProductsContainer, HomeContainer } from "./styles";

const Home = (): JSX.Element => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then(setProducts);
  }, [products]);

  return (
    <HomeContainer>
      <HeaderPage headerTitle="Olá, você está na Produuucts" />

      <CardContainer>
        <HeaderCard title="Produtos">
          <Link to={"product/create"}>
            <Button
              svg={<Plus style={{ marginRight: "0.4rem", width: "0.9rem" }} />}
              name="Adicionar produto"
            />
          </Link>
        </HeaderCard>

        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            category={item.category}
            name={item.name}
            providerName={item.providerName}
            price={toMoney(Number(item.price), "BRL", "pt-BR")}
            onEdit={() => navigate(`/product/edit/${item.id}`)}
            onDelete={async () => {
              await deleteProduct(item.id);
              await getProducts();
            }}
          />
        ))}
      </CardContainer>

      {products.length === 0 && (
        <EmptyProductsContainer>
          Não há nenhum produto cadastrado ainda.
        </EmptyProductsContainer>
      )}
    </HomeContainer>
  );
};

export default Home;
