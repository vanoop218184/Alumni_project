import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card w-auto  bg-base-100 shadow-xl  scale-75 hover:scale-90 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
        <figure>
          <img
            className="  w-50 h-64 my-6 p-5  border-4 border-gray-400"
            src={props.img}
            alt="dir"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg  font-extrabold">
            {props.name}
            <div className="bg-sky-200 rounded-lg text-center p-2 text-sm font-bold ">
              {props.pos}
            </div>
          </h2>

          <div className="card-actions  flex flex-row justify-between">
            <div className=" btn btn-outline btn-info">
              <a className="fontbold" href={props.more}>More</a>
            </div>
            <div className="badge badge-outline btn btn-outline btn-primary">
              <a className="fontbold" href={props.link}>Linkedin</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
