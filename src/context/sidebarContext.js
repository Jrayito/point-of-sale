import { createContext, useContext, useState } from "react";

const sidebarContext = createContext();

export const useSidebar = () => {
  const context = useContext(sidebarContext);
  if (!context) throw new Error("No Sidebar context");
  return context;
};

export const SidebarProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const changeCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <sidebarContext.Provider value={{ changeCollapse, collapsed }}>
      {children}
    </sidebarContext.Provider>
  );
};
