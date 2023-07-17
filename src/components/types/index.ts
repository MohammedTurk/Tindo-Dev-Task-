import { ReactNode } from "react";

export type TabsContextType = {
  activeTab: number;
  onChange: (tabKey: number) => void;
};

export type propType = {
  children: ReactNode;
};

export type TabProps = propType & {
  handleClick?: () => void;
  classes?: string;
};
