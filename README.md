This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
  # or
  yarn
```

Start the dev server

```bash
  npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. Import the Tab component from the components folder
`` import Tabs from "./components/Tabs/Tabs"; ``

2. Set up your Tabs component and define the TabList, Tab, TabPanels, and Panel components within it: 
```bash
     <Tabs>
        <Tabs.TabList>
          <Tabs.Tab>Item One</Tabs.Tab>
          <Tabs.Tab>Item Two</Tabs.Tab>
          <Tabs.Tab>Item Three</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanels>
          <Tabs.Panel>
            <p>Item One content</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>Item Two content</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>Item Three content</p>
          </Tabs.Panel>
        </Tabs.TabPanels>
      </Tabs>
```

## API
### Tabs
The main wrapper component contains the tab list and tab panels. It manages the active tab state.
#### Props
"children": The child components of Tabs (TabList, TabPanels).
<br/>
### TabList
The component that renders the list of tabs.
#### Props
"children": The child components of TabList (Tab).
<br/>
### Tab
A single tab item.
#### Props
"children": The content of the tab item.<br/>
"handelClick": The event to change the tab when clicking.<br/>
"classes": The classes of the tab items.
<br/>
### TabPanels
The component that renders the content panels associated with each tab.
#### Props
"children": The child components of TabPanels (Panel).
<br/>
### Panel
A single content panel is associated with a tab.
#### Props
"children": The content of the panel.

