import React from "react";

const Image_slider = () => {
  return (
    <>
      {" "}
      <div className="w-100% flex justify-center" >
        {" "}
        <div className=" w-9/12 m-3 mt-7 p-3 px-10 flex justify-center ">
          {" "}
          <div className="carousel w-auto border-4 border-sky-500 border-spacing-2 ">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="http://www.nits.ac.in/images%20of%20site/8.jpg"
                className="w-full"
                alt="img1"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="http://www.nits.ac.in/images%20of%20site/1.jpg"
                className="w-full"
                alt="img2"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="http://www.nits.ac.in/images%20of%20site/2.jpg"
                className="w-full"
                alt="img3"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="http://www.nits.ac.in/images%20of%20site/4.jpg"
                className="w-full"
                alt="img4"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image_slider;
