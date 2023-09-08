import React from 'react';

export const Banner = ({titleClass, subtitleClass}) => {
   
   const titleAsigneClass = "text-white d-block text-start name";
   const subtitleAsignedClass = "d-block text-start subtitle"

   return (
      <>
         <h2 className={`${titleAsigneClass} ${titleClass}`}><b>BizTrack</b></h2>
         <span className={`${subtitleAsignedClass} ${subtitleClass}`}>Ingresa al centro de operaciones: <strong>tu negocio, tu control.</strong></span>
      </>
   )
}