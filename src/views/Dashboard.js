import React from "react";
import {useAuth} from '../context/authContext';

export const Dashboard = () => {
   const {logout} = useAuth();
   
   const handleLogout = async () => {
      try {
         await logout();
      } catch (error) {
         console.log(error.code);
      }
   }

   return (
      <button onClick={handleLogout} className="btn btn-success">
         Cerrar Sesión
      </button>
   )
}