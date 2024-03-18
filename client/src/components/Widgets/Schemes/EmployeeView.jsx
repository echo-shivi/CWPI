import React from "react";


const EmployeeView = () => {
  return (
    <>
      <div className="flex flex-wrap bg-white p-4 rounded">
        <div className="left_content w-1/2">
          <h1 className="mb-3">Employee View </h1>
          <div className="flex flex-wrap justify-start w-full">
            <div className="w-2/4 p-4">
              <div className="bg-green-200 rounded-md p-4">
                <h2 className="text-left">Name</h2>
                <button className="bg-white text-black rounded p-2 mt-2 mb-2">
                  Employee_name
                </button>
              </div>
            </div>
            <div className=" p-4">
              <div className="bg-yellow-100 rounded-md p-4">
                <h1 className="text-left">Principal Chief Conservator of forest (HOFF), Bihar</h1>
                <p className="text-xs capitalize p-4">Designation</p>
              </div>
            </div>
            <div className=" p-4">
              <div className="bg-green-200 rounded-md p-4">
                <h1 className="text-left">Department Name</h1>
                <p className="text-xs p-4">Environment, Forest & Climate Change Department (EFCCD)</p>
              </div>
            </div>
            <div className=" p-4">
              <div className="bg-yellow-100 rounded-md p-4">
                <h2 className="text-left">Current Total Score</h2>
                <p className="text-xs font-bold p-4">65</p>
              </div>
            </div>
            
          </div>
        </div>
        <div className="right-content w-1/2 flex flex-wrap mt-3 justify-end">
          
        </div>
      </div>
    </>
  );
};

export default EmployeeView;
