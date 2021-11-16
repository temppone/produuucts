import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { ptShort } from "yup-locale-pt";
import { IProduct } from "../../@types";
import Button from "../../components/Button";
import { CardContainer } from "../../components/Card/style.";
import HeaderPage from "../../components/HeaderPage";
import Input from "../../components/Input";
import { numbersAndLetters } from "../../core/regex";
import {
  addProduct,
  getProduct,
  updateProduct,
} from "../../services/productService";
import { defaultTheme } from "../../styles/theme";
import {
  FormContainer,
  RegistrationContainer,
  ValueCodeContainer,
} from "./styles";

type TransltedErrorsType = {
  [key: string]: string;
};

const Registration = (): JSX.Element => {
  const [disabledButton, setDisabledButton] = useState(false);
  const { id: idParam } = useParams();
  const navigation = useNavigate();

  const translatedErrors: TransltedErrorsType = {
    "0": "Esse código já existe.",
  };

  yup.setLocale(ptShort);
  const schema: yup.SchemaOf<IProduct> = yup.object({
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
  } = useForm<IProduct>({
    resolver: yupResolver<yup.AnyObjectSchema>(schema),
  });

  useEffect(() => {
    if (idParam) {
      getProduct(idParam).then((product) => {
        setValue("id", product.id);
        setValue("providerName", product.providerName);
        setValue("category", product.category);
        setValue("name", product.name);
        setValue("price", product.price);
      });
    }
  }, [idParam]);

  const submitProduct: SubmitHandler<IProduct> = (data) => {
    if (idParam) {
      updateProduct(data)
        .then(() => {
          toast.success("Produto atualizado!");
          navigation("/");
        })
        .catch((err) => {
          setError("id", {
            type: "manual",
            message: translatedErrors[err.code] || "Erro",
          });
          return "Algo deu errado";
        });
    }

    toast.promise(addProduct(data), {
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
        return "Algo deu errado";
      },
    });
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

          <ValueCodeContainer>
            <Controller
              control={control}
              name="price"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="Valor do produto"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
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
          </ValueCodeContainer>

          <Button
            name="CADASTRAR PRODUTO"
            background={defaultTheme.palette.tertiaryBlue}
            color={defaultTheme.palette.primaryLight}
            borderRadius="0.3rem"
            width="100%"
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
