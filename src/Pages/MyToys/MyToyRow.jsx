import { Rating } from "@smastrom/react-rating";
import React, { useDebugValue } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyToyRow = ({ toy,handleDelete }) => {
  const {
    photo,
    toytitle,
    sellername,
    sellermail,
    category,
    price,
    ratings,
    quantity,
    details,
    _id
  } = toy;



  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={photo}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{toytitle}</div>
            <div className="text-sm ">${price}</div>
          </div>
        </div>
      </td>
      <td>
        {category}
      </td>
      <td>{quantity}</td>
      <td><Rating
      style={{ maxWidth: 80 }}
      value={ratings}
      readOnly
    /></td>
      <td>
       <div>
         <Link to={`/updatetoy/${_id}`}><button  className="btn w-10 h-10 text-lg mr-3 btn-circle btn-xs"><FaEdit></FaEdit></button></Link>
        <button onClick={() => handleDelete(_id)} className="btn w-10 h-10 text-lg  btn-circle btn-xs"><FaTrashAlt></FaTrashAlt></button>
       </div>
      </td>
    </tr>
  );
};

export default MyToyRow;
