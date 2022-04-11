import * as React from "react";
import Button from "@mui/material/Button";
import PostAddIcon from "@mui/icons-material/PostAdd";
import StorageIcon from "@mui/icons-material/Storage";
import Stack from "@mui/material/Stack";
import Tabla from "./TablaExperiencia";
import { useNavigate } from "react-router-dom";
const Experiencia = (props) => {
  return (
    <section>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Experiencia Laboral</h2>
      </div>
      <Tabla />
    </section>
  );
};
export default Experiencia;
