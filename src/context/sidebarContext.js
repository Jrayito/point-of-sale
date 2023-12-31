import { createContext, useContext, useState } from "react";

const sidebarContext = createContext();

export const useSidebar = () => {
  const context = useContext(sidebarContext);
  if (!context) throw new Error("No Sidebar context");
  return context;
};

export const SidebarProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [broken, setBroken] = useState(false);
  const [toggle, setToggle] = useState(false);

  const changeCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const changeToggle = (toggle) => {
    setToggle(toggle);
  };

  return (
    <sidebarContext.Provider
      value={{
        changeCollapse,
        changeToggle,
        setBroken,
        collapsed,
        broken,
        toggle,
      }}
    >
      {children}
    </sidebarContext.Provider>
  );
};
