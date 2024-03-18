import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

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
        fontSize: "20px",
        fontWeight: "bold",
        backgroundColor: "#d3d3d3",
      },
    },
    cells: {
      style: {
        padding: "6px",
        // border: "1px solid gray",
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
      const response = await axios.get("http://localhost:8001/api/dashboard/reactTable/details");
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
          // selector: (row) => row.action,
          // sortable: true,
          cell: (row) => (
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => alert(row.action)}
            >
              Accept
            </button>
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
    <div className="flex flex-wrap justify-start container mt-5 ml-10">
      <div className="text-end flex mr-0 justify-between items-center">
        <h1 className="ml-4 mb-4 mr-7">Master Entry</h1>
        <input 
          type="text"
          onChange={handleFilter}
          key="inputFilter"
          className="px-2 py-2 rounded border border-gray-500 shadow-sm focus:outline-none focus:border-blue-500 mb-4"
          placeholder="Search by Name"
        ></input>
      </div>
      <div>
        <DataTable
          title=""
          style={{ padding: "20px 10%", backgroundColor: "gray" }}
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



// import React, { useEffect, useState } from "react";
// import DataTable, { defaultThemes } from "react-data-table-component";
// import axios from "axios";

// const customStyles = {
//   headRow: {
//     style: {
//       backgroundColor: "#0ea5e9",
//       color: "white",
//       fontWeight: "bold",
//       textTransform: "uppercase",
//       border: "2px solid white",
//     },
//   },
//   headCells: {
//     style: {
//       fontSize: "16px",
//       fontWeight: "bold",
//       backgroundColor: "",
//       // border: "0.7px solid white",
//     },
//   },
//   rows: {
//     style: {
//       fontSize: "20px",
//       fontWeight: "bold",
//       backgroundColor: "#d3d3d3",
//     },
//   },
//   cells: {
//     style: {
//       padding: "6px",
//       // border: "1px solid gray",
//     },
//   },
//   pagination: {
//     style: {
//       textAlign: "center",
//       marginTop: "20px",
//     },
//   },
//   noData: {
//     style: {
//       fontSize: "16px",
//       textAlign: "center",
//       paddingTop: "20px",
//     },
//   },
//   paginationRowsPerPage: {
//     style: {
//       // display: "none",
//     },
//   },
// };

// const ReactTable = () => {
//   //   useEffect(() => {
//   //     const fetData = async () => {
//   //       axios
//   //         .get("http://localhost:8001/service")
//   //         .then((res) => console.log(res))
//   //         .catch((err) => console.log(err));
//   //     };
//   //     fetData();
//   //   }, []);

//   const [records, setRecords] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       schemeType: "Type A",
//       employeeName: "Alice",
//       adminApprovalAmount: 5000,
//       formatCWPI: "CWPI-123",
//       district: "XYZ",
//       action: "Approve",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       schemeType: "Type B",
//       employeeName: "Bob",
//       adminApprovalAmount: 7000,
//       formatCWPI: "CWPI-456",
//       district: "ABC",
//       action: "Reject",
//     },
//     {
//       id: 3,
//       name: "Jane Smith",
//       schemeType: "Type B",
//       employeeName: "Bob",
//       adminApprovalAmount: 7000,
//       formatCWPI: "CWPI-456",
//       district: "ABC",
//       action: "Reject",
//     },
//     {
//       id: 4,
//       name: "Jane Smith",
//       schemeType: "Type B",
//       employeeName: "Bob",
//       adminApprovalAmount: 7000,
//       formatCWPI: "CWPI-456",
//       district: "ABC",
//       action: "Reject",
//     },
//     {
//       id: 5,
//       name: "Jane Smith",
//       schemeType: "Type B",
//       employeeName: "Bob",
//       adminApprovalAmount: 7000,
//       formatCWPI: "CWPI-456",
//       district: "ABC",
//       action: "Reject",
//     },
//     {
//       id: 6,
//       name: "Jane Smith",
//       schemeType: "Type B",
//       employeeName: "Bob",
//       adminApprovalAmount: 7000,
//       formatCWPI: "CWPI-456",
//       district: "ABC",
//       action: "Reject",
//     },
//     {
//       id: 7,
//       name: "Jane Smith",
//       schemeType: "Type B",
//       employeeName: "Bob",
//       adminApprovalAmount: 7000,
//       formatCWPI: "CWPI-456",
//       district: "ABC",
//       action: "Reject",
//     },
//     {
//       id: 8,
//       name: "Jane Smith",
//       schemeType: "Type B",
//       employeeName: "Bob",
//       adminApprovalAmount: 7000,
//       formatCWPI: "CWPI-456",
//       district: "ABC",
//       action: "Reject",
//     },
//     {
//       id: 9,
//       name: "Jane Smith",
//       schemeType: "Type B",
//       employeeName: "Bob",
//       adminApprovalAmount: 7000,
//       formatCWPI: "CWPI-456",
//       district: "ABC",
//       action: "Reject",
//     },
//     {
//       id: 10,
//       name: "Jane Smith",
//       schemeType: "Type B",
//       employeeName: "Bob",
//       adminApprovalAmount: 7000,
//       formatCWPI: "CWPI-456",
//       district: "ABC",
//       action: "Reject",
//     },
//   ]);

//   const columns = [
//     {
//       name: "S.No",
//       selector: (row) => row.id,
//       sortable: true,
//     },
//     {
//       name: "Name",
//       selector: (row) => row.name,
//       sortable: true,
//     },
//     {
//       name: "Scheme Type",
//       selector: (row) => row.id,
//       sortable: true,
//     },
//     {
//       name: "Employee Name",
//       selector: (row) => row.employeeName,
//       sortable: true,
//     },
//     {
//       name: "Admin Approval Amount",
//       selector: (row) => row.adminApprovalAmount,
//       sortable: true,
//     },
//     {
//       name: "Format CWPI",
//       selector: (row) => row.formatCWPI,
//       sortable: true,
//     },
//     {
//       name: "District",
//       selector: (row) => row.district,
//       sortable: true,
//     },
//     {
//       name: "Action",
//       // selector: (row) => row.action,
//       // sortable: true,
//       cell: (row) => (
//         <button
//           class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={() => alert(row.action)}
//         >
//           Accept
//         </button>
//       ),
//     },
//   ];

//   function handleFilter(event) {
//     const newData = records.filter((row) => {
//       return row.name.toLowerCase().includes(event.target.value.toLowerCase());
//     });
//     setRecords(newData);
//   }

//   return (
//     <div className=" flex flex-wrap justify-start container mt-5 ml-10">
//       <div className="text-end  flex mr-0  justify-between items-center">
//         <h1 className=" ml-4 mb-4  mr-7">Master Entry</h1>
//         <input 
//           type="text"
//           onChange={handleFilter}
//           key="inputFilter"
//           className="px-2  py-2 rounded border border-gray-500 shadow-sm focus:outline-none focus:border-blue-500 mb-4"
//           placeholder="Search by Name"
//         ></input>
//       </div>
//       <div>
//         <DataTable
//           title=""
//           style={{ padding: "20px 10%", backgroundColor: "gray" }}
//           columns={columns}
//           data={records}
//           // selectableRows
//           //selectableRowsHighlight
//           fixedHeader
//           pagination
//           highlightOnHover
//           keyField="id"
//           customStyles={customStyles}
//         />
//       </div>
//     </div>
//   );
// };

// export default ReactTable;

// import React, { useState, useEffect } from 'react'; // Import useEffect
// import DataTable from 'react-data-table-component';

// const ReactTable = () => {
//     const [records, setRecords] = useState([]); // Initialize records state with empty array

//     useEffect(() => {
//         // Simulate fetching data from an API
//         // Replace this with actual data fetching logic
//         const fetchData = async () => {
//             // Assuming fetchData is an async function that fetches data from an API
//             try {
//                 const response = await fetch('https://api.example.com/data'); // Example URL
//                 const data = await response.json();
//                 setRecords(data); // Set fetched data to the records state
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData(); // Call fetchData function when component mounts
//     }, []); // Empty dependency array to run only on component mount

//     const columns = [
//         {
//             name: "S.No",
//             selector: row => row.id,
//             sortable: true,
//         },
//         {
//             name: "Name",
//             selector: row => row.name,
//             sortable: true,
//         },
//         {
//             name: "Scheme Type",
//             // selector:row => row.id,
//             // sortable: true,
//         },
//         {
//             name: "Employee Name",
//             selector: row => row.employeeName,
//             sortable: true,
//         },
//         {
//             name: "Admin Approval Amount",
//             selector: row => row.adminApprovalAmount,
//             sortable: true,
//         },
//         {
//             name: "Format CWPI",
//             selector: row => row.formatCWPI,
//             sortable: true,
//         },
//         {
//             name: "District",
//             selector: row => row.district,
//             sortable: true,
//         },
//         {
//             name: "Action",
//             selector: row => row.action,
//             sortable: true,
//         },
//     ];

//     function handleFilter(event) {
//         const newData = records.filter(row => {
//             return row.name.toLowerCase().includes(event.target.value.toLowerCase());
//         });
//         setRecords(newData);
//     }

//     return (
//         <div className="container mt-5">
//             <div className="text-end">
//                 <input type="text" onChange={handleFilter} key="inputFilter" className="px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Search by Name"></input>
//             </div>
//             <DataTable
//                 columns={columns}
//                 data={records}
//                 selectableRows
//                 fixedHeader
//                 pagination
//                 // keyField="id"
//                 // className="mt-5" // Example Tailwind CSS class applied to DataTable
//             />
//         </div>
//     )
// }

// export default ReactTable;
