import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const { createUser, updateNamePhoto } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
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
              navigate("/",{replace:true})
            })
            .catch((err) => {
              setError(err.message);
            });
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };
  return (
    <div className="">
      <Helmet>
        <title>Super Hero Hub | Registration</title>
      </Helmet>
      <div className="hero py-12 md:py-20 bg-login bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
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
          <SocialLogin from="/"></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
