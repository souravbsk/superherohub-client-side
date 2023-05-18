import { Rating } from "@smastrom/react-rating";
import React from "react";
import { useLoaderData } from "react-router-dom";
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
    <>
      <Helmet>
        <title>Super Hero Hub | {toytitle} details</title>
      </Helmet>
      <div className="container py-12">
        <div className=" p-10 rounded-3xl bg-details-card card-side bg-base-100 shadow-2xl">
          <img
            className="w-full h-[500px] rounded-3xl"
            src={photo}
            alt="Movie"
          />

          <div className=" bg-transparent card-body">
            <div className="p-4">
              <h2 className=" text-4xl mb-3 font-semibold">{toytitle}</h2>
              <p className="text-gray-600">Seller: {sellername}</p>
              <p className="text-gray-600">Email: {sellermail}</p>
              <p className="text-gray-600">Price: ${price}</p>
              <p className="text-gray-600">category: ${category}</p>
              <div className="text-gray-600 flex items-center gap-1">
                Rating:{" "}
                <Rating style={{ maxWidth: 100 }} value={ratings} readOnly />{" "}
              </div>
              <p className="text-gray-600">Available Quantity: {quantity}</p>
              <p className="mt-4 text-gray-800">{details}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
