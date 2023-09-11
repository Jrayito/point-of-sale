import React from "react";
import { Sidebar } from "../componentes/sidebar/Sidebar.js";
import { MainContainer } from "../componentes/MainContainer.js";
import { MainHeader } from "../componentes/MainHeader.js";

export const Dashboard = () => {
  return (
    <div className="container-sidebar">
      <Sidebar />
      <MainContainer>
        <MainHeader />
        <section className="mt-4">
          <h4>Dashboard</h4>
        </section>
      </MainContainer>
    </div>
  );
};
