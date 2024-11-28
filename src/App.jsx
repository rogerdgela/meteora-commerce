import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import PaginaErro from "./pages/PaginaErro";
import "./App.css";
import { CarrinhoContext } from "./context/CarrinhoContext";

function App() {
  return (
    <BrowserRouter>
      <CarrinhoContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="*" element={<PaginaErro />} />
        </Routes>
      </CarrinhoContext>
    </BrowserRouter>
  );
}

export default App;
