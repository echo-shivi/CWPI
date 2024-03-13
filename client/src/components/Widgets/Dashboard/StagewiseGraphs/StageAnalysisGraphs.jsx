import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CardComponent from "../CardComponent";
import Card from "./Card";

const StageAnalysisGraphs = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleTab = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  
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
      
      {dropdownItems.map((item, index) => (
        <div key={index} className="p-3 bg-[#0ea5e9] rounded-lg my-2">
          <div
            className="flex justify-between items-center p-2 cursor-pointer"
            onClick={() => toggleTab(index)}
          >
            <h3 className="text-white text-lg">{item}</h3>
            
            {openIndex === index ? (
              <IoIosArrowUp className="text-white" />
            ) : (
              <IoIosArrowDown className="text-white" />
            )}
          </div>
         
          {openIndex === index && index === 3 && (
            <div className="flex flex-wrap">
              <div className="w-2/3 p-2 ">
                <Card />
              </div>
              {/* <div className="w-1/3 p-2">
                <Card />
              </div>
              <div className="w-1/3 p-2">
                <Card />
              </div> */}
              
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StageAnalysisGraphs;

// import React, { useState } from "react";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import CardComponent from "./CardComponent";
// import Card from "./Card";

// const StageAnalysisGraphs = () => {
//   const [openIndex, setOpenIndex] = useState(-1);

//   const toggleTab = (index) => {
//     setOpenIndex(openIndex === index ? -1 : index);
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
      
//       {dropdownItems.map((item, index) => (
//         <div key={index} className="p-3 bg-[#0ea5e9] rounded-lg my-2">
//           <div
//             className="flex justify-between items-center p-2 cursor-pointer"
//             onClick={() => toggleTab(index)}
//           >
//             <h3 className="text-white text-lg">{item}</h3>
            
//             {openIndex === index ? (
//               <IoIosArrowUp className="text-white" />
//             ) : (
//               <IoIosArrowDown className="text-white" />
//             )}
//           </div>
         
//           {openIndex === index && index === 3 && (
//             <div className="flex flex-wrap">
//               <Card />
//               {/* Add other Card components for stagewise analytics */}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StageAnalysisGraphs;
