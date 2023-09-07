import { React, useState } from 'react';
import InputCustom from '../componentes/InputCustom.js'
import '../style/login.css';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext.js';

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
      <section className='container-login'>
         <div className='card'>
            <div className='card-body'>
               <h4 className='text-primary mb-0'><b>¡Bienvenido!</b></h4>
               {error
                  ? <small className="text-danger">
                     <span className='d-flex align-items-center'>
                        <i className="material-icons md-18 me-1">error</i>
                        Usuario y/o contraseña incorrecta.
                     </span>
                  </small>
                  : <small >Escriba su usuario y contraseña para continuar.</small>
               }
               <div className='mt-5'>
                  <InputCustom
                     type="text"
                     placeholder="Usuario:"
                     textLabel="Usuario:"
                     value={user}
                     onChange={handleUser} />

                  <InputCustom
                     type="password"
                     placeholder="Contraseña:"
                     textLabel="Contraseña:"
                     value={password}
                     onChange={handlePassword} />

                  <div className='d-grid gap-2'>
                     <button
                        onClick={handleSubmit}
                        className='btn btn-primary mt-3'>
                        <span className="d-flex align-items-center justify-content-center">
                           Iniciar Sesión
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}