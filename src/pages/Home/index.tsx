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
import {
  EmptyProductsContainer,
  HeaderList,
  HeaderListActions,
  HeaderListCategory,
  HeaderListCode,
  HeaderListName,
  HeaderListPrice,
  HeaderListProvider,
  HomeContainer,
} from "./styles";

const Home = (): JSX.Element => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const { deleteProduct, getProducts } = useProductContext();
  const [productToDelete, setProductToDelete] = useState("");

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

          {products.length > 0 && (
            <HeaderList>
              <HeaderListCode>Código</HeaderListCode>
              <HeaderListName>Nome</HeaderListName>
              <HeaderListCategory>Categoria</HeaderListCategory>
              <HeaderListProvider>Fornecedor</HeaderListProvider>
              <HeaderListPrice>Preço</HeaderListPrice>
              <HeaderListActions>Ações</HeaderListActions>
            </HeaderList>
          )}

          {products.map((item) => (
            <div key={item.id}>
              {openModal && (
                <Modal
                  header="Tem certeza que deseja deletar esse item?"
                  body="Essa ação não pode ser desfeita"
                  buttonName="DELETAR"
                  onClose={() => {
                    setOpenModal(false);
                  }}
                  onClick={async () => {
                    setOpenModal(false);

                   await  deleteProduct(productToDelete);
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
                onDelete={() => {
                  setOpenModal(true);
                  setProductToDelete(item.id);
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
