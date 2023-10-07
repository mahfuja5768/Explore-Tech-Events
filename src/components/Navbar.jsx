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
      <li className="md:hidden w-1/2">
        <Link to="/login" className="btn btn-sm rounded-sm mb-5">
          Login
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar text-white">
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
            className="btn btn-ghost normal-case lg:text-3xl hidden lg:flex"
          >
            Explore-Tech-Events
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      <div
        className="navbar-end flex lg:hidden me-4"
      >
        <Link
          to="/"
          className="btn btn-ghost normal-case  text-xl mt-3 block lg:hidden"
        >
          Explore-Tech-Events
        </Link>
      </div>
      <div
        className="navbar-end hidden md:flex"
      >
        <Link to="/login" className="btn md:btn-sm">
          Login
        </Link>
      </div>
     
    </div>
  );
};

export default Navbar;
