import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState();
  const [sortValue,setSortValue] = useState("lth")
console.log(sortValue);
  const url = `https://superheros-server.vercel.app/usertoys/${sortValue}/?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user,sortValue]);


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://superheros-server.vercel.app/toydetails/${id}/?email=${user?.email}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingData = toys.filter((toy) => toy._id !== id);
              setToys(remainingData);
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="bg-my-toy bg-base-300">
      <Helmet>
        <title>Super Hero Hub | My Toys</title>
      </Helmet>
      <div className="container py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-center text-xl md:text-3xl font-semibold">My Toys</h1>
        </div>
        <select onChange={(e) => setSortValue(e.target.value)} className="select select-bordered w-40 max-w-xs">
            <option value="lth">Low to High</option>
            <option value="htl">High to Low</option>
          </select>
        <div className="overflow-x-auto w-full">
         
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Ratings</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {toys?.map((toy) => (
                <MyToyRow
                  handleDelete={handleDelete}
                  key={toy._id}
                  toy={toy}
                ></MyToyRow>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Quantity</th>
                <th>Ratings</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
