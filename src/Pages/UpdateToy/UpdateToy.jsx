import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toyDetails = useLoaderData();
  console.log(toyDetails);
  const {price,details,quantity,toytitle,_id} = toyDetails;
  const handleToyUpdate = e => {
    e.preventDefault();


    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    const updateToyInfo = {price,quantity,details};
    console.log(updateToyInfo);

    fetch(`http://localhost:5000/toydetails/${_id}`,{
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
       <div className=" bg-base-200 bg-home py-12">
            <div className="mt-5  container">
              <form
                onSubmit={handleToyUpdate}
                className="bg-white  p-5 rounded-2xl  mx-auto"
              >
                <h1 className="text-xl md:text-3xl mb-5 text-center font-semibold">
                  Update {toytitle}
                </h1>
                <div className="flex mb-5 gap-6 flex-col md:flex-row items-center justify-between">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      name="price"
                      required
                      defaultValue={price}
                      type="number"
                      min={0}
                      placeholder="Price"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Quantity</span>
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
                      <span className="label-text">Details</span>
                    </label>
                    <textarea
                      name="details"
                      required
                      defaultValue={details}
                      placeholder="details"
                      className="input h-28 pt-5 resize-none input-bordered"
                    ></textarea>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-black">Update Toy</button>
                </div>
              </form>
            </div>
          </div>     
    </div>
  );
};

export default UpdateToy;
