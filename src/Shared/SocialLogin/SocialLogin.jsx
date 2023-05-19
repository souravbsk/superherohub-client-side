import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SocialLogin = ({from}) => {
    const {loginWithGoogle} = useContext(AuthContext);
    const navigate =useNavigate();

    const handleGoogleSignIn = () => {
        loginWithGoogle()
        .then(result => {
            navigate(from,{replace:true})
            toast.success("welcome to super hero hub")
        })
        .catch((err) => {
            console.log(err.message);
        })
    }
  return (
    <div className="text-white">
      <div className="divider">OR</div>
      <div className="text-center flex justify-center">
        <button onClick={handleGoogleSignIn} className="backdrop-blur-3xl border-2 border-white flex items-center justify-center btn-circle btn-outline">
          <FcGoogle className="text-3xl"></FcGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
