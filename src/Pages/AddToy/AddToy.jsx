import React from "react";

const AddToy = () => {
  return (
    <div className=" bg-base-200 py-12">
      <div className="mt-5  container">
        <form className="bg-white  md:p-10 p-5 rounded-2xl md:w-8/12 mx-auto">
          <h1 className="text-xl md:text-3xl mb-5 text-center font-semibold">
            Add a Super Hero Toy
          </h1>
          <div className="flex mb-5 gap-6 flex-col md:flex-row items-center justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Toy Photo URL</span>
              </label>
              <input
              name="photo"
                type="text"
                placeholder="toy Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
              name="toytitle"
                type="text"
                placeholder="toy name"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="flex mb-5 gap-6 flex-col md:flex-row items-center justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
              name="sellername"
                type="text"
                placeholder="seller name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
              name="sellermail"
                type="text"
                placeholder="seller email"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="flex mb-5 gap-6 flex-col md:flex-row items-center justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Sub-Category</span>
              </label>
              <select name="category" className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  select category
                </option>
                <option>avengers</option>
                <option>justice league</option>
                <option>star wars</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
              name="price"
                type="text"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="flex mb-5 gap-6 flex-col md:flex-row items-center justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Ratings</span>
              </label>
              <input
              name="rating"
                type="text"
                placeholder="ratings"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
              name="quantity"
                type="text"
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
                placeholder="details"
                className="input h-20 pt-5 resize-none input-bordered"
              ></textarea>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-black">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
