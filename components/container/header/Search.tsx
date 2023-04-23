"use client";
import { BsSearch } from "react-icons/bs";
const Search = () => {
  return (
    <div className="flex-1 flex items-center bg-slate-50 px-4 py-2 rounded-3xl  gap-4 ">
      <input
        type="text"
        className="focus:outline-none bg-slate-50 flex-1 hidden  md:flex  "
        placeholder="Find your phone here..."
      />
      <span className="md:text-lg  font-bold ">
        <BsSearch />
      </span>
    </div>
  );
};

export default Search;
