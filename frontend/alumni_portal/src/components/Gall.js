import React from "react";
import Gal_img from "./Gal_img";
import data from "./data/alumni.json";
const Gall = () => {
  return (
    <>
      {" "}
      <div className="place-content-center">
        <div className="p-3  items-center">
          <p className="text-5xl font-bold pb-3 text-center">Gallery</p>
         <div className=" place-content-center align-middle grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
         {data.map((data) => {
            return <Gal_img  img={data.img}  />;
          })}
         </div> 
        </div>
      </div>
    </>
  );
};

export default Gall;
