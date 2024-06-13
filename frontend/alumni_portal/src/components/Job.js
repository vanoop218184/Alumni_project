import React, { useState } from "react";
import Job_card from "./Job_card.js";
import data from "./data/job.json";

let types = ["ME", "CSE", "ECE","EIE","CE","EE","MBA"];

const Job = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-10/12">
          <div className="flex justify-between p-5 py-8">
            <h1 className="font-extrabold font-serif text-3xl ">Jobs</h1>
            <div className="p-2 space-x-3 border-4 border-black-600 rounded-3xl">
              <label className="font-bold text-xl" htmlFor="search">
                Search
              </label>
              <input
                className="text-xl font-serif"
                type="search"
                name="search"
                id="search"
                placeholder="Enter Branch"
                value={searchTerm}
                onChange={handleSearch}
                
              />
            </div>
          </div>
          {types.map((val) => {
            const filteredData = data.filter(
              (item) =>
                item.id === val &&
                (searchTerm === "" || item.role.includes(searchTerm))
            );
            return filteredData.length > 0 ? (
              <div key={val} id={val}>
                <h1 className="font-extrabold py-7 text-xl text-center font-serif underline">
                  Jobs Related to {val} Students
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 border-2 border-slate-300 rounded-3xl">
                  {filteredData.map((job) => (
                    <Job_card
                      key={job.id}  // Ensure each Job_card has a unique key
                      company={job.company}
                      role={job.role}
                      type={job.type}
                      location={job.location}
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

export default Job;
