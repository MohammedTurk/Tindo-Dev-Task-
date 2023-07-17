import { TabProps } from "../types";

export function Tab({ children, handleClick, classes }: TabProps) {
  return (
    <div onClick={handleClick} className={classes}>
      {children}
    </div>
  );
}

export default Tab;
