import { Rating } from "@smastrom/react-rating";
import React from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import { Helmet } from "react-helmet-async";
const DetailsCard = () => {
  const hero = useLoaderData();
  console.log(hero);
  const {
    _id,
    photo,
    toytitle,
    sellername,
    sellermail,
    ratings,
    quantity,
    price,
    category,
    details,
  } = hero;
  return (
    <div className=" md:py-12">
      <Helmet>
        <title>Super Hero Hub | {toytitle} details</title>
      </Helmet>
      <div className="container py-12">
        <div className=" p-5 md:p-10 rounded-3xl border bg-details-card backdrop-blur-3xl bg-transparent card-side bg-base-100 shadow-2xl">
          <figure className="backdrop-blur-3xl">
          <img
            className="w-full md:h-[500px] rounded-3xl"
            src={photo}
            alt="Movie"
          />
          </figure>

          <div className=" text-white bg-transparent p-0 card-body">
            <div className="md:p-4 mt-5">
              <h2 className="text-2xl md:text-4xl mb-3 font-semibold">{toytitle}</h2>
              <p className="">Seller: {sellername}</p>
              <p className="">Email: {sellermail}</p>
              <p className="">Price: ${price}</p>
              <p className="">category: ${category}</p>
              <div className=" flex items-center gap-1">
                Rating:{" "}
                <Rating style={{ maxWidth: 100 }} value={ratings} readOnly />{" "}
              </div>
              <p className="">Available Quantity: {quantity}</p>
              <p className="mt-4 text-sm md:text-base">{details}</p>
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default DetailsCard;
