import React from "react";
import HeroSlider from "../HeroSlider/HeroSlider";
import ShopByTab from "../ShopByTab/ShopByTab";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Super Hero Hub | Home</title>
      </Helmet>
      <HeroSlider></HeroSlider>
      <ShopByTab></ShopByTab>
      <h1>Hello world</h1>
    </div>
  );
};

export default Home;
