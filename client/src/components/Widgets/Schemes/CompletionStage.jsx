import React, { useState } from "react";
import DataTable from "react-data-table-component";

const customStyles = {
  headRow: {
    style: {
      backgroundColor: "#0ea5e9",
      color: "white",
      fontWeight: "bold",
      textTransform: "uppercase",
      border: "1px solid white",
    },
  },
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: "bold",
      backgroundColor: "",
    },
  },
  rows: {
    style: {
      fontSize: "12px",
      fontWeight: "bold",
      backgroundColor: "#d3d3d3",
    },
  },
  cells: {
    style: {
      padding: "6px",
    },
  },
  pagination: {
    style: {
      textAlign: "center",
      marginTop: "20px",
    },
  },
  noData: {
    style: {
      fontSize: "16px",
      textAlign: "center",
      paddingTop: "20px",
    },
  },
  paginationRowsPerPage: {
    style: {},
  },
};

const CompletionStage = () => {
  const [records, setRecords] = useState([
    {
      level: "Level 1",
      officer: "John Doe",
      status: "Pending",
      employeeName: "Alice",
    },
    {
      level: "Level 2",
      officer: "Jane Smith",
      status: "Accepted",
      employeeName: "Bob",
    },
    {
      level: "Level 3",
      officer: "Michael Johnson",
      status: "Accepted",
      employeeName: "Charlie",
    },
    {
      level: "Level 4",
      officer: "Michael Johnson",
      status: "Accepted",
      employeeName: "Charlie",
    },
    {
      level: "Level 5",
      officer: "Michael Johnson",
      status: "Accepted",
      employeeName: "Charlie",
    },
    {
      level: "Level 6",
      officer: "Michael Johnson",
      status: "Accepted",
      employeeName: "Charlie",
    },
  ]);

  const columns = [
    {
      name: "Level",
      selector: (row) => row.level,
      sortable: true,
    },
    {
      name: "Officer Resposible",
      selector: (row) => row.officer,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <button
          className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => alert(row.status)}
        >
          Accept
        </button>
      ),
    },
    {
      name: "Score ",
      selector: (row) => row.employeeName,
      sortable: true,
    },
  ];

  return (
    <div>
      <h1>Completion Stage</h1>
      <div className="">
        <DataTable
          title=""
          style={{ padding: "50px 30%", backgroundColor: "gray" }}
          columns={columns}
          data={records}
          fixedHeader
          pagination
          highlightOnHover
          keyField="id"
          customStyles={customStyles}
          className="mt-5"
        />
        <div className="flex flex-wrap justify-center items-center bg-white border-line ">
          <button className="bg-[#0ea5e9] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mb-2 md:mb-0">
            Generate Report
          </button>
          <button className="bg-[#0ea5e9] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
            Generate POP Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletionStage;
