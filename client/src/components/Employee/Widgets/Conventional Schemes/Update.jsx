import React, { useState } from "react";

function Update() {
  const [formData, setFormData] = useState({
    selectscheme: "",
    agreementamount: "",
    cumulative: "",
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
    <form onSubmit={onSubmitHandler} className="mx-auto m-12 px-10">
      <h1 className="font-normal mt-3 mb-5 text-left text-lg">P1</h1>

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
          <option value="">Select Occupation</option>
          <option value="EFCCD">Enivironment, Forest & Climate Change Department (EFCCD)</option>
          <option value="agency2">Agency 2</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="agreementamount" className="block text-gray-700 text-base font-normal mb-2">
          Agreement Amount (in Rs lakhs)
        </label>
        <select
          className="w-full p-3 font-normal bg-white text-sm text-gray-700 border border-blue-200 rounded"
          name="agreementamount"
          onChange={onChangeHandler}
          value={formData.agreementamount}
          placeholder="Agreement Amount"
        >
          <option value="">Agreement Amount</option>
          <option value="designation1">1,00,000</option>
          <option value="designation2">10,00,000</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="cumulative" className="block text-gray-700 text-base font-normal mb-2">
          Cumulative MB Booked till date (in Rs lakhs)
        </label>
        <select
          className="w-full p-3 font-normal bg-white text-sm text-gray-700 border border-blue-200 rounded"
          name="cumulative"
          onChange={onChangeHandler}
          value={formData.cumulative}
          placeholder="Cumulative MB Booked"
        >
          <option value="">Cumulative MB </option>
          <option value="designation1">10,00,000</option>
          <option value="designation2">100,00,000</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <button className="btn-blue text-white font-medium rounded" type="submit">
          Update
        </button>
      </div>
    </form>
  );
}

export default Update;
