import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toyDetails = useLoaderData();
  console.log(toyDetails);
  const {price,details,quantity,toytitle,_id,ratings,category,photo,sellermail,sellername} = toyDetails;

  const handleToyUpdate = e => {
    e.preventDefault();


    const form = e.target;
    const photo = form.photo.value;
    const toytitle = form.toytitle.value;
    const sellername = form.sellername.value;
    const sellermail = form.sellermail.value;
    const category = form.category.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    if (price < 0) {
      toast.error("please enter a valid price");
      return;
    }
    if (quantity < 0) {
      toast.error("please enter a positive value");
      return;
    }
    if (ratings < 0) {
      toast.error("please enter a positive value");
      return;
    }


    const updateToyInfo = {
      photo,
      toytitle,
      sellername,
      sellermail,
      category,
      price,
      ratings,
      quantity,
      details,
    };


    fetch(`https://superheros-server.vercel.app/toydetails/${_id}`,{
      method:"PUT",
      headers:{
        'content-type':"application/json"
      },
      body:JSON.stringify(updateToyInfo)
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        Swal.fire({
          title: 'Success',
          text: 'Toy Update Success!',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        
      }
    })
  };
  return (
    <div>
       <div className=" bg-home py-12">
            <div className="mt-5  container">
            <form
          onSubmit={handleToyUpdate}
          className="bg-transparent border shadow-3xl backdrop-blur-3xl  md:p-10 p-5 rounded-2xl md:w-8/12 mx-auto"
          >
          <h1 className="text-xl md:text-3xl text-white mb-5 text-center font-semibold">
           Update {toytitle}
          </h1>
          <div className="flex mb-5 gap-6 flex-col md:flex-row items-center justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Toy Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                defaultValue={photo}
                required
                placeholder="toy Photo URL"
                className="input input-bordered"
                />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Toy Name</span>
              </label>
              <input
                name="toytitle"
                defaultValue={toytitle}
                required
                type="text"
                placeholder="toy name"
                className="input input-bordered"
                />
            </div>
          </div>
          <div className="flex mb-5 gap-6 flex-col md:flex-row items-center justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Seller Name</span>
              </label>
              <input
                name="sellername"
                defaultValue={sellername}
                readOnly
                type="text"
                required
                placeholder="seller name"
                className="input input-bordered"
                />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Seller Email</span>
              </label>
              <input
                readOnly
                name="sellermail"
                defaultValue={sellermail}
                required
                type="text"
                placeholder="seller email"
                className="input input-bordered"
                />
            </div>
          </div>
          <div className="flex mb-5 gap-6 flex-col md:flex-row items-center justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Sub-Category</span>
              </label>
              <select
                required
                name="category"
                defaultValue={category}
                className="select select-bordered w-full max-w-xs"
              >
                <option value="avengers">avengers</option>
                <option value="justice-league">justice league</option>
                <option value="star-wars">star wars</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Price</span>
              </label>
              <input
                name="price"
                required
                type="number"
                defaultValue={price}
                min={0}
                placeholder="Price"
                className="input input-bordered"
                />
            </div>
          </div>
          <div className="flex mb-5 gap-6 flex-col md:flex-row items-center justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Ratings</span>
              </label>
              <input
                name="ratings"
                type="number"
                defaultValue={ratings}
                required
                min={0}
                max={5}
                placeholder="ratings"
                className="input input-bordered"
                />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Quantity</span>
              </label>
              <input
                name="quantity"
                required
                defaultValue={quantity}
                min={0}
                type="number"
                placeholder="quantity"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className=" mb-5 ">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Details</span>
              </label>
              <textarea
                name="details"
                defaultValue={details}
                required
                placeholder="details"
                className="input h-32 pt-5 resize-none input-bordered"
                ></textarea>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-black">Submit</button>
          </div>
        </form>
            </div>
          </div>     
    </div>
  );
};

export default UpdateToy;
