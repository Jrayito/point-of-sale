import {React, useState} from 'react';

import InputCustom from '../componentes/InputCustom.js'
import '../style/login.css';

function Login() {

   const [user, setUser] = useState("");
   const [password, setPassword] = useState("");

   const handleUser = (usuario) =>{
      setUser(usuario);
   }

   const handlePassword = (password) =>{
      setPassword(password)
   }
   
   const handleSubmit = () => {}
   
   return (
      <section className='container-login'>
         <div className='card'>
            <div className='card-body'>
               <h4 className='text-primary mb-0'><b>¡Bienvenido!</b></h4>
               <small>Escriba su usuario y contraseña para continuar.</small>
               <div className='mt-5'>
                  <InputCustom 
                     type="text" 
                     placeholder="Usuario:" 
                     textLabel="Usuario:" 
                     value={user} 
                     onChange={handleUser}/>

                  <InputCustom 
                     type="password" 
                     placeholder="Contraseña:" 
                     textLabel="Contraseña:" 
                     value={password} 
                     onChange={handlePassword}/>

                  <div className='d-grid gap-2'>
                     <button
                        onClick={handleSubmit}
                        className='btn btn-primary mt-3'>
                        Iniciar Sesión
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
export default Login