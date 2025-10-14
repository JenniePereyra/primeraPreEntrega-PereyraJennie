import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a Biocon Laboratorios S.A." />} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting="Filtrando por categoría" />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;