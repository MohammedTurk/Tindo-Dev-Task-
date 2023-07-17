import { propType } from "../types";

function Panel({ children }: propType) {
  return <div className="tab-panel">{children}</div>;
}

export default Panel;
