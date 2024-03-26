import React from "react";
import { Link } from "react-router-dom";

const Card = ({ label }) => {
  return (
    <div className=" p-4">
      {/* Wrap the card content with Link */}
      <Link to={`/#/`} className="card-link">
        <div className="bg-blue-400 text-white shadow-md rounded-lg p-6 flex-col flex-wrap items-center w-full justify-left hover:scale-200 hover:translate-y-1 transition-transform duration-300">
          <div className="flex ">{/* Place your content here */}</div>
          <p className="text-white">{label}</p>
        </div>
      </Link>
    </div>
  );
};

const Help = () => {
  const labels = ["Contact Us", "FAQ"];

  return (
    <>
      <h1 className="ml-6 capitalize font-semibold text-slate-900">Help</h1>
      <div className="flex-col flex-wrap w-full  ">
        {labels.map((label, index) => (
          <Card key={index} label={label} />
        ))}
      </div>
    </>
  );
};

export default Help;
