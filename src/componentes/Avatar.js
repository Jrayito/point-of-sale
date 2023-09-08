export const Avatar = ({path, size}) => {
   return (
         <div className="rounded-circle overflow-hidden" >
            <img src={path} alt="Avatar IMG"  width={size} height={size}/>
         </div>
      )
}