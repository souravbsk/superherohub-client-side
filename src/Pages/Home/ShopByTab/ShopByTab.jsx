import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HeroCard from "./HeroCard";

const ShopByTab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabTitle, setTabTitle] = useState("avengers");
  const [heros, setHeros] = useState([]);
  useEffect(() => {
    fetch(`https://superheros-server.vercel.app/alltoys/${tabTitle}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setHeros(data);
        }
      });
  }, [tabTitle]);

  return (
    <div data-aos="flip-down" className="bg-home">
      <div className="md:mt-32 mt-20 container">
        <div className="mb-8">
          <h1 className="text-center text-white text-xl md:text-3xl font-semibold">
            Shop By Category
          </h1>
        </div>
        <div>
          <Tabs>
            <div className="mb-8">
              <TabList>
                <Tab>
                  <button
                    className={`rounded-md py-3 px-4 ${
                      tabTitle === "avengers" && "btn"
                    }`}
                    onClick={() => setTabTitle("avengers")}
                  >
                    Avengers
                  </button>
                </Tab>
                <Tab>
                  <button
                    className={`rounded-md py-3 px-4 ${
                      tabTitle === "justice-league" && "btn"
                    }`}
                    onClick={() => setTabTitle("justice-league")}
                  >
                    Justice League{" "}
                  </button>
                </Tab>
                <Tab>
                  <button
                    className={`rounded-md py-3 px-4 ${
                      tabTitle === "star-wars" && "btn"
                    }`}
                    onClick={() => setTabTitle("star-wars")}
                  >
                    Star Wars
                  </button>
                </Tab>
              </TabList>
            </div>
            <TabPanel>
              <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {heros.map((hero) => (
                  <HeroCard key={hero._id} hero={hero}></HeroCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {heros.map((hero) => (
                  <HeroCard key={hero._id} hero={hero}></HeroCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {heros.map((hero) => (
                  <HeroCard key={hero._id} hero={hero}></HeroCard>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ShopByTab;
