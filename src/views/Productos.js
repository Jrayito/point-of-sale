import React, { useState } from "react";
import { Sidebar } from "../componentes/Sidebar.js";
import { MainContainer } from "../componentes/MainContainer.js";
import { MainHeader } from "../componentes/MainHeader.js";
import { Loader } from "../componentes/Loader.js";
import { ModalProductoNuevo } from "../componentes/ModalProductoNuevo.js";

export const Productos = () => {
  const [loading, setLoading] = useState(false); //Para cambiar el estado del spinner cuando los datos hayan cargado.

  return (
    <>
      {loading ? <Loader /> : ""}
      <div className="container-sidebar">
        <Sidebar />
        <MainContainer>
          <MainHeader targetModal={"#ModalProductoNuevo"} />
          <section className="mt-4">
            <h4>Productos</h4>
          </section>
        </MainContainer>
      </div>
      <ModalProductoNuevo />
    </>
  );
};
