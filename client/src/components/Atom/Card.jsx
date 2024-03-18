// import React from "react";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Card = () => {
//   return (
//     <div className="w-1/3 p-4">
//       <div className="bg-white shadow-md rounded-lg p-6 flex flex-wrap justify-left flex-col">
//         <div className="flex flex-start" >
//           <GiHamburgerMenu color='blue' />
//         </div>

//         <p className="text-gray-700 mt-2 text-blue-600">P1</p>
//       </div>
//     </div>
//   );
// };

// export default Card;
import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Card = ({ label }) => {
  return (
    <div className="w-1/2 p-4">
      {/* Wrap the card content with Link */}
      <Link to={`/stagewise/`} className="card-link">
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-wrap justify-left flex-col">
          <div className="flex flex-start">
            <GiHamburgerMenu color="blue" />
          </div>
          <p className="text-gray-700 mt-2 text-blue-600">{label}</p>
        </div>
      </Link>
    </div>
  );
};

const CardsList = () => {
  // Array containing labels from P1 to P6
  const labels = ["P1", "P2", "P3", "P4", "P5", "P6"];

  return (
    <div className="flex flex-wrap">
      {labels.map((label, index) => (
        <Card key={index} label={label} />
      ))}
    </div>
  );
};

export default CardsList;
