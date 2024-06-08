import React from "react";
import Alu_card from "./Alu_card";
import data from "./data/data.json";

let years = [
  2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
  2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
];

years = [...years].reverse();
const Alum = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-10/12">
          <div className="flex justify-between p-5 py-8">
            <h1 className="font-extrabold font-serif text-3xl">AlmaMaters</h1>
            <div className="p-2  space-x-3 border-4 border-black-600 rounded-3xl ">
              <label className="font-bold text-xl" htmlFor="xyz">
                Search
              </label>
              <input
                className="text-xl font-serif"
                type="search"
                name="xyz"
                id="xyz"
                placeholder="Enter Class "
              />
            </div>
          </div>
          {years.map((year) => {
            const val = data.filter((item) => item.Batch === year.toString());
            return val.length > 0 ? (
              <div key={year}>
                <h1 className="font-bold py-4 text-xl text-center font-serif underline">
                  CLASS OF {year}
                </h1>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 border-2 border-slate-300 rounded-3xl">
                  {val.map((filteredItem) => (
                    <Alu_card
                      key={filteredItem.id}
                      img={filteredItem.img}
                      name={filteredItem.name}
                      post={filteredItem.post}
                      more={filteredItem.more}
                    />
                  ))}
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </>
  );
};

export default Alum;
