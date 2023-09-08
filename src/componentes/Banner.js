import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export const Banner = ({ titleClass, subtitleClass, isAnimation }) => {
   const words = [
      " Tu negocio.",
      " Tu control.",
      " Toma el mando."
   ];

   const [text] = useTypewriter({
      words: words,
      loop: 0,
      typeSpeed: 50,
      deleteSpeed: 30,
      enable: false
   });

   return (
      <>
         <h2 className={`text-white d-block text-start name ${titleClass ?? ""}`}><b>BizTrack</b></h2>
         <span className={`d-block text-start subtitle ${subtitleClass ?? ""}`}>
            {isAnimation
               ? "La puerta a la gestión eficiente de tu negocio se abre aquí."
               : <span>Ingresa al centro de operaciones:<b> tu negocio, tu control</b></span>}
            <strong>
               {isAnimation ? text : ""}
            </strong>
            {
               isAnimation 
               ? <span>
                  <Cursor />
               </span> 
               : <span></span>
            }
         </span>
      </>
   )
}