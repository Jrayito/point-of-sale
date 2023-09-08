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

   const handleUser = (evt) => {
      setUser(evt.target.value);
   }

   const handlePassword = (evt) => {
      setPassword(evt.target.value)
   }

   const handleSubmit = async (evt) => {
      evt.preventDefault();
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
                     <Banner subtitleClass="text-white" isAnimation={true}/>
                  </div>
               </div>
            </div>
            <div className="col-md-4 col-12 d-flex align-items-center">
               <div className="container p-5">
                  <Banner titleClass="name-form" subtitleClass="text-black subtitle-form" isAnimation={false} />
                  <h3 className='mt-5'>¡Bienvenido!</h3>
                  {!error ? <span>Escriba su usuario y contraseña.</span> : <span className='text-danger'>{error}</span>}
                  <form className='mt-4'>
                     <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="email" id="email" name="email" className="form-control" onChange={handleUser} />
                     </div>
                     <div className="form-group mt-3">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" className="form-control" onChange={handlePassword}/>
                     </div>
                     <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>Iniciar sesión</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}