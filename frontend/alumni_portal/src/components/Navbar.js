import React from "react";
import img from "./images/logo.jpg";
import Login from "./Login.js";
function Navbar() {
  return (
    <>
      <div className="navbar h-3 w-100% bg-blue-700 flex flex-row space-x-5 lg:justify-between sticky top-0 z-20 ">
        <div>
          {" "}
          <a href="/" className="flex ">
            <img
              className=" h-12 w-14 rounded-full ml-1 "
              src={img}
              alt=" silchar"
            />
            <p className="flex flex-col justify-center m-1 invisible font-extrabold text-2xl font-serif leading-2 sm:visible lg:text-4xl">
              AlumHub_NITS
            </p>
          </a>
        </div>
        <div className="navbar-end">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-500 text-white font-bold rounded-box w-30 divide-y divide-slate-700"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/alumni">Alumni</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/jobs">Jobs</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className=" hidden font-bold justify-between space-x-8 lg:flex pr-4">
            <ul
              className="menu menu-horizontal text-white flex flex-nowrap text-bas 
            "
            >
              <li className="hover:bg-blue-900 rounded-md">
                <a href="/">Home</a>
              </li>
              <li className="hover:bg-blue-900 rounded-md">
                <a href="/alumni">Alumni</a>
              </li>
              <li className="hover:bg-blue-900 rounded-md">
                <a href="/gallery">Gallery</a>
              </li>
              <li className="hover:bg-blue-900 rounded-md">
                <a href="/jobs">Jobs</a>
              </li>
              <li className="hover:bg-blue-900 rounded-md">
                <a href="/about">About</a>
              </li>
              <li className="hover:bg-blue-900 rounded-md">
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="flex">
            <div>
              <a
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="btn btn-primary  text-white  bg-blue-900 font-bold hover:scale-105 hover:bg-green-900 left-2 "
              >
                Login
              </a>
              <Login />
            </div>
            <div>
              <a 
              href="/signup"
              className="btn btn-primary  text-white  bg-blue-900 font-bold hover:scale-105 hover:bg-green-900 left-2 ">
                SignUp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
