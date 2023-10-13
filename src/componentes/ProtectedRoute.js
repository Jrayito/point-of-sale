import { Navigate, Routes } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <h1>Cargando...</h1>;

  if (!user) return <Navigate to="/login" />;

  //   Se modifico para poder porteger todas las rutas, en caso de error reemplazar el Route por un Fragment
  return <Routes>{children}</Routes>;
};
