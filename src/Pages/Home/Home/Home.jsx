import React from "react";
import HeroSlider from "../HeroSlider/HeroSlider";
import ShopByTab from "../ShopByTab/ShopByTab";
import { Helmet } from "react-helmet-async";
import Gallerys from "../Gallerys/Gallerys";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Super Hero Hub | Home</title>
      </Helmet>
      <HeroSlider></HeroSlider>
      <Categories></Categories>
      <ShopByTab></ShopByTab>
      <Gallerys></Gallerys>
      <h1>Hello world</h1>
    </div>
  );
};

export default Home;
