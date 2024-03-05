import React, { useState,useRef } from 'react';
import SearchForm from '../../../Atom/SearchBar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pagination from '../../../Atom/Pagination';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { FaDownload } from 'react-icons/fa6';

const dummyData = [
  { rank: 1, cwpiScoreAlpha: 'A', cwpiScoreBeta: 'B', data: 'present month report is not submitted', department: 'CSE' },
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

  { rank: 1, cwpiScoreAlpha: 'A', cwpiScoreBeta: 'B', data: 'Current month report is not submitted', department: 'IT' },

];
const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const lastIndex = currentPage * entriesPerPage;
  const firstIndex = lastIndex - entriesPerPage;
  const currentEntries = dummyData.slice(firstIndex, lastIndex);
  const totalEntries = dummyData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const numbers = [...Array(totalPages + 1).keys()].slice(1);
  const [filteredEntries, setFilteredEntries] = useState(currentEntries);
 const pdfRef = useRef();
 const downloadPDF = ()=>{
  const input = pdfRef.current;
  html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p','mm','a4',true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    pdf.save("download.pdf");
    });

 
 }
  const prevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageChange = (id) => {
    setCurrentPage(id);
  };

  const handleEntriesChange = (event) => {
    setEntriesPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const newFilteredEntries = dummyData.filter((entry) => {
      return entry.department.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredEntries(newFilteredEntries);
    setCurrentPage(1);
  };



  return (
    <div className="container mx-auto p-4" ref={pdfRef}>
      <div className='justify-between flex  py-6'>
        <h1 className='items-center justify-start font-medium text-2xl'>CWPI Report</h1>
        <button onClick={downloadPDF} class="btn-blue p-4 flex text-white font-medium  rounded">
          Download <FaDownload className='ml-2 mt-1'/>
        </button>
      </div>

      <div className="flex justify-between mb-4">
        <div className="flex items-center text-lg font-medium">
          <label className="mr-2">Show:</label>
          <select
            className="px-2 py-1 bg-white rounded-md border border-[#7575bf]"
            onChange={handleEntriesChange}
            value={entriesPerPage}
          >
            <option value={10} >10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
          <span className="ml-2">entries</span>
        </div>
        <div className="flex items-center">
          <div className='px-4'>
            <SearchForm handleSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          </div>
          <div>
            <DatePicker
              placeholderText="DD/MM/YYYY"
              dateFormat="dd/MM/yyyy"
              id="start-date"
              autoComplete="off"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className='p-2.5 w-full border border-blue-500 rounded-lg text-sm text-gray-700 font-normal'

            />

          </div>
        </div>
      </div>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border h-16 text-base text-center bg-blue-400 text-white">Rank</th>
            <th className="border h-16 text-base text-center bg-blue-400 text-white">CWPI Score Alpha</th>
            <th className="border h-16 text-base text-center bg-blue-400 text-white">CWPI Score Beta</th>
            <th className="border h-16 text-base text-center bg-blue-400 text-white">Change in CWPI Score Delta</th>
            <th className="border h-16 text-base text-center bg-blue-400 text-white">Department</th>
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

      <div>
        <Pagination currentPage={currentPage} firstIndex={firstIndex} lastIndex={lastIndex} totalPages={totalPages} onPageChange={handlePageChange} pages={numbers} prevPage={prevPage} nextPage={nextPage} />
      </div>
    </div>
  );
};

export default TableComponent;

