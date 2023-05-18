import React from "react";
import { useLoaderData } from "react-router-dom";
import ToysCard from "./ToysCard";
import { Helmet } from "react-helmet-async";

const AllToys = () => {
    const allHeros = useLoaderData();
    console.log(allHeros);
  return (
<>
<Helmet>
        <title>Super Hero Hub | All Toys</title>
      </Helmet>
    <div className="py-14 alltoybg bg-base-200">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-center text-3xl font-semibold">
            Our Super Heros
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8
        ">
        {
          allHeros.map(hero => <ToysCard key={hero._id} hero={hero}></ToysCard>)
        }
        </div>
      </div>
    </div>
</>
  );
};

export default AllToys;
