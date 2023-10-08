import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./ProviderContext/AuthProvider";
import toast from "react-hot-toast";

const Navbar2 = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Successfully log out"))
      .catch((err) => console.log(err));
  };

  const navList = (
    <>
      <li className="lg:mx-2 mb-4 lg:mb-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-black hover:text-black underline decoration-black decoration-2 underline-offset-8 font-bold hover:bg-transparent"
              : "text-black hover:text-black hover:bg-transparent"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li className="lg:mx-2 mb-4 lg:mb-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-black hover:text-black underline decoration-black decoration-2 underline-offset-8 font-bold hover:bg-transparent"
              : "text-black hover:text-black  hover:bg-transparent"
          }
          to={"/about"}
        >
          About
        </NavLink>
      </li>
      <li className="lg:mx-2 mb-4 lg:mb-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-black hover:text-black underline decoration-black decoration-2 underline-offset-8 font-bold hover:bg-transparent"
              : "text-black hover:text-black  hover:bg-transparent"
          }
          to={"/moreEvents"}
        >
          More Events
        </NavLink>
      </li>
      {user && (
        <li className="lg:mx-2 mb-4 lg:mb-0">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-black hover:text-black underline decoration-black decoration-2 underline-offset-8 font-bold hover:bg-transparent"
                : "text-black hover:text-black  hover:bg-transparent"
            }
            to="/selectedEvent"
          >
            Selected Event
          </NavLink>
        </li>
      )}
      <li className="md:hidden w-1/2">
        <Link to="/login" className="btn btn-sm rounded-sm mb-5">
          Login
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-xl py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#292a31] rounded-lg w-52"
          >
            {navList}
          </ul>
        </div>
        <div data-aos="fade-right" data-aos-duration="3000">
          <Link
            to="/"
            className="btn btn-ghost normal-case lg:text-3xl hidden lg:flex text-black"
          >
            Explore-Tech-Events
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      <div className="navbar-end flex lg:hidden me-4">
        <Link
          to="/"
          className="btn btn-ghost normal-case  text-xl mt-3 block lg:hidden"
        >
          Explore-Tech-Events
        </Link>
      </div>
      <div className="navbar-end hidden md:flex me-5">
        {user && (
          <>
            <img
              src={user.photoURL}
              className="rounded-full w-[45px] h-[45px]"
              alt="user photo"
            />
            <h3 className="mx-5 text-black text-xl">{user.displayName}</h3>
          </>
        )}
        {user && 
          <Link
            to="/login"
            onClick={handleLogout}
            className="btn btn-sm rounded-sm normal-case text-xl"
          >
            Log out
          </Link>}
        {!user && 
          <Link to="/login" className="btn btn-sm text-xl rounded-sm normal-case">
          Login
        </Link>}
      </div>
    </div>
  );
};

export default Navbar2;
