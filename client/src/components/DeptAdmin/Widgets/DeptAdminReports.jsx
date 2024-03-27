import React from "react";
import SchemeSubmittedLastMonth from "./SchemeLastMonth";
import SchemeSubmittedThisMonth from "./SchemeThisMonth";
const DeptAdminReports = () => {
  const cardsData1 = [
    { heading: "Flagship Schemes 0", index: 1 },
    { heading: "Over 5 Cr. Schemes 0 ", index: 2 },
    { heading: "50 Oldest Pending Schemes 0", index: 3 },
    { heading: "All Other Schemes 0", index: 4 },
  ];

  

  return (
    <>
    <div className="underline">Number of Schemes submitted Last Month </div>
    <SchemeSubmittedLastMonth />
   
    <div className="pt-6 underline">Number of Schemes submitted Last Month</div> 
    <SchemeSubmittedThisMonth />
   
   
  </>
  );
};

export default DeptAdminReports;
