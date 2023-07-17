import { Children, isValidElement } from "react";
import { propType } from "../types";
import { useTabsContext } from "./index";

// "isValidElement" check adds an extra layer of robustness to your code, making it more resilient to unexpected scenarios or changes in the data
//  It helps prevent errors if non-React elements or invalid values are inadvertently passed as children.

function TabPanels({ children }: propType) {
  const { activeTab } = useTabsContext();
  return (
    <div className="tab-panels">
      {Children.map(
        children,
        (child, index) => isValidElement(child) && activeTab === index && child
      )}
    </div>
  );
}

export default TabPanels;
