import React from "react";

const TabPanels = ({ hero }) => {
  console.log(hero);
  const {photo,toytitle,price,ratings,_id} = hero;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
        
          src={photo}
          alt="Shoes"
          className="rounded-xl h-52 w-full object-cover"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{toytitle}</h2>
        <p className="font-medium">Price: ${price}</p>
        <p className="font-medium">Ratings: {ratings}</p>
        <div className="card-actions">
          <button className="btn">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default TabPanels;
