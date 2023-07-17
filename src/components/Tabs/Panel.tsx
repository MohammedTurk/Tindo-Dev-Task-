import { propType } from "../types";

export function Panel({ children }: propType) {
  return <div className="tab-panel">{children}</div>;
}

export default Panel;
