import React from "react";
import "./assets/bootstrap/main.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./views/Login.js";
import { AuthProvider } from "./context/authContext.js";
import { SidebarProvider } from "./context/sidebarContext.js";
import { ProtectedRoute } from "./componentes/ProtectedRoute.js";
import { Dashboard } from "./views/Dashboard.js";
import { Productos } from "./views/Productos.js";
import "./style/reset.css";
import "bootstrap/dist/js/bootstrap.bundle.js"; // Carga del js de bootstrap

function App() {
  return (
    <div className="vh-100 bg-body-tertiary">
      <AuthProvider>
        <SidebarProvider>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/productos"
              element={
                <ProtectedRoute>
                  <Productos />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </SidebarProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
