import React from "react";
import BarChart from "./BarChart";
// import DataTables from "./DataTables";
import ProgressIndicator from "./ProgressIndicator";
import CompletionStage from "./CompletionStage";

const SchemeDetails = () => {
  return (
    <>
      <div className="flex flex-wrap bg-white p-4 rounded ">
        <div className="left_content w-1/2 ">
          <h1 className="mb-3">Scheme Details</h1>
          <div className="flex flex-wrap justify-start  w-3/2">
            <div className=" w-full p-4 ">
              <div className="bg-green-200 rounded-md p-4">
                <h2 className="text-left">Name</h2>
                <p className="text-xs p-3 ">
                  Construction of Hasanpura Block usri Panchayat sarkar Bhawan
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-2/4 p-4">
                <div className="bg-yellow-100 rounded-md p-4">
                  <h2 className="text-left">₹86 Lakhs</h2>
                  <p className="text-xs p-4">Administration Approval Amount</p>
                </div>
              </div>
              <div className="w-2/4 p-4">
                <div className="bg-yellow-100 rounded-md p-4">
                  <h2 className="text-left">Scheme Type</h2>
                  <p className="text-xs p-4">50 oldest scheme</p>
                </div>
              </div>
            </div>
            <div className="w-full p-4">
              <div className="bg-gray-300 rounded-md p-4">
                <h2 className="text-left">CWPI Format</h2>
                <p className="text-xs capitalize p-4">Conventional</p>
              </div>
            </div>
            <div className="w-full p-4 ">
              <div className=" bg-green-200 rounded-md p-4">
                <h2 className="text-left">CWPI ID</h2>
                <p className="text-xs p-4">CWPI1111211223</p>
              </div>
            </div>
            <div className="w-full p-4">
              <div className="bg-yellow-100  rounded-md p-4">
                <h2 className="text-left">Current Total Score</h2>
                <p className="text-xs font-bold p-4">65</p>
              </div>
            </div>
            <BarChart />
            {/* <div className="flex justifiy-end">
          <DataTables/>
        </div> */}
          </div>
        </div>
        <div className="right-content w-1/2 flex flex-wrap  mt-3 justifiy-end">
          {/* <ProgressIndicator /> */}
          < CompletionStage/>
        </div>
      </div>
    </>
  );
};

export default SchemeDetails;
