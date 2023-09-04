import React from 'react';

function InputCustom({ type, placeholder, textLabel, value, onChange}) {

   const setMyValue = (e) =>{
      onChange(e.target.value);
   }

   return <div className="form-floating mb-3">
      <input
         value={value}
         type={type} 
         className="form-control border-0 rounded-0 border-bottom" 
         placeholder={placeholder} 
         onChange={setMyValue}   
      />
      <label>{textLabel}</label>
   </div>
}

export default InputCustom;