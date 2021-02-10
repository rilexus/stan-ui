import React, {ReactElement, useState} from 'react';
import {Tabs as StanTabs, Tab, TabButton} from '@stan-ui/tabs'

const tabs = [
  {
    id: 1,
    name: 'first'
  },
  {
    id: 2,
    name: 'second'
  },
]

const Button = ({name}: {name: string}): any => {
  return (
    <TabButton>
      {(setTabName: any) => {
        return <button onClick={() => setTabName(name)}>Activate Tab: {name}</button>
      }}
    </TabButton>
  )
}


const Tabs = (): ReactElement => {
  const [activeTabName, setActiveTabName] = useState<string>('first')

  return (
    <StanTabs
      activeTabName={activeTabName}
      onTabChange={(e: {target: {name: string}}) => {
        const {target: { name }} = e;
        setActiveTabName(name);
      }}>
      <div>
        {tabs.map(({id, name}) => {
          return <Button name={name} key={id}/>
        })}
      </div>
      <div>
        {tabs.map(({id, name}) => {
          return (
            <Tab name={name} key={id}>
              Tab {name}
            </Tab>
          )
        })}
      </div>
    </StanTabs>
  );
};

export {Tabs};