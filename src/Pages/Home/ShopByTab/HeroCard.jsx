import React from "react";
import { Link } from "react-router-dom";
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'

const HeroCard = ({ hero }) => {
  const {photo,toytitle,price,ratings,_id} = hero;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
        
          src={photo}
          alt="Shoes"
          className="rounded-xl h-52 object-fill w-full"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{toytitle}</h2>
        <p className="font-medium">Price: ${price}</p>
        <div className="font-medium flex items-center gap-1">Ratings:  <Rating
      style={{ maxWidth: 100 }}
      value={ratings}
      readOnly
    /></div>
        <div className="card-actions mt-3">
          <Link to={`/toy/${_id}`}><button  className="btn">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
