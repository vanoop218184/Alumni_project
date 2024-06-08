import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box  dark:bg-slate-900 dark:text-white">
          <form method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4  space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeHolder="Enter your Mail"
                className=" py-1 w-full px-3 border rounded-md outline-none"
              />
              <br />
            </div>
            <div className="mt-4  space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeHolder="Enter your Password"
                className=" py-1 w-full px-3 border rounded-md outline-none"
              ></input>
              <br />
            </div>

            <div className="flex justify-between mt-4">
              <button className=" bg-pink-500  text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                <Link
                  to="/signup"
                  className="underline text-blue-700 cursor-pointer"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
