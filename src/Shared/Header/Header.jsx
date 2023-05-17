import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiStarfighter } from "react-icons/gi";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    toast.success("log out success")
    navigate("/login")
    logOut()
  }

  return (
    <header>
      <div className="navbar py-9 container bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl">
            <p className="text-5xl">
              <GiStarfighter></GiStarfighter>
            </p>
            <h4>Super Hero Hub</h4>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="flex items-center gap-6">
            <li>
              <NavLink className="font-medium">Home</NavLink>
            </li>
            <li>
              <NavLink className="font-medium">All Toys</NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink className="font-medium">My Toys</NavLink>
                </li>
                <li>
                  <NavLink to="/addtoy"  className="font-medium">Add A Toy</NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink className="font-medium">Blogs</NavLink>
            </li>
            {user ? (
              <>
                <li>
                  <NavLink>
                    {user?.photoURL ? (
                      <img
                        className="w-12 h-12 object-cover rounded-full"
                        title={user?.displayName}
                        src={user.photoURL}
                        alt=""
                      />
                    ) : (
                      <span>{user?.email}</span>
                    )}
                  </NavLink>
                </li>
                <li>
                  <button onClick={handleLogOut} className="btn bg-black">Log Out</button>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/login" className="text-lg font-medium">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
