import { createContext, useContext, useState } from "react";

import { TabsContextType, propType } from "../types";
import "../styles/Tabs.css";
import { TabList, TabPanels, Tab, Panel } from "./index";

const TabsContext = createContext<TabsContextType | null>(null);

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error(
      "Tabs components cannot be rendered outside the Tabs Provider"
    );
  } else {
    return context;
  }
};

export function Tabs({ children }: propType) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const onChange = (tabKey: number) => {
    setActiveTab(tabKey);
  };

  const ProviderValue = { activeTab, onChange };

  return (
    <TabsContext.Provider value={ProviderValue}>
      <div className="tabs-wrapper">{children}</div>
    </TabsContext.Provider>
  );
}

Tabs.TabList = TabList;
Tabs.TabPanels = TabPanels;
Tabs.Tab = Tab;
Tabs.Panel = Panel;

export default Tabs;
