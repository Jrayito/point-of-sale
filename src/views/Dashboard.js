import React from "react";
import {Sidebar} from '../componentes/Sidebar.js';
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
      <>
      <Sidebar />
      <button onClick={handleLogout} className="btn btn-success">
         Cerrar Sesión
      </button>
      </>
      
   )
}