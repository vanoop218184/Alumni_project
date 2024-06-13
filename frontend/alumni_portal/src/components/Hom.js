import React from "react";
import m1 from "./images/college3.jpeg";
import Login from "./Login";
const Hom = () => {
  return (
    <>
      {" "}
      <div className="flex justify-center z-10">
        <div
          className="w-11/12 h-screen bg-cover bg-center flex flex-col justify-center  items-center   "
          style={{ backgroundImage: `url(${m1})` }}
        >
          <div className=" flex w-3/4 flex-col items-stretch ">
            <h2 className=" font-semibold text-black font-serif text-sm  md:text-lg lg:text-xl text-centre text-justify z-20 ">
              "I think the success of any college can be measured by the
              contribution the alumni make to our national life."
              <br />
            </h2>
            <div>
              <h2 className="font-bold text-black font-serif text-sm lg:text-3xl text-end">
                <a
                  className="btn btn-link text-orange-800  "
                  href="https://www.azquotes.com/author/7900-John_F_Kennedy"
                >
                  John F. Kennedy
                </a>
              </h2>
            </div>
      
          <div>
            <h1 className="text-center text-lg lg:text-5xl md:text-3xl text-orange-600 font-semibold font-serif  sm: whitespace-normal">
              WELCOME TO{" "}
              <span className=" text-yellow-400 btn-link no-underline">
                {" "}
                <a href="http://www.nits.ac.in/">NIT SILCHAR</a>
              </span>{" "}
              <br /> ALUMNI
            </h1>

            <div className="flex  flex-row justify-center space-x-2  py-2 items-center">
              <a className="btn btn-primary  text-white  bg-blue-900 font-bold hover:scale-105 hover:bg-green-900 left-2" href="/alumni">
                Connections
              </a>
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
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hom;
