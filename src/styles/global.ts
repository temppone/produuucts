import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap');

  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }
  button{
    box-shadow: none;
    border: none;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 1rem;
  }

  a{
    text-decoration: none;
    color: ${({ theme }) => defaultTheme.palette.primaryDark};
  }

  a:hover{
    color: ${({ theme }) => defaultTheme.palette.secundaryDark};
  }
  html, body, #root{
    height: 100%;
    scroll-behavior: smooth;
  }
  html {
    font-size: 12px;
    background: ${({ theme }) => defaultTheme.palette.primaryLight};
    color: ${({ theme }) => defaultTheme.palette.primaryDark};
    font-family: 'Source Sans Pro', sans-serif;

    @media screen and (min-width: ${({ theme }) =>
      defaultTheme.breakpoints.xs}){
      font-size: 14px;
    }
    @media screen and (min-width: ${({ theme }) =>
      defaultTheme.breakpoints.sm}){
      font-size: 15px;
    }
    @media screen and (min-width: ${({ theme }) =>
      defaultTheme.breakpoints.md}){
      font-size: 17px;
    }
    @media screen and (min-width: ${({ theme }) =>
      defaultTheme.breakpoints.lg}){
      font-size: 17px;
    }
    @media screen and (min-width: ${({ theme }) =>
      defaultTheme.breakpoints.xl}){
      font-size: 17px;
    }

    .App{
      display: flex;
      flex-direction: column;
      min-height: calc(100vh + 10rem);
    }
    .AppBody{
      flex: 1;
    }
  }
`;
