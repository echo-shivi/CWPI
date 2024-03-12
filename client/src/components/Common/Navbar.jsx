import React from "react";
import BiharSarkarLogo from "../../assets/bihar-sarkar-logo.jpg";

function Navbar() {
  return (
    <div className="bg-[#0ea5e9] text-white px-4 h-24 w-full flex justify-between items-center">
      <div >
        <h1>Civil Works Pendency Index (CWPI)</h1>
      </div>

      <div className="flex items-center bg-white rounded-md p-2">
        <img
          src={BiharSarkarLogo}
          className="h-16 mr-2"
          alt="Bihar Sarkar Logo"
        />
        <div className="bg-white">
          <h1 className="text-gray-800 font-bold text-lg">BVM</h1>
          <h2 className="text-gray-400 text-sm">Administrator</h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
