import { Children, cloneElement, isValidElement } from "react";
import { useTabsContext } from "./index";
import { TabProps, propType } from "../types";

// "isValidElement" check adds an extra layer of robustness to your code, making it more resilient to unexpected scenarios or changes in the data
//  It helps prevent errors if non-React elements or invalid values are inadvertently passed as children.

function TabList({ children }: propType) {
  const { onChange, activeTab } = useTabsContext();

  return (
    <div className="tab-list">
      {Children.map(children, (child, index) => {
        return (
          isValidElement(child) &&
          cloneElement(child, {
            handleClick: () => onChange(index),
            classes: activeTab === index ? "tab active" : "tab",
          } as TabProps)
        );
      })}
    </div>
  );
}

export default TabList;
