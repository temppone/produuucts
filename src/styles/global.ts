import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

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
    color: ${({ theme }) => theme.palette.primaryDark};
  }

  a:hover{
    color: ${({ theme }) => theme.palette.secundaryDark};
  }
  html, body, #root{
    height: 100%;
    scroll-behavior: smooth;
  }
  html {
    font-size: 12px;
    background: ${({ theme }) => theme.palette.secundaryLight};
    color: ${({ theme }) => theme.palette.primaryDark};
    font-family: 'Inter', sans-serif;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}){
      font-size: 13px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}){
      font-size: 13px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}){
      font-size: 14px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}){
      font-size: 14px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}){
      font-size: 15px;
    }

    .App{
      display: flex;
      flex-direction: column;
      min-height: calc(100vh + 10rem);
    }
    .AppBody{
      flex: 1;
      background: ${({ theme }) => theme.palette.primaryGrey};
    }
  }
`;
