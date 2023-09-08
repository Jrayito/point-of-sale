import { React, useState } from 'react';
import '../style/login.css';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext.js';
import {Banner} from '../componentes/Banner.js'

export const Login = () => {
   const { login } = useAuth();
   const navigate = useNavigate();

   const [user, setUser] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   const handleUser = (usuario) => {
      setUser(usuario);
   }

   const handlePassword = (password) => {
      setPassword(password)
   }

   const handleSubmit = async () => {
      setError("");
      try {
         await login(user, password);
         navigate("/");
      } catch (error) {
         setError("Usuario y/o contraseña incorrecta");
      }
   }


   return (
      <div className="container-fluid h-100">
         <div className="row h-100">
            <div className="col-md-8 d-none d-md-block gradient d-flex flex-column justify-content-center align-items-center">
               <div className="container-logan">
                  <div>
                     <Banner subtitleClass="text-white"/>
                     {/* <h2 className='text-white d-block text-start name'><b>BizTrack</b></h2>
                     <span className='d-block text-white text-start subtitle'>Ingresa al centro de operaciones: <strong>tu negocio, tu control.</strong></span> */}
                  </div>
               </div>
            </div>
            <div className="col-md-4 col-12 d-flex align-items-center">
               <div className="container p-5">
                  <Banner titleClass="name-form" subtitleClass="text-black subtitle-form" />
                  {/* <h2 className='text-white d-block text-start name name-form'><b>BizTrack</b></h2>
                  <span className='d-block text-black text-start subtitle subtitle-form'>Ingresa al centro de operaciones: <strong>tu negocio, tu control.</strong></span> */}
                  <h3 className='mt-5'>¡Bienvenido!</h3>
                  <span>Escriba su usuario y contraseña.</span>
                  <form className='mt-4'>
                     <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="email" id="email" name="email" className="form-control" />
                     </div>
                     <div className="form-group mt-3">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" className="form-control" />
                     </div>
                     <button type="submit" className="btn btn-primary mt-3">Iniciar sesión</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}