import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Gal_img = (props) => {
  const img = props.img;
  const [img2, setimg2] = useState(img);
  const fun=(e)=>{
    setimg2(e.target.__reactProps$p5uu51o4xb);
    document.getElementById("falana").src = `${img2}`;
    document.getElementById("my_modal_2").showModal();
    
  }
  useEffect(()=>{
    setimg2(img);
  },[fun])
  
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="p-2 hover:scale-110"
        onClick={(e)=>{fun(e)}}
        
      >
        <img
          className="h-60 ml-6 border-2 border-spacing-1 border-black w-screen sm:w-auto md:w-auto lg:w-auto"
          src={img}
        ></img>
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <Link
            to="/gallery"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_2").close()}
          >
            ✕
          </Link>
          <img id="falana" className=" w-screen" src=""></img>
        </div>
      </dialog>
    </>
  );
};

export default Gal_img;
