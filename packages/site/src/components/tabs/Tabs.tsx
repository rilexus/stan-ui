import React, {ReactElement, useState} from 'react';
import {TabButton, Tabs as StanTabs, Tab} from "@stan-ui/tabs";

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

const Button = ({name}: {name: string}): ReactElement => {
  return (
    <TabButton>
      {(setTabName: any): ReactElement => {
        return <button onClick={():void => {
          setTabName(name)
        }}>Activate Tab: {name}</button>
      }}
    </TabButton>
  )
}


const Tabs = (): ReactElement => {
  const [activeTabName, setActiveTabName] = useState<string>('first')

  return (
    <StanTabs
      activeTabName={activeTabName}
      onTabChange={(e: {target: {name: string}}):void => {
        const {target: { name }} = e;
        setActiveTabName(name);
      }}>
      <div>
        {tabs.map(({id, name}): ReactElement => {
          return <Button name={name} key={id}/>
        })}
      </div>
      <div>
        {tabs.map(({id, name}) => {
          return (
            <Tab name={name} key={id}>
              <div>
                Tab {name}
              </div>
            </Tab>
          )
        })}
      </div>
    </StanTabs>
  );
};

export {Tabs};