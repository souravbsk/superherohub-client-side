import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToysCard from "./ToysCard";
import { Helmet } from "react-helmet-async";

const AllToys = () => {
  const allHeros = useLoaderData();
  const [toyData, setToyData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
fetch(`http://localhost:5000/alltoycollection/${searchText}`)
.then(res => res.json())
.then(data => {
  if(data){
    setToyData(data)
  }
})
  },[searchText])
  return (
    <>
      <Helmet>
        <title>Super Hero Hub | All Toys</title>
      </Helmet>
      <div className="py-14 alltoybg ">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-center text-3xl font-semibold">
              Our Super Heros
            </h1>
          </div>
          <div className="">
            <div className="flex justify-end items-center mb-6">
              <input
                type="text"
                placeholder="Search Toy Name"
                className="p-2 border border-gray-300 rounded-md w-64"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <div className="overflow-x-auto border rounded-3xl">
              <table className="table text-center table-compact w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Toy Name</th>
                    <th>Seller</th>
                    <th>Sub-category</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {toyData?.map((hero) => (
                    <ToysCard key={hero._id} hero={hero}></ToysCard>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <th>Toy Name</th>
                    <th>Seller</th>
                    <th>Sub-category</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllToys;
