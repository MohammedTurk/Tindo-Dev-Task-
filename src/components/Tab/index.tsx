import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { TabsContextType, propType } from "../types";
import TabList from "./TabList";
import TabPanels from "./TabPanels";
import Panel from "./Panel";
import Tab from "./Tab";
import "./Tabs.css";

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
  const onChange = useCallback((tabKey: number) => setActiveTab(tabKey), []);

  const ProviderValue = useMemo(
    () => ({
      activeTab,
      onChange,
    }),
    [activeTab, onChange]
  );

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
