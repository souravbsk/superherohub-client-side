import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Loader from "../Shared/Loader/Loader";

const Main = () => {
  const navigation = useNavigation();

  return (
    <div className="bg-layout">
      <div className="bg-transparent">
      <Header></Header>
      <div className="bg-transparent">
        {navigation.state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </div>
      <div className="">
        <Footer></Footer>
      </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Main;
