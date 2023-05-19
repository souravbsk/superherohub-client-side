import React from "react";

const Appointment = () => {
  return (
    <div className="bg-details-card mb-20 md:mb-32">
        <div className="md:mt-32 mt-20 container ">
      <div className=" ">
        <div className="hero-content gap-12 md:gap-20 flex-col lg:flex-row-reverse">
          <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="text-center  flex-1 lg:text-left">
            <h4 className="text-xl mb-2 md:mb-5 font-medium text-gray-600">
              Make Appointment
            </h4>
            <h4 className="md:text-5xl  text-gray-600">
              Join Our Fun with Cutie Kids
            </h4>
            <p className=" py-2 md:py-6">
              Formulate innovative web-readiness and installed base ideas.
              Distinctively integrate high-payoff paradigms without next
              generation systems disseminate holistic e-services through
              customer directed expertise.
            </p>
            <button className="btn btn-outline rounded-full font-normal">
              Learn More
            </button>
          </div>
          <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="card flex-1 w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="flex flex-col md:flex-row  items-center gap-2">
                <div className="form-control w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-full">
                  <input
                    type="phone"
                    placeholder="Phone No"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div>
                <div className="form-control w-full">
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <div className="form-control w-full">
                  <input
                    type="text"
                    placeholder="child name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-full">
                  <input
                    type="text"
                    placeholder="Age of Child"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control w-full">
                  <textarea
                    type="text"
                    placeholder="Details"
                    className="input input-bordered resize-none p-5 h-28"
                  ></textarea>
                </div>

              <div className="form-control w-full mt-6">
                <button className="btn  rounded-full">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Appointment;
