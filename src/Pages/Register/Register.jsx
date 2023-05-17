import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateNamePhoto } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if (email && password) {
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          updateNamePhoto(result?.user, name, photo)
            .then(() => {
              toast.success("Welcome to Super Heo Hub");
            })
            .catch((err) => {
              console.log(err.message);
            });
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    console.log(name, email, password, photo);
  };
  return (
    <div className="">
      <div className="hero py-20 bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  required
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  required
                  placeholder="photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-black hover:bg-gray-900 btn-primary">
                  Register
                </button>
              </div>
            </form>
            <p className="text-sm text-center mt-3">
              Already Have an Account ?{" "}
              <Link className="underline" to="/login">
                Login
              </Link>
            </p>
            <p className="text-red-600 text-sm text-center">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
