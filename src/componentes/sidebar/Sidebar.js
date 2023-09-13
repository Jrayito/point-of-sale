import { Sidebar as Bar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Icon } from "../Icon.js";
import { Link } from "react-router-dom";
import { SideBarHeader } from "./SideBarHeader.js";
import "../../style/sidebar.css";
import { useSidebar } from "../../context/sidebarContext.js";

export const Sidebar = () => {
  const { collapsed, toggle, setBroken, changeToggle } = useSidebar();

  const themes = {
    light: {
      sidebar: {
        backgroundColor: "#ffffff",
        color: "#607489",
      },
      menu: {
        menuContent: "#fbfcfd",
        icon: "#fff",
        hover: {
          backgroundColor: "#c5e4ff",
          color: "#44596e",
        },
        disabled: {
          color: "#9fb6cf",
        },
      },
    },
  };

  const menuItemsStyle = {
    root: {
      fontSize: "15px",
      fontWeight: 400,
    },
    button: ({ level, active }) => {
      if (level === 0) {
        return {
          color: themes.light.menu.icon,
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          },
        };
      } else {
        return {
          color: "#000",
        };
      }
    },
    icon: {
      color: themes.light.menu.icon,
    },
    SubMenuExpandIcon: {
      color: themes.light.menu.icon,
    },
    subMenuContent: ({ level }) => ({
      backgroundColor: "#fff",
    }),
  };
  return (
    <Bar
      collapsed={collapsed}
      breakPoint="md"
      onBreakPoint={setBroken}
      toggled={toggle}
      onBackdropClick={() => changeToggle(!toggle)}
      backgroundColor="rgba(32, 109, 108, 0.9)"
    >
      <div className="container-menu-sidebar">
        <SideBarHeader isCollpase={collapsed} />
        <Menu menuItemStyles={menuItemsStyle}>
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
