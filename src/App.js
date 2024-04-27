import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Inicio from "./componentes/App/Inicio";
import Consulta from "./componentes/Consulta/Consulta";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/consulta" element={<Consulta />} />
      </Routes>
    </>
  );
}

export default App;
