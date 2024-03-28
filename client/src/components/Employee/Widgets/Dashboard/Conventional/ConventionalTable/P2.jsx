import React, { useState, useRef, useEffect, useMemo } from 'react';
import SearchForm from '../../../../../Atom/SearchBar';
import axios from 'axios';
import Pagination from '../../../../../Atom/Pagination';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { FaDownload } from 'react-icons/fa6';

const P2 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [tablesData, setTablesData] = useState([]);
    const [entriesPerPage, setEntriesPerPage] = useState(3);
    const [searchTerm, setSearchTerm] = useState('');
    const pdfRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}employee/conventionalP2/details`);
                setTablesData(response.data.conventionalP2);
                console.log('API response:', response.data.conventionalP2);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const filteredEntries = useMemo(() => {
        return searchTerm
            ? tablesData.filter(
                (entry) =>
                    entry.Master_Scheme.toLowerCase().includes(searchTerm.toLowerCase()))
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
        <div className="container bg-white rounded-lg mx-auto p-4 mb-5" ref={pdfRef}>

            <div className="justify-between flex pb-6 ">

                <button onClick={downloadPDF} className="btn-blue p-4 flex text-white font-medium rounded">
                    Download <FaDownload className="ml-2 mt-1" />
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
                        <option value={3}>3</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                    </select>
                    <span className="ml-2">entries</span>
                </div>
                <div className="flex items-center">
                    <div className="px-4">
                        <SearchForm
                            handleSearch={() => {
                                handleSearch();
                            }}
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                    </div>

                </div>
            </div>
            <div className="overflow-x-auto">

                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border h-16 text-base text-center bg-blue-400 text-white">S.No.</th>

                            <th className="border h-16 text-base text-center bg-blue-400 text-white">Master Scheme</th>
                            <th className="border h-16 text-base text-center bg-blue-400 text-white">Date Of Notice Inviting Tender</th>
                            <th className="border h-16 text-base text-center bg-blue-400 text-white">Total Allowed Time</th>
                            <th className="border h-16 text-base text-center bg-blue-400 text-white">Actual Time Taken </th>
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
                                    <td className="border font-medium">{entry?.Master_Scheme}</td>
                                    <td className="border font-medium">{entry?.Date_Of_Notice_Inviting_Tender}</td>
                                    <td className="border font-medium">{entry?.Total_Allowed_Time}</td>
                                    <td className="border font-medium">{entry?.Actual_Time_Taken}</td>
                                    <td className="border font-medium">{entry?.Status}</td>
                                    <td className="border font-medium">{entry?.Score}</td>



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

export default P2;