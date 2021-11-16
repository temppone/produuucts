import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { ptShort } from "yup-locale-pt";
import Button from "../../components/Button";
import { CardContainer } from "../../components/Card/styles";
import HeaderPage from "../../components/HeaderPage";
import Input from "../../components/Input";
import { useProductContext } from "../../contexts/ProductContext";
import { maskReais, unMaskReais } from "../../utils/maskMoney";
import { numbersAndLetters } from "../../utils/regex";
import { defaultTheme } from "../../styles/theme";
import { FormContainer, RegistrationContainer } from "./styles";
interface IFormData {
  name: string;
  providerName: string;
  price: string;
  id: string;
  category: string;
}

type TransltedErrorsType = {
  [key: string]: string;
};

const Registration = (): JSX.Element => {
  const [disabledButton, setDisabledButton] = useState(false);
  const { id: idParam } = useParams();
  const navigation = useNavigate();
  const { updateProduct, getProduct, addProduct } = useProductContext();

  const translatedErrors: TransltedErrorsType = {
    "0": "Esse código já existe.",
  };

  yup.setLocale(ptShort);
  const schema: yup.SchemaOf<IFormData> = yup.object({
    id: yup
      .string()
      .length(6, "O id deve ter 6 caracteres.")
      .required()
      .matches(numbersAndLetters, "Digite letras e números."),
    providerName: yup.string().required(),
    category: yup.string().required(),
    name: yup.string().required(),
    price: yup.string().typeError("O valor deve ser um número.").required(),
  });

  const {
    control,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver<yup.AnyObjectSchema>(schema),
  });

  useEffect(() => {
    if (idParam) {
      getProduct(idParam).then((product) => {
        setValue("id", product.id);
        setValue("providerName", product.providerName);
        setValue("category", product.category);
        setValue("name", product.name);
        setValue("price", product.price.toString());
      });
    }
  }, [idParam]);

  const submitProduct: SubmitHandler<IFormData> = (data: IFormData) => {
    if (idParam) {
      updateProduct({
        name: data.name,
        providerName: data.providerName,
        price: Number(unMaskReais(data.price)),
        category: data.category,
        id: data.id,
      })
        .then(() => {
          toast.success("Produto atualizado!");
          navigation("/");
        })
        .catch((err) => {
          console.log(err);
          setError("id", {
            type: "manual",
            message: translatedErrors[err.code] || "Erro",
          });
          return err.message;
        });

      return;
    }

    toast.promise(
      addProduct({
        name: data.name,
        providerName: data.providerName,
        price: Number(unMaskReais(data.price)),
        category: data.category,
        id: data.id,
      }),
      {
        loading: "Cadastrando...",
        success: () => {
          setDisabledButton(true);
          navigation("/");
          return "Cadastrado!";
        },
        error: (err) => {
          setDisabledButton(false);

          setError("id", {
            type: "manual",
            message: translatedErrors[err.code] || "Erro",
          });
          return err.message;
        },
      }
    );
  };

  return (
    <RegistrationContainer>
      <HeaderPage
        headerTitle={idParam ? "Editar produto" : "Adicionar produto"}
      />
      <CardContainer>
        <FormContainer action="" onSubmit={handleSubmit(submitProduct)}>
          <Controller
            control={control}
            name="category"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Categoria"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                inputError={errors?.category?.message}
                placeholder="Digite uma categoria"
              />
            )}
          />
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Nome do produto"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                inputError={errors?.name?.message}
                placeholder="Digite o nome do produto"
              />
            )}
          />
          <Controller
            control={control}
            name="providerName"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Nome do fornecedor"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                inputError={errors?.providerName?.message}
                placeholder="Digite o nome do fornecedor"
              />
            )}
          />
          <Controller
            control={control}
            name="price"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Valor do produto"
                onChange={onChange}
                onBlur={onBlur}
                value={maskReais(value || "")}
                inputError={errors?.price?.message}
                placeholder="R$ 0,00"
              />
            )}
          />

          <Controller
            control={control}
            name="id"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Código do produto"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                inputError={errors?.id?.message}
                placeholder="1a2b3c"
              />
            )}
          />

          <Button
            name="CADASTRAR PRODUTO"
            background={defaultTheme.palette.tertiaryBlue}
            color={defaultTheme.palette.primaryLight}
            borderRadius="0.3rem"
            padding="1rem"
            fontSize="1rem"
            disabled={disabledButton}
          />
        </FormContainer>
      </CardContainer>
    </RegistrationContainer>
  );
};

export default Registration;
