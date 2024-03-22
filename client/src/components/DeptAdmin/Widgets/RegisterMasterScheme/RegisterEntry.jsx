import React, { useState } from "react";

function RegisterEntry() {
  const [formData, setFormData] = useState({
    occupation: "",
    designation: "",
    designation2: "",
    schemeType: "",
    formatCWPI: "",
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
    // You can add further actions upon form submission
  };

  return (
    <form onSubmit={onSubmitHandler} className="mx-auto m-12 px-10">
      <h1 className="font-bold mt-3 mb-5 text-left text-lg">Register Entry</h1>

      <div className="mb-4 relative">
  <div className="flex items-center justify-between mb-2">
    {[1, 2, 3, 4, 5].map((step) => (
      <div
        key={step}
        className={`flex items-center justify-center h-10 w-10 rounded-full ${
          step <= Math.ceil(progress / 20) ? "bg-blue-500 text-white shadow-md" : "bg-gray-300 text-gray-600"
        }`}
        style={{ zIndex: 1 }}
      >
        {step}
      </div>
    ))}
  </div>
  <div className="relative h-2 bg-gray-300 rounded-lg overflow-hidden">
    <div
      className="absolute top-0 left-0 h-full bg-blue-500"
      style={{ width: `${progress}%`, transition: "width 0.5s ease-in-out" }}
    ></div>
  </div>
</div>


      <div className="mt-10 mb-4">
        <label htmlFor="occupation" className="block text-gray-700 text-base font-normal mb-2">
          Name of the Agency
        </label>
        <select
          className="w-full p-3 font-normal bg-white border border-blue-200 text-sm rounded"
          name="occupation"
          onChange={onChangeHandler}
          value={formData.occupation}
        >
          <option value="">Select Occupation</option>
          <option value="EFCCD">Enivironment, Forest & Climate Change Department (EFCCD)</option>
          <option value="agency2">Agency 2</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="designation" className="block text-gray-700 text-base font-normal mb-2">
          Highest Designation 01
        </label>
        <select
          className="w-full p-3 font-normal bg-white text-sm text-gray-700 border border-blue-200 rounded"
          name="designation"
          onChange={onChangeHandler}
          value={formData.designation}
        >
          <option value="">Select Designation</option>
          <option value="designation1">Designation 1</option>
          <option value="designation2">Designation 2</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="designation2" className="block text-gray-700 text-base font-normal mb-2">
          Highest Designation 02
        </label>
        <select
          className="w-full p-3 font-normal bg-white text-sm text-gray-700 border border-blue-200 rounded"
          name="designation2"
          onChange={onChangeHandler}
          value={formData.designation2}
        >
          <option value="">Select Designation</option>
          <option value="designation1">Designation 1</option>
          <option value="designation2">Designation 2</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="schemeType" className="block text-gray-700 text-base font-normal mb-2">
          Scheme Type
        </label>
        <select
          className="w-full p-3 font-normal bg-white text-sm text-gray-700 border border-blue-200 rounded"
          name="schemeType"
          onChange={onChangeHandler}
          value={formData.schemeType}
        >
          <option value="">Select Scheme Type</option>
          <option value="scheme1">Scheme 1</option>
          <option value="scheme2">Scheme 2</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="formatCWPI" className="block text-gray-700 text-base font-normal mb-2">
          Format CWPI
        </label>
        <select
          className="w-full p-3 font-normal bg-white text-sm text-gray-700 border border-blue-200 rounded"
          name="formatCWPI"
          onChange={onChangeHandler}
          value={formData.formatCWPI}
        >
          <option value="">Select Format CWPI</option>
          <option value="format1">Format 1</option>
          <option value="format2">Format 2</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <button className="btn-blue text-white font-medium rounded" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

export default RegisterEntry;
