import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { ptShort } from "yup-locale-pt";
import Button from "../../components/Button";
import { CardContainer } from "../../components/Card/style.";
import HeaderCard from "../../components/HeaderCard";
import Input from "../../components/Input";
import { numbersAndLetters } from "../../core/regex";
import { defaultTheme } from "../../styles/theme";
import {
  FormContainer,
  RegistrationContainer,
  ValueCodeContainer,
} from "./styles";

type IRegisterProduct = {
  id: string;
  category: string;
  name: string;
  providerName: string;
  price: number;
};

const Registration = (): JSX.Element => {
  yup.setLocale(ptShort);
  const schema: yup.SchemaOf<IRegisterProduct> = yup.object({
    id: yup
      .string()
      .min(4)
      .max(4)
      .required()
      .matches(numbersAndLetters, "Digite letras e números"),
    providerName: yup.string().required(),
    category: yup.string().required(),
    name: yup.string().required(),
    price: yup.number().required(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterProduct>({
    resolver: yupResolver<yup.AnyObjectSchema>(schema),
  });

  const submitProduct = (data: IRegisterProduct) => {
    console.log(data);
    console.log("teste");
  };

  return (
    <RegistrationContainer>
      <CardContainer>
        <HeaderCard title="Adicionar produto" />
        <FormContainer action="" onSubmit={handleSubmit(submitProduct)}>
          <Controller
            name="category"
            control={control}
            render={(props) => (
              <Input
                label="Categoria"
                inputError={errors?.category?.message}
                placeholder="Digite uma categoria"
                {...props}
              />
            )}
          />
          <Controller
            name="name"
            control={control}
            render={(props) => (
              <Input
                label="Nome do produto"
                inputError={errors?.name?.message}
                placeholder="Digite o nome do produto"
                {...props}
              />
            )}
          />
          <Controller
            name="providerName"
            control={control}
            render={(props) => (
              <Input
                label="Nome do fornecedor"
                inputError={errors?.providerName?.message}
                placeholder="Digite o nome do fornecedor"
                {...props}
              />
            )}
          />

          <ValueCodeContainer>
            <Controller
              name="price"
              control={control}
              render={(props) => (
                <Input
                  label="Valor do produto"
                  inputError={errors?.price?.message}
                  placeholder="R$ 0,00"
                  {...props}
                />
              )}
            />
            <Controller
              name="id"
              control={control}
              render={(props) => (
                <Input
                  label="Código do produto"
                  inputError={errors?.id?.message}
                  placeholder="1a2b3c"
                  {...props}
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
          />
        </FormContainer>
      </CardContainer>
    </RegistrationContainer>
  );
};

export default Registration;
