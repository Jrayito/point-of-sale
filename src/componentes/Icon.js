export const Icon = ({name, marginClass}) =>{
   return (
      <i className={`material-icons ${marginClass ? marginClass: ""}`}>{name}</i> 
   );
}