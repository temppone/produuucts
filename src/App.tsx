import React, { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Loading from "./components/Loading";
import ProductProvider from "./contexts/ProductContext";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProductCreate = lazy(() => import("./pages/ProductCreate"));
const Footer = lazy(() => import("./components/Footer"));

function App(): JSX.Element {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <ProductProvider>
          <Suspense fallback={<Loading />}>
            <GlobalStyle />
            <Toaster />
            <main className="AppBody">
              <Router>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/create" element={<ProductCreate />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/product/edit/:id" element={<ProductCreate />} />
                </Routes>
                <Footer />
              </Router>
            </main>
          </Suspense>
        </ProductProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
