import { useState } from 'react';
import { Sidebar as Bar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Icon } from '../componentes/Icon.js';
import { Link } from 'react-router-dom';
import { MainContainer } from './MainContainer.js';
import { SideBarHeader } from './SideBarHeader.js';
import '../style/sidebar.css';

export const Sidebar = () => {
   const [collapsed, setCollapsed] = useState(false);

   const changeCollapse = (collapsed) => {
      setCollapsed(collapsed);
   }

   return (
      <div className='container-sidebar'>
         <Bar collapsed={collapsed}>
            <div className='container-menu-sidebar'>
               <SideBarHeader isCollpase={collapsed}/>
               <Menu>
                  <MenuItem icon={<Icon name="home" />} component={<Link to="/" />}>Dashboard</MenuItem>
                  <SubMenu icon={<Icon name="shopping_cart"/>} label="Compras">
                     <MenuItem  component={<Link to="/" />}>Productos</MenuItem>
                  </SubMenu>
               </Menu>
            </div>
         </Bar>
         <MainContainer onClickChangeCollapse={changeCollapse} collapsed={collapsed} />
      </div>
   )
}