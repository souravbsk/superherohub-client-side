import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const {loginUser,forgetPass} = useContext(AuthContext);
  const userEmail = useRef(null);
  const [error,setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/"
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
        navigate(from,{replace:true})
        form.reset()

        toast.success("WelCome To Super Hero Hub")

      })
      .catch(err => {
        setError(err.message);
      })
    }

  }


  const handleForgetPass = () => {
    const email = userEmail.current.value;
    if(!email){
      toast.error("please enter your Email")
      return
    }
    forgetPass(email)
    .then(() => {
      toast.success("please check your mail for reset link")
    })
    .catch((err) => {
      setError(err.message)
    })
  }
  return (
    <div>
      <Helmet>
        <title>Super Hero Hub | Login</title>
      </Helmet>
      <div className="hero bg-login py-12 md:py-20 ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl backdrop-blur-3xl border">
          <div className="card-body">
          <h1 className="text-3xl text-center font-bold text-white">Sign In</h1>
            <form onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white ">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  ref={userEmail}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white ">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <button type="button" onClick={handleForgetPass} className="label-text text-white  link link-hover">
                    Forgot password?
                  </button>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn  btn-primary">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center mt-3 text-white text-sm">Create A New Account? <Link className="underline" to="/register">Register</Link></p>
            <p className="text-red-600 text-sm text-center">{error}</p>
          <SocialLogin from={from}></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
