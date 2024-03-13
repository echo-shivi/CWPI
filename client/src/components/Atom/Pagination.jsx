import React from 'react';

const Pagination = ({ currentPage, totalPages, firstIndex, onPageChange, lastIndex, pages, prevPage, nextPage,totalEntries}) => {
  return (
    <nav className=" flex justify-between pt-10" aria-label="Pagination">
      <p className='text-base font-medium'>Showing {firstIndex } to {lastIndex} of {totalEntries} </p>
      <ul className='flex'>
        <li>
          <a href="#" onClick={prevPage} className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-not-allowed rounded-l-md">
            <span className="sr-only">Previous</span>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M8.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 10H16a1 1 0 010 2H5.414l3.293 3.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </li>
        {
          pages.map((page, index) => (
            <li key={index} className={`${currentPage === totalPages ? 'active' : ''}`}>
              <a href="#" onClick={() => onPageChange(page)} className={`relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700  border  ${currentPage === page ? 'bg-blue-300 border-blue-300' : 'bg-white border-gray-300'}`}>
                {page}
              </a>
            </li>
          ))
        }

        <li>
          <a href="#" onClick={nextPage} className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-not-allowed rounded-r-md">
            <span className="sr-only">Next</span>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M11.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 10H4a1 1 0 010-2h10.586L11.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />

            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};


export default Pagination;
