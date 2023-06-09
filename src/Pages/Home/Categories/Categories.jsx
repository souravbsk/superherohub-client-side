import React from "react";
import { Tilt } from "react-tilt";

const Categories = () => {
  return (
    <div data-aos="fade-up" className=" bg-category mt-20 md:mt-32 ">
      <div className="mb-20">
        <h1 className="text-center text-xl md:text-3xl text-white font-semibold">
          Our Categories
        </h1>
      </div>
      <div className="grid container grid-cols-1 md:grid-cols-3 gap-8">
        <Tilt>
          <div className="card rounded-3xl  rounded-bl-none rounded-tr-none group relative overflow-hidden  bg-transparent backdrop-blur-3xl shadow-2xl border-2 border-purple-700 ">
            <figure>
              <img
                className="md:h-[400px] scale-75 group"
                src="https://i.ibb.co/8Y12ngH/pngwing-com-15-1.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body  text-white absolute  opacity-0 group-hover:opacity-100 transition-all duration-700  bottom-0 backdrop-blur-2xl">
              <h2 className="card-title group text-xl md:text-4xl">Marvel</h2>
              <p className="group text-sm">
                Marvel is a renowned franchise known for its comic books and
                movies featuring beloved superheroes. With characters like
                Spider-Man, Iron Man, and Captain America, it has created a vast
                interconnected universe known as the Marvel Universe.
              </p>
            </div>
          </div>
        </Tilt>
        <Tilt>
          <div className="card rounded-3xl  rounded-bl-none rounded-tr-none p-0 group relative overflow-hidden  bg-transparent  backdrop-blur-3xl shadow-2xl border-2 border-purple-700 ">
            <figure>
              <img
                className="md:h-[400px] scale-75 group"
                src="https://i.ibb.co/9v78wfp/Star-Wars-Free-PNG.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body  text-white absolute  opacity-0 group-hover:opacity-100 transition-all duration-700  bottom-0 backdrop-blur-2xl">
              <h2 className="card-title group text-xl md:text-4xl">
                Star Wars
              </h2>
              <p className="group text-sm">
                Star Wars is a beloved science fiction franchise created by
                George Lucas, featuring epic battles between the forces of good
                and evil in a galaxy far, far away, with iconic characters like
                Luke Skywalker and Darth Vader.
              </p>
            </div>
          </div>
        </Tilt>
        <Tilt>
          <div className="card rounded-3xl  rounded-bl-none rounded-tr-none group relative overflow-hidden  bg-transparent backdrop-blur-3xl shadow-2xl border-2 border-purple-700 ">
            <figure>
              <img
                className="md:h-[400px] scale-75 group"
                src="https://i.ibb.co/cgkJSHq/Batman-Comics-Transparent-PNG.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body  text-white absolute  opacity-0 group-hover:opacity-100 transition-all duration-700  bottom-0 backdrop-blur-2xl">
              <h2 className="card-title group text-xl md:text-4xl">
                Justice League
              </h2>
              <p className="group text-sm">
                The Justice League, comprising superheroes like Superman,
                Batman, Wonder Woman, The Flash, Aquaman, and Green Lantern,
                forms an elite team in DC Comics. They join forces to protect
                the world from supervillains, using their unique abilities and
                teamwork.
              </p>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Categories;
