import Tabs from "./components/Tab";

function App() {
  return (
    <div className="App">
      <Tabs>
        <Tabs.TabList>
          <Tabs.Tab>Item One</Tabs.Tab>
          <Tabs.Tab>Item Two</Tabs.Tab>
          <Tabs.Tab>Item Three</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanels>
          <Tabs.Panel>
            <p>Item One</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>Item Two</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>Item Three</p>
          </Tabs.Panel>
        </Tabs.TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
