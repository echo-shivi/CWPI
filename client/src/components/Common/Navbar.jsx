import React from "react";

import BSLogo from "../../assets/bihar_sarkar_logo.png";

function Navbar() {
  return (
    <div
    className={`sticky top-0 z-30 mx-auto bg-blue-400 text-gray-100 h-24 w-full `}

    >
      <div className="flex justify-between items-center align-middle mt-2 mb-8 px-2">
        <div></div>

        <h1 className="text-xl md:text-2xl text-center underline">
          CIVIL WORKS PENDENCY INDEX
        </h1>
        <div className="container flex justify-center items-center bg-slate-50 rounded-3xl  w-24 h-22  outline-slate-500 ">
        <img src={BSLogo} alt='Logo' className='w-20 h-20 ' />
        
        </div>
      </div>


    </div>
  );
}

export default Navbar;
