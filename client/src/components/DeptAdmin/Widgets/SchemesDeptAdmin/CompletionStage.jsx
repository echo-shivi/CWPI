import React, { useState, useRef, useEffect, useMemo } from 'react';
import SearchForm from '../../../Atom/SearchBar';
import axios from 'axios';
import Pagination from '../../../Atom/Pagination';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';




const Completion = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [tablesData, setTablesData] = useState([]);
    const [entriesPerPage, setEntriesPerPage] = useState(3);
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState(null);

    const pdfRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get(
                "http://localhost:8001/api/dashboard/reactTable/details"
              );
              setTablesData(response.data.reactTable);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };

        fetchData();
    }, []);

    const filteredEntries = useMemo(() => {
        return searchTerm
            ? tablesData.filter(
                (entry) =>
                    entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    entry.emailId.toLowerCase().includes(searchTerm.toLowerCase())
            )
            : tablesData;
    }, [searchTerm, tablesData]);

    const currentEntries = filteredEntries.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);
    const totalPages = Math.ceil(filteredEntries.length / entriesPerPage);
    const numbers = [...Array(totalPages + 1).keys()].slice(1);

    const downloadPDF = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('download.pdf');
        });
    };

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
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

    const handleSearch = () => {
        setCurrentPage(1);
    };

    return (
        <div className="container mx-auto p-4" ref={pdfRef}>
            <div className="justify-between flex py-6">
                <h1 className="items-center justify-start font-medium text-2xl">Completion Stage</h1>
                
            </div>

            <div className="flex justify-between mb-4">
                <div className="flex items-center text-lg font-medium">
                    <label className="mr-2">Show:</label>
                    <select
                        className="px-2 py-1 bg-white rounded-md border border-[#7575bf]"
                        onChange={handleEntriesChange}
                        value={entriesPerPage}
                    >
                        <option value={3}>3</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                    </select>
                    <span className="ml-2">entries</span>
                </div>
                
                        

                 
            </div>
            <div className="overflow-x-auto">

                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border h-16 text-base text-center bg-blue-400 text-white">Level</th>
                            <th className="border h-16 text-base text-center bg-blue-400 text-white"> Officer Responsible </th>
                            <th className="border h-16 text-base text-center bg-blue-400 text-white">Status</th>
                            <th className="border h-16 text-base text-center bg-blue-400 text-white">Score</th>

                        </tr>
                    </thead>
                    <tbody>
                        {currentEntries.length > 0 ? (
                            currentEntries.map((entry, index) => (
                                <tr
                                    key={entry.id}
                                    className={`${index % 2 === 0 ? 'bg-[#fff]' : 'bg-gray-100'} h-10 text-base text-center`}
                                >
                                    <td className="border font-medium">{entry?.id}</td>
                                    <td className="border font-medium">{entry?.employeeName}</td>
                                    <td className="border font-medium"><button className='bg-blue-400  text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-xl p-1 my-2'>{entry?.action}</button></td>
                                    <td className="border font-medium">{entry?.formatCWPI}</td>

                                </tr>
                            ))
                        ) : (
                            <tr className="h-10 text-base text-center">
                                <td className="border font-medium" colSpan="3">No data Available in the table</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div>
                <Pagination
                    currentPage={currentPage}
                    totalEntries={filteredEntries.length}
                    firstIndex={(currentPage - 1) * entriesPerPage + 1}
                    lastIndex={Math.min(currentPage * entriesPerPage, filteredEntries.length)}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    pages={numbers}
                    prevPage={prevPage}
                    nextPage={nextPage}
                />
            </div>
        </div>
    );
};

export default Completion;
