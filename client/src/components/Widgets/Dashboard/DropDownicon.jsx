// import React, { useState } from "react";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import CardComponent from "../Dashboard/CardComponent";
// import Card from "../../Atom/Card";

// const DropDownIcon = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleTab = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   // Array containing text for each dropdown item
//   const dropdownItems = [
//     "Work Agencies Detail",
//     "Scheme Reports",
//     "Report Cards",
//     "Stage wise Analytics (Graphs)",
//     "Agency wise Analytics (Graphs)",
//     "PDF Reports",
//   ];

//   return (
//     <div>
//       <h2 className="text-ceter underline uppercase">
//         Civil Works Pendency Index (CWPI)
//       </h2>
//       <h1 className="capitalize mt-5 mb-3 ml-1">
//         Welcome to Super Admin Dashboard
//       </h1>
//       {/* Render dropdown items */}
//       {dropdownItems.map((item, index) => (
//         <div key={index} className="p-3 bg-[#0ea5e9] rounded-lg my-2">
//           <div
//             className="flex justify-between items-center p-2 cursor-pointer"
//             onClick={() => toggleTab(index)}
//           >
//             {/* Display dropdown item text */}
//             <h3 className="text-white text-lg">{item}</h3>
//             {/* Display dropdown arrow icon */}
//             {openIndex === index ? (
//               <IoIosArrowUp className="text-white" />
//             ) : (
//               <IoIosArrowDown className="text-white" />
//             )}
//           </div>
//           {/* Display additional content if dropdown is open */}
//           {openIndex === index && item === "Stage wise Analytics (Graphs)" && (
//             <div className="flex flex-wrap">
//               <Card />
//               {/* Additional Cards can be added here */}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// const SuperAdmin = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleTab = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   // Array containing text for each bar
//   const barText = [
//     "Work Agencies Detail",
//     "Scheme Reports",
//     "Report Cards",
//     "Stage wise Anayltics (Graphs)",
//     "Agency wise Analytics(Graphs)",
//     "PDF Reports",
//   ];

//   return (
//     <div>
//       <h2 className="text-center underline uppercase">
//         Civil Works Pendency Index (CWPI)
//       </h2>
//       <h1 className="capitalize mt-5 mb-3 ml-1">
//         Welcome to Super Admin Dashboard
//       </h1>
//       {/* Repeat the toggle button structure six times */}
//       {barText.map((text, index) => (
//         <div key={index} className="p-3 bg-blue-500 rounded-lg my-2">
//           <div
//             className="flex justify-between items-center p-2 cursor-pointer"
//             onClick={() => toggleTab(index)}
//           >
//             {/* Use index to select text for each bar */}
//             <h3 className="text-white text-lg">{text}</h3>
//             {openIndex === index ? (
//               <IoIosArrowUp className="text-white " />
//             ) : (
//               <IoIosArrowDown className="text-white" />
//             )}
//           </div>
//           {openIndex === index && index === barText.length - 1 && (
//             <div className="flex flex-wrap">
//               <CardComponent title="Generate Reports for schemes" linkTo="/masterentry" />

//              <CardComponent title="Generate PDF Reports" linkTo="/scheme-details" />
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export { DropDownIcon };




import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CardComponent from "../Dashboard/CardComponent";
import Card from "../../Atom/Card";

const DropDownIcon = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleTab = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Array containing text for each dropdown item
  const dropdownItems = [
    "Work Agencies Detail",
    "Scheme Reports",
    "Report Cards",
    "Stage wise Analytics (Graphs)",
    "Agency wise Analytics (Graphs)",
    "PDF Reports",
  ];

  return (
    <div>
      <h2 className="text-ceter underline uppercase">
        Civil Works Pendency Index (CWPI)
      </h2>
      <h1 className="capitalize mt-5 mb-3 ml-1">
        Welcome to Super Admin Dashboard
      </h1>
      {/* Render dropdown items */}
      {dropdownItems.map((item, index) => (
        <div key={index} className="p-3 bg-[#0ea5e9] rounded-lg my-2">
          <div
            className="flex justify-between items-center p-2 cursor-pointer"
            onClick={() => toggleTab(index)}
          >
            {/* Display dropdown item text */}
            <h3 className="text-white text-lg">{item}</h3>
            {/* Display dropdown arrow icon */}
            {openIndex === index ? (
              <IoIosArrowUp className="text-white" />
            ) : (
              <IoIosArrowDown className="text-white" />
            )}
          </div>
          {/* Display additional content if dropdown is open */}
          {openIndex === index && item === "Stage wise Analytics (Graphs)" && (
            <div className="flex flex-wrap">
              <Card />
              {/* Additional Cards can be added here */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropDownIcon;
