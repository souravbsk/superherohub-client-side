import React from "react";
import HeroSlider from "../HeroSlider/HeroSlider";
import ShopByTab from "../ShopByTab/ShopByTab";
import { Helmet } from "react-helmet-async";
import Gallerys from "../Gallerys/Gallerys";
import Categories from "../Categories/Categories";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountDown from "../CountDown/CountDown";
const Home = () => {
  AOS.init();

  return (
    <div className="overflow-hidden bg-base-300">
      <Helmet>
        <title>Super Hero Hub | Home</title>
      </Helmet>
      <HeroSlider></HeroSlider>
      <CountDown></CountDown>
      <Categories></Categories>
      <ShopByTab></ShopByTab>
      <Gallerys></Gallerys>

    </div>
  );
};

export default Home;
