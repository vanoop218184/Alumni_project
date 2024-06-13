import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box  dark:bg-slate-900 dark:text-white">
          <form method="dialog " onSubmit={handleSubmit(onSubmit)}>
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
                placeholder="Enter your Mail"
                className=" py-1 w-full px-3 border rounded-md outline-none"
                {...register("email", { required: true })}

              />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              <br />
            </div>
            <div className="mt-4  space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className=" py-1 w-full px-3 border rounded-md outline-none"
                {...register("password", { required: true })}   
              ></input>
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
              <br />
            </div>

            <div className="flex justify-between mt-4">
              <button className=" bg-pink-500  text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p className="">
              Not registered? 
                <Link
                  to="/Signup"
                  className="underline cursor-pointer"
                >
                  <span className=" ml-2 btn-link">Sign Up</span>
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
