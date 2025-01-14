import React, { useState } from "react";
import Table from "./Tables/TableP4";

function Update() {
  const [formData, setFormData] = useState({
    selectscheme: "",
    workorderamount: "",
    totfund: "",
    totpay: ""
  });

  const [progress, setProgress] = useState(0);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    // Update progress
    const fieldCount = Object.keys(formData).length;
    const filledFields = Object.values(formData).filter(
      (value) => value !== ""
    ).length;
    const newProgress = Math.floor((filledFields / fieldCount) * 100);
    setProgress(newProgress);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="mx-auto m-12 px-10 ">
        <h1 className="font-normal mt-0 mb-5 text-left text-lg"></h1>

        <div className="mt-10 mb-4">
          <label
            htmlFor="selectscheme"
            className="block text-gray-700 text-base font-normal mb-2"
          >
            Select Scheme
          </label>
          <select
            className="w-full p-3 font-normal bg-white border border-blue-200 text-sm rounded"
            name="selectscheme"
            onChange={onChangeHandler}
            value={formData.selectscheme}
            placeholder="Select Scheme"
            aria-placeholder="Select Scheme"
          >
            <option value="">Select Scheme</option>
            <option value="EFCCD">Enivironment, Forest & Climate Change Department (EFCCD)</option>
            <option value="agency2">Agency 2</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="workorderamount"
            className="block text-gray-700 text-base font-normal mb-2"
          >
            Work Order Amount (in Rs lakhs)
          </label>
          <select
            className="w-full p-3 font-normal bg-white text-sm text-gray-700 border border-blue-200 rounded"
            name="workorderamount"
            onChange={onChangeHandler}
            value={formData.workorderamount}
            placeholder="Agreement Amount"
          >
            <option value="">Agreement Amount</option>
            <option value="100000">1,00,000</option>
            <option value="1000000">10,00,000</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="totfund"
            className="block text-gray-700 text-base font-normal mb-2"
          >
            Total Fund allocated (in Rs lakhs)
          </label>
          <input
            type="text"
            className="w-full p-3 font-normal bg-white text-gray-700 border border-blue-200 text-sm rounded"
            name="totfund"
            onChange={onChangeHandler}
            value={formData.totfund}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="totpay"
            className="block text-gray-700 text-base font-normal mb-2"
          >
            Total Payment (in Rs lakhs)
          </label>
          <input
            type="text"
            className="w-full p-3 font-normal bg-white text-gray-700 border border-blue-200 text-sm rounded"
            name="totpay"
            onChange={onChangeHandler}
            value={formData.totpay}
          />
        </div>

        <div className="mb-4">
          <button className="btn-blue text-white font-medium rounded" type="submit">
            Update
          </button>
        </div>
      </form>
      <Table />
    </>
  );
}

export default Update;
