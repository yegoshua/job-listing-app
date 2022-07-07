import React, { useState, useEffect } from "react";
import data from "./assets/data.json";
import JobBoardComponent from "./components/JobBoardComponent";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  useEffect(() => setJobs(data), []);

  const filterFunction = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }
    const tags = [role, level];
    if (tools) {
      tags.push(...tools);
    }
    if (languages) {
      tags.push(...languages);
    }

    return tags.some((tag) => filters.includes(tag));
  };

  const hadnleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };
  const filteredJobs = jobs.filter(filterFunction);

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <div className="App scroll-smooth">
      <header className="bg-teal-500 mb-12 ">
        <img className="w-full" src="/images/bg-header-desktop.svg" alt="bg" />
      </header>
      <div className="container mx-auto">
        {filters.length > 0 && (
          <div
            className={`flex bg-white shadow-lg my-16 mx-4 p-6 rounded-md  flex-row items-center`}
          >
            <div className="flex flex-row flex-wrap">
              {filters.map((filter) => (
                <span className=" m-4 rounded font-bold" key={filter}>
                  <span className="text-teal-500 bg-teal-100  p-2  ">
                    {filter}
                  </span>
                  <span
                    onClick={() => handleFilterClick(filter)}
                    className="bg-teal-500 text-teal-100 p-2 cursor-pointer"
                  >
                    ✕
                  </span>
                </span>
              ))}
            </div>
            <button className="ml-auto" onClick={clearFilters}>
              Clear
            </button>
          </div>
        )}

        {filteredJobs.length === 0 ? (
          <p>Jobs are Fetching...</p>
        ) : (
          filteredJobs.map((job) => (
            <JobBoardComponent
              job={job}
              key={job.id}
              hadnleTagClick={hadnleTagClick}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
