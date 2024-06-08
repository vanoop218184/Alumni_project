import React from "react";

const Alu_card = (props) => {
  return (
    <>
      <div className="p-3 m-2 hover:scale-110 ">
        <div className=" p-2 border-2 border-solid border-gray-400 dark:border-gray-400 shadow-stone-400 shadow-lg rounded-3xl">
          <div className="w-full flex items-center justify-stretch  sm:justify-start sm:w-auto">
            <img
              className="object-cover w-20 h-20 mt-3 mr-3 rounded-full"
              src={props.img}
            />
            <div className=" w-full">
              <p
                className="font-display mb-2 text-xl font-semibold  dark:text-gray-200"
                itemprop="author"
              >
                {props.name}
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
            <div className="mb-4 md:text-lg text-gray-400">
              <p>{props.post}</p>
            </div>

            <div className="flex gap-4">
              <a
                title="LinkedIn profile"
                href={props.more}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn ">LinkedIn</button>
              </a>

              <a
                title="More"
                href={props.more}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alu_card;
