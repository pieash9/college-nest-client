import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";
import useUsersData from "../../hooks/useUsersData";
const Navbar = () => {
  const { user, logout } = useAuth();
  const { userData } = useUsersData();
  const navLinkClassName = ({ isActive }) =>
    isActive
      ? "text-orange-500 font-medium  bg-gray-700  border-b-2 border-orange-500 duration-200"
      : "text-gray-600 hover:bg-gray-700 hover:text-orange-500 py-1  font-medium";

  const navItems = (
    <>
      <NavLink
        className={navLinkClassName}
        style={{ backgroundColor: "transparent" }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={navLinkClassName}
        style={{ backgroundColor: "transparent" }}
        to="/colleges"
      >
        Colleges
      </NavLink>
      <NavLink
        className={navLinkClassName}
        style={{ backgroundColor: "transparent" }}
        to="/admission"
      >
        Admission
      </NavLink>
      <NavLink
        className={navLinkClassName}
        style={{ backgroundColor: "transparent" }}
        to="/myCollege"
      >
        My College
      </NavLink>
    </>
  );
  // nav image and login logout
  const navImageLogout = (
    <>
      {userData?.image ? (
        <Link to="/profile">
          <div
            className="avatar tooltip tooltip-bottom border-orange-400 border rounded-full"
            data-tip={userData?.name}
          >
            <div className="w-8 rounded-full">
              <img src={userData?.image} className="object-top" />
            </div>
          </div>
        </Link>
      ) : (
        <FaRegUserCircle className="text-gray-700" size={24} />
      )}

      {user ? (
        <NavLink
          className="text-gray-600 hover:bg-gray-700 hover:text-orange-500  py-2 rounded-md font-medium "
          style={{ backgroundColor: "transparent" }}
          onClick={logout}
        >
          Logout
        </NavLink>
      ) : (
        <NavLink
          className={navLinkClassName}
          style={{ backgroundColor: "transparent" }}
          to="/login"
        >
          Login
        </NavLink>
      )}
    </>
  );
  return (
    <div className="shadow-lg shadow-gray-400 bg-base-100 sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto justify-between   !py-1 ">
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
              className="menu menu-compact dropdown-content font-medium mt-3 p-2 shadow bg-base-100 rounded-box w-52 flex items-center text-lg"
            >
              {navItems}
            </ul>
          </div>
          <Link className="flex items-center gap-1" to="/">
            <img className="w-16" src={logo} alt="Logo" />
            <h3 className="font-semibold text-xl dark:text-base text-gray-500 hidden md:block">
              College Nest
            </h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-medium text-base flex items-center gap-5">
            {navItems}
          </ul>
        </div>
        <div className=" font-medium text-base flex items-center gap-4">
          {navImageLogout}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
