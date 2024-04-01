import React, { useState } from "react";
import Table from "./Tables/TableP7"

function Update() {
  const [formData, setFormData] = useState({
    selectscheme: "",
    contactamount: "",
    paydate: "",
  });
  const [progress, setProgress] = useState(0); // State to track progress

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Update progress
    const fieldCount = Object.keys(formData).length;
    const filledFields = Object.values(formData).filter((value) => value !== "").length;
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
        <label htmlFor="selectscheme" className="block text-gray-700 text-base font-normal mb-2">
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
        <label htmlFor="number" className="block text-gray-700  text-base font-normal mb-2">
          
        </label>
        <input
          type="number"
          className="w-full p-3  font-normal    bg-white text-gray-700 border border-blue-200  text-sm rounded"
          name="number"
          onChange={onChangeHandler}
          value={formData.contactamount}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mobileNumber" className="block text-gray-700  text-base font-normal mb-2">
          Payment As On Date (in Rs lakhs)
        </label>
        <input
          type="number"
          className="w-full p-3  font-normal    bg-white text-gray-700 border border-blue-200  text-sm rounded"
          name="number"
          onChange={onChangeHandler}
          value={formData.paydate}
        />
      </div>
      

      

      <div className="mb-4">
        <button className="btn-blue text-white font-medium rounded" type="submit">
          Update
        </button>
      </div>
    </form>
    <Table/>
    </>
  );
}

export default Update;
