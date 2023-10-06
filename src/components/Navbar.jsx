import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navList = (
    <>
      <li className="lg:mx-2 mb-4 lg:mb-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white hover:text-white underline decoration-[#ffed48] decoration-2 underline-offset-8 font-bold hover:bg-transparent"
              : "text-white hover:text-[#ffed48] hover:bg-transparent"
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
              ? "text-white hover:text-white underline decoration-[#ffed48] decoration-2 underline-offset-8 font-bold hover:bg-transparent"
              : "text-white hover:text-[#ffed48]  hover:bg-transparent"
          }
          to={"/speakers"}
        >
          Speakers
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-transparent">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navList}
          </ul>
        </div>
        <Link
          to="/"
          className="normal-case  text-white font-bold text-2xl lg:text-3xl cursor-pointer"
        >
          Explore-Tech-Events
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
