import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Experiencia from "./Pages/Experiencia/Experiencia";
import Habilidades from "./Pages/Habilidades/Habilidades";
import BarraNavegacion from "./Pages/Perfil/Navbar";
import Perfil from "./Pages/Perfil/Perfil";

function App() {
  //
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <BarraNavegacion>
              <Perfil />
            </BarraNavegacion>
          }
        />
        <Route
          path="/experiencia"
          element={
            <BarraNavegacion>
              <Experiencia />
            </BarraNavegacion>
          }
        />
        <Route
          path="/habilidades"
          element={
            <BarraNavegacion>
              <Habilidades />
            </BarraNavegacion>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
