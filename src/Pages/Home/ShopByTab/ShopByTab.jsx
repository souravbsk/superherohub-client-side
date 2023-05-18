import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByTab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabTitle,setTabTitle] = useState("");
  console.log(tabTitle);
  
  return (
    <div className="mt-32 container">
      <div className="mb-8">
        <h1 className="text-center text-3xl font-semibold">Shop By Category</h1>
      </div>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab><button onClick={() => setTabTitle('avengers')}>Avengers</button></Tab>
            <Tab><button onClick={() => setTabTitle('justice-league')}>Justice League </button></Tab>
            <Tab><button onClick={() => setTabTitle('star-wars')}>Star Wars</button></Tab>
          </TabList>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByTab;
