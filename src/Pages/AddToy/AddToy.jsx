import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleSubmitToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const toytitle = form.toytitle.value;
    const sellername = form.sellername.value;
    const sellermail = user.email;
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

    const newToy = {
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

    fetch('https://superheros-server.vercel.app/alltoys',{
      method:"POST",
      headers:{
        'content-type':"application/json"
      },
      body:JSON.stringify(newToy)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Your Toy Insert Success',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        form.reset()
      }
    })    


  };

  return (
    <>
    <Helmet>
        <title>Super Hero Hub | Add A Toy</title>
      </Helmet>
    <div className="bg-category bg-home py-12">
      <div className="mt-5  container">
        <form
          onSubmit={handleSubmitToy}
          className="bg-transparent border glass shadow-xl backdrop-blur-3xl  md:p-10 p-5 rounded-2xl md:w-8/12 mx-auto"
          >
          <h1 className="text-xl md:text-3xl text-white mb-5 text-center font-semibold">
            Add a Super Hero Toy
          </h1>
          <div className="flex mb-5 gap-6 flex-col md:flex-row items-center justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Toy Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
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
                type="text"
                required
                defaultValue={user?.displayName}
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
                required
                type="text"
                defaultValue={user?.email}
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
                defaultValue="avengers"
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
                required
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
                </>
  );
};

export default AddToy;
