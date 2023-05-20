import React from "react";
import { Link } from "react-router-dom";

const HeroCard = ({ hero }) => {
  const {photo,toytitle,price,sellername,_id,category,quantity} = hero || {};

  return (
    <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-20">
                <img src={photo} className="object-top" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{toytitle}</div>
            </div>
          </div>
        </td>
        <td>
          {sellername}
          
        </td>

        <td>{category}</td>
        <td>
          {price}
          
        </td>
        <td>
          {quantity}
          
        </td>
        <th>
    <Link to={`/toy/${_id}`}><button  className="btn">View Details</button></Link>

        </th>
      </tr>
    
  );
};

export default HeroCard;
