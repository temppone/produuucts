import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PageHeader = lazy(() => import("./components/PageHeader"));
const Registration = lazy(() => import("./pages/Registration"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Suspense fallback={<div>carregando</div>}>
          <GlobalStyle />
          <main className="AppBody">
            <Router>
              <PageHeader headerTitle="Olá, você está na Produuucts" />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </Router>
          </main>
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
