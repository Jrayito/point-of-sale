import { Sidebar as Bar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Icon } from "../componentes/Icon.js";
import { Link } from "react-router-dom";
import { SideBarHeader } from "./SideBarHeader.js";
import "../style/sidebar.css";
import { useSidebar } from "../context/sidebarContext.js";

export const Sidebar = () => {
  const { collapsed } = useSidebar();

  return (
    <Bar collapsed={collapsed}>
      <div className="container-menu-sidebar">
        <SideBarHeader isCollpase={collapsed} />
        <Menu>
          <MenuItem icon={<Icon name="home" />} component={<Link to="/" />}>
            Dashboard
          </MenuItem>
          <SubMenu icon={<Icon name="shopping_cart" />} label="Compras">
            <MenuItem component={<Link to="/productos" />}>Productos</MenuItem>
          </SubMenu>
        </Menu>
      </div>
    </Bar>
  );
};
