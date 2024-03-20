import React from "react";
import { Link } from "react-router-dom";

const CardComponent = ({ title, content, linkTo }) => {
  return (
    <div className="w-1/2 p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
       
        <Link to={linkTo} className="no-underline">
          <h3 className="text-lg font-semibold mb-4">{title}</h3>
        </Link>
        <p className="text-gray-700">
          {content}
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
