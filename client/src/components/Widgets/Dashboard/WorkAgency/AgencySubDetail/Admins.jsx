import React, { useState, useRef, useEffect } from 'react';
import SearchForm from '../../../../Atom/SearchBar';
import axios from 'axios';
import Pagination from '../../../../Atom/Pagination';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { FaDownload } from 'react-icons/fa6';


const Admins = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [tablesData, setTablesData] = useState([]);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const totalEntries = tablesData.length;
    const lastIndex = totalEntries > 0 ? currentPage * entriesPerPage : 0;
    const firstIndex = totalEntries > 0 ? lastIndex - entriesPerPage : 0;
    const currentEntries = tablesData.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(totalEntries / entriesPerPage);
    const numbers = [...Array(totalPages + 1).keys()].slice(1);
    const [filteredEntries, setFilteredEntries] = useState(tablesData);

    const pdfRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8001/api/cwpi/dashboard/workAgency/agencyDetails/admin/details');
                setTablesData(response.data.admin);
                console.log('API response:', tablesData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const downloadPDF = () => {
        const input = pdfRef.current;
        html2canvas(input)
            .then((canvas) => {
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
    const handleSearch = () => {
        const newFilteredEntries = tablesData.filter((entry) => {
          return entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                entry.emailId.toLowerCase().includes(searchTerm.toLowerCase());
        });
    
        setFilteredEntries(newFilteredEntries);
        setCurrentPage(1);
      };
    



    return (
        <div className="container mx-auto p-4" ref={pdfRef}>
            <div className='justify-between flex  py-6'>
                <h1 className='items-center justify-start font-medium text-2xl'>Admins Details</h1>
                <button onClick={downloadPDF} className="btn-blue p-4 flex text-white font-medium  rounded">
                    Download <FaDownload className='ml-2 mt-1' />
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

                </div>
            </div>

            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="border h-16 text-base text-center bg-blue-400 text-white">S.No.</th>
                        <th className="border h-16 text-base text-center bg-blue-400 text-white">Name</th>
                        <th className="border h-16 text-base text-center bg-blue-400 text-white">EmailId</th>
                        <th className="border h-16 text-base text-center bg-blue-400 text-white">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {totalEntries > 0 ? (
                            tablesData.map((entry, index) => (
                                <tr key={entry.id} className={`${index % 2 === 0 ? 'bg-[#fff]' : 'bg-gray-100'} h-10 text-base text-center`}>
                                    <td className="border font-medium">{entry?.id}</td>
                                    <td className="border font-medium">{entry?.name}</td>
                                    <td className="border font-medium">{entry?.emailId}</td>
                                    
                                </tr>
                            ))
                        ) : (
                            <tr className="h-10 text-base text-center">
                                <td className="border font-medium" colSpan="3">No data Available in the table</td>
                            </tr>
                        )}
                </tbody>




            </table>

            <div>
                <Pagination currentPage={currentPage} totalEntries={totalEntries} firstIndex={firstIndex} lastIndex={lastIndex} totalPages={totalPages} onPageChange={handlePageChange} pages={numbers} prevPage={prevPage} nextPage={nextPage} />
            </div>
        </div>
    );
};

export default Admins;
