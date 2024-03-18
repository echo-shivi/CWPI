import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CardComponent from "../Dashboard/CardComponent";
import Card from "../../Atom/Card";

const SuperAdmin = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleTab = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Array containing text for each tab
  const tabs = [
    "Work Agencies Detail",
    "Scheme Reports",
    "Report Cards",
    "Stage wise Analytics (Graphs)",
    "Agency wise Analytics (Graphs)",
    "PDF Reports",
  ];

  return (
    <div>
      <h2 className="text-center underline uppercase">
        Civil Works Pendency Index (CWPI)
      </h2>
      <h1 className="capitalize mt-5 mb-3 ml-1">
        Welcome to Super Admin Dashboard
      </h1>
      {/* Render tabs */}
      {tabs.map((text, index) => (
        <div key={index} className="p-3 bg-blue-500 rounded-lg my-2">
          <div
            className="flex justify-between items-center p-2 cursor-pointer"
            onClick={() => toggleTab(index)}
          >
            <h3 className="text-white text-lg">{text}</h3>
            {/* Display dropdown arrow icon */}
            {openIndex === index ? (
              <IoIosArrowUp className="text-white " />
            ) : (
              <IoIosArrowDown className="text-white" />
            )}
          </div>
          {/* Display additional content if tab is open */}
          {openIndex === index && (
            <div className="flex flex-wrap">
                {/* <CardComponent title="Generate Reports for schemes" linkTo="/masterentry" /> */}
              {/* Render CardComponent only for "PDF Reports" tab */}
              {text === "PDF Reports" && (
                <CardComponent
                  title="Generate schemes Reports"
                  linkTo="/masterentry"
                />
              )}
              {text === "PDF Reports" && (
                <CardComponent
                  title="Generate PDF Reports"
                  linkTo="/scheme-details"
                />
              )}
              {/* Render card for Stage wise Analytics (Graphs) */}
              {text === "Stage wise Analytics (Graphs)" && <Card />}
              {/* Additional Cards or components for other tabs */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SuperAdmin;
