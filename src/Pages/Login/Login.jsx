import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const {loginUser} = useContext(AuthContext)
  const [error,setError] = useState("");
  const handleSignIn = e => {
    e.preventDefault()
    setError("")
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    if(email && password){
      loginUser(email,password)
      .then(result => {
        const user = result?.user;
        form.reset()
        toast.success("WelCome To Super Hero Hub")

      })
      .catch(err => {
        console.log(err.message);
      })
    }

  }
  return (
    <div className="">
      <Helmet>
        <title>Super Hero Hub | Login</title>
      </Helmet>
      <div className="hero py-20 bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <h1 className="text-3xl text-center font-bold">Sign In</h1>
            <form onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-black hover:bg-gray-900 btn-primary">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center mt-3 text-sm">Create A New Account? <Link className="underline" to="/register">Register</Link></p>
            <p className="text-red-600 text-sm text-center">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
