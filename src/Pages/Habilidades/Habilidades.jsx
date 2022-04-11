import * as React from "react";
import Button from "@mui/material/Button";
import PostAddIcon from "@mui/icons-material/PostAdd";
import StorageIcon from "@mui/icons-material/Storage";
import Stack from "@mui/material/Stack";
import Tabla from "./TablaHabilidades";

const Habilidades = (props) => {
  return (
    <section>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Habilidades Personales</h2>
      </div>
      <Tabla />
    </section>
  );
};
export default Habilidades;
