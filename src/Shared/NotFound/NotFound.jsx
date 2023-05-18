import React from "react";
import Lottie from "lottie-react";
import notFound from "../../assets/images/404.json";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-between">
      <div className="text-center">
        <Lottie
          className="md:w-8/12 mx-auto"
          animationData={notFound}
          loop={true}
        />
        <Link to="/" className="btn">Go Back To Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
