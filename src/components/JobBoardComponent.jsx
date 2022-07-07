import React from "react";

const JobBoardComponent = ({
  job: {
    id,
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  hadnleTagClick,
}) => {
  const tags = [role, level];
  if (tools) {
    tags.push(...tools);
  }
  if (languages) {
    tags.push(...languages);
  }

  return (
    <div
      className={`flex flex-col bg-white shadow-lg my-16 mx-4 p-6 rounded-md ${
        featured && "border-l-4 border-teal-500"
      } lg:flex-row lg:items-center`}
    >
      <div>
        <img
          className="-mt-16 w-20 mb-4 lg:my-0 lg:h-24 lg:w-24"
          src={logo}
          alt={company}
        />
      </div>
      <div className="flex-col justify-between flex lg:ml-4 ">
        <h3 className="font-bold my-2 text-teal-500">
          {company}
          {isNew && (
            <span className="text-teal-100 bg-teal-500 font-bold ml-4 py-1 px-2 text-lg rounded-full uppercase">
              New!
            </span>
          )}
          {featured && (
            <span className="text-white bg-gray-800  font-bold m-2 py-1 px-2 text-lg rounded-full uppercase">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-bold my-2 text-xl">{position}</h2>
        <p className="text-gray-700 my-2">
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div className="flex items-center flex-wrap border-t-2 pt-4 border-gray-300 border-solid lg:ml-auto lg:border-none  lg:pt-0 ">
        {tags
          ? tags.map((tag) => (
              <span
                onClick={() => hadnleTagClick(tag)}
                key={tag}
                className="text-teal-500 bg-teal-100 font-bold mr-2 my-2 p-2 rounded-md cursor-pointer "
              >
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobBoardComponent;
