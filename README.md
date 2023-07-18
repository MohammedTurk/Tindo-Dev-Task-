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

1. Import the Tab component from components folder
`` import Tabs from 'my-tabs-component'; ``

2. ```bash
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
