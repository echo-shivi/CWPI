import React, { useState } from 'react';
import DatePicker from '../../../Atom/DatePIcker';
import SearchForm from '../../../Atom/SearchBar';
import Pagination from '../../../Atom/Pagination';

const dummyData = [
  { rank: 1, cwpiScoreAlpha: 'A', cwpiScoreBeta: 'B', data: 'Current month report is not submitted', department: 'IT' },
  { rank: 1, cwpiScoreAlpha: 'A', cwpiScoreBeta: 'B', data: 'Current month report is not submitted', department: 'IT' },

  { rank: 1, cwpiScoreAlpha: 'A', cwpiScoreBeta: 'B', data: 'Current month report is not submitted', department: 'IT' },

  { rank: 1, cwpiScoreAlpha: 'A', cwpiScoreBeta: 'B', data: 'Current month report is not submitted', department: 'IT' },

  { rank: 1, cwpiScoreAlpha: 'A', cwpiScoreBeta: 'B', data: 'Current month report is not submitted', department: 'IT' },

  { rank: 1, cwpiScoreAlpha: 'A', cwpiScoreBeta: 'B', data: 'Current month report is not submitted', department: 'IT' },

  { rank: 1, cwpiScoreAlpha: 'A', cwpiScoreBeta: 'B', data: 'Current month report is not submitted', department: 'IT' },

  { rank: 1, cwpiScoreAlpha: 'A', cwpiScoreBeta: 'B', data: 'Current month report is not submitted', department: 'IT' },

  { rank: 1, cwpiScoreAlpha: 'A', cwpiScoreBeta: 'B', data: 'Current month report is not submitted', department: 'IT' },

  { rank: 1, cwpiScoreAlpha: 'A', cwpiScoreBeta: 'B', data: 'Current month report is not submitted', department: 'IT' },

  { rank: 1, cwpiScoreAlpha: 'A', cwpiScoreBeta: 'B', data: 'Current month report is not submitted', department: 'IT' },

  { rank: 1, cwpiScoreAlpha: 'A', cwpiScoreBeta: 'B', data: 'Current month report is not submitted', department: 'IT' },

  { rank: 1, cwpiScoreAlpha: 'A', cwpiScoreBeta: 'B', data: 'Current month report is not submitted', department: 'IT' },

];

const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = dummyData.slice(indexOfFirstEntry, indexOfLastEntry);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEntriesChange = (event) => {
    setEntriesPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEntries = currentEntries.filter(
    (entry) =>
      entry.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-4">
        <div className="flex items-center text-lg font-medium bg-white ">
          <label className="mr-2 text-[#7575bf] ">Show:</label>
          <select
            className="px-2 py-1 bg-white rounded-md border border-[#7575bf]"
            onChange={handleEntriesChange}
            value={entriesPerPage}
          >
            <option value={10} >10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
          <span className="ml-2 text-[#7575bf]">entries</span>
        </div>
        <div className="flex items-center">
          <div className='px-4'>
            <SearchForm onChange={handleSearch} />

          </div>
          <div>
            <DatePicker />

          </div>
        </div>
      </div>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border h-16 text-base text-center bg-[#7575bf] text-white">Rank</th>
            <th className="border h-16 text-base text-center bg-[#7575bf] text-white">CWPI Score Alpha</th>
            <th className="border h-16 text-base text-center bg-[#7575bf] text-white">CWPI Score Beta</th>
            <th className="border h-16 text-base text-center bg-[#7575bf] text-white">Change in CWPI Score Delta</th>
            <th className="border h-16 text-base text-center bg-[#7575bf] text-white">Department</th>
          </tr>
        </thead>
        <tbody>
          {filteredEntries.map((entry, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-[#fff]' : 'bg-gray-100'}  h-10 text-base text-center`}>
              <td className="border font-medium">{entry.rank}</td>
              <td className="border font-medium">{entry.cwpiScoreAlpha}</td>
              <td className="border font-medium">{entry.cwpiScoreBeta}</td>
              <td className="border font-medium">{entry.data}</td>
              <td className="border font-medium">{entry.department}</td>
            </tr>
          ))}

        </tbody>

      </table>


      <div className="mt-4">
        <Pagination onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default TableComponent;

