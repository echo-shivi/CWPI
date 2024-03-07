import React from 'react';

const SearchForm = ({ handleSearch, searchTerm, setSearchTerm }) => {


  return (
    <form className="max-w-md mx-auto" >
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-blue-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
       
         <div className="relative flex border border-blue-500 p-2 bg-white rounded-lg">
          <input
            type="search"
            id="default-search"
            className="block w-full  ps-10 text-sm border text-blue-400 border-blue-500 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search By Department"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <button onClick={handleSearch} className="ml-2 px-4 py-2 border border-blue-500 rounded-lg bg-blue-500 text-white">
            Submit
          </button>
        </div>

      </div>
    </form>
  );
};

export default SearchForm;
