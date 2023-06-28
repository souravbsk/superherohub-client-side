import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiStarfighter } from "react-icons/gi";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import Hamburger from "hamburger-react";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogOut = () => {
    toast.success("log out success");
    navigate("/login");
    logOut();
  };

  return (
    <header className="border-b border-slate-400 shadow-2xl">
      <div className="navbar flex-col  md:flex-row  md:py-9 container ">
        <div className="flex-1 w-full">
          <div className="flex text-white justify-between w-full">
            <Link className="md:btn  flex-col md:flex-row flex btn-ghost normal-case text-xl">
              <p className="text-5xl">
                <GiStarfighter></GiStarfighter>
              </p>
              <h4>Super Hero Hub</h4>
            </Link>
            <button className="block md:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>
          </div>
        </div>

          <ul className={`flex h-screen md:h-auto md:text-white flex-col md:flex-row items-center md:static p-10 md:p-0 top-24 z-50 duration-300 bg-white lg:bg-transparent absolute gap-6 ${isOpen ? "left-0" : "-left-96"}`}>
            <li>
              <NavLink className="font-medium">Home</NavLink>
            </li>
            <li>
              <NavLink to="/toys" className="font-medium">
                All Toys
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to="/mytoys" className="font-medium">
                    My Toys
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/addtoy" className="font-medium">
                    Add A Toy
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink to="/blog" className="font-medium">Blogs</NavLink>
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
                  <button onClick={handleLogOut} className="btn bg-black">
                    Log Out
                  </button>
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
    </header>
  );
};

export default Header;
