import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { Link } from "react-router-dom";


const customStyles = {
  headRow: {
    style: {
      backgroundColor: "#0ea5e9",
      color: "white",
      fontWeight: "bold",
      textTransform: "uppercase",
      border: "2px solid white",
    },
  },
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: "bold",
      backgroundColor: "",
      // border: "0.7px solid white",
    },
  },
  rows: {
    style: {
      fontSize: "16px",
      fontWeight: "bold",
      backgroundColor: "#d3d3d3",
    },
  },
  cells: {
    style: {
      padding: "6px",
      // border: "1px solid ",
    },
  },
  pagination: {
    style: {
      textAlign: "center",
      marginTop: "2px",
      border: "1px solid gray"
    },
  },
  noData: {
    style: {
      fontSize: "16px",
      textAlign: "center",
      paddingTop: "10px",
    },
  },
  paginationRowsPerPage: {
    style: {
      // display: "none",
     
    },
  },
};

const ReactTable = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8001/api/dashboard/reactTable/details"
      );
      setRecords(response.data.reactTable);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const columns = [
    {
      name: "S.No",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Scheme Type",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Employee Name",
      selector: (row) => row.employeeName,
      sortable: true,
    },
    {
      name: "Admin Approval Amount",
      selector: (row) => row.adminApprovalAmount,
      sortable: true,
    },
    {
      name: "Format CWPI",
      selector: (row) => row.formatCWPI,
      sortable: true,
    },
    {
      name: "District",
      selector: (row) => row.district,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <Link to="/scheme-details">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Details
          </button>
        </Link>
      ),
    },
  ];

  function handleFilter(event) {
    const newData = records.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }

  return (
    <div className="container mt-5 ml-10">
      <h1 className="mb-4">Master Entry</h1>
      <div className="flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            onChange={handleFilter}
            key="inputFilter"
            className="px-2 py-2 rounded border border-gray-500 shadow-sm focus:outline-none focus:border-blue-500 mb-4 pl-8"
            placeholder="Search by Name"
          />
          <div className="absolute left-2 top-3">
            <CiSearch style={{ color: "gray" }} />
          </div>
        </div>
      </div>
      <div className="mr-10">
        <DataTable
          title=""
          style={{ padding: "30px 20%", backgroundColor: "white" }}
          columns={columns}
          data={records}
          fixedHeader
          pagination
          highlightOnHover
          keyField="id"
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};

export default ReactTable;

