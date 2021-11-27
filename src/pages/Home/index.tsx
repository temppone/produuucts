import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { IProduct } from "../../@types";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import Button from "../../components/Button";
import { CardContainer, CardWrapper } from "../../components/Card/styles";
import Head from "../../components/Head";
import HeaderCard from "../../components/HeaderCard";
import HeaderPage from "../../components/HeaderPage";
import Modal from "../../components/Modal";
import ProductCard from "../../components/ProductCard";
import { useProductContext } from "../../contexts/ProductContext";
import { EmptyProductsContainer, HomeContainer } from "./styles";

const Home = (): JSX.Element => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const { deleteProduct, getProducts } = useProductContext();

  useEffect(() => {
    getProducts().then(setProducts);
  }, [products]);

  return (
    <HomeContainer>
      <Head title="Home" description="Essa é a tela inícial do Produuucts" />
      <HeaderPage headerTitle="Produuucts" />
      <CardWrapper>
        <CardContainer>
          <HeaderCard title="Produtos">
            <Link to={"product/create"}>
              <Button
                svg={
                  <Plus style={{ marginRight: "0.4rem", width: "0.9rem" }} />
                }
                name="Adicionar produto"
              />
            </Link>
          </HeaderCard>

          {products.map((item) => (
            <div key={item.id}>
              {openModal && (
                <Modal
                  header="Tem certeza que deseja deletar esse item?"
                  body="Essa opção não pode ser desfeita"
                  buttonName="DELETAR"
                  onClose={() => {
                    setOpenModal(false);
                  }}
                  onClick={async () => {
                    setOpenModal(false);

                    await deleteProduct(item.id);
                    toast.success("Produto deletado com sucesso!");
                    await getProducts();
                    return;
                  }}
                />
              )}

              <ProductCard
                id={item.id}
                category={item.category}
                name={item.name}
                providerName={item.providerName}
                price={item.price}
                onEdit={() => navigate(`/product/edit/${item.id}`)}
                onDelete={async () => {
                  setOpenModal(true);
                }}
              />
            </div>
          ))}
          {!products.length && (
            <EmptyProductsContainer>
              Não há produto cadastrado.
            </EmptyProductsContainer>
          )}
        </CardContainer>
      </CardWrapper>
    </HomeContainer>
  );
};

export default Home;
