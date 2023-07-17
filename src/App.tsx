import Tabs from "./components/Tabs/Tabs";
import { dummyData } from "./data";

function App() {
  return (
    <div className="App">
      <Tabs>
        <Tabs.TabList>
          {dummyData.map((item) => (
            <Tabs.Tab key={item.id}>{item.tabHeader}</Tabs.Tab>
          ))}
        </Tabs.TabList>
        <Tabs.TabPanels>
          {dummyData.map((item) => (
            <Tabs.Panel key={item.id}>
              <p>{item.tabContent}</p>
            </Tabs.Panel>
          ))}
        </Tabs.TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
