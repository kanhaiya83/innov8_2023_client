import React from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  return (
    <div className="bg-black/10 w-full  cursor-pointer flex h-[5vh]  p-10 items-center justify-between  text-white font-medium">
      <div className="navbar-mobile md:hidden navbar"></div>

      {/* navbar desktop */}
      <div className="navbar-desktop navbar w-full ">
        {/* logo */}
        <Link
          to="/"
          className="flex items-center justify-center text-3xl font-extrabold"
        >
          Gestures
        </Link>
        {/* PLayground Learn options */}
        <div className="flex gap-2 rounded-full p-2 px-4">
          <Link to="/playground" className="navbar-item ">
            Playground{" "}
          </Link>
          <Link to="/learn" className="navbar-item ">
            Learn
          </Link>
        </div>
        {/* ProLinke / Sign in option */}
        {/* Logic for showing whether to show profile image or sign in Image */}
        <Link to="/signin">
          <button
            className={` ${
              location.pathname.includes("signin") ||
              location.pathname.includes("profile")
                ? "hidden"
                : ""
            } p-2 px-4 rounded-xl border-2 border-white hover:bg-white hover:text-black transition hover:ease-in-out hover:scale-110`}
          >
            {" "}
            Sign In
          </button>
        </Link>
        <Link className="hidden" to="/profile">
          <button className="p-2 px-4 rounded-xl border-2 border-white hover:bg-white hover:text-black transition hover:ease-in-out hover:scale-110">
            {" "}
            Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
