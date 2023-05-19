import React from "react";
import CountUp from "react-countup";
const CountDown = () => {
  return (
    <div className="mx-8">
      <div
        data-aos="flip-up"
        className="container rounded-2xl relative z-50 border mt-20  md:-mt-32 text-white bg-transparent backdrop-blur-2xl"
      >
        <div className=" grid md:mx-0 md:grid-cols-3  gap-8 p-20">
          <div className="flex flex-col md:flex-row justify-center md:items-center gap-3 ">
            <img
              className="w-20 h-20"
              src="https://i.ibb.co/c179s4S/counter-icon-1.png"
              alt=""
            />
            <div>
              <CountUp className="text-5xl font-medium" end={585} />
              <p className="text-base mt-1">Game</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:items-center gap-3 ">
            <img
              className="w-20 h-20"
              src="https://i.ibb.co/Z6Gn79P/counter-icon-2.png"
              alt=""
            />
            <div>
              <CountUp className="text-5xl font-medium" end={398} />
              <p className="text-base mt-1">Pro Heros</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:items-center gap-3 ">
            <img
              className="w-20 h-20"
              src="https://i.ibb.co/PT3L5NR/counter-icon-3.png"
              alt=""
            />
            <div>
              <CountUp className="text-5xl font-medium" end={150} />
              <p className="text-base mt-1">Champions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
