import { Icon } from './Icon.js'
export const MainContainer = ({ onClickChangeCollapse, collapsed }) => {

   return (
      <main style={{ padding: 10 }}>
         <div>
            <button className="btn btn-light" onClick={() => onClickChangeCollapse(!collapsed)}>
               <span className="d-flex aling-items-center">
                  <Icon name="menu" />
               </span>
            </button>
         </div>
      </main>
   );
}